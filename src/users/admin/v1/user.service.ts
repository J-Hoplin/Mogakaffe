import { Injectable } from '@nestjs/common';
import { UserDBRepository } from './repository/user.repository';

@Injectable()
export class AdminUserV1Service {
  constructor(private readonly repository: UserDBRepository) {}

  listAllUser() {
    return this.repository.findAllUser(1,2,{});
  }
}
