import { Router } from 'express';

const router: Router = Router()

// Importing the controller
import JobsController from '../controllers/jobs';

router.get('/:keyword', JobsController.getJobsByKeyword);

export default router;