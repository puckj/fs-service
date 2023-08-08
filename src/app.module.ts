import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { FsModule } from './fs/fs.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, FsModule],
})
export class AppModule {}
