import React from "react";
import { ContactForm } from "../../../shared/form/Form";
import "./contact.scss";

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__content">
          <h2 className="heading-secondary">Start contacting now</h2>
          <div className="contact__form">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
