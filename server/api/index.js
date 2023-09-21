const express = require("express");
const router = express.Router();

// GET /api/health
router.get("/health", (req, res, next) => {
  res.send("OK");
});

// ROUTER: /api/users
router.use("/users", require("./users"));

// ROUTER: /api/museums
router.use("/museums", require("./museums"));

// ROUTER: /api/reviews
router.use("/reviews", require("./reviews"));

module.exports = router;
