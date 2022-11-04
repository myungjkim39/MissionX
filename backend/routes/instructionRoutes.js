const express = require("express");
const { pool } = require("../db/db-config");
const router = express.Router();

// Instructions Endpoint
router.get("/studentdashboard/instructions", (req, res) => {
  pool.execute(
    `SELECT instructions FROM missio20_team3.project WHERE project_id = ?;`,
    [1],
    (error, result) => {
      if (error) {
        console.log("Error", error);
        res.send("You have an error" + error.code);
      } else {
        console.log(result[0].instructions);
        res.json(result[0].instructions);
      }
    }
  );
});

module.exports = router;
