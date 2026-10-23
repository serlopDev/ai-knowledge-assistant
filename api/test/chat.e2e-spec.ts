import { INestApplication } from "@nestjs/common";
import request from 'supertest';

import { type App } from "supertest/types.js";
import { createTestApp } from "./create-test-app.js";

describe('ChatController (e2e)', () => {
    let app: INestApplication<App>;

    beforeEach(async () => {
        app = await createTestApp();
    });

    it('/api/chat (POST)', () => {
        return request(app.getHttpServer())
  .post('/api/chat')
  .send({ question: '¿Cuántos días de vacaciones tengo?' })
  .expect(200);
    });



    afterEach(async () => {
        await app.close();
    });
})
