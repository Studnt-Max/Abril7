import { House } from "../../types/db/house";
const { Pool } = require('pg');

export class PostgresService {
    private db

    constructor(connectionString: string) {
        this.db = new Pool({ connectionString });
    }

    async getHouses(type: string, minPrice: number, maxPrice: number): Promise<House[]> {
        const result = await this.db.query('SELECT * FROM house');
        return result.rows;
    }

    async getHouseById(id: number): Promise<House> {
        const result = await this.db.query('SELECT * FROM house WHERE id = $1', [id]); 
        return result.rows[0]; 
    }

    // Métodos placeholders (implementación mínima)
    async getPrecio(): Promise<number> { return 0; }
    async getUbicacion(): Promise<string> { return ""; }
    async getDescripcion(): Promise<string> { return ""; }
    async getCalificacion(): Promise<number> { return 0; }
    async getTamConst(): Promise<number> { return 0; }
    async getTamTerr(): Promise<number> { return 0; }
    async getDuracion(): Promise<number> { return 0; }
    async getTipo(): Promise<string> { return ""; }
}