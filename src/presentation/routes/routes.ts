import { Router } from "express";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    console.debug('[IndexRoute::create] Creating index route');

    router.get('/api')

    return router;
  }
}