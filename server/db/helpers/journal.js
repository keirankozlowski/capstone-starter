const client = require("../client");

const createJournal = async ({ userId, title, body, date }) => {
  try {
    const {
      rows: [journal],
    } = await client.query(
      `
        INSERT INTO journal("userId", title, body, date)
        VALUES($1, $2, $3, $4)
        RETURNING *;
      `,
      [userId, title, body, date]
    );
    return journal;
  } catch (error) {
    throw error;
  }
};


const getAllJournalEntries = async () => {
    try {
      const { rows } = await client.query(`
              SELECT *
              FROM journal;
            `);
      // console.log(rows);
      return rows;
    } catch (error) {
      throw error;
    }
  };

  const getJournalEntryById = async (entryId) => {
    try {
      const {
        rows: [journalEntry],
      } = await client.query(
        `
          SELECT *
          FROM journal
          WHERE "entryId" = $1;
        `,
        [entryId]
      );
      return journalEntry;
    } catch (error) {
      throw error;
    }
  };
  

  const getJournalEntriesByUserId = async (userId) => {
    try {
      const {
        rows,
      } = await client.query(
        `
        SELECT *
        FROM journal
        WHERE "userId" = $1;
        `,
        [userId]
      );
      return rows;
    } catch (error) {
      throw error;
    }
  };
  
  const updateJournalEntry = async (
    entryId,
    { userId, title, body, date }
  ) => {
    try {
      const {
        rows: [journal],
      } = await client.query(
        `
          UPDATE journal
          SET "userId" = $2, title = $3, body = $4, date = $5
          WHERE "entryId" = $1
          RETURNING *;
        `,
        [entryId, userId, title, body, date]
      );
  
      return journal;
    } catch (error) {
      throw error;
    }
  };
 
  const deleteJournalEntry = async (entryId) => {
    try {
      const {
        rows: [journal],
      } = await client.query(
        `
          DELETE FROM journal
          WHERE "entryId" = $1
          RETURNING *;
        `,
        [entryId]
      );
  
      return journal;
    } catch (error) {
      throw error;
    }
  };
  
  module.exports = {
    deleteJournalEntry,
  };
  

module.exports = {
  createJournal,
  getAllJournalEntries,
  getJournalEntriesByUserId,
  getJournalEntryById,
  updateJournalEntry,
  deleteJournalEntry,
};
