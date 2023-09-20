const client = require("../client");

const createUser = async ({ username, password }) => {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
                INSERT INTO users(username, password)
                VALUES($1, $2)
                RETURNING *;
            `,

      [username, password]
    );
    return user;
  } catch (error) {
    throw error;
  }
};

const getAllUsers = async () => {
  try {
    const { rows } = await client.query(`
        SELECT *
        FROM users;
      `);
    // console.log(rows);
    return rows;
  } catch (error) {
    throw error;
  }
};

const getUserById = async (userId) => {
  try {
    const {
      rows: [users],
    } = await client.query(
      `
        SELECT *
        FROM users
        WHERE "userId" = $1;
      `,
      [userId]
    );
    return users;
  } catch (error) {
    throw error;
  }
};

const getUserByUsername = async (username) => {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
        SELECT *
        FROM users
        WHERE username = $1;
      `,
      [username]
    );
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = { createUser, getAllUsers, getUserById, getUserByUsername };
