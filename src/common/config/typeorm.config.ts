import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/domain/user.entity';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  database: 'rolling_rolling',
  password: process.env.DB_PASSWORD,
  entities: [User],
  synchronize: true,
};
