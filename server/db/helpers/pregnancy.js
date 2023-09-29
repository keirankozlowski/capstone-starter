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
    SELECT *
    FROM pregnancies preg
    JOIN pregnancyweeks pregw ON preg.id = pregw.preg_id
    JOIN weeks ON pregw.week_id = weeks.id
    WHERE preg.user_id = ${user_id};
    `
  );
  return pregnancies;
};

module.exports = { createPregnancy, getPregnancyByUserId };
