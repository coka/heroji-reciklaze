import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from 'typeorm';
import * as uuid from 'uuid';

export class SharedModel {
  constructor() {
    this.id = uuid();
  }
  @PrimaryColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
