import React from "react";
import "./newsletter.scss";

export const Newsletter = () => {
  return (
    <section className="newsletter" id="newsletter">
      <div className="newsletter__container">
        <div className="newsletter__content">
          <div className="newsletter__form">
            <h2 className="newsletter__heading">
              Want To Be The First To Know About Our New Tours Destination, And
              Discounts.
            </h2>
            <form className="form">
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
              />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
