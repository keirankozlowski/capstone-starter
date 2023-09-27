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

async function addReview(token, userId, museumId, rating, body, date) {
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
    // console.log(response)
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error) {
    console.error(`You cannot create me`, error);
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

export {
  createUser,
  loginUser,
  logoutUser,
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
};
