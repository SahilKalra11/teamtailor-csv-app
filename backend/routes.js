const express = require("express");
const router = express.Router();
const candidatesController = require("./controllers/candidatesController");

router.get("/download-csv", candidatesController.downloadCsv);

module.exports = router;
