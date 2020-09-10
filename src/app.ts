/*
 * API endpoints
 - /jobs -> Get the top hits for a certain category (ex: Data Science)
 - /search -> to search for jobs with a certain keyword with filter
 */

import express, { Application } from "express";

// Initializing the express application
const PORT: number = 5000;
const app: Application = express();

// Import the API routes
import jobsRoutes from './api/routes/jobs';

// Plugging the routes into the API
app.use('/jobs', jobsRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
