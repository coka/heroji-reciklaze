import { CustomRepository } from '../repository';
import { AddressModel } from '../../model/address/address.model';
import { TryCatch } from '../../util/try-catch';
import { getConnection } from '../../config/connection';

export class AddressRepository extends CustomRepository<AddressModel> {
  constructor() {
    super(AddressModel);
  }

  @TryCatch()
  async findByStreetAndNumber(value: string) {
    return (await getConnection()).getRepository(AddressModel).findOne({ where: { value } });
  }
}
