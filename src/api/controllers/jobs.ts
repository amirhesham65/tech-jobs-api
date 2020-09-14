import { Request, Response, NextFunction } from 'express';
import ExpressHttpException from "../utils/error";

// Import utility functions
import GithubJobsUtility from "../apis/github-jobs";
import AdzunaAPIUtility from "../apis/adzuna";
import Job from "../models/job";

// Combining all the results fetched from different resources
const combineResults = async (...sources: any) : Promise<Job[]> => [].concat(...sources);

const getJobsByKeyword = async (req: Request, res: Response, next: NextFunction) => {
  const keyword: string = req.params.keyword.toString().toLowerCase();
  try {
    const githubAPIResultsData: Job[] = await GithubJobsUtility.getGithubJobsByKeyword(keyword);
    const adzunaAPIResultsData: Job[] = await AdzunaAPIUtility.getAdzunaJobsByKeyword(keyword);
    const resultsData: Job[] = await combineResults(githubAPIResultsData, adzunaAPIResultsData);
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