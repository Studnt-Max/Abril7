import { HouseController } from "../controller/houseController";
//import {PostgressService} from "../db/postgressService/...";
//import HouseService from "../db/house";
import express, {Request, Response} from "express";


export class HouseHandler {

    houseController: HouseController;
    constructor(houseController: HouseController){
        this.houseController=houseController;
    }

    
    async getHouses(request: Request, response: Response) {
        try {
            const { type, minprice, maxprice } = request.query;
            const houses = await this.houseController.getHousesByType(
                type as string,
                Number(minprice),
                Number(maxprice)
            );
            response.json(houses);
        } catch (error) {
            response.status(500).json({ error: 'Internal server error' });
        }
    } 


}