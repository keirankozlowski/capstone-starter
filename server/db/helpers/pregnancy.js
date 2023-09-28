const client = require("../client");

const createPregnancy = async ({ user_id, age, is_tracking }) => {
  const {
    rows: [pregnancy],
  } = await client.query(
    `
        INSERT INTO pregnancy(user_id, age, is_tracking)
        VALUES ($1, $2, $3)
        RETURNING *
    `,
    [user_id, age, is_tracking]
  );
  return pregnancy;
};

const getPregnancyByUserId = async (user_id) => {
  const {
    rows: [pregnancy],
  } = await client.query(
    `
    SELECT * FROM pregnancy
    WHERE users.user_id = $1
    `,
    [user_id]
  );
  return pregnancy;
};

module.exports = { createPregnancy, getPregnancyByUserId };
