import { Entity } from 'typeorm';
import { UserModel } from './user.model';

@Entity()
class AdminModel extends UserModel {}
