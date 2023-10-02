const client = require("../client");

const getAllWeeks = async () => {
  try {
    const {
      //is this label for rows correct?
      rows: [weeks],
    } = await client.query(`
          SELECT *
          FROM weeks;
      `);
    return rows;
  } catch (error) {
    throw error;
  }
};

// const getWeeksByPreg_id = async (preg_id) => {
//   const {
//     rows: [weeks],
//   } = await client.query(
//     //need help with rewriting this :
//     `
//     SELECT *
//     FROM pregnancies preg
//     JOIN pregnancyweeks pregw ON preg.id = pregw.preg_id
//     JOIN weeks ON pregw.week_id = weeks.id
//     WHERE preg.user_id = ${user_id};
//     `
//   );
//   return weeks;
// };

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

async function updateWeeks(week_id, fields) {
  try {
    const toUpdate = {};
    for (let column in fields) {
      if (fields[column] !== undefined) toUpdate[column] = fields[column];
    }
    let weeks;

    if (util.dbFields(toUpdate).insert.length > 0) {
      const { rows } = await client.query(
        `
          UPDATE weeks
          SET ${util.dbFields(toUpdate).insert}
          WHERE "pregnancyId"=${pregnancyId}
          RETURNING *;
        `,
        Object.values(toUpdate)
      );
      weeks = rows[0];
    }

    return weeks;
  } catch (error) {
    throw error;
  }
}

async function deleteWeeks(preg_id) {
  try {
    const { rows } = await client.query(
      'DELETE FROM pregnancy WHERE "pregnancyId"=$1 RETURNING *',
      [preg_id]
    );
    return rows[0];
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getAllWeeks,
  getWeeksById,
  createWeeks,
  updateWeeks,
  deleteWeeks,
};
