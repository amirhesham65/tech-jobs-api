import fetch from 'node-fetch';
import Job from "../models/job";

// Functions responsible for fetching and manipulating Github Jobs API data.

const getGithubJobsPositionByKeyword = async (keyword: string) => {
  const url: string = `https://jobs.github.com/positions.json?search=${keyword}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.map((githubJobData: any) => createJobFromGithubJobData(githubJobData));
  } catch (error) {
    throw new Error("An error occurred while fetching data from Github Jobs");
  }
}

const createJobFromGithubJobData = (jobData: any) : Job  =>{
  return new Job(
    jobData.id,
    jobData.title,
    jobData.description,
    jobData.url,
    jobData.location,
    jobData.company,
    jobData.company_url,
    jobData.company_logo,
    jobData.created_at
  );
}

const GithubJobsUtility = {
  getGithubJobsPositionByKeyword,
}

export default GithubJobsUtility;


