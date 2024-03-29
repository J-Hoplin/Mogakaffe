import { Controller, Get } from '@nestjs/common';
import { AdminUserV1Service } from './user.service';

@Controller({
  version: '1',
})
export class AdminUserV1Controller {
  constructor(private readonly userService: AdminUserV1Service) {}
  @Get()
  listAllUser() {
    return this.userService.listAllUser();
  }
}
