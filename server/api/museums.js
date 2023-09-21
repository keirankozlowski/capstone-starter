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

// GET museum by name - api/museums/:museumName

// Need to fix route

// router.get("/:museumName", async (req, res, next) => {
//   try {
//     const museum = await getMuseumByName(req.params.museumName);
//     res.send(museum);
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
