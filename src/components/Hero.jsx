import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Hero.css";

import gistLogo from "/gist-logo.png";    // ( icon in public folder)
import arrowIcon from "/arrow-icon.png";  // ( icon in public folder)

export default function Hero() {
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/homepages?populate=*")
      .then((res) => {
        const items = res.data.data;
        if (items && items.length > 0) {
          setHomeData(items[0]);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!homeData) return <p>No data found.</p>;

  return (
    <section
      className="hero"
      style={{
        background: homeData.backgroundGradient,
      }}
    >
      <div className="hero-content">
        
        {/* Main heading */}
        <h1 className="hero-title">{homeData.title}</h1>

        {/* CARDS FIRST (like screenshot) */}
        <div className="cards-section">
          {homeData.cards?.map((card) => (
            <div key={card.id} className="card">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-desc">{card.description}</p>

              <button className="card-btn">
                <img src={arrowIcon} alt="arrow" />
              </button>

            </div>
          ))}
        </div>

        {/* Subtitle */}
        <p className="hero-subtitle">{homeData.subtitle}</p>

        {/* Search bar with logo & arrow */}
        <div className="search-bar">
          <img src={gistLogo} className="search-logo" />
          <input
            type="text"
            placeholder={homeData.searchPlaceholder}
          />
          <button className="search-arrow">
            <img src={arrowIcon} alt="arrow" />
          </button>
        </div>





      </div>
    </section>
  );
}
