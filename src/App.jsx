import React from "react";
import Hero from "./components/Hero";
import GistAnswers from "./components/GistAnswers";
import ProductSuiteSection from "./components/ProductSuiteSection";
import PngSlider from "./components/png";
import PartnersSection from "./components/PartnersSection";
import TryGistSection from "./components/TryGistSection";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Hero />
      <GistAnswers />
      <ProductSuiteSection />
      <PngSlider />
      <PartnersSection />
      <TryGistSection />
      <Footer />
    </>
  );
}

export default App;
