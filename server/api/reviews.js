const express = require("express");
const router = express.Router();

const {
  createReview,
  getAllReviews,
  getReviewById,
  getReviewByUserId,
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

// GET review by user Id - api/reviews/:userId

// need to fix route

// router.get("/:userId", async (req, res, next) => {
//     try {
//       const review = await getReviewByUserId(req.params.userId);
//       res.send(review);
//     } catch (error) {
//       next(error);
//     }
//   });

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

// router.put("/:reviewId", async (req, res, next) => {
//   try {
//     // Extract and convert data from req.body if needed
//     const userId = parseInt(req.body.userId, 10); // Example conversion

//     // Construct the data object to pass to updateReview
//     const updatedData = {
//       // Include other fields from req.body as needed
//       userId: userId,
//       // ...
//     };

//     // Call updateReview with the updated data
//     const review = await updateReview(req.params.reviewId, updatedData);

//     res.send(review);
//   } catch (error) {
//     next(error);
//   }
// });

// router.put("/:reviewId", async (req, res, next) => {
//   try {
//     // Extract the userId from req.body if it's in an object
//     const userId = req.body.userId; // Assuming userId is a plain integer

//     // Ensure userId is a valid integer (you can add additional validation here)
//     if (typeof userId !== "number" || isNaN(userId)) {
//       throw new Error("Invalid userId");
//     }

//     // Construct the data object to pass to updateReview
//     const updatedData = {
//       userId: userId, // Assign the extracted userId
//       // ... Include other fields from req.body as needed
//     };

//     // Call updateReview with the updated data
//     const review = await updateReview(req.params.reviewId, updatedData);

//     res.send(review);
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
