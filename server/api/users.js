const express = require("express");
const router = express.Router();

const { getAllUsers } = require("../db/helpers/users");

router.use(express.json());

const users = require("../db/seedData");

// GET all users - api/users

router.get("/", async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.send(users);
  } catch (error) {
    console.log("error", error);
    next(error);
  }
});

module.exports = router;
