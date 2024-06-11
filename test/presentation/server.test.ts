import request from 'supertest';
import { Router } from 'express';
import { Server } from '../../src/presentation/server';

describe('Server', () => {
  let server: Server;
  let router: Router;

  beforeEach(() => {
    router = Router();
    router.get('/test', (req, res) => {
      res.status(200).send('Hello, world!');
    });

    server = new Server({ port: 3200, routes: router });
  });

  it('should start the server and respond to requests', async () => {
    await server.start();

    const response = await request(server.app).get('/test');

    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, world!');
  });
});