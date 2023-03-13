import React from "react";
import Article from "../components/landing/Article";
import Features from "../components/landing/Features";
import Footer from "../components/landing/Footer";
import Header from "../components/landing/Header";

const Landing = () => {
  return (
    <div className="landing">
      <Header />
      <Article />
      <Features />
      <Footer />
    </div>
  );
};

export default Landing;
