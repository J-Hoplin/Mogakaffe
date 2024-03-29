import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { LoginTypeEnum } from './types';

@Entity({
  name: 'users',
})
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;

  @Column({ name: 'first_name', length: 10 })
  firstName: string;

  @Column({ name: 'last_name', length: 30 })
  lastName: string;

  @Column({ name: 'login_type', enum: LoginTypeEnum })
  loginType: LoginTypeEnum;
}
