const client = require("../client");

const createWeeks = async ({ weight, size, info }) => {
  const {
    rows: [weeks],
  } = await client.query(
    `
        INSERT INTO weeks(weight, size, info)
        VALUES ($1, $2, $3)
        RETURNING *
    `,
    [weight, size, info]
  );
  return weeks;
};

module.exports = { createWeeks };
