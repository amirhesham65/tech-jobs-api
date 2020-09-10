import express, { Request, Response, NextFunction, Router } from 'express';

const router: Router = Router()

// Importing the controller
import JobsController from '../controllers/jobs';

router.get('/', JobsController.testRouteControllerFunction);

export default router;