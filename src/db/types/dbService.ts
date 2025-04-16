import { House } from "../../../types/db/house";

export interface IDBService {
    getHouses(type:string, minprice:number, maxprice:number): Promise<House[]> 
    getHouseById(id:number): Promise<House>
}

/*
import { House } from "../../types/db/house"

export interface IDBService{
    getHouse(type:string, price:number): Promise<House[]>;
    
    getHouseByID(id:number, maxPrice:number, minPrice:number): Promise<House>;
}
*/