import { getConnection } from '../config/connection';
import { TryCatch } from '../util/try-catch';

export class CustomRepository<Model> {
  entity: new () => Model;

  constructor(entity: any) {
    this.entity = entity;
  }

  @TryCatch()
  async save(model: Model) {
    return (await getConnection()).getRepository(this.entity).save(model);
  }

  @TryCatch()
  async findAll() {
    return (await getConnection()).getRepository(this.entity).find();
  }

  @TryCatch()
  async findById(id: string) {
    return (await getConnection()).getRepository(this.entity).findOne(id);
  }
}
