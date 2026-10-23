import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validate as validateEnv } from './config/env.validation.js';
import { HealthModule } from './health/health.module.js';
import { ChatModule } from './chat/chat.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../.env',
      validate: validateEnv,
    }),
    HealthModule,
    ChatModule,
  ],
})
export class AppModule {}
