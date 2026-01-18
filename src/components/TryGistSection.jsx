// This component shows the "Try Gist" section
import React, { useEffect, useState } from "react";
import "./TryGistSection.css";

const TryGistSection = () => {
  // Store the section data here
  const [section, setSection] = useState(null);

  // Fetch data when the component loads
  useEffect(() => {
    // Get content from our server
    fetch("http://localhost:1337/api/try-gist-sections?populate=*")
      .then((res) => res.json()) // Change response to JSON
      .then((json) => setSection(json.data[0])); // Save data to state
  }, []); // Run only once

  // Show loading message while waiting
  if (!section) return <p>Loading...</p>;

  // Get values from the section data
  const {
    title, // Heading text
    description, // Description data
    buttonText, // Text for the button
    buttonLink, // Link for the button
    backgroundImage, // Background image
    askImage, // Front image
  } = section;

  // Extract simple text from the description data
  const descriptionText = description?.[0]?.children?.[0]?.text || "";

  return (
    <section
      className="trygist-section"
      // Set the background image from the server
      style={{
        backgroundImage: `url(http://localhost:1337${backgroundImage.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left side: Heading, text, and button */}
      <div className="trygist-left">
        <h1>{title}</h1>
        <p>{descriptionText}</p>
        {/* Button that opens in a new tab */}
        <a href={buttonLink} target="_blank" rel="noopener noreferrer">
          <button className="try-btn">{buttonText}</button>
        </a>
      </div>

      {/* Right side: Showing the main image */}
      <div className="trygist-right">
        <img
          src={`http://localhost:1337${askImage.url}`}
          alt="Ask anything"
          className="ask-img"
        />
      </div>
    </section>
  );
};

export default TryGistSection;