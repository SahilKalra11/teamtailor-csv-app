const { fetchJobApplications } = require("../services/candidatesService");

const transformToCSV = async (candidates) => {
  const header = [
    "candidate_id",
    "first_name",
    "last_name",
    "email",
    "job_application_id",
    "job_application_created_at",
  ];

  const rows = [];

  for (const candidate of candidates) {
    const candidateId = candidate.id;
    const firstName = candidate.attributes["first-name"];
    const lastName = candidate.attributes["last-name"];
    const email = candidate.attributes.email;

    const jobApplicationsUrl =
      candidate.relationships["job-applications"].links.self;

    const jobApplicationIds = await fetchJobApplications(jobApplicationsUrl);
    if (jobApplicationIds.length > 0) {
      jobApplicationIds.forEach((jobApplicationId) => {
        const jobApplicationCreatedAt = new Date(
          candidate.attributes["created-at"]
        ).toLocaleString();

        rows.push([
          candidateId,
          firstName,
          lastName,
          email,
          jobApplicationId,
          jobApplicationCreatedAt,
        ]);
      });
    } else {
      rows.push([candidateId, firstName, lastName, email, "", ""]);
    }
  }

  return [header, ...rows];
};

module.exports = { transformToCSV };
