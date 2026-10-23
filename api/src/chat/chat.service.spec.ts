import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { ChatService } from './chat.service.js';

describe('ChatService', () => {
  let service: ChatService;

  beforeEach(async () => {
     const module: TestingModule = await Test.createTestingModule({
      providers: [
        ChatService,
        { provide: ConfigService, useValue: { getOrThrow: () => 'demo' } },
      ],
    }).compile();

    service = module.get<ChatService>(ChatService);
  });

  it('The service is defined', () => {
    expect(service).toBeDefined();
  });

  it('The ask method returns a ChatResponse', () => {
    const question = 'What is the capital of France?';
    const response = service.ask(question);

    expect(response.mode).toBe('demo');
    expect(response.sources).toEqual([]);
  });
});
