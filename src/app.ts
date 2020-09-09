import express, { Application, Request, Response, NextFunction } from "express";

const PORT: number = 5000;
const app: Application = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
