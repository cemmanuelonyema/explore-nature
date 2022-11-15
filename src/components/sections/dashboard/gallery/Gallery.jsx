import React from "react";
import "./gallery.scss";

export const Gallery = () => {
  return (
    <section className="gallery">
      <figure className="gallery__item">
        <img
          src="img2/hotel-1.jpg"
          alt="hotel img"
          className="gallery__photo"
        />
      </figure>
      <figure className="gallery__item">
        <img
          src="img2/hotel-2.jpg"
          alt="hotel img"
          className="gallery__photo"
        />
      </figure>
      <figure className="gallery__item">
        <img
          src="img2/hotel-3.jpg"
          alt="hotel img"
          className="gallery__photo"
        />
      </figure>
    </section>
  );
};
