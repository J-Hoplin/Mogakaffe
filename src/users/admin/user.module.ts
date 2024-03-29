import { Module } from '@nestjs/common';
import { AdminUserV1Controller } from './v1/user.controller';
import { AdminUserV1Service } from './v1/user.service';
import { UserDBRepository } from './v1/repository/user.repository';

@Module({
  controllers: [AdminUserV1Controller],
  providers: [AdminUserV1Service, UserDBRepository],
})
export class AdminUserModule {}
