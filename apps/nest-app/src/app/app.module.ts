import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CarModule } from '@nx-mono-test/nest-lib';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), CarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
