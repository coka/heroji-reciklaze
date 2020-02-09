import { Entity, Column, ManyToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { SharedModel } from '../shared.model';
import { UserModel } from '../user/user.model';
import { AddressModel } from '../address/address.model';
import { ResourceModel } from '../resource/resource.model';

export enum PICKUP_STATUS {
  CREATED = 1,
  MATCHED = 2,
  SUCCESSFULL = 3,
  FAILED = 4
}

@Entity()
export class PickupModel extends SharedModel {
  @Column({ type: 'varchar', nullable: false })
  organizerId: string;

  @Column({ type: 'varchar', nullable: true })
  collectorId: string;

  @Column({ type: 'datetime', nullable: false })
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
  @JoinColumn({ name: 'collectorId', referencedColumnName: 'id' })
  collector: UserModel;

  @ManyToOne(
    type => UserModel,
    user => user.id
  )
  @JoinColumn({ name: 'organizerId', referencedColumnName: 'id' })
  organizer: UserModel;

  @ManyToOne(
    type => AddressModel,
    address => address.id
  )
  @JoinColumn({ name: 'addressId', referencedColumnName: 'id' })
  address: AddressModel;

  @ManyToMany(type => ResourceModel)
  @JoinTable({
    name: 'pickup_resources',
    joinColumn: {
      name: 'pickupId',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'resourceId',
      referencedColumnName: 'id'
    }
  })
  resources: ResourceModel[];

  constructor(params: any) {
    super();
    if (params) {
      this.code = params.code;
      this.pickupDate = new Date(params.pickupDate);
    }
  }
}
