// This component shows the Product Suite section with a video
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductSuiteSection.css";



export default function ProductSuiteSection() {
  // Store section data from the server
  const [data, setData] = useState(null);

  // Fetch data when the component loads
  useEffect(() => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:1337";
    // Get product suite content from our backend
    axios.get(`${backendUrl}/api/product-suite-sections`)
      .then((res) => {
        setData(res.data.data[0]); // Save first item to state
      })
      .catch((err) => {
        console.error("Error fetching ProductSuiteSection:", err);
      });
  }, []); // Run only once

  // Don't show anything if data is not loaded
  if (!data) return null;

  // Trim extra spaces/newlines for clean output
  const title = data.title?.trim();
  const description = data.description?.trim();
  const videoUrl = data.videoUrl;
  const videoTitle = data.videoTitle;

  return (
    <section className="product-suite-section">
      {/* Left side: Title and description text */}
      <div className="ps-left">

        <h1 className="ps-title" dangerouslySetInnerHTML={{ __html: data.title }} />



        <p
          className="ps-desc"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></p>

      </div>

      {/* Right side: Video frame from a link */}
      <div className="ps-video-container">
        <iframe
          className="ps-video"
          src={videoUrl}
          title={videoTitle}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}