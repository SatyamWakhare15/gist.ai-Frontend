import React, { useEffect, useState } from "react";
import "./GistAnswers.css";

export default function GistAnswersSection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:1337/api/gist-answers?populate=*")
      .then((res) => res.json())
      .then((json) => setData(json.data[0]))
      .catch((err) => console.error(err));
  }, []);

  if (!data) return null;

  const videoUrl = `http://localhost:1337${data.videoFile?.url}`;
  const badgeIcon = `http://localhost:1337${data.badgeIcon?.url}`;

  return (
    <section className="gist-answers-container">
    
<div className="logo-title-block">
  <div className="top-line">
    <img
      src={`http://localhost:1337${data.logo?.url}`}
      alt="Gist Logo"
      className="gist-logo"
    />
    <span className="gist-word">Gist</span>
  </div>
  <div className="bottom-line">
    <span className="answers-word">Answers</span>
    
        <p className="subtitle">{data.subtitle}</p>


          <div className="left-section">
        <div className="badge-box">
          <img src={badgeIcon} alt="badge" className="badge-icon" />
          <span>{data.badgeText}</span>
        </div>
        
      </div>
        
  </div>
</div>

      
      <div className="right-section">
        <div className="video-box">
          <video src={videoUrl} autoPlay loop muted></video>
        </div>
        
        
      </div>

      <div className="description-wrapper">
     <div className="section-wrapper">
     <p className="description" dangerouslySetInnerHTML={{ __html: data.description }}></p>

  <a href={data.buttonLink} className="primary-btn">
    {data.buttonText}
  </a>
</div>
</div>






    </section>
  );
}
