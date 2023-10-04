const client = require("../client");
const util = require("../util");

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

const getAllPregnancies = async () => {
  try {
    const { rows } = await client.query(`
          SELECT *
          FROM pregnancies;
      `);
    return rows;
  } catch (error) {
    throw error;
  }
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

async function updatePregnancies(pregnancyId, fields) {
  try {
    const toUpdate = {};
    for (let column in fields) {
      if (fields[column] !== undefined) toUpdate[column] = fields[column];
    }
    let pregnancy;

    if (util.dbFields(toUpdate).insert.length > 0) {
      const { rows } = await client.query(
        `
          UPDATE pregnancies
          SET ${util.dbFields(toUpdate).insert}
          WHERE "id"=${pregnancyId}
          RETURNING *;
        `,
        Object.values(toUpdate)
      );
      pregnancy = rows[0];
    }

    return pregnancy;
  } catch (error) {
    throw error;
  }
}

async function deletePregnancy(pregnancyId) {
  try {
    await client.query(
      `
      DELETE FROM pregnancyweeks WHERE "preg_id" = $1
    `,
      [pregnancyId]
    );

    const { rows } = await client.query(
      'DELETE FROM pregnancies WHERE "id"=$1 RETURNING *',
      [pregnancyId]
    );
    return rows[0];
  } catch (err) {
    throw err;
  }
}
module.exports = {
  createPregnancy,
  getPregnancyByUserId,
  getAllPregnancies,
  updatePregnancies,
  deletePregnancy,
};
