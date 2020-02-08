import { Entity } from 'typeorm';
import { SharedModel } from '../shared.model';

@Entity()
export class TestModel extends SharedModel {}
