import { Request, Response } from 'express';
import { StatsController } from '../controller/statsController';

export class StatsHandler {
    private statsController: StatsController;

    constructor() {
        this.statsController = new StatsController(); // Inicialización del controller
    }

    async getBoxPlot(request: Request, response: Response): Promise<void> {
        try {
            // Obtener datos desde la URL (ej: /boxplot?numbers=[1,2,3,...,100])
            const numbers = JSON.parse(request.query.numbers as string);
    
            if (!numbers || !Array.isArray(numbers)) {
                response.status(400).json({ error: "Se requiere 'numbers' como array" });
                return;
            }
    
            if (numbers.length !== 100) {
                response.status(400).json({ error: "El array debe tener 100 números" });
                return;
            }
    
            const boxPlot = this.statsController.calculateBoxPlot(numbers);
            response.json(boxPlot);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
            response.status(500).json({ error: errorMessage });
        }
    }
}