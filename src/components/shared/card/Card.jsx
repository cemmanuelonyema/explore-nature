import React from "react";
import "./card.scss";

export const Card = ({ children }) => {
  return <article className="card">{children}</article>;
};
