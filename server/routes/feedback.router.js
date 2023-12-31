const express = require("express");
const router = new express.Router();
const pool = require("../modules/pool.js");

// GET Route
router.get("/", (req, res) => {
  const sqlText = `SELECT * FROM feedback ORDER BY "id" DESC`;
  console.log("Get text", sqlText);
  pool
    .query(sqlText)
    .then((result) => {
      console.log(`GET from database`, result);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
}); // END GET Route

// POST Route
router.post("/", (req, res) => {
  const feedback = req.body;
  console.log("feedback", feedback);
  const sqlText = `INSERT INTO feedback ("feeling", "understanding", "support", "comments")
         VALUES ($1, $2, $3, $4)`;
  pool
    .query(sqlText, [
      feedback.feeling,
      feedback.understanding,
      feedback.support,
      feedback.comments,
    ])
    .then((result) => {
      console.log(`Added to database`, feedback);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
}); // END POST Route

// PUT Route
router.put("/:id", (req, res) => {
  let idToUpdate = req.params.id;
  let flagged = req.body.flagged;
  let sqlText;

  if (flagged == false) {
    sqlText = `UPDATE feedback SET "flagged" = true WHERE "id" = $1;`;
  } else if (flagged == true) {
    sqlText = `UPDATE feedback SET "flagged" = false WHERE "id" = $1;`;
  }

  pool
    .query(sqlText, [idToUpdate])
    .then((result) => {
      console.log("Update in database", idToUpdate);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
}); // END PUT Route

// DELETE Route
router.delete("/:id", (req, res) => {
  let idToDelete = req.params.id;
  console.log("idToDelete", idToDelete);
  let sqlText = `
        DELETE FROM feedback WHERE "id" = $1;
        `;
  pool
    .query(sqlText, [idToDelete])
    .then((result) => {
      console.log("Deleted from database ", idToDelete);
      res.sendStatus(202);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
}); // END DELETE Route

module.exports = router;
