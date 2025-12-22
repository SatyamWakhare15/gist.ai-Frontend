import React, { useEffect, useState } from "react";
import axios from "axios";
import "./png.css";

const PngSlider = () => {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1337/api/brand-logos?populate=*")
      .then((res) => {
        setLogos(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching logos:", err);
      });
  }, []);

  if (!logos.length) return null;

  const baseUrl = "http://localhost:1337"; // adjust if deployed

  return (
    <div className="brands-slider-section">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className={`slider ${i % 2 === 0 ? "slider-left" : "slider-right"}`}
        >
          {logos.map((logo, index) => (
            <img
              key={index}
              src={`${baseUrl}${logo.logo.url}`} // full image URL
              alt={logo.altText || `logo-${index}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default PngSlider;