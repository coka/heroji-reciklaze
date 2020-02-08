import { CustomRepository } from '../repository';
import { ResourceModel } from '../../model/resource/resource.model';
import { getConnection } from '../../config/connection';
import { Entity } from 'typeorm';

export class ResourceRepository extends CustomRepository<ResourceModel> {
  constructor() {
    super(ResourceModel);
  }

  async findByIds(ids: string[]) {
    return (await getConnection()).getRepository(ResourceModel).findByIds(ids);
  }
}
