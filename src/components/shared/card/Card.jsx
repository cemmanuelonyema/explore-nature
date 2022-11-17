import React from "react";
import "./card.scss";

export const Box = ({ children }) => (
  <article className="box">{children}</article>
);

export const Card = ({ data }) => (
  <article className="card">
    <div className="card__side card__side--front">
      <div className="card__picture card__picture--1">&nbsp;</div>
      <h4 className="card__heading">
        <span className="card__heading-span card__heading-span--1">
          {data?.title}
        </span>
      </h4>
      <div className="card__details">
        <ul>
          {data?.items?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
    <div className="card__side card__side--back card__side--back-1">
      <div className="card__cta">
        <div className="card__price-box">
          <p className="card__price-only">Only</p>
          <p className="card__price-value">{data?.price}</p>
        </div>
        <a href="#popup" className="btn btn--white">
          Book now!
        </a>
      </div>
    </div>
  </article>
);
