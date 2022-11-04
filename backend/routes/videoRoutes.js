const express = require("express");
const { pool } = require("../db/db-config");
const router = express.Router();

// Video Endpoint
router.get("/studentdashboard/video", (req, res) => {
  pool.execute(
    `SELECT video FROM missio20_team3.project WHERE project_id = ? ;`,
    [1],
    (error, result) => {
      if (error) {
        console.log("Error", error);
        res.send("You have an error" + error.code);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});

module.exports = router;
