const client = require("../client");

const createReview = async ({ userId, museumId, rating, body, date }) => {
  try {
    const {
      rows: [review],
    } = await client.query(
      `
      INSERT INTO reviews("userId", "museumId", rating, body, date)
      VALUES($1, $2, $3, $4, $5)
      RETURNING *;
      `,

      [userId, museumId, rating, body, date]
    );
    return review;
  } catch (error) {
    throw error;
  }
};

const getAllReviews = async () => {
  try {
    const { rows } = await client.query(`
            SELECT *
            FROM reviews;
          `);
    // console.log(rows);
    return rows;
  } catch (error) {
    throw error;
  }
};

const getReviewById = async (reviewId) => {
  try {
    const {
      rows: [review],
    } = await client.query(
      `
            SELECT *
            FROM reviews
            WHERE "reviewId" = $1;
          `,
      [reviewId]
    );
    return review;
  } catch (error) {
    throw error;
  }
};

const getReviewByUserId = async (userId) => {
  try {
    const {
      rows: [review],
    } = await client.query(
      `
              SELECT *
              FROM reviews
              WHERE "userId" = $1;
            `,
      [userId]
    );
    return review;
  } catch (error) {
    throw error;
  }
};

const getReviewsByUserId = async (userId) => {
  try {
    const {
      rows,
    } = await client.query(
      `
      SELECT *
      FROM reviews
      WHERE "userId" = $1;
      `,
      [userId]
    );
    return rows;
  } catch (error) {
    throw error;
  }
};

const getReviewsByUserIdWithMuseumName = async (userId) => {
  try {
    const { rows } = await client.query(
      `SELECT reviews.*, museums."museumName"
      FROM reviews
      INNER JOIN museums ON reviews."museumId" = museums."museumId"
      WHERE reviews."userId" = $1
      `,
      [userId]
    );
    return rows;
  } catch (error) { }
};

const getReviewsByMuseumId = async (museumId) => {
  try {
    const { rows } = await client.query(
      `
              SELECT *
              FROM reviews
              WHERE "museumId" = $1;
            `,
      [museumId]
    );
    return rows;
  } catch (error) {
    throw error;
  }
};

const getReviewsByMuseumIdwithUsername = async (museumId) => {
  try {
    const { rows } = await client.query(
      `SELECT reviews.*, users.username
      FROM reviews
      INNER JOIN users ON reviews."userId" = users."userId"
      WHERE reviews."museumId" = $1;
      `,
      [museumId]
    );
    return rows;
  } catch (error) { }
};

const updateReview = async (
  reviewId,
  { userId, museumId, rating, body, date }
) => {
  try {
    const {
      rows: [reviews],
    } = await client.query(
      `
        UPDATE reviews
        SET "userId" = $2, "museumId" = $3, rating = $4, body = $5, date = $6
        WHERE "reviewId" = $1
        RETURNING *;
      `,
      [reviewId, userId, museumId, rating, body, date]
    );

    return reviews;
  } catch (error) {
    throw error;
  }
};

const deleteReview = async (reviewId) => {
  try {
    const {
      rows: [review],
    } = await client.query(
      `
          DELETE FROM reviews
          WHERE "reviewId" = $1
          RETURNING *;
        `,
      [reviewId]
    );

    return review;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createReview,
  getAllReviews,
  getReviewById,
  getReviewByUserId,
  getReviewsByUserId,
  getReviewsByMuseumId,
  getReviewsByMuseumIdwithUsername,
  getReviewsByUserIdWithMuseumName,
  updateReview,
  deleteReview,
};
