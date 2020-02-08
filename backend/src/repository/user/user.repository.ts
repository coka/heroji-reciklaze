import { CustomRepository } from '../repository';
import { UserModel, USER_TYPE } from '../../model/user/user.model';
import { getConnection } from '../../config/connection';
import { TryCatch } from '../../util/try-catch';

export class UserRepository extends CustomRepository<UserModel> {
  constructor() {
    super(UserModel);
  }

  @TryCatch()
  async getOneByEmail(email: string) {
    return (await getConnection())
      .getRepository(UserModel)
      .createQueryBuilder('user')
      .addSelect('user.password')
      .where('user.email = :email', { email })
      .getOne();
  }

  @TryCatch()
  async getByAddressIdAndResources(addressId: string, resourceIds: string[], collectors: boolean) {
    return (await getConnection())
      .getRepository(UserModel)
      .createQueryBuilder('user')
      .where('user.addressId = :addressId', { addressId })
      .andWhere('user.type = :type', { type: collectors ? USER_TYPE.COLLECTOR : USER_TYPE.PROVIDER })
      .leftJoinAndMapMany('user.resources', 'user.resources', 'resource', 'resource.id IN (:resourceIds)', { resourceIds })
      .getMany();
  }
}
