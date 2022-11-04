const express = require("express");
const { pool } = require("../db/db-config");
const router = express.Router();

// Objectives Endpoint
router.get("/studentdashboard/objectives", (req, res) => {
  pool.execute(
    `SELECT learning_objective FROM missio20_team3.project WHERE project_id = ?;`,
    [1],
    (error, result) => {
      if (error) {
        console.log("Error", error);
        res.send("You have an error" + error.code);
      } else {
        console.log(result[0].learning_objective);
        res.json(result[0].learning_objective);
      }
    }
  );
})

module.exports = router;
