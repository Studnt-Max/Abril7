import express from 'express';
import houseRoutes from './routes/houseRoutes';

const app = express();
app.use(express.json());
app.use('/houses', houseRoutes); // Ruta base para todas las operaciones

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});