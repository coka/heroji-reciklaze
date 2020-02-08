import { CustomRepository } from '../repository';
import { getConnection } from '../../config/connection';
import { PickupModel } from '../../model/pickup/pickup.model';
import { TryCatch } from '../../util/try-catch';

export class PickupRepository extends CustomRepository<PickupModel> {
  constructor() {
    super(PickupModel);
  }

  @TryCatch()
  async findById(id: string) {
    return (await getConnection()).getRepository(PickupModel).findOne(id, { relations: ['collector', 'address', 'organizer'] });
  }

  @TryCatch()
  async findByUserId(userId: string, isCollector: boolean) {
    return (await getConnection()).getRepository(PickupModel).find({
      where: { ...(isCollector ? { collectorId: userId } : { organizerId: userId }) },
      relations: ['collector', 'address', 'organizer']
    });
  }
}
