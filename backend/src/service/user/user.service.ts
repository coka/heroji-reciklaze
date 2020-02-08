import { UserModel, USER_TYPE } from '../../model/user/user.model';
import { TryCatch } from '../../util/try-catch';
import { CustomError } from '../../util/custom-error';
import { ERROR_MESSAGES } from '../../util/error.constant';
import { UserRepository } from '../../repository/user/user.repository';
import * as bcrypt from 'bcrypt';
import { SessionService } from '../../util/session';
import { ResourceRepository } from '../../repository/resource/resource.repository';
import { validateEmail } from '../../util/validators';
import { AddressService } from '../address/address.service';

export class UserService {
  private userRepository = new UserRepository();
  private sessionService = new SessionService();
  private resourceRepository = new ResourceRepository();
  private addressService = new AddressService();

  @TryCatch()
  async create(user: UserModel & { resourceIds?: string[]; addressValue: string }) {
    await this.validateUser(user);
    const newUser = new UserModel(user);

    if (newUser.type === USER_TYPE.COLLECTOR) {
      newUser.resources = user.resourceIds.map(resource => ({ id: resource }));
    }
    const address = await this.addressService.findAndCreateIfNotExist(user.addressValue);
    newUser.addressId = address.id;
    return await this.userRepository.save(newUser);
  }

  @TryCatch()
  async login(userLogin: { email: string; password: string }) {
    const existingUser = await this.userRepository.getOneByEmail(userLogin.email);
    if (!existingUser) {
      throw new CustomError(ERROR_MESSAGES.USER.NOT_EXIST);
    }
    const passwordValidation = bcrypt.compareSync(userLogin.password, existingUser.password);
    if (!passwordValidation) {
      throw new CustomError(ERROR_MESSAGES.USER.NOT_EXIST);
    }
    const session = await this.sessionService.createSession(existingUser.id);
    return { user: existingUser, session };
  }

  @TryCatch()
  async validateUser(user: UserModel & { resourceIds?: string[] }) {
    if (!user.email || !user.password || !user.firstName || !user.lastName || !user.phone) {
      throw new CustomError(ERROR_MESSAGES.REQUEST.MISSING_PARAMETER);
    }
    if (!validateEmail(user.email)) {
      throw new CustomError(ERROR_MESSAGES.USER.INVALID_EMAIL);
    }
    if (!Object.values(USER_TYPE).includes(user.type)) {
      throw new CustomError(ERROR_MESSAGES.REQUEST.MISSING_PARAMETER);
    }
    if (user.type === USER_TYPE.COLLECTOR && (!user.resourceIds || user.resourceIds.length === 0)) {
      throw new CustomError(ERROR_MESSAGES.USER.MISSING_RESOURCES);
    } else if (user.type === USER_TYPE.COLLECTOR) {
      const resources = await this.resourceRepository.findByIds(user.resourceIds);
      if (!resources || resources.length < user.resourceIds.length) {
        throw new CustomError(ERROR_MESSAGES.RESOURCE.NOT_FOUND);
      }
    }
    if (user.password.length <= 3) {
      throw new CustomError(ERROR_MESSAGES.USER.INVALID_PASSWORD_LENGTH);
    }
    const existingUser = await this.userRepository.getOneByEmail(user.email);
    if (existingUser) {
      throw new CustomError(ERROR_MESSAGES.USER.ALREADY_EXISTS);
    }
  }

  @TryCatch()
  async logout(authorizer: any) {
    const sessionId = authorizer.sessionId;
    return await this.sessionService.deleteSession(sessionId);
  }
}
