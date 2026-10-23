import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('health')
export class HealthController {
  constructor(private readonly config: ConfigService) {}

  @Get()
  healthCheck() {
    const appMode = this.config.getOrThrow<string>('APP_MODE');

    return {
      status: 'ok',
      mode: appMode,
    };
  }
}
