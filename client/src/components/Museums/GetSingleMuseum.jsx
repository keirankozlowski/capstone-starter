import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchSingleMuseumById } from "../../helpers/fetching";

export default function GetSingleMuseum() {
  const navigate = useNavigate();
  const params = useParams();
  const [museum, setMuseum] = useState({});

  async function getMuseumDetails() {
    // fetch data from API
    try {
      setMuseum(await fetchSingleMuseumById(params.museumId));
      console.log(museum);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getMuseumDetails();
  }, []);

  return (
    <div className="single-museum-page">
      <div className="single-museum-card" key={museum.museumId}>
        <h3 className="museum-headers">{museum.name}</h3>
        <p>{museum.description}</p>
        <br />
        <button
          className="museum-buttons"
          onClick={() => {
            navigate(`/museums`);
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
}
