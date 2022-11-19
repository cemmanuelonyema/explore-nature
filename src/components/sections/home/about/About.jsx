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
          <div className="image-box">
            <img
              className="image-comp__image"
              src="img/pexels-jaime-reimer-2749500.jpg"
              alt="Photo 2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
