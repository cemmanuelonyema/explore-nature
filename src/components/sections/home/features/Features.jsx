import React from "react";
import { Box } from "../../../shared/card/Card";
import "./features.scss";

export const Features = () => {
  const featuresData = [
    {
      id: 1,
      title: "lorem 1",
      text: "Lorem ipsum dolor consectetur Excepturi amet consectetur adipisicing doLoremametlor ipsum eliLoremt",
      icon: "icon2",
    },
    {
      id: 2,
      title: "lorem 2",
      text: "Lorem ipsum dolor consectetur Excepturi amet consectetur adipisicing doLoremametlor ipsum eliLoremt",
      icon: "icon1",
    },
    {
      id: 3,
      title: "lorem 1",
      text: "Lorem ipsum dolor consectetur Excepturi amet consectetur adipisicing doLoremametlor ipsum eliLoremt",
      icon: "icon3",
    },
    {
      id: 4,
      title: "lorem 1",
      text: "Lorem ipsum dolor consectetur Excepturi amet consectetur adipisicing doLoremametlor ipsum eliLoremt",
      icon: "icon1",
    },
  ];
  return (
    <section className="features " id="features">
      <div className="features__container">
        <h2 className="features__heading">Features heading</h2>
        <div className="features__content">
          {featuresData.map(({ id, title, text, icon }) => (
            <Box key={id}>
              <span>{id}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Box>
          ))}
        </div>
      </div>
    </section>
  );
};
