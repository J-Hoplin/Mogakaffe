import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AdminUserModule } from './admin/user.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    AdminUserModule,
    UserModule,
    RouterModule.register([
      {
        path: 'users',
        children: [
          {
            path: 'admin',
            module: AdminUserModule,
          },
          {
            path: '',
            module: UserModule,
          },
        ],
      },
    ]),
  ],
})
export class UsersModule {}
