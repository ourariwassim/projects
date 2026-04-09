import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './common/db/dbConfig';
import { userModule } from './modules/userModule/user.module';
import { blogModule } from './modules/blogModule/blog.module';
import { commentModule } from './modules/comments/comments.module';
import ImageKit from 'imagekit';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        ...dbConfig(configService),
      }),
    }),
    userModule,
    blogModule,
    commentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
