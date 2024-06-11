export class CaracolService {
  
  public generarMatrizCaracol(n: number): number[][] {
    const matriz: number[][] = Array.from({ length: n }, () => Array(n).fill(0));;

    let num = 1;
    let left = 0;
    let right = n - 1;
    let top = 0;
    let bottom = n - 1;

    while (left <= right && top <= bottom) {
      for (let i = left; i <= right; i++) {
        matriz[top][i] = num++;
      }
      top++;

      for (let i = top; i <= bottom; i++) {
        matriz[i][right] = num++;
      }
      right--;

      if (top <= bottom) {
        for (let i = right; i >= left; i--) {
          matriz[bottom][i] = num++;
        }
        bottom--;
      }

      if (left <= right) {
        for (let i = bottom; i >= top; i--) {
          matriz[i][left] = num++;
        }
        left++;
      }
    }
    return matriz;
  }

  public getDiagonal(matriz: number[][]): number[] {
    const n = matriz.length;
    const diagonal = [];
    for (let i = 0; i < n; i++) {
      diagonal.push(matriz[i][i]);
    }
    return diagonal;
  }

  public getInverseDiagonal(matriz: number[][]): number[] {
    const n = matriz.length;
    const inverseDiagonal = [];
    for (let i = 0; i < n; i++) {
      inverseDiagonal.push(matriz[i][n - 1 - i]);
    }
    return inverseDiagonal;
  }

}