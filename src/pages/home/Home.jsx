import React, { Fragment } from "react";
import { Features } from "../../components/sections/home/features/Features";
import { Footer } from "../../components/layout/footer/Footer";
import "./home.scss";

export const Home = () => {
  return (
    <Fragment>
      <Features />
      <Footer />
    </Fragment>
  );
};
