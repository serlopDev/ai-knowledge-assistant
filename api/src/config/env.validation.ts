import { plainToInstance } from 'class-transformer';
import { IsEnum, IsInt, Max, Min, validateSync } from 'class-validator';

export enum AppMode {
  Demo = 'demo',
  Ollama = 'ollama',
}

export class EnvironmentVariables {
  @IsEnum(AppMode)
  APP_MODE: AppMode = AppMode.Demo;

  @IsInt()
  @Min(1)
  @Max(65535)
  API_PORT: number = 3000;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig);

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return validatedConfig;
}
