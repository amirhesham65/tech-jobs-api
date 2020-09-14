import express, { Application } from "express";
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import ExpressHttpException from "./api/utils/error";

// Initializing the express application
dotenv.config();
const PORT: number = Number(process.env.PORT) || 5000;
const app: Application = express();

// Using morgan request logging
app.use(morgan('tiny'));

// Import the API routes
import jobsRoutes from './api/routes/jobs';

// Plugging the routes into the API
app.use('/jobs', jobsRoutes);

// Error handling
app.use(ExpressHttpException.expressHandleNotFoundError);
app.use(ExpressHttpException.expressErrorMiddleware);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
