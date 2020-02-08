import { Entity, Column } from 'typeorm';
import { SharedModel } from '../shared.model';
import * as bcrypt from 'bcrypt';
import { rejects } from 'assert';

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

  @Column({ type: 'varchar', nullable: false })
  password: string;

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
