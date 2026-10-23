import { INestApplication } from '@nestjs/common';
import request from 'supertest';

import { type App } from 'supertest/types.js';
import { createTestApp } from './create-test-app.js';

describe('HealthController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
   app = await createTestApp();
  });

  it('/api/health (GET)', () => {
    return request(app.getHttpServer()).get('/api/health').expect(200).expect({
      mode: 'demo',
      status: 'ok',
    });
  });

  afterEach(async () => {
    await app.close();
  });
});
