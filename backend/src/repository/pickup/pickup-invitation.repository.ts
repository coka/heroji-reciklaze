import { CustomRepository } from '../repository';
import { PickupInvitationModel } from '../../model/pickup/pickup-invitations';
import { TryCatch } from '../../util/try-catch';
import { getConnection } from '../../config/connection';

export class PickupInvitationRepository extends CustomRepository<PickupInvitationModel> {
  constructor() {
    super(PickupInvitationModel);
  }

  @TryCatch()
  async deleteByPickupId(pickupId: string) {
    return (await getConnection()).getRepository(this.entity).delete({ pickupId });
  }

  @TryCatch()
  async getActiveInvitations(pickupId: string) {
    return (await getConnection()).getRepository(this.entity).find({ where: { pickupId } });
  }

  @TryCatch()
  async getByPickupIdAndUserId(pickupId: string, userId: string) {
    return (await getConnection()).getRepository(this.entity).findOne({ where: { pickupId, userId } });
  }
}
