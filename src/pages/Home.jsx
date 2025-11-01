import React from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
import About from "../components/About";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import GallerySection from "../components/GallerySection";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <GallerySection />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
