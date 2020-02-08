import { UserModel, USER_TYPE } from '../model/user/user.model';
import { TryCatch } from '../util/try-catch';
import { CustomError } from '../util/custom-error';
import { ERROR_MESSAGES } from '../util/error.constant';
import { UserRepository } from '../repository/user/user.repository';
import * as bcrypt from 'bcrypt';
import { SessionService } from '../util/session';

export class UserService {
  private userRepository = new UserRepository();
  private sessionService = new SessionService();

  @TryCatch()
  async create(user: UserModel) {
    await this.validateUser(user);
    const newUser = new UserModel(user);
    return await this.userRepository.create(newUser);
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
    return await this.sessionService.createSession(existingUser.id);
  }
  @TryCatch()
  async validateUser(user: UserModel) {
    if (!user.email || !user.password || !user.firstName || !user.lastName || !user.phone) {
      throw new CustomError(ERROR_MESSAGES.REQUEST.MISSING_PARAMETER);
    }
    if (!Object.values(USER_TYPE).includes(user.type)) {
      throw new CustomError(ERROR_MESSAGES.REQUEST.MISSING_PARAMETER);
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
  async logout({ sessionId }) {
    return await this.sessionService.deleteSession(sessionId);
  }
}
