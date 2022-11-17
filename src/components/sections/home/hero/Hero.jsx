import React from "react";
import "./hero.scss";

export const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        <h1 className="heading-primary">
          <span className="heading-primary--1"> Explore the beauty </span>
          <span className="heading-primary--2">and peace of nature</span>
        </h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tenetur
          autem dolorem, repellendus optio asperiores.
        </p>
        <a href="/">Get started</a>
      </div>
    </section>
  );
};
