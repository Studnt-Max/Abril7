import { House } from "../../types/db/house";

const houseDB = [
    {id: 1,  nombre: "Prueba",   Descripcion: "Si",  price: 15,  Ubicacion: "Tlaxcala",  Calificacion: 25,   Tamaniodeconstruccion: 79,  Tamaniodeterreno: 34,   Duracion: 8,   Tipo: "Renta" }
]

class HouseService {

    async getHouses(type:string, minprice:number, maxprice:number): Promise<House[]> {
        return houseDB;
    }

    async getHouseById(id:number): Promise<House>{
        return houseDB[id];
    }
    /*
    async getPrecio(){
        return FakeHouse;
    }

    async getUbicacion(){

    }

    async getDescripcion(){
    }

    async getCalificacion(){
    }

    async getTamConst(){
    }

    async getTamTerr(){
    }

    async getDuracion(){
    }

    async getTipo(){
    }}*/
}

export const houseService = new HouseService();