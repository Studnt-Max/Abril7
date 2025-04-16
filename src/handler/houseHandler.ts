import { Request, Response } from 'express';
import { HouseController } from '../controller/houseController';

export class HouseHandler {
    constructor(private houseController: HouseController) {}

    async getHouses(request: Request, response: Response) {
        try {
            const { type = "all", minprice = "0", maxprice = "1000000" } = request.query;
            const houses = await this.houseController.getHousesByType(
                type as string,
                Number(minprice),
                Number(maxprice)
            );
            response.json(houses.length > 0 ? houses : { message: "No se encontraron casas con estos filtros" });
        } catch (error) {
            response.status(500).json({ error: 'Error al obtener las casas' });
        }
    }

    async getHouseById(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const house = await this.houseController.getHouseById(Number(id));
            response.json(house);
        } catch (error) {
            response.status(404).json({ error: 'Casa no encontrada' });
        }
    }

    async getHousePrice(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const price = await this.houseController.getHousePrice(Number(id));
            response.json({ price });
        } catch (error) {
            response.status(500).json({ error: 'Error al obtener el precio' });
        }
    }

    async getHouseLocation(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const location = await this.houseController.getHouseLocation(Number(id));
            response.json({ location });
        } catch (error) {
            response.status(500).json({ error: 'Error al obtener la ubicación' });
        }
    }

    // Métodos adicionales para filtros
    async getHousesByType(request: Request, response: Response) {
        try {
            const { type } = request.params;
            const houses = await this.houseController.getHousesByType(type, 0, 1000000);
            response.json(houses);
        } catch (error) {
            response.status(500).json({ error: 'Error al filtrar por tipo' });
        }
    }

    async getHousesByPriceRange(request: Request, response: Response) {
        try {
            const { min, max } = request.params;
            const houses = await this.houseController.getHousesByType(
                "all",
                Number(min),
                Number(max)
            );
            response.json(houses);
        } catch (error) {
            response.status(500).json({ error: 'Error al filtrar por precio' });
        }
    }
}