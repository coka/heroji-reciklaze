import { SharedModel } from '../shared.model';
import { Column, ManyToMany, ManyToOne, JoinColumn } from 'typeorm';
import { UserModel } from '../user/user.model';
import { PickupModel } from './pickup.model';

export enum PICKUP_INVITATION_STATUS {
  PENDING = 1,
  ACCEPTED = 2,
  DECLINED = 3
}

export class PickupInvitationModel extends SharedModel {
  @Column({ type: 'varchar', nullable: false })
  pickupId: string;

  @Column({ type: 'varchar', nullable: false })
  userId: string;

  @Column({ type: 'varchar', nullable: false })
  status: PICKUP_INVITATION_STATUS;

  @ManyToOne(
    type => UserModel,
    user => user.id
  )
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: UserModel;

  @ManyToOne(
    type => PickupModel,
    pickup => pickup.id
  )
  @JoinColumn({ name: 'pickupId', referencedColumnName: 'id' })
  pickup: PickupModel;
}
