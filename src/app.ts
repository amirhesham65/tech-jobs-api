import express, { Application } from "express";

// Initializing the express application
const PORT: number = Number(process.env.PORT) || 5000;
const app: Application = express();

// Import the API routes
import jobsRoutes from './api/routes/jobs';

// Plugging the routes into the API
app.use('/jobs', jobsRoutes);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
