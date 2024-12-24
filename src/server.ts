import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import registerRoutes from './routes/routes';
import { seed } from '../prisma/seed';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

// default data
// seed()

registerRoutes(app);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
