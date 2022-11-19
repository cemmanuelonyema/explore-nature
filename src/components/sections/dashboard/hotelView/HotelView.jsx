import React from "react";
import { Cta } from "../cta/Cta";
import { Detail } from "../detail/Detail";
import { Gallery } from "../gallery/Gallery";
import { Overview } from "../overview/Overview";
import "./hotelview.scss";

export const HotelView = () => {
  return (
    <section className="hotelview">
      <Gallery />
      <Overview />
      <Detail />
      <Cta />
    </section>
  );
};
