// This component shows a sliding list of brand logos
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./png.css";

const PngSlider = () => {
  // Store the list of logos here
  const [logos, setLogos] = useState([]);

  // Fetch logos when the component loads
  useEffect(() => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:1337";
    // Get brand logos from our server
    axios.get(`${backendUrl}/api/brand-logos?populate=*`)
      .then((res) => {
        setLogos(res.data.data); // Save logos to state
      })
      .catch((err) => {
        console.error("Error fetching logos:", err);
      });
  }, []); // Run only once

  // Don't show anything if there are no logos
  if (!logos.length) return null;

  const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:1337"; // Server address

  return (
    <div className="brands-slider-section">
      {/* Create multiple sliding rows */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          // Move odd rows left and even rows right
          className={`slider ${i % 2 === 0 ? "slider-left" : "slider-right"}`}
        >
          {/* Show each logo in the row */}
          {logos.map((logo, index) => (
            <img
              key={index}
              src={`${backendUrl}${logo.logo.url}`} // Full URL for the image
              alt={logo.altText || `logo-${index}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default PngSlider;