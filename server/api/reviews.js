const express = require("express");
const router = express.Router();

const {
  createReview,
  getAllReviews,
  getReviewById,
  getReviewByUserId,
  getReviewsByMuseumId,
  getReviewsByMuseumIdwithUsername,
  updateReview,
  deleteReview,
} = require("../db/helpers/reviews");

router.use(express.json());

// GET all reviews - api/reviews

router.get("/", async (req, res, next) => {
  try {
    const reviews = await getAllReviews();
    res.send(reviews);
  } catch (error) {
    console.log("error", error);
    next(error);
  }
});

// GET review by id - api/reviews/:reviewId

router.get("/:reviewId", async (req, res, next) => {
  try {
    const review = await getReviewById(req.params.reviewId);
    res.send(review);
  } catch (error) {
    next(error);
  }
});

// GET review by user Id - api/reviews/user/:userId

router.get("/user/:userId", async (req, res, next) => {
  try {
    const review = await getReviewByUserId(req.params.userId);
    res.send(review);
  } catch (error) {
    next(error);
  }
});

// Get review by museum Id - api/reviews/museum/:museumId

router.get("/museum/:museumId", async (req, res, next) => {
  try {
    const review = await getReviewsByMuseumId(req.params.museumId);
    res.send(review);
  } catch (error) {
    next(error);
  }
});

// Get review by museum id with username - api/reviews/museum/review/:museumId

router.get("/museum/review/:museumId", async (req, res, next) => {
  try {
    const review = await getReviewsByMuseumIdwithUsername(req.params.museumId);
    res.send(review);
  } catch (error) {
    next(error);
  }
});

// POST - add a review - api/reviews

router.post("/", async (req, res, next) => {
  try {
    const review = await createReview(req.body);
    res.send(review);
  } catch (error) {
    next(error);
  }
});

// DELETE - /api/reviews/:reviewId - delete a review

router.delete("/:reviewId", async (req, res, next) => {
  try {
    const review = await deleteReview(req.params.reviewId);
    res.send(review);
  } catch (error) {
    next(error);
  }
});

// PUT - /api/reviews/:reviewId - edit review

router.put("/:reviewId", async (req, res, next) => {
  try {
    const review = await updateReview(req.params.reviewId, req.body);
    res.send(review);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
