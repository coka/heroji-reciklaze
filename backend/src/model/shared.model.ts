import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from 'typeorm';
import * as uuid from 'uuid';

export class SharedModel {
  constructor() {
    this.id = uuid();
  }
  @PrimaryColumn('uuid')
  id: string;

  @CreateDateColumn({ select: false })
  createdAt?: Date;

  @UpdateDateColumn({ select: false })
  updatedAt?: Date;
}
