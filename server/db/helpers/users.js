const client = require("../client");

const createUser = async ({ username, password }) => {
  const {
    rows: [user],
  } = await client.query(
    `
        INSERT INTO users(username, password)
        VALUES ($1, $2)
        RETURNING *
    `,
    [username, password]
  );
  return user;
};

const getUserByUsername = async (username) => {
  const {
    rows: [user],
  } = await client.query(
    `
    SELECT * FROM users
    WHERE users.username = $1
    `,
    [username]
  );
  return user;
};

const getUserByToken = async (id) => {
  const {
    rows: [user],
  } = await client.query(
    `
    SELECT * FROM users
    WHERE users.id = $1
    `,
    [id]
  );
  return user;
};

module.exports = { createUser, getUserByUsername, getUserByToken };
