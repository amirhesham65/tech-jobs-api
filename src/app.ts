import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import cors from 'cors';
import * as dotenv from "dotenv";
import ExpressHttpException from "./api/utils/error";

// Initializing the express application
dotenv.config();
const PORT: number = Number(process.env.PORT) || 5000;
const app: Application = express();

// Handling CORS
app.use(cors());

// Using morgan request logging
app.use(morgan('tiny'));

// Import the API routes
import jobsRoutes from './api/routes/jobs';

// Plugging the routes into the API
app.use('/jobs', jobsRoutes);

// The default route
app.use('/', (req: Request, res: Response) => {
  const rootURL: string = req.protocol + '://' + req.get('host');
  console.log(req.protocol + '://' + req.get('host'));
  res.json({
    status: 200,
    message: "Welcome to TechJobs API. An API that allows you to search and view the latest 20 tech-related jobs fetched from different sources.",
    endpoints: {
      search: {
        url: "/jobs/KEYWORD",
        usage: "Search for the latest 20 jobs related to the provided keyword",
        example: rootURL + "/jobs/frontend"
      }
    }
  });
});

// Error handling
app.use(ExpressHttpException.expressHandleNotFoundError);
app.use(ExpressHttpException.expressErrorMiddleware);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
