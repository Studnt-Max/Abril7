import express from 'express';
import houseRoutes from './routes/houseRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/houses', houseRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});