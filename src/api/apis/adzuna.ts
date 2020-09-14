import fetch from 'node-fetch';
import Job from "../models/job";

// Functions responsible for fetching and manipulating Adzuna API data.

const getAdzunaJobsByKeyword = async (keyword: string) : Promise<Job[]> => {
  const applicationID = '7afd7695';
  const apiKey = process.env.ADZUNA_API_KEY;
  const url: string = `http://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${applicationID}&app_key=${apiKey}&results_per_page=20&what=${keyword}&content-type=application/json`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    return results.map((adzunaJobData: any) => createJobFromAdzunaData(adzunaJobData));
  } catch (error) {
    throw new Error("An error occurred while fetching data from Adzuna API.");
  }
}

const createJobFromAdzunaData = (jobData: any) : Job  =>{
  return new Job(
    jobData.id,
    "Adzuna-API",
    jobData.title,
    jobData.description,
    jobData.redirect_url,
    jobData.location.display_name,
    jobData.company.display_name,
    jobData.company_url,
    jobData.company_logo,
    jobData.created
  );
}

const AdzunaAPIUtility = {
  getAdzunaJobsByKeyword,
}

export default AdzunaAPIUtility;


