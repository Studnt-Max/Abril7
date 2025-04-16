import { House } from "../../types/db/house";
import { IDBService } from "../db/types/dbService";

export class HouseController {
    private dbService: IDBService;

    constructor(dbService: IDBService) {
        this.dbService = dbService;
    }

    async getHousesByType(type: string, minprice: number, maxprice: number): Promise<House[]> {
      return this.dbService.getHouses(type, minprice, maxprice);
  }

  async getHouseById(id: number): Promise<House> {
      return this.dbService.getHouseById(id);
  }

  async getHousePrice(id: number): Promise<number> {
      return this.dbService.getPrecio(id);
  }

  async getHouseLocation(id: number): Promise<string> {
      return this.dbService.getUbicacion(id);
  }
  sum(num1: number, num2: number): number {
    if (num1 < 0 || num2 < 0) {
        throw new Error("Numbers cannot be negative");
    }
    return num1 + num2;
}
}