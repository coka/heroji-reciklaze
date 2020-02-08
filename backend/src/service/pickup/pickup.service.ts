import { PickupModel, PICKUP_STATUS } from '../../model/pickup/pickup.model';
import { UserModel, USER_TYPE } from '../../model/user/user.model';
import { PickupRepository } from '../../repository/pickup/pickup.repository';
import { TryCatch } from '../../util/try-catch';
import { CustomError } from '../../util/custom-error';
import { ERROR_MESSAGES } from '../../util/error.constant';
import { UserRepository } from '../../repository/user/user.repository';

export class PickupService {
  private pickupRepository = new PickupRepository();
  private userRepository = new UserRepository();

  @TryCatch()
  async get(user: UserModel) {
    return await this.pickupRepository.findByUserId(user.id, user.type === USER_TYPE.COLLECTOR);
  }

  @TryCatch()
  async post(pickup: PickupModel, user: UserModel) {
    await this.validatePickup(pickup, user);
    pickup.organizerId = user.id;
    pickup.status = PICKUP_STATUS.CREATED;
    return await this.pickupRepository.create(pickup);
  }

  @TryCatch()
  async validatePickup(pickup: PickupModel, user: UserModel) {
    if (user.type === USER_TYPE.PROVIDER) {
      throw new CustomError(ERROR_MESSAGES.USER.INVALID_ACTION);
    }
    if (!pickup.pickupDate || !pickup.code || !pickup.organizerId) {
      throw new CustomError(ERROR_MESSAGES.REQUEST.MISSING_PARAMETER);
    }
  }
}
