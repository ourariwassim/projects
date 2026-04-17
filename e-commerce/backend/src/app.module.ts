import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './db/db.config';
import { ProductModule } from './app/product/product.module';
import { UserModule } from './app/user/user.module';
import { authModule } from './app/auth/auth.module';
import { JwtGlobalModule } from './app/jwt/jwt.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => dbConfig(configService),
    }),
    ProductModule,
    UserModule,
    authModule,
    JwtGlobalModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
