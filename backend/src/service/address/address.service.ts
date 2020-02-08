import { TryCatch } from '../../util/try-catch';
import { AddressRepository } from '../../repository/address/address.repository';
import { AddressModel } from '../../model/address/address.model';

export class AddressService {
  addressRepository = new AddressRepository();

  @TryCatch()
  async findAndCreateIfNotExist(addressValue:string) {
    const existingAddress = await this.findAddress(addressValue);
    if (existingAddress) {
      return existingAddress;
    }
    return this.createAddress(addressValue);
  }

  @TryCatch()
  async findAddress(addressValue: string) {
    return this.addressRepository.findByStreetAndNumber(addressValue);
  }

  @TryCatch()
  async createAddress(addressValue:string) {
    return this.addressRepository.save(new AddressModel({ value: addressValue }));
  }
}
