const router = require("express").Router();
const config = require("../../utils/config");
const connection = require("mysql2").createPool(config.database);

// GET endpoint to get all articles
router.get("/", (req, res, next) => {
  connection.getConnection((err, tempConnection) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        error: err,
      });
    }
    tempConnection.query("SELECT * FROM posts;", async (err, rows, field) => {
      tempConnection.release();
      if (err) {
        console.log(err);
        return res.status(500).json({
          error: err,
        });
      }
      return res.status(200).json({
        data: rows,
      });
    });
  });
});

// GET endpoint with parameter id to get particular article
router.get("/:id", (req, res, next) => {
  connection.getConnection((err, tempConnection) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        error: err,
      });
    }
    tempConnection.query(
      "SELECT * FROM posts WHERE post_id = ?;",
      [req.params.id],
      async (err, rows, field) => {
        tempConnection.release();
        if (err) {
          console.log(err);
          return res.status(500).json({
            error: err,
          });
        }
        return res.status(200).json({
          data: rows,
        });
      }
    );
  });
});

// POST endpoint to create new articles
router.post("/", (req, res, next) => {
  connection.getConnection((err, tempConnection) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        error: err,
      });
    }
    tempConnection.query(
      "INSERT INTO posts(title, content, created_at) VALUES (?, ?, UNIX_TIMESTAMP());",
      [req.body.title, req.body.content],
      async (err, rows, field) => {
        tempConnection.release();
        if (err) {
          console.log(err);
          return res.status(500).json({
            error: err,
          });
        }
        return res.status(200).json({
          data: { post_id: rows.insertedId },
        });
      }
    );
  });
});

module.exports = router;
