import fetch from 'node-fetch';
// Functions responsible for fetching and manipulating Github Jobs API data.

const getGithubJobsPositionByKeyword = async (keyword: string) => {
  const url: string = `https://jobs.github.com/positions.json?search=${keyword}`;
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    throw "An error occurred while fetching data from Github Jobs";
  }
}

const GithubJobsUtility = {
  getGithubJobsPositionByKeyword,
}

export default GithubJobsUtility;

