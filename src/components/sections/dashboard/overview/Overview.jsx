import React from "react";
import { MdStar, MdLocationPin } from "react-icons/md";

import "./overview.scss";

export const Overview = () => {
  return (
    <section className="overview">
      <h1 className="overview__heading">Hotel Las Palmas</h1>

      <div className="overview__stars">
        <MdStar />
        <MdStar />
        <MdStar />
        <MdStar />
        <MdStar />
      </div>

      <div className="overview__location">
        <MdLocationPin />
        <button className="btn-inline">Albufeira, Portugal</button>
      </div>

      <div className="overview__rating">
        <div className="overview__rating-average">8.6</div>
        <div className="overview__rating-count">429 votes</div>
      </div>
    </section>
  );
};
