// This component shows our partners section with cards and a button
// We import React tools and CSS for styling
import React, { useEffect, useState } from "react";
import "./PartnersSection.css";

const PartnersSection = () => {
  // Store partners section data from backend
  const [section, setSection] = useState(null);

  // Fetch data when component loads
  useEffect(() => {
    // Get partners data from our backend (includes cards with icons)
    fetch("http://localhost:1337/api/partners-sections?populate=cards.icon")
      .then((res) => res.json()) // Convert to JSON
      .then((json) => {
        setSection(json.data[0]); // Save the first section
      });
  }, []); // Run only once

  // Show loading message while waiting for data
  if (!section) return <p>Loading...</p>;

  // Get the title text from the rich text format
  const titleText = section.title?.[0]?.children?.[0]?.text || "";

  return (
    <section className="partners-section">
      {/* Main heading */}
      <h1 className="partners-title">{titleText}</h1>

      {/* Cards section - shows all partner cards */}
      <div className="partners-cards">
        {/* Loop through each card and display it */}
        {section.cards.map((card) => (
          <div className="cardss" key={card.id}>
            {/* Show icon if it exists */}
            {card.icon?.url && (
              <img
                src={`http://localhost:1337${card.icon.url}`}
                alt={card.altText || "icon"}
              />
            )}
            {/* Card description text */}
            <p>{card.description}</p>
          </div>
        ))}
      </div>

      {/* Small text at the bottom (can contain HTML) */}
      <p
        className="partners-subtext"
        dangerouslySetInnerHTML={{ __html: section.subtext }}
      />
      {/* Button to visit partners page */}
      <a
        href={section.buttonLink}
        target="_blank"
        rel="noopener noreferrer"
        className="partners-btn"
      >
        {section.buttonText}
      </a>
    </section>
  );
};

export default PartnersSection;