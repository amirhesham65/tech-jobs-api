import { Request, Response, NextFunction } from 'express';
import ExpressHttpException from "../utils/error";

// Import utility functions
import GithubJobsUtility from "../apis/github-jobs";

const getJobsByKeyword = async (req: Request, res: Response, next: NextFunction) => {
  const keyword: string = req.params.keyword.toString().toLowerCase();
  try {
    const resultsData = await GithubJobsUtility.getGithubJobsPositionByKeyword(keyword);
    res.json({
      status: 200,
      results: {
        count: resultsData.length,
        data: resultsData
      }
    });
  } catch (err) {
    next(new ExpressHttpException(err.status, err.message));
  }
}

const JobsController = {
  getJobsByKeyword,
}

export default JobsController;