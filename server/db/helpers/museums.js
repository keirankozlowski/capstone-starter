const client = require("../client");

const createMuseum = async ({
  museumName,
  image,
  description,
  link,
  type,
  lat,
  lng,
}) => {
  try {
    const {
      rows: [museum],
    } = await client.query(
      `
                INSERT INTO museums("museumName", image, description, link, type, lat, lng)
                VALUES($1, $2, $3, $4, $5, $6, $7)
                RETURNING *;
            `,

      [museumName, image, description, link, type, lat, lng]
    );
    return museum;
  } catch (error) {
    throw error;
  }
};

const getAllMuseums = async () => {
  try {
    const { rows } = await client.query(`
          SELECT *
          FROM museums;
        `);
    // console.log(rows);
    return rows;
  } catch (error) {
    throw error;
  }
};

const getMuseumById = async (museumId) => {
  try {
    const {
      rows: [museum],
    } = await client.query(
      `
          SELECT *
          FROM museums
          WHERE "museumId" = $1;
        `,
      [museumId]
    );
    return museum;
  } catch (error) {
    throw error;
  }
};

const getMuseumByName = async (museumName) => {
  try {
    const {
      rows: [museum],
    } = await client.query(
      `
          SELECT *
          FROM museums
          WHERE "museumName" = $1;
        `,
      [museumName]
    );
    return museum;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createMuseum,
  getAllMuseums,
  getMuseumById,
  getMuseumByName,
};
