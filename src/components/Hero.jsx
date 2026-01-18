// This is the Hero component - the big section at the top of the homepage
// We import React tools, axios for fetching data, and CSS for styling
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Hero.css";

// Import images from the public folder
import gistLogo from "/gist-logo.png";    // Gist logo for search bar
import arrowIcon from "/arrow-icon.png";  // Arrow icon for buttons

export default function Hero() {
  // Store the homepage data from our backend
  const [homeData, setHomeData] = useState(null);
  // Track if data is still loading
  const [loading, setLoading] = useState(true);

  // This runs once when the page loads
  useEffect(() => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:1337";
    // Fetch homepage content from our backend (Strapi)
    axios
      .get(`${backendUrl}/api/homepages?populate=*`)
      .then((res) => {
        const items = res.data.data;
        // If we got data, save the first item
        if (items && items.length > 0) {
          setHomeData(items[0]);
        }
      })
      .catch((err) => console.error(err)) // Show error if something goes wrong
      .finally(() => setLoading(false)); // Stop loading when done
  }, []); // Empty array means run only once

  // Show loading message while waiting for data
  if (loading) return <p>Loading...</p>;
  // Show message if no data was found
  if (!homeData) return <p>No data found.</p>;

  return (
    <section
      className="hero"
      // Set background color from CMS data
      style={{
        background: homeData.backgroundGradient,
      }}
    >
      <div className="hero-content">

        {/* Main big heading at the top */}
        <h1 className="hero-title">{homeData.title}</h1>

        {/* Cards section - shows multiple cards in a row */}
        <div className="cards-section">
          {/* Loop through each card and display it */}
          {homeData.cards?.map((card) => (
            <div key={card.id} className="card">
              {/* Card title */}
              <h3 className="card-title">{card.title}</h3>
              {/* Card description text */}
              <p className="card-desc">{card.description}</p>

              {/* Arrow button on each card */}
              <button className="card-btn">
                <img src={arrowIcon} alt="arrow" />
              </button>

            </div>
          ))}
        </div>

        {/* Subtitle text below the cards */}
        <p className="hero-subtitle">{homeData.subtitle}</p>

        {/* Search bar - where users can type their questions */}
        <div className="search-bar">
          {/* Gist logo inside the search bar */}
          <img src={gistLogo} className="search-logo" />
          {/* Text input box */}
          <input
            type="text"
            placeholder={homeData.searchPlaceholder}
          />
          {/* Search button with arrow icon */}
          <button className="search-arrow">
            <img src={arrowIcon} alt="arrow" />
          </button>
        </div>




      </div>
    </section>
  );
}
