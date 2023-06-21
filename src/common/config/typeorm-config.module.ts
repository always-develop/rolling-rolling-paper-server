import { Module } from '@nestjs/common';
import { TypeOrmConfig } from './typeorm.config';

@Module({
  providers: [TypeOrmConfig],
})
export class TypeOrmConfigModule {}
