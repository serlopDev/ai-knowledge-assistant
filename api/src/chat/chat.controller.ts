import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ChatService } from './chat.service.js';
import { AskQuestionDto } from './dto/ask-question.dto.js';

@Controller('chat')
export class ChatController {

    constructor(private readonly chatService: ChatService) {}

    @Post()
    @HttpCode(200)
    askQuestion(@Body() { question }: AskQuestionDto) {
        return this.chatService.ask(question);
    }
}
