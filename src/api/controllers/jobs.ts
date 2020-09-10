import { Request, Response } from 'express';

// Import utility functions
import GithubJobsUtility from "../apis/github-jobs";

const getJobsByKeyword = async (req: Request, res: Response) => {
  try {
    res.json({
      status: 200,
      results: await GithubJobsUtility.getGithubJobsPositionByKeyword('node')
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