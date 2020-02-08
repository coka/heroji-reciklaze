import { SharedModel } from '../shared.model';
import { Column, Entity } from 'typeorm';

@Entity()
export class ResourceModel extends SharedModel {
  @Column({ type: 'varchar', nullable: false })
  name?: string;
}
