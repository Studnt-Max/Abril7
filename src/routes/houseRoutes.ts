import express, {Request, Response, NextFunction} from 'express';
import { HouseController } from '../controller/houseController';
import { HouseHandler } from '../handler/houseHandler';
import { houseService } from '../db/house';

const router = express.Router();

//const fakeService = new houseService();

const houseController = new HouseController(houseService);
const houseHandler = new HouseHandler(houseController);

router.get('/', houseHandler.getHouses.bind(houseHandler));

export default router;

