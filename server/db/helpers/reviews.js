const client = require('../client')

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
        )
        return review
    } catch (error) {
        throw error
    }
}

module.exports = { createReview }