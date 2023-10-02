// Fetch requests

// base URL for API

const baseURL = "http://localhost:8081/api";

// USERS QUERIES

// Register user

async function createUser(username, password) {
  try {
    const response = await fetch(`${baseURL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("Please enter valid credentials", error);
  }
}

// Login user

async function loginUser(username, password) {
  try {
    // console.log("fetching log in");
    const response = await fetch(`${baseURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: `${username}`,
        password: `${password}`,
      }),
    });
    // console.log("this is my fetched response: ", response);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

// Logout user

async function logoutUser(username, password) {
  try {
    const response = await fetch(`${baseURL}/users/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: `${username}`,
        password: `${password}`,
      }),
    });
    console.log("logging out", response);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

// fetch user id by username

async function fetchUserByUsername(username) {
  try {
    const response = await fetch(`${baseURL}/users/${username}`);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("cannot get username", error);
  }
}

// MUSEUM QUERIES

// fetch all museums

async function fetchAllMuseums() {
  try {
    const response = await fetch(`${baseURL}/museums`);
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error) {
    console.error("Cannot get museums", error);
  }
}

// fetch single museum by id

async function fetchSingleMuseumById(museumId) {
  try {
    const response = await fetch(`${baseURL}/museums/${museumId}`);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("cannot get single museum", error);
  }
}

// fetch single museum by name

async function fetchSingleMuseumByName(museumName) {
  try {
    const response = await fetch(`${baseURL}/museums/name/${museumName}`);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("cannot get museum by name", error);
  }
}

// REVIEW QUERIES

async function fetchAllReviews() {
  try {
    const response = await fetch(`${baseURL}/reviews`);
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error) {
    console.error("Cannot get reviews", error);
  }
}

// fetch single museum by id

async function fetchSingleReview(reviewId) {
  try {
    const response = await fetch(`${baseURL}/reviews/${reviewId}`);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("cannot get single review", error);
  }
}

// fetch single museum by name

async function fetchSingleReviewByUserId(userId) {
  try {
    const response = await fetch(`${baseURL}/reviews/user/${userId}`);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("cannot get museum by name", error);
  }
}

// fetch reviews by museumId

async function fetchReviewsByMuseumId(museumId) {
  try {
    const response = await fetch(`${baseURL}/reviews/museum/${museumId}`);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("cannot get reviews by museumId", error);
  }
}

// create a review

async function addReview(userId, museumId, rating, body, date, token) {
  try {
    const response = await fetch(`${baseURL}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId,
        museumId,
        rating,
        body,
        date,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("You cannot create me", error);
    throw error;
  }
}

// delete a review

async function deleteReview(reviewId, token) {
  try {
    const response = await fetch(`${baseURL}/reviews/${reviewId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(`You cannot delete me`, error);
  }
}

// edit a review

async function editReview(
  reviewId,
  userId,
  museumId,
  rating,
  body,
  date,
  token
) {
  try {
    const response = await fetch(`${baseURL}/reviews/${reviewId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId,
        museumId,
        rating,
        body,
        date,
      }),
    });
    const result = await response.json();
    // console.log("Updated review", result);
    return result;
  } catch (err) {
    console.error(err);
  }
}

//Experiment
// JOURNAL ENTRY QUERIES

// fetch all journal entries

async function fetchAllJournalEntries() {
  try {
    const response = await fetch(`${baseURL}/journal`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Cannot get journal entries", error);
  }
}

// fetch journal entry by entryId

async function fetchSingleJournalEntryById(entryId) {
  try {
    const response = await fetch(`${baseURL}/journal/${entryId}`);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("Cannot get single journal entry", error);
  }
}

// fetch journal entries by userId

async function fetchJournalEntriesByUserId(userId) {
  try {
    const response = await fetch(`${baseURL}/journal/user/${userId}`);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("Cannot get journal entries by userId", error);
  }
}

// create a journal entry
async function addJournalEntry(token, userId, title, body, date) {
  try {
    const response = await fetch(`${baseURL}/journal`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId,
        title,
        body,
        date,
      }),
    });

    // Check if the response status is okay
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Failed to create a journal entry: ${errorMessage}`);
    }

    const result = await response.json(); // Parse the JSON once

    return result;
  } catch (error) {
    console.error("You cannot create a journal entry", error);
    throw error;
  }
}

// async function addJournalEntry(token, userId, title, body, date) {
//   try {
//     const response = await fetch(`${baseURL}/journal`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         userId,
//         title,
//         body,
//         date,
//       }),
//     });
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error("You cannot create a journal entry", error);
//     throw error;
//   }
// }

// delete a journal entry

// Updated deleteJournalEntry function

async function deleteJournalEntry(entryId, token) {
  try {
    const response = await fetch(`${baseURL}/journal/${entryId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("You cannot delete a journal entry", error);
  }
}



// edit a journal entry

async function editJournalEntry(entryId, userId, title, body, date, token) {
  try {
    const response = await fetch(`${baseURL}/journal/${entryId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId,
        title,
        body,
        date,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("You cannot edit a journal entry", error);
    throw error;
  }
}

export {
  createUser,
  loginUser,
  logoutUser,
  fetchUserByUsername,
  fetchAllMuseums,
  fetchSingleMuseumById,
  fetchSingleMuseumByName,
  fetchAllReviews,
  fetchSingleReview,
  fetchSingleReviewByUserId,
  fetchReviewsByMuseumId,
  addReview,
  deleteReview,
  editReview,
  //experiment
  fetchAllJournalEntries,
  fetchSingleJournalEntryById,
  fetchJournalEntriesByUserId,
  addJournalEntry,
  deleteJournalEntry,
  editJournalEntry,
};
