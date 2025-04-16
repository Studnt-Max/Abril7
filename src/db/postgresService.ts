import { House } from "../../types/db/house";
const { Pool } = require('pg');

export class PostgresService {

    db

    constructor(connectionString: string) {
        this.db = new Pool({ connectionString });
      }

    async getHouses(type: string, minPrice: number, maxPrice: number): Promise<House[]> {
        const result = await this.db.query('SELECT * FROM house');
        return result.rows;
    }

    async getHouseById(id: number): Promise<House>{
        const result = await this.db.query('SELECT * FROM house where id = ${id}');
        return result.rows;
    }
}