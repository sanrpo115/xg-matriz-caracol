import { Request, Response } from 'express';
import { CaracolService } from "../../infrastructure/services/caracol.service";

export class CaracolController {

  constructor(private readonly caracolService: CaracolService) {
    this.caracolService = caracolService;
  }
  
  createMatriz = (req: Request, res: Response): any => {
    try {
      const n = req.params.size;
      const num = parseInt(n, 10);
      if (isNaN(num) || num < 3 || num > 15) {
        res.status(400).json({ error: 'El parámetro debe ser un número entero entre 3 y 15' });
      }
        
      const matriz = this.caracolService.generarMatrizCaracol(num);
      const diagonal = this.caracolService.getDiagonal(matriz);
      const inverseDiagonal = this.caracolService.getInverseDiagonal(matriz);
      console.log('Matriz Caracol ::> ', matriz)
      console.log('Diagonal ::> ', diagonal)
      console.log('Diagonal invertida ::> ', inverseDiagonal)
      res.json({ matriz: matriz, diagonal: diagonal, inverseDiagonal: inverseDiagonal });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
    
  }
}