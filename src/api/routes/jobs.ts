import express, { Request, Response, NextFunction, Router } from 'express';

const router: Router = Router()

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send('Working..');
});

export default router;