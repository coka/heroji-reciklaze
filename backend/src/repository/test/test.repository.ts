import { TestModel } from '../../model/test/test.model';
import { CustomRepository } from '../repository';

export class TestRepository extends CustomRepository<TestModel> {
  constructor() {
    super(TestModel);
  }
}
