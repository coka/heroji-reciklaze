import { Entity, Column } from 'typeorm';
import { SharedModel } from '../shared.model';

@Entity()
export class AddressModel extends SharedModel {
  @Column({ type: 'varchar', nullable: false })
  street: string;

  @Column({ type: 'varchar', nullable: false })
  number: string;
}
