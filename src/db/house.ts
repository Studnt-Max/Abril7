import { House } from "../../types/db/house";

const houseDB: House[] = [
    { 
        id: 1,  
        nombre: "Prueba",   
        Descripcion: "Si",  
        price: 15,  
        Ubicacion: "Tlaxcala",  
        Calificacion: 25,   
        Tamaniodeconstruccion: 79,  
        Tamaniodeterreno: 34,   
        Duracion: 8,   
        Tipo: "Renta" 
    }
];

class HouseService {
    async getHouses(type: string, minprice: number, maxprice: number): Promise<House[]> {
        return houseDB.filter(house => 
            (type === "all" || house.Tipo === type) && 
            house.price >= minprice && 
            house.price <= maxprice
        );
    }

    async getHouseById(id: number): Promise<House> {
        const house = houseDB.find(house => house.id === id);
        if (!house) throw new Error("House not found");
        return house;
    }

    async getPrecio(id: number): Promise<number> {
        const house = await this.getHouseById(id);
        return house.price;
    }

    async getUbicacion(id: number): Promise<string> {
        const house = await this.getHouseById(id);
        return house.Ubicacion;
    }

    async getDescripcion(id: number): Promise<string> {
        const house = await this.getHouseById(id);
        return house.Descripcion;
    }

    async getCalificacion(id: number): Promise<number> {
        const house = await this.getHouseById(id);
        return house.Calificacion;
    }

    async getTamConst(id: number): Promise<number> {
        const house = await this.getHouseById(id);
        return house.Tamaniodeconstruccion;
    }

    async getTamTerr(id: number): Promise<number> {
        const house = await this.getHouseById(id);
        return house.Tamaniodeterreno;
    }

    async getDuracion(id: number): Promise<number> {
        const house = await this.getHouseById(id);
        return house.Duracion;
    }

    async getTipo(id: number): Promise<string> {
        const house = await this.getHouseById(id);
        return house.Tipo;
    }
}

export const houseService = new HouseService();