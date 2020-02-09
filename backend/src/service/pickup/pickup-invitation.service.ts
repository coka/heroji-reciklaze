import { TryCatch } from '../../util/try-catch';
import { PickupModel, PICKUP_STATUS } from '../../model/pickup/pickup.model';
import { PickupInvitationRepository } from '../../repository/pickup/pickup-invitation.repository';
import { PickupInvitationModel, PICKUP_INVITATION_STATUS } from '../../model/pickup/pickup-invitations';
import { UserRepository } from '../../repository/user/user.repository';
import { PickupRepository } from '../../repository/pickup/pickup.repository';
import { CustomError } from '../../util/custom-error';
import { ERROR_MESSAGES } from '../../util/error.constant';
import { UserModel } from '../../model/user/user.model';

export class PickupInvitationService {
  private pickupInvitationRepository = new PickupInvitationRepository();
  private userRepository = new UserRepository();
  private pickupRepository = new PickupRepository();

  @TryCatch()
  async createInvitations(pickup: PickupModel, collectorId: string) {
    let collectorInvitation;
    if (collectorId) {
      collectorInvitation = await this.createInvitation(pickup, collectorId);
    }
    const providersOnSameAddress = await this.userRepository.getProvidersByAddressIdAndResources(
      pickup.addressId,
      pickup.resources.map(res => res.id)
    );
    const providersInvitations = await Promise.all(
      providersOnSameAddress.map(provider => this.createInvitation(pickup, provider.id))
    );
    return {
      collectorInvitation,
      providersInvitations
    };
  }

  @TryCatch()
  async createInvitation(pickup: PickupModel, userId: string) {
    const pickupInvitation = new PickupInvitationModel();
    pickupInvitation.pickupId = pickup.id;
    pickupInvitation.userId = userId;
    pickupInvitation.status = PICKUP_INVITATION_STATUS.PENDING;
    return await this.pickupInvitationRepository.save(pickupInvitation);
  }

  @TryCatch()
  async acceptPickupInvitation(pickupId: string, collector: UserModel) {
    const pickup = await this.pickupRepository.findById(pickupId);
    if (!pickup) {
      throw new CustomError(ERROR_MESSAGES.PICKUP.NOT_FOUND);
    }
    if (pickup.status !== PICKUP_STATUS.CREATED) {
      throw new CustomError(ERROR_MESSAGES.PICKUP.ALREADY_MATCHED);
    }
    pickup.collectorId = collector.id;
    pickup.status = PICKUP_STATUS.MATCHED;
    return await this.pickupRepository.save(pickup);
  }

  @TryCatch()
  async deleteByPickupId(id: string) {
    return await this.pickupInvitationRepository.deleteByPickupId(id);
  }

  @TryCatch()
  async getActiveInvitations(pickupId: string) {
    return await this.pickupInvitationRepository.getActiveInvitations(pickupId);
  }

  @TryCatch()
  async acceptInvitation(pickupId: string, userId: string) {
    const invitation = await this.pickupInvitationRepository.getByPickupIdAndUserId(pickupId, userId);
    if (!invitation) {
      throw new CustomError(ERROR_MESSAGES.INVITATION.NOT_FOUND);
    }
    console.log(invitation);
    invitation.status = PICKUP_INVITATION_STATUS.ACCEPTED;
    return await this.pickupInvitationRepository.save(invitation);
  }

  @TryCatch()
  async declineInvitation(pickupId: string, userId: string) {
    const invitation = await this.pickupInvitationRepository.getByPickupIdAndUserId(pickupId, userId);
    if (!invitation) {
      throw new CustomError(ERROR_MESSAGES.INVITATION.NOT_FOUND);
    }
    invitation.status = PICKUP_INVITATION_STATUS.DECLINED;
    return await this.pickupInvitationRepository.save(invitation);
  }
}
