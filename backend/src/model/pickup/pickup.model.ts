import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { SharedModel } from '../shared.model';
import { UserModel } from '../user/user.model';
import { AddressModel } from '../address/address.model';

export enum PICKUP_STATUS {
  CREATED = 1,
  SUCCESSFULL = 2,
  FAILED = 3
}

@Entity()
export class PickupModel extends SharedModel {
  @Column({ type: 'varchar', nullable: false })
  organizerId: string;

  @Column({ type: 'varchar', nullable: false })
  collectorId: string;

  @Column({ type: 'date', nullable: false })
  pickupDate: Date;

  @Column({ type: 'varchar', nullable: false })
  code: string;

  @Column({ type: 'varchar', nullable: false })
  addressId: string;

  @Column({ type: 'int', nullable: false })
  status: PICKUP_STATUS;

  @ManyToOne(
    type => UserModel,
    user => user.id
  )
  @JoinColumn({ name: 'collector_id', referencedColumnName: 'id' })
  collector: UserModel;

  @ManyToOne(
    type => UserModel,
    user => user.id
  )
  @JoinColumn({ name: 'organizer_id', referencedColumnName: 'id' })
  organizer: UserModel;

  @ManyToOne(
    type => AddressModel,
    address => address.id
  )
  @JoinColumn({ name: 'address_id', referencedColumnName: 'id' })
  address: AddressModel;
}
