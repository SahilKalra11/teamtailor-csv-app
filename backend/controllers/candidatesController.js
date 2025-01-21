const { fetchCandidates } = require("../services/candidatesService");
const { parse } = require("json2csv");
const { transformToCSV } = require("../utils/csvHelpers");

exports.downloadCsv = async (req, res) => {
  try {
    const result = await fetchCandidates();

    const candidates = result.data;
    const candidatestoCsv = await transformToCSV(candidates);

    const csv = parse(candidatestoCsv);

    res.header("Content-Type", "text/csv");
    res.attachment("candidates.csv");
    res.send(csv);
  } catch (error) {
    console.error("Error generating CSV:", error);
    res.status(500).send("Failed to generate CSV");
  }
};
