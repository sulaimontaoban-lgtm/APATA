import React from "react";
import Headerb from "../../components/headerb";
import Hero from "./hero";
import Cognia from "../home/cognia";
import Choose from "../home/choose";
import About from "../home/about";
import Parent from "../home/parent";
import Proud from "../home/proud";
import Gallery from "../home/gallery";
import Galleryy from "./galleryy";
import Blog from "../home/blog";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Faqs from "../../components/faqs";

const Homelink = () => {
  return (
    <>
      <Header />
      <Headerb />
      <Hero />
      <Cognia />
      <Choose />
      <About />
      <Parent />
      <Proud />
      <Gallery />
      <Galleryy />
      <Blog />
      <Faqs />
      <Footer />
    </>
  );
};

export default Homelink;
