// This component shows the "Gist Answers" section with a video and description
// We import React tools and CSS for styling
import React, { useEffect, useState } from "react";
import "./GistAnswers.css";

export default function GistAnswersSection() {
  // Store the Gist Answers data from backend
  const [data, setData] = useState(null);

  // Fetch data when component loads
  useEffect(() => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:1337";
    // Get Gist Answers content from our backend
    fetch(`${backendUrl}/api/gist-answers?populate=*`)
      .then((res) => res.json()) // Convert to JSON
      .then((json) => setData(json.data[0])) // Save first item
      .catch((err) => console.error(err)); // Show error if any
  }, []); // Run only once

  // Don't show anything if data is not loaded yet
  if (!data) return null;

  const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:1337";

  // Build full URLs for video and badge icon
  const videoUrl = `${backendUrl}${data.videoFile?.url}`;
  const badgeIcon = `${backendUrl}${data.badgeIcon?.url}`;

  return (
    <section className="gist-answers-container">

      {/* Top section with logo and title */}
      <div className="logo-title-block">
        {/* First line - Logo and "Gist" text */}
        <div className="top-line">
          <img
            src={`${backendUrl}${data.logo?.url}`}
            alt="Gist Logo"
            className="gist-logo"
          />
          <span className="gist-word">Gist</span>
        </div>
        {/* Second line - "Answers" text and subtitle */}
        <div className="bottom-line">
          <span className="answers-word">Answers</span>

          {/* Small description text */}
          <p className="subtitle">{data.subtitle}</p>


          {/* Left section with badge */}
          <div className="left-section">
            <div className="badge-box">
              {/* Badge icon and text */}
              <img src={badgeIcon} alt="badge" className="badge-icon" />
              <span>{data.badgeText}</span>
            </div>

          </div>

        </div>
      </div>


      {/* Right section - Video player */}
      <div className="right-section">
        <div className="video-box">
          {/* Auto-playing video on loop */}
          <video src={videoUrl} autoPlay loop muted></video>
        </div>


      </div>

      {/* Bottom section - Description and button */}
      <div className="description-wrapper">
        <div className="section-wrapper">
          {/* Main description text (can contain HTML) */}
          <p className="description" dangerouslySetInnerHTML={{ __html: data.description }}></p>

          {/* Button to learn more or take action */}
          <a href={data.buttonLink} className="primary-btn">
            {data.buttonText}
          </a>
        </div>
      </div>






    </section>
  );
}
