import { CustomRepository } from '../repository';
import { UserModel } from '../../model/user/user.model';
import { getConnection } from '../../config/connection';
import { TryCatch } from '../../util/try-catch';

export class UserRepository extends CustomRepository<UserModel> {
  constructor() {
    super(UserModel);
  }
  @TryCatch()
  async getOneByEmail(email: string) {
    return (await getConnection()).getRepository(UserModel).findOne({ email });
  }
}
