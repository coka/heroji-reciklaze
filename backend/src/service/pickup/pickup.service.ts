import { PickupModel, PICKUP_STATUS } from '../../model/pickup/pickup.model';
import { UserModel, USER_TYPE } from '../../model/user/user.model';
import { PickupRepository } from '../../repository/pickup/pickup.repository';
import { TryCatch } from '../../util/try-catch';
import { CustomError } from '../../util/custom-error';
import { ERROR_MESSAGES } from '../../util/error.constant';
import { UserRepository } from '../../repository/user/user.repository';
import { ResourceRepository } from '../../repository/resource/resource.repository';

export class PickupService {
  private pickupRepository = new PickupRepository();
  private userRepository = new UserRepository();
  private resourceRepository = new ResourceRepository();

  @TryCatch()
  async get(user: UserModel) {
    return await this.pickupRepository.findByUserId(user.id, user.type === USER_TYPE.COLLECTOR);
  }

  @TryCatch()
  async post(pickup: PickupModel & { resourceIds: string[] }, user: UserModel) {
    await this.validatePickup(pickup, user);
    pickup.organizerId = user.id;
    pickup.status = PICKUP_STATUS.CREATED;
    pickup.resources = pickup.resourceIds.map(id => ({ id }));
    return await this.pickupRepository.save(pickup);
  }

  @TryCatch()
  async acceptPickup(pickupId: string, collector: UserModel) {
    const pickup = await this.pickupRepository.findById(pickupId);
    if (!pickup) {
      throw new CustomError(ERROR_MESSAGES.PICKUP.NOT_FOUND);
    }
    if (pickup.status !== PICKUP_STATUS.CREATED) {
      throw new CustomError(ERROR_MESSAGES.PICKUP.ALREADY_MATCHED);
    }
    pickup.organizerId = collector.id;
    pickup.status = PICKUP_STATUS.MATCHED;
    return await this.pickupRepository.save(pickup);
  }

  @TryCatch()
  async validatePickup(pickup: PickupModel & { resourceIds: string[] }, user: UserModel) {
    if (user.type === USER_TYPE.PROVIDER) {
      throw new CustomError(ERROR_MESSAGES.USER.INVALID_ACTION);
    }
    if (!pickup.pickupDate || !pickup.code || !pickup.organizerId) {
      throw new CustomError(ERROR_MESSAGES.REQUEST.MISSING_PARAMETER);
    }
    if (!pickup.resourceIds || pickup.resourceIds.length === 0) {
      throw new CustomError(ERROR_MESSAGES.REQUEST.MISSING_PARAMETER);
    }
    const resourceIds = await this.resourceRepository.findByIds(pickup.resourceIds);
    if (resourceIds.length !== pickup.resourceIds.length) {
      throw new CustomError(ERROR_MESSAGES.RESOURCE.NOT_FOUND);
    }
  }
}
