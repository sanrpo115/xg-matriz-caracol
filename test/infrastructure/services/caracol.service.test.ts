import { CaracolService } from "../../../src/infrastructure/services/caracol.service";

describe('CaracolService', () => {
  let caracolService: CaracolService;

  beforeAll(() => {
    caracolService = new CaracolService();
  });

  it('should generate a caracol matrix of size 3', () => {
    const expectedMatrix = [
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5],
    ];
    const result = caracolService.generarMatrizCaracol(3);
    expect(result).toEqual(expectedMatrix);
  });

  it('should generate a caracol matrix of size 4', () => {
    const expectedMatrix = [
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7],
    ];
    const result = caracolService.generarMatrizCaracol(4);
    expect(result).toEqual(expectedMatrix);
  });

  it('should generate a caracol matrix of size 5', () => {
    const expectedMatrix = [
      [1, 2, 3, 4, 5],
      [16, 17, 18, 19, 6],
      [15, 24, 25, 20, 7],
      [14, 23, 22, 21, 8],
      [13, 12, 11, 10, 9],
    ];
    
    const result = caracolService.generarMatrizCaracol(5);
    expect(result).toEqual(expectedMatrix);
  });

});