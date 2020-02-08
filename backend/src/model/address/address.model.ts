import { Entity, Column } from 'typeorm';
import { SharedModel } from '../shared.model';

@Entity()
export class AddressModel extends SharedModel {
  @Column({ type: 'varchar', nullable: false })
  value: string;

  constructor(params: any) {
    super();
    if (params) {
      this.value = params.value;
    }
  }
}
