const express = require("express");
const router = express.Router();

const { createJournal, getAllJournalEntries, getJournalEntriesByUserId, getJournalEntryById, updateJournalEntry, deleteJournalEntry } = require("../db/helpers/journal");

router.use(express.json());

// POST a new journal entry - api/journal
router.post("/", async (req, res, next) => {
    try {
      const { entryId, userId, title, body, date } = req.body; // Match the parameter names
      const journal = await createJournal({ entryId, userId, title, body, date }); // Pass the correct properties
      res.status(201).send(journal);
    } catch (error) {
      console.log("error", error);
      next(error);
    }
  });
  

// GET all journal entries - api/journal
router.get("/", async (req, res, next) => {
  try {
    const journalEntries = await getAllJournalEntries();
    res.status(200).json(journalEntries);
  } catch (error) {
    console.error("Error fetching journal entries:", error);
    next(error);
  }
});

// Get journal entries by entryId
router.get("/:entryId", async (req, res, next) => {
    try {
      const journalEntry = await getJournalEntryById(req.params.entryId);
      res.send(journalEntry);
    } catch (error) {
      next(error);
    }
  });

// Get journal entries by userId
router.get("/user/:userId", async (req, res, next) => {
    try {
      const userId = req.params.userId;
      const journalEntries = await getJournalEntriesByUserId(userId);
      res.send(journalEntries);
    } catch (error) {
      next(error);
    }
  });

// Update journal entry by entryId - api/journal/:entryId
router.put("/:entryId", async (req, res, next) => {
    try {
      const journalEntry = await updateJournalEntry(req.params.entryId, req.body);
      res.send(journalEntry);
    } catch (error) {
      next(error);
    }
  });
  
  // DELETE a journal entry by entryId - api/journals/:entryId
router.delete("/:entryId", async (req, res, next) => {
    try {
      const deletedEntry = await deleteJournalEntry(req.params.entryId); // Call the delete function with the provided entryId
      res.send(deletedEntry);
    } catch (error) {
      next(error);
    }
  });

  
module.exports = router;

