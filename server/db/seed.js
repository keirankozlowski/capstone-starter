// drop tables
async function dropTables() {
    try {
      // Drop existing tables if they exist
      await client.query("DROP TABLE IF EXISTS user");
      await client.query("DROP TABLE IF EXISTS pregnancy");
      await client.query("DROP TABLE IF EXISTS pregnancyWeeks");
      await client.query("DROP TABLE IF EXISTS weeks");

      console.log("Tables dropped successfully");
    } catch (error) {
      console.error("Error dropping tables");
      throw error;
    }
  }


// create tables
async function createTables() {
    try {
      await client.query(`
        CREATE TABLE users (
        "username" SERIAL PRIMARY KEY,
        username varchar(255) UNIQUE NOT NULL,
        password varchar(255) NOT NULL,
    );
        CREATE TABLE pregnancy (
        "pregnancy" SERIAL PRIMARY KEY,
        "userId" INTEGER REFERENCES users("userId") NOT NULL,
        "age" INTEGER REFERENCES users("user_id") NOT NULL

    );
          CREATE TABLE pregnancyWeeks (
              "weekId" SERIAL PRIMARY KEY,
              "userId" INTEGER REFERENCES users("userId") NOT NULL,
              "pregnancyId" INTEGER REFERENCES posts("pregnancy") NOT NULL,

          );
          CREATE TABLE weeks (
            weight varchar(255) NOT NULL
            size varchar(255) NOT NULL
            info varchar(255) NOT NULL
        );
      `);
      console.log("Tables created successfully");
    } catch (error) {
      console.error("Error creating tables:", error);
    }

// create initial items

// rebuild db

//Call all my functions and 'BUILD' my database
const rebuildDb = async () => {
    try {
        //ACTUALLY connect to my local database
        client.connect()
        //Run our functions
        await dropTables()
        await createTables()

        //Generating starting data
        // console.log("starting to seed...")
        // await createInitialUsers()
        // await createInitialPosts()
        // await createInitialComment()
        // await createInitialLike()

    } catch (error) {
        console.error(error)
    } finally {
        //close our connection
        client.end()
    }
  }

  rebuildDb()
