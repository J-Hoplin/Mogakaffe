import { Module } from '@nestjs/common';
import { UserV1Controller } from './v1/user.controller';
import { UserV1Service } from './v1/user.service';

@Module({
  controllers: [UserV1Controller],
  providers: [UserV1Service],
})
export class UserModule {}
