import express from 'express';
import { StatsHandler } from '../handler/statsHandler';

const router = express.Router();
const statsHandler = new StatsHandler();

// Cambiado de POST a GET
router.get('/boxplot', (req, res) => statsHandler.getBoxPlot(req, res));

export default router;