const router = require("express").Router();

// GET endpoint to get all articles
router.get("/", (req, res, next) => {
  return res.status(200).json({
    data: "OK",
  });
});

// GET endpoint with parameter id to get particular article
router.get("/:id", (req, res, next) => {
  return res.status(200).json({
    data: `OK post ${req.params.id}`,
  });
});

// POST endpoint to create new articles
router.post("/", (req, res, next) => {
  return res.status(200).json({
    data: "OK",
    payload: req.body,
  });
});

module.exports = router;
