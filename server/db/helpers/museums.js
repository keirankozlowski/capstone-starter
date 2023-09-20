const client = require('../client')

const createMuseum = async ({ museumName, image, description, link }) => {
    try {
        const {
            rows: [museum],
        } = await client.query(
            `
                INSERT INTO museums("museumName", image, description, link)
                VALUES($1, $2, $3, $4)
                RETURNING *;
            `,

            [museumName, image, description, link]
        )
        return museum
    } catch (error) {
        throw error
    }
}

module.exports = { createMuseum }