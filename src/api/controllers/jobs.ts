import { Request, Response } from 'express';

// Import utility functions
import GithubJobsUtility from "../apis/github-jobs";

const getJobsByKeyword = async (req: Request, res: Response) => {
  const keyword: string = req.params.keyword.toString();
  try {
    const resultsData = await GithubJobsUtility.getGithubJobsPositionByKeyword(keyword);
    res.json({
      status: 200,
      results: {
        count: resultsData.length,
        data: resultsData
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, error })
  }
}

const JobsController = {
  getJobsByKeyword,
}

export default JobsController;