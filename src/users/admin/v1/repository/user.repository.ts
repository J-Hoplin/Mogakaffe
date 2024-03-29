import { DataSource, Repository } from 'typeorm';
import { UserEntity } from '../../../../entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserDBRepository extends Repository<UserEntity> {
  constructor(private dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager());
  }

  async findAllUser() {
    return await this.find();
  }
}
