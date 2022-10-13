import React, { Fragment } from "react";
import { Features } from "../../components/sections/home/features/Features";
import { Footer } from "../../components/layout/footer/Footer";
import "./home.scss";
import { TourPlans } from "../../components/sections/home/tour/TourPlans";
import { Hero } from "../../components/sections/home/hero/Hero";
import { Nav } from "../../components/layout/nav/Nav";
import { About } from "../../components/sections/home/about/About";
import { Contact } from "../../components/sections/home/contact/Contact";

export const Home = () => {
  return (
    <Fragment>
      <Nav />
      <Hero />
      <About />
      <Features />
      <TourPlans />
      <Contact />
      <Footer />
    </Fragment>
  );
};
