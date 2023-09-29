import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchSingleMuseumById } from "../../helpers/fetching";
import SingleReview from "../Reviews/SingleReview";
import "./AllMuseums.css";
import CreateReview from "../Reviews/CreateReview";
// import { useSelector } from "react-redux";
// import { selectCurrentToken } from "../../Redux/authSlice";

export default function GetSingleMuseum({ token }) {
  const navigate = useNavigate();
  const params = useParams();
  const [museum, setMuseum] = useState({});
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([
    { userId: 1, rating: "3", body: "Example Review" },
  ]);

  // const token = useSelector(selectCurrentToken);

  async function getMuseumDetails() {
    try {
      const museumData = await fetchSingleMuseumById(params.museumId);
      setMuseum(museumData);
    } catch (err) {
      setError("Failed to fetch museum details. Please try again later.");
    }
  }

  useEffect(() => {
    getMuseumDetails();
  }, [params.museumId]);

  return (
    <div className="single-museum-page">
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="single-museum-card museum-item" key={museum.museumId}>
          <h3 className="museum-headers">{museum.museumName}</h3>
          <p>{museum.description}</p>
          <img
            src={museum.image}
            alt={museum.museumName}
            className="museum-image"
          />
          <a
            href={museum.link}
            target="_blank"
            rel="noopener noreferrer"
            className="museum-link"
          >
            Learn More
          </a>
          <br />

          <SingleReview museumId={params.museumId} token={token} />

          <CreateReview
            setReviews={setReviews}
            token={token}
            museumId={params.museumId}
          />
          {/* <CreateReview setReviews={setReviews} token={token} /> */}

          <button
            className="museum-buttons"
            onClick={() => {
              navigate(`/map`);
            }}
          >
            Back to Map
          </button>
        </div>
      )}
    </div>
  );
}
