import React, { useState, useEffect } from "react";
import {
  fetchAllJournalEntries,
  addJournalEntry,
  editJournalEntry,
  deleteJournalEntry,
} from "../../helpers/fetching";

export default function JournalEntries({ token, userId }) {
  const [journalEntries, setJournalEntries] = useState([]);
  const [error, setError] = useState(null);
  const [editingEntry, setEditingEntry] = useState(null);
  const [newEntry, setNewEntry] = useState({ title: "", body: "" });

  // Fetch all journal entries
  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const entries = await fetchAllJournalEntries();
        if (Array.isArray(entries)) {
          setJournalEntries(entries);
        } else {
          setError("Invalid data received from the server.");
        }
      } catch (error) {
        setError("Failed to fetch journal entries. Please try again later.");
      }
    };

    fetchEntries();
  }, []);

  // Function to handle journal entry creation
  const handleCreateEntry = async () => {
    try {
      const createdEntry = await addJournalEntry(
        token,
        userId,
        newEntry.title,
        newEntry.body,
        new Date().toISOString()
      );

      setJournalEntries((entries) => [...entries, createdEntry]);
      setNewEntry({ title: "", body: "" });
    } catch (error) {
      setError("Failed to create a journal entry. Please try again later.");
    }
  };

  // Function to handle journal entry edit
  const handleEditEntry = (entryId) => {
    const entryToEdit = journalEntries.find((entry) => entry.entryId === entryId);
    setEditingEntry(entryToEdit);
  };

  // Function to save edited journal entry
  const saveEditedEntry = async (editedEntry) => {
    try {
      const updatedEntry = await editJournalEntry(
        editedEntry.entryId,
        userId,
        editedEntry.title,
        editedEntry.body,
        editedEntry.date,
        token
      );

      setJournalEntries((entries) =>
        entries.map((entry) =>
          entry.entryId === updatedEntry.entryId ? updatedEntry : entry
        )
      );

      setEditingEntry(null);
    } catch (error) {
      setError("Failed to edit journal entry. Please try again later.");
    }
  };

  // Function to handle journal entry deletion
  const handleDeleteEntry = async (entryId) => {
    try {
      await deleteJournalEntry(entryId, token);
      setJournalEntries((entries) =>
        entries.filter((entry) => entry.entryId !== entryId)
      );
    } catch (error) {
      setError("Failed to delete journal entry. Please try again later.");
    }
  };

  return (
    <div>
      <h1>Journal Entries</h1>
      {error && <p>{error}</p>}
      <ul>
        {journalEntries.map((entry) => (
          <li key={entry.entryId}>
            {editingEntry?.entryId === entry.entryId ? (
              <div>
                <h2>Edit Journal Entry</h2>
                <input
                  type="text"
                  value={editingEntry.title}
                  onChange={(e) =>
                    setEditingEntry({ ...editingEntry, title: e.target.value })
                  }
                />
                <textarea
                  value={editingEntry.body}
                  onChange={(e) =>
                    setEditingEntry({ ...editingEntry, body: e.target.value })
                  }
                />
                <button className="save-button" onClick={() => saveEditedEntry(editingEntry)}>
                  Save
                </button>
                <button className="cancel-button" onClick={() => setEditingEntry(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                <h2>{entry.title}</h2>
                <p>{entry.body}</p>
                <p>Date: {entry.date}</p>
                <button className="delete-button" onClick={() => handleDeleteEntry(entry.entryId)}>
                  Delete
                </button>
                <button className="edit-button" onClick={() => handleEditEntry(entry.entryId)}>
                  Edit
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div>
        <h2>Create New Journal Entry</h2>
        <input
          type="text"
          placeholder="Title"
          value={newEntry.title}
          onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })}
        />
        <textarea
          placeholder="Body"
          value={newEntry.body}
          onChange={(e) => setNewEntry({ ...newEntry, body: e.target.value })}
        />
        <button className="create-button" onClick={handleCreateEntry}>Create</button>
      </div>
    </div>
  );
}






// import React, { useState, useEffect } from "react";
// import { fetchAllJournalEntries, deleteJournalEntry } from "../../helpers/fetching";

// export default function JournalEntries({ token, userId }) {
//   const [journalEntries, setJournalEntries] = useState([]);
//   const [error, setError] = useState(null);

//   // Fetch all journal entries
//   useEffect(() => {
//     const fetchEntries = async () => {
//       try {
//         const entries = await fetchAllJournalEntries();
//         if (Array.isArray(entries)) {
//           setJournalEntries(entries);
//         } else {
//           setError("Invalid data received from the server.");
//         }
//       } catch (error) {
//         setError("Failed to fetch journal entries. Please try again later.");
//       }
//     };

//     fetchEntries();
//   }, []);

//   // Function to handle journal entry deletion
//   const handleDeleteEntry = async (entryId) => {
//     try {
//       await deleteJournalEntry(entryId, token);
//       // Remove the deleted entry from the local state
//       setJournalEntries((entries) =>
//         entries.filter((entry) => entry.entryId !== entryId)
//       );
//     } catch (error) {
//       setError("Failed to delete journal entry. Please try again later.");
//     }
//   };

//   return (
//     <div>
//       <h1>Journal Entries</h1>
//       {error && <p>{error}</p>}
//       <ul>
//         {journalEntries.map((entry) => (
//           <li key={entry.entryId}>
//             <h2>{entry.title}</h2>
//             <p>{entry.body}</p>
//             <p>Date: {entry.date}</p>
//             <button onClick={() => handleDeleteEntry(entry.entryId)}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }






// import React from "react";

// export default function UserProfile() {
//   return (
//     <>
//       <h1>MY PROFILE!!!</h1>
//     </>
//   );
// }
