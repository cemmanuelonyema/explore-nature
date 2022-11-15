import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
gsap.registerPlugin(CSSRulePlugin);
import "./hero.scss";

export const Hero = () => {
  let container = useRef(null);
  let image = useRef(null);
  let tl = gsap.timeline();
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  useEffect(() => {
    tl.to(imageReveal, {
      duration: 2.4,
      width: "0%",
      ease: "power4.inOut",
    }).from(image, {
      duration: 2.4,
      scale: 1.6,
      ease: "power4.inOut",
      delay: -1,
    });
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="img-container">
        <img
          ref={(el) => (image = el)}
          src="/public/img/rolands-varsbergs-miKmVyq3qhE-unsplash.jpg"
        />
      </div>
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
