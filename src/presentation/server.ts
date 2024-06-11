import express, { Router } from 'express';

export class Server {
  public readonly app = express();
  private readonly port: number;
  private readonly routes: Router;
  
  constructor(option: any) {
    const { port, routes } = option;
    this.port = port;
    this.routes = routes;
  }

  async start() {
    this.app.use(express.json());
    this.app.use(this.routes)
    this.app.listen(this.port, () => {
      console.log(`Server started in port ${this.port}`)
    })

  }
}