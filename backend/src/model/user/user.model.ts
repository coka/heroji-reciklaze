import { Entity, Column, ManyToOne, JoinColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { SharedModel } from '../shared.model';
import * as bcrypt from 'bcrypt';
import { AddressModel } from '../address/address.model';
import { ResourceModel } from '../resource/resource.model';

export enum USER_TYPE {
  COLLECTOR = 1,
  PROVIDER = 2,
  BOTH = 3
}

@Entity()
export class UserModel extends SharedModel {
  @Column({ type: 'varchar', nullable: false })
  firstName: string;

  @Column({ type: 'varchar', nullable: false })
  lastName: string;

  @Column({ type: 'varchar', nullable: true })
  addressId?: string;

  @Column({ type: 'varchar', nullable: true })
  email?: string;

  @Column({ type: 'varchar', nullable: false })
  phone: string;

  @Column({ type: 'int', nullable: false })
  type: USER_TYPE;

  @Column({ type: 'varchar', nullable: false, select: false })
  password: string;

  @ManyToOne(
    type => AddressModel,
    address => address.id
  )
  @JoinColumn({ name: 'addressId', referencedColumnName: 'id' })
  public address?: AddressModel;

  @ManyToMany(type => ResourceModel)
  @JoinTable({
    name: 'user_resource',
    joinColumn: {
      name: 'userId',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'resourceId',
      referencedColumnName: 'id'
    }
  })
  resources: ResourceModel[];

  constructor(user?: any) {
    super();
    if (user) {
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.email = user.email;
      this.phone = user.phone;
      this.password = this.hashPassword(user.password);
      this.type = user.type;
    }
  }

  hashPassword(originalPassword: string): string {
    return bcrypt.hashSync(originalPassword, 10);
  }
}
