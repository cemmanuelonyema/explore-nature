import React from "react";
import "./form.scss";

export const ContactForm = () => {
  return (
    <form className="form" onSubmit={(e) => e.preventDefault}>
      <div className="form-group">
        <input type="text" name="name" id="name" placeholder="Name" required />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
      </div>
      <div className="form-group">
        <textarea
          name="message"
          id="message"
          placeholder="Your Message"
          rows="4"
        ></textarea>
      </div>

      <div className="form__group">
        <button className="btn btn--green">Send &rarr;</button>
      </div>
    </form>
  );
};
