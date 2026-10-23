import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppMode } from '../config/env.validation.js';

export interface ChatResponse {
  answer: string;
  mode: AppMode;
  sources: unknown[];
}

@Injectable()
export class ChatService {
  constructor(private readonly config: ConfigService) {}

  ask(question: string): ChatResponse {
    const mode = this.config.getOrThrow<AppMode>('APP_MODE');

    return {
      answer: 'Not implemented yet: the AI service is not connected.',
      mode,
      sources: [],
    };
  }
}
