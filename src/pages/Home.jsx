import React, { useEffect, useState } from "react";
import {
  Header,
  About,
  Services,
  WhatsNext,
  ContactUs,
  Footer,
  Carousel,
  Industries,
  Middletittle,
  Ourwork,
  Socialmedia,
  Wallpaper,
  Chatbot,
} from "../components";
import { slides } from "./../constants/carousel";
const Home = () => {
  return (
    <>
      <div>
        <Header />
        <Carousel slides={slides} />
        <Wallpaper />
        <About />
        <div
          id="contact"
          className="container d-lg-flex col-12 col-lg-12 col-sm-12 col-md-12"
        >
          <Services />
          <Industries />
        </div>
        <Middletittle />
        <Ourwork />
        <section
          id="contact"
          className="container d-lg-flex col-12 col-lg-12 col-sm-12 col-md-12"
        >
          <WhatsNext />
          <ContactUs />
        </section>
        <Socialmedia />
        {/* <Chatbot />  */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
