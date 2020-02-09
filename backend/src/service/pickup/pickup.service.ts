import { PickupModel, PICKUP_STATUS } from '../../model/pickup/pickup.model';
import { UserModel, USER_TYPE } from '../../model/user/user.model';
import { PickupRepository } from '../../repository/pickup/pickup.repository';
import { TryCatch } from '../../util/try-catch';
import { CustomError } from '../../util/custom-error';
import { ERROR_MESSAGES } from '../../util/error.constant';
import { UserRepository } from '../../repository/user/user.repository';
import { ResourceRepository } from '../../repository/resource/resource.repository';
import { PickupInvitationService } from './pickup-invitation.service';
import { AddressRepository } from '../../repository/address/address.repository';

export class PickupService {
  private pickupRepository = new PickupRepository();
  private userRepository = new UserRepository();
  private resourceRepository = new ResourceRepository();
  private pickupInvitationService = new PickupInvitationService();
  private addressRepository = new AddressRepository();

  @TryCatch()
  async getByUserType(user: UserModel) {
    return await this.pickupRepository.findByUserId(user.id, user.type === USER_TYPE.COLLECTOR);
  }

  @TryCatch()
  async post(pickup: PickupModel & { resourceIds: string[] }, user: UserModel) {
    await this.validatePickup(pickup, user);
    const createdPickup = await this.generatePickup(pickup, user);
    const [providers, collector] = await Promise.all([
      this.pushToProviders(createdPickup, pickup.resourceIds),
      this.selectCollector(createdPickup, pickup.resourceIds)
    ]);
    let info = {};
    if (!collector) {
      info = ERROR_MESSAGES.PICKUP.NO_AVALIABLE_COLLECTORS;
    } else {
      createdPickup.collectorId = collector.id;
    }
    const invitations = await this.pickupInvitationService.createInvitations(createdPickup, collector ? collector.id : null);
    const savedPickup = await this.pickupRepository.save(createdPickup);
    return { info, pickup: savedPickup };
  }

  @TryCatch()
  async validatePickup(pickup: PickupModel & { resourceIds: string[] }, user: UserModel) {
    if (user.type === USER_TYPE.COLLECTOR) {
      throw new CustomError(ERROR_MESSAGES.USER.INVALID_ACTION);
    }
    if (!pickup.pickupDate || !pickup.code) {
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

  @TryCatch()
  async pushToProviders(pickup: PickupModel, resourceIds: string[]) {
    const providersOnAddress = await this.userRepository.getProvidersByAddressIdAndResources(pickup.addressId, resourceIds);
    return providersOnAddress;
  }

  @TryCatch()
  async selectCollector(pickup: PickupModel, resourceIds: string[]) {
    const collectorsOnAddress = await this.userRepository.getCollectorsByAddressIdAndResources(pickup.addressId, resourceIds);
    const activePickups = await this.pickupRepository.getActivePickups();
    const activeInvitations = await this.pickupInvitationService.getActiveInvitations(pickup.id);
    const avaliableCollectors = collectorsOnAddress
      .filter(collector => !activePickups.map(pickup => pickup.collectorId).includes(collector.id))
      .filter(collector => !activeInvitations.map(invitation => invitation.userId).includes(collector.id));
    if (avaliableCollectors.length === 0) {
      return null;
    }
    const randomIndex = Math.floor(Math.random() * avaliableCollectors.length);
    const selectedCollector = avaliableCollectors[randomIndex];
    return selectedCollector;
  }

  @TryCatch()
  async generatePickup(pickup: PickupModel & { resourceIds: string[] }, user: UserModel) {
    const newPickup = new PickupModel(pickup);
    newPickup.status = PICKUP_STATUS.CREATED;
    newPickup.addressId = pickup.addressId || user.addressId;
    newPickup.organizerId = user.id;
    newPickup.resources = pickup.resourceIds.map(id => ({ id }));
    newPickup.address = await this.addressRepository.findById(newPickup.addressId);
    return await this.pickupRepository.save(newPickup);
  }

  @TryCatch()
  async remove(id: string, user: UserModel) {
    const existingPickup = await this.pickupRepository.findById(id);
    if (!existingPickup) {
      throw new CustomError(ERROR_MESSAGES.PICKUP.NOT_FOUND);
    }
    if (user.id !== existingPickup.organizerId) {
      throw new CustomError(ERROR_MESSAGES.REQUEST.MISSING_PARAMETER);
    }
    await this.pickupInvitationService.deleteByPickupId(id);
    await this.pickupRepository.deleteById(existingPickup);
    return existingPickup;
  }

  @TryCatch()
  async accept(id: string, user: UserModel) {
    const existingPickup = await this.pickupRepository.findById(id);
    if (!existingPickup) {
      throw new CustomError(ERROR_MESSAGES.PICKUP.NOT_FOUND);
    }
    const pickupInvitation = await this.pickupInvitationService.acceptInvitation(existingPickup.id, user.id);
    if (user.type === USER_TYPE.COLLECTOR) {
      existingPickup.collectorId = user.id;
      existingPickup.status = PICKUP_STATUS.MATCHED;
    } else if (user.type === USER_TYPE.PROVIDER) {
      existingPickup.organizerId = user.id;
    }
    return await this.pickupRepository.save(existingPickup);
  }

  @TryCatch()
  async decline(id: string, user: UserModel) {
    const existingPickup = await this.pickupRepository.findById(id);
    if (!existingPickup) {
      throw new CustomError(ERROR_MESSAGES.PICKUP.NOT_FOUND);
    }
    const pickupInvitation = await this.pickupInvitationService.declineInvitation(existingPickup.id, user.id);
    if (user.type === USER_TYPE.COLLECTOR) {
      existingPickup.collectorId = user.id;
    } else if (user.type === USER_TYPE.PROVIDER) {
      existingPickup.organizerId = user.id;
    }
    return await this.pickupRepository.save(existingPickup);
  }
}
