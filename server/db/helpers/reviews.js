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

const updateReview = async (reviewId, museumId, rating, body, date) => {
  try {
    const query = `
        UPDATE reviews
        SET "museumId" = $2, rating = $3, body = $4, date = $5
        WHERE "reviewId" = $1
        RETURNING *;
      `;

    const { rows } = await client.query(query, [
      reviewId,
      museumId,
      rating,
      body,
      date,
    ]);

    return rows;
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
  updateReview,
  deleteReview,
};
