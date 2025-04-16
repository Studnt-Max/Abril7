import express from 'express';
import { HouseHandler } from '../handler/houseHandler';
import { HouseController } from '../controller/houseController';
import { houseService } from '../db/house'; // Usando el mock 

const router = express.Router();
const houseController = new HouseController(houseService);
const houseHandler = new HouseHandler(houseController);

// Rutas para visualización en navegador (GET)
router.get('/', houseHandler.getHouses.bind(houseHandler)); // Todas las casas
router.get('/:id', houseHandler.getHouseById.bind(houseHandler)); // Casa por ID
router.get('/:id/price', houseHandler.getHousePrice.bind(houseHandler)); // Precio de una casa
router.get('/:id/location', houseHandler.getHouseLocation.bind(houseHandler)); // Ubicación

export default router;