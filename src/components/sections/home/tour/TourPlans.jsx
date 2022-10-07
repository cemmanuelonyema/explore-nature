import React from "react";
import { Card } from "../../../shared/card/Card";
import "./tourPlans.scss";

export const TourPlans = () => {
  const toursData = [
    {
      id: 1,
      title: "lorem 1",
      img: "img 1",
      price: "$ 457",
      items: ["lorem data 1", "lorem data 1", "lorem data 1", "lorem data 1"],
    },
    {
      id: 2,
      title: "lorem 2",
      img: "img 2",
      price: "$ 457",
      items: ["lorem data 2", "lorem data 2", "lorem data 2", "lorem data 2"],
    },
    {
      id: 3,
      title: "lorem 3",
      img: "img 3",
      price: "$ 457",
      items: ["lorem data 3", "lorem data 3", "lorem data 3", "lorem data 3"],
    },
  ];
  return (
    <section className="plans">
      <div className="plans__container">
        <h2 className="plans__heading">Most Popular Tour plans</h2>
        <div className="plans__content">
          {toursData.map((item, i) => (
            <Card key={i} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
