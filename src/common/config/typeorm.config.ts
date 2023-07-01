import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { User } from 'src/domain/user/user.entity';

@Injectable()
export class TypeOrmConfig implements TypeOrmOptionsFactory {
  constructor(private readonly systemProperty: ConfigService) {}

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.systemProperty.get('DB_HOST'),
      port: this.systemProperty.get<number>('DB_PORT'),
      username: this.systemProperty.get('DB_USERNAME'),
      database: this.systemProperty.get('DB_DATABASE'),
      password: this.systemProperty.get('DB_PASSWORD'),
      synchronize: this.systemProperty.get<boolean>('DB_SYNCHRONIZE'),
      logging: this.systemProperty.get('DB_LOGGING'),
      entities: [User],
    };
  }
}
