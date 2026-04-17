import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'process';

export const dbConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => ({
  type: 'postgres',
  password: configService.getOrThrow('DB_PASSWORD'),
  port: configService.getOrThrow('DB_PORT'),
  username: configService.getOrThrow('DB_USER'),
  host: configService.getOrThrow('DB_HOST'),
  database: configService.getOrThrow('DB_NAME'),
  autoLoadEntities: true,
  synchronize: true,
});
