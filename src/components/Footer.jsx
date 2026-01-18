// This is the Footer component - it shows at the bottom of every page
// We import React to use JSX and the CSS file for styling
import React from "react";
import "./Footer.css";

// This function creates our footer
const Footer = () => {
  return (
    <footer className="gist-footer">
      {/* Main container that holds all footer content */}
      <div className="footer-container">

        {/* LEFT SECTION - Logo, company info, and social media links */}
        <div className="footer-left">
          {/* Company logo image */}
          <img src="/logo-footer.png" alt="Gist Logo" className="footer-logo" />

          {/* Small text about who made Gist */}
          <p className="footer-subtext">
            Gist is ethically designed <br />
            and built by <a href="https://prorata.ai" target="_blank">ProRata.ai</a>
          </p>

          {/* Links to contact and support pages */}
          <a href="/contact" className="footer-link">Contact us</a>
          <a href="/support" className="footer-link">Support</a>

          {/* Social media icons - users can click to visit our social pages */}
          <div className="social-icons">
            <a href="#" target="_blank"><img src="/butterf.png" alt="Butterfly" /></a>
            <a href="https://linkedin.com" target="_blank"><img src="/download.png" alt="LinkedIn" /></a>
            <a href="https://youtube.com" target="_blank"><img src="/youtube.png" alt="YouTube" /></a>
            <a href="https://twitter.com" target="_blank"><img src="/download.jpg" alt="Twitter" /></a>
          </div>
        </div>

        {/* MIDDLE SECTION - List of our products */}
        <div className="footer-middle">
          <h4>Products</h4>
          {/* Links to different Gist products */}
          <a href="/answers">Gist Answers™</a>
          <a href="/ads">Gist Ads™</a>
          <a href="/attribution">Gist Attribution™</a>
        </div>

        {/* DOWNLOAD SECTION - Button to download the mobile app */}
        <div className="footer-download">
          <h4>Download the Gist App</h4>
          {/* Link with icon to download the app */}
          <a href="/download" className="download-link">
            <img src="/iphoneicon.png" alt="Download Icon" className="download-icon" />
            Get App
          </a>
        </div>

        {/* RIGHT SECTION - Copyright and legal links */}
        <div className="footer-right">
          {/* Copyright text - shows who owns the website */}
          <p>
            © 2025 ProrataAI, Inc.<br />
            All rights reserved.
          </p>

          {/* Important legal pages links */}
          <a href="/terms">Terms of use</a>
          <a href="/privacy">Privacy policy</a>
          <a href="/consumer">Consumer choices</a>
        </div>

      </div>
    </footer>
  );
};

// Export so we can use this Footer in other files
export default Footer;