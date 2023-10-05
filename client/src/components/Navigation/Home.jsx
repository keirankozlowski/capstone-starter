import React from "react";

export default function Home() {
  return (
    <div className="home">
      <h1 className="quote">
        “A visit to a museum is a search for beauty, truth, and meaning in our
        lives. Go to museums as often as you can.” – Maira Kalman
      </h1>

      <ul className="cb-slideshow">
        <li>
          <span>Image 01</span>
        </li>
        <li>
          <span>Image 02</span>
        </li>
        <li>
          <span>Image 03</span>
        </li>
      </ul>
    </div>
  );
}
