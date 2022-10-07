import React, { Fragment } from "react";
import { Features } from "../../components/sections/home/features/Features";
import { Footer } from "../../components/layout/footer/Footer";
import "./home.scss";
import { TourPlans } from "../../components/sections/home/tour/TourPlans";

export const Home = () => {
  return (
    <Fragment>
      <Features />
      <TourPlans />
      <Footer />
    </Fragment>
  );
};
