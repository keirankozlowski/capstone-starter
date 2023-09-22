const express = require("express");
const router = express.Router();

const {
  createMuseum,
  getAllMuseums,
  getMuseumById,
  getMuseumByName,
} = require("../db/helpers/museums");

router.use(express.json());

// GET all museums - api/museums

router.get("/", async (req, res, next) => {
  try {
    const museums = await getAllMuseums();
    res.send(museums);
  } catch (error) {
    console.log("error", error);
    next(error);
  }
});

// GET museum by id - api/museums/:museumId

router.get("/:museumId", async (req, res, next) => {
  try {
    const museum = await getMuseumById(req.params.museumId);
    res.send(museum);
  } catch (error) {
    next(error);
  }
});

// GET museum by name - api/museums/name/:museumName

// Use %20 in place of spaces in URL
// Ex. http://localhost:8081/api/museums/name/The%20Metropolitan%20Museum%20of%20Art

router.get("/name/:museumName", async (req, res, next) => {
  const museumName = req.params.museumName.replace(/ /g, "%20");
  try {
    const museum = await getMuseumByName(req.params.museumName);
    res.send(museum);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
