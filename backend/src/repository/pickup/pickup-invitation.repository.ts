import { CustomRepository } from '../repository';
import { PickupInvitationModel } from '../../model/pickup/pickup-invitations';

export class PickupInvitationRepository extends CustomRepository<PickupInvitationModel> {
  constructor() {
    super(PickupInvitationModel);
  }
}
