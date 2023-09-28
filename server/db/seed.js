const client = require("./client");
const { createUser } = require("./helpers/users");
const { createPregnancy } = require("./helpers/pregnancy");
const { users, pregnancies } = require("./seedData");

const dropTables = async () => {
  await client.query(`
        DROP TABLE IF EXISTS pregnancy;
        DROP TABLE IF EXISTS users;

    `);
  console.log("Dropped Tables");
};

const createTables = async () => {
  await client.query(`
        CREATE TABLE users(
            user_id SERIAL PRIMARY KEY,
            username VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        );
        CREATE TABLE pregnancy(
            pregnancy_id SERIAL PRIMARY KEY,
            "user_id" INTEGER REFERENCES users("user_id"),
            age INTEGER NOT NULL,
            is_tracking BOOLEAN DEFAULT true
        );
    `);
  console.log("Created Tables");
};

const createInitialUsers = async () => {
  console.log("Creating Users...");
  for (const user of users) {
    await createUser(user);
  }
};

const createInitialPregnancies = async () => {
  console.log("Creating Pregnancies...");
  for (const pregnancy of pregnancies) {
    await createPregnancy(pregnancy);
  }
};

const initDb = async () => {
  console.log("init");
  try {
    client.connect();
    await dropTables();
    await createTables();
    await createInitialUsers();
    await createInitialPregnancies();
    console.log("DB is seeded and ready to go!!");
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
};

initDb();
