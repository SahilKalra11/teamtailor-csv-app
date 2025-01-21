const axios = require("axios");
const { fetchWithRateLimit } = require("../utils/retryLimit");

const API_URL = "https://api.teamtailor.com/v1/candidates";
const API_KEY = "0065de52-3833-4cae-959e-a435996b3d9a";

const baseHeaders = {
  Authorization: `Token token=${API_KEY}`,
  "X-Api-Version": "20240404",
};

const initialCandidateResponse = {
  data: [],
  meta: {
    "record-count": 0,
    "page-count": 0,
  },
  links: {
    first: "",
    next: "",
    last: "",
  },
};

const TEAMTAILOR_API_URL = "https://api.teamtailor.com/v1/candidates/";

const fetchCandidates = async (url = TEAMTAILOR_API_URL, candidates = []) => {
  try {
    const response = await fetch(url, { headers: baseHeaders });
    const data = await response.json();

    const fetchedCandidates = [...candidates, ...data.data];

    if (data.links.next) {
      return fetchCandidates(data.links.next, fetchedCandidates);
    } else {
      return { ...data, data: fetchedCandidates };
    }
  } catch (error) {
    console.log(error);
    return { ...initialCandidateResponse };
  }
};

const fetchJobApplications = async (url) => {
  const result = await fetchWithRateLimit(url, baseHeaders);
  return result.data.map((jobApplication) => {
    return jobApplication.id;
  });
};

module.exports = { fetchCandidates, fetchJobApplications };
