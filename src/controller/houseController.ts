import { House } from "../../types/db/house";
import { IDBService } from "../db/types/dbService";

export class HouseController {

    dbService : IDBService

    constructor(dbService: IDBService){this.dbService = dbService}

    async getHousesByType (type:string, minprice: number, maxprice: number): Promise<House[]> {
        const house = this.dbService.getHouses(type, minprice, maxprice)
        return house;
    }

    sum(num1: number, num2: number): number {
        if(num1<0 || num2<0) {
          throw new Error("numbers can be negative");
        }
        return num1 + num2;
      }
}