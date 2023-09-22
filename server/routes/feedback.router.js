const express = require('express');
const router = new express.Router();
const pool = require("../modules/pool.js");

// POST Route
router.post("/", (req, res) => {
    const feedback = req.body;
    console.log("feedback", feedback);
    const sqlText = `INSERT INTO feedback ("feeling", "understanding", "support", "comments")
         VALUES ($1, $2, $3, $4)`;
    pool
      .query(sqlText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
      .then((result) => {
        console.log(`Added to database`, feedback);
        res.sendStatus(201);
      })
      .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500);
      });
  }); // END POST Route

  module.exports = router;