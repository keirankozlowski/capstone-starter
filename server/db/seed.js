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

// create initial items

// rebuild db
