const client = require("../client");

const createPregnancy = async ({ user_id, age, is_tracking }) => {
  const {
    rows: [pregnancy],
  } = await client.query(
    `
        INSERT INTO pregnancies(user_id, age, is_tracking)
        VALUES ($1, $2, $3)
        RETURNING *
    `,
    [user_id, age, is_tracking]
  );
  return pregnancy;
};

const getPregnancyByUserId = async (user_id) => {
  const {
    rows: [pregnancies],
  } = await client.query(
    `
    SELECT preg.*
    FROM pregnancies preg
    WHERE preg.user_id = $1
    JOIN pregnancyweeks pregw ON Preg.id = pregw.preg_id
    JOIN Weeks ON pregw.weeks_id = weeks.id
    `,
    [user_id]
  );
  return pregnancies;
};

module.exports = { createPregnancy, getPregnancyByUserId };
