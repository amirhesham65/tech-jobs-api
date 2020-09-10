import { Request, Response } from 'express';

const testRouteControllerFunction = (req: Request, res: Response) => {
  res.json({
    message: 'The endpoint is working.'
  })
}

const JobsController = {
  testRouteControllerFunction,
}

export default JobsController;