import { Request, Response, NextFunction } from 'express';

class ExpressHttpException extends Error {
  status: number;
  message: string;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }

  // Error handling middleware
  public static expressErrorMiddleware(err: ExpressHttpException, req: Request, res: Response, next: NextFunction) {
    const status = err.status || 500;
    const message = err.message || 'Something went wrong';

    // Responding with the actual error
    res.status(status).json({ status, message });
    next();
  }

  // Handling 404 error
  public static expressHandleNotFoundError(req: Request, res: Response, next: NextFunction) {
    next(new ExpressHttpException(404, `Unable to find the requested resource at ${req.originalUrl}!`));
  }
}


export default ExpressHttpException;