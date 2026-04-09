import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'process';

export const dbConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.getOrThrow('HOST'),
  port: configService.getOrThrow('PORT'),
  username: configService.getOrThrow('USERNAME'),
  password: configService.getOrThrow('PASSWORD'),
  database: configService.getOrThrow('DB'),
  synchronize: true,
  autoLoadEntities: true,
});
