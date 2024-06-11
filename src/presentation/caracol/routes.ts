import { Router } from "express";
import { CaracolController } from "./controller";
import { CaracolService } from "../../infrastructure/services/caracol.service";

export class CaracolRoutes {
  static get routes(): Router {
    const router = Router();

    const caracolService = new CaracolService();
    const controller = new CaracolController(caracolService);

    console.debug('[CaracolRoute::create]')

    router.get('/caracol/:size', controller.createMatriz)

    return router;
  }
}