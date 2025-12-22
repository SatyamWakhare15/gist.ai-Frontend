import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductSuiteSection.css";



export default function ProductSuiteSection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:1337/api/product-suite-sections")
      .then((res) => {
        setData(res.data.data[0]); // Direct access to fields
      })
      .catch((err) => {
        console.error("Error fetching ProductSuiteSection:", err);
      });
  }, []);

  if (!data) return null;

  // Trim extra spaces/newlines for clean output
  const title = data.title?.trim();
  const description = data.description?.trim();
  const videoUrl = data.videoUrl;
  const videoTitle = data.videoTitle;

  return (
    <section className="product-suite-section">
      {/* LEFT TEXT */}
      <div className="ps-left">

        <h1 className="ps-title" dangerouslySetInnerHTML={{ __html: data.title }} />



        <p
  className="ps-desc"
  dangerouslySetInnerHTML={{ __html: data.description }}
></p>
        
      </div>

      {/* RIGHT VIDEO EMBED */}
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