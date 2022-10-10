import React from "react";
import "./about.scss";

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__container-left">
          <h2>About us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
            error dicta tempore sapiente vero modi magni, veritatis nemo ex,
            velit perspiciatis harum. Reprehenderit voluptates ab iusto, neque
            vero similique ea!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
            error dicta tempore sapiente vero modi magni, veritatis nemo ex,
            velit perspiciatis harum. Reprehenderit voluptates ab iusto, neque
            vero similique ea!
          </p>
        </div>
        <div className="about__container-right">
          <div className="image-comp">
            <div className="image-comp__container image-comp__container--1">
              <img
                className="image-comp__image"
                src="img/rolands-varsbergs-miKmVyq3qhE-unsplash.jpg"
                alt="Photo 1"
              />
            </div>
            <div className="image-comp__container image-comp__container--2">
              <img
                className="image-comp__image"
                src="img/pexels-jaime-reimer-2749500.jpg"
                alt="Photo 2"
              />
            </div>
            <div className="image-comp__container image-comp__container--3">
              <img
                className="image-comp__image"
                src="img/noah-buscher-x8ZStukS2PM-unsplash.jpg"
                alt="Photo 3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
