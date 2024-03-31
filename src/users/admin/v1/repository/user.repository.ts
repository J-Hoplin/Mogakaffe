import { Injectable } from '@nestjs/common';
import { IUserRepository } from './user.irepository';
import { Prisma } from '@prisma/client';
import { UserDomain } from 'src/domain';

@Injectable()
export class UserDBRepository implements IUserRepository  {
  findAllUser(skip: number, limit: number, filter: Prisma.UserWhereInput): UserDomain[] {
    throw new Error('Method not implemented.');
  }
}
