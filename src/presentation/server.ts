import express from 'express';

export class Server {
  public readonly app = express();
  private readonly port: number;
  
  constructor(option: any) {
    const { port } = option;
    this.port = port;
  }

  async start() {
    this.app.use(express.json());
    this.app.listen(this.port, () => {
      console.log(`Server started in port ${this.port}`)
    })

  }
}