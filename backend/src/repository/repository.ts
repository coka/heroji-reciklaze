import { getConnection } from '../config/connection';
import { TryCatch } from '../util/try-catch';

export class CustomRepository<Model> {
  entity: new () => Model;
  constructor(entity: any) {
    this.entity = entity;
  }
  @TryCatch()
  async create(model: Model) {
    return (await getConnection()).getRepository(this.entity).save(model);
  }

  @TryCatch()
  async findAll() {
    return (await getConnection()).getRepository(this.entity).find();
  }
}
