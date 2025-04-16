import { House } from "../../../types/db/house";

export interface IDBService {
    getHouses(type: string, minprice: number, maxprice: number): Promise<House[]>;
    getHouseById(id: number): Promise<House>;
    getPrecio(id: number): Promise<number>;
    getUbicacion(id: number): Promise<string>;
    getDescripcion(id: number): Promise<string>;
    getCalificacion(id: number): Promise<number>;
    getTamConst(id: number): Promise<number>;
    getTamTerr(id: number): Promise<number>;
    getDuracion(id: number): Promise<number>;
    getTipo(id: number): Promise<string>;
}