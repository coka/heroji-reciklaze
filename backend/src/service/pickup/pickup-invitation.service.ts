import { TryCatch } from '../../util/try-catch';
import { PickupModel } from '../../model/pickup/pickup.model';
import { PickupInvitationRepository } from '../../repository/pickup/pickup-invitation.repository';
import { PickupInvitationModel, PICKUP_INVITATION_STATUS } from '../../model/pickup/pickup-invitations';
import { UserRepository } from '../../repository/user/user.repository';

export class PickupInvitationService {
  private pickupInvitationRepository = new PickupInvitationRepository();
  private userRepository = new UserRepository();

  @TryCatch()
  async createInvitations(pickup: PickupModel, collectorId: string) {
    const collectorInvitation = await this.createInvitation(pickup, collectorId);
    const providersOnSameAddress = await this.userRepository.getByAddressIdAndResources(
      pickup.addressId,
      pickup.resources.map(res => res.id),
      true
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
}
