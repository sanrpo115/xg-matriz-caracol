import { Router } from "express";
import { CaracolRoutes } from "../caracol/routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    console.debug('[IndexRoute::create] Creating index route');

    router.use('/api', CaracolRoutes.routes)

    return router;
  }
}