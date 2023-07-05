import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigModule } from './common/config/typeorm-config.module';
import { TypeOrmConfig } from './common/config/typeorm.config';
import { HttpClient } from './common/http/custom-http.module';

@Module({
  controllers: [],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRootAsync({
      imports: [TypeOrmConfigModule],
      inject: [TypeOrmConfig],
      useClass: TypeOrmConfig,
    }),
    HttpClient,
  ],
})
export class AppModule {}
