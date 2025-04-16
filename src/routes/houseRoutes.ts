import express, {Request, Response, NextFunction} from 'express';
import { HouseHandler} from '../handler/houseHandler';
import HouseService from '../db/house';
import { HouseController } from '../controller/houseController';

const router = express.Router();

const fakeService = new HouseService();

const houseHandler = new HouseHandler(fakeService);

router.get('/', houseHandler.getHouses.bind(houseHandler));

export default router;

