import React from "react";
import { saveForm } from "../scripts/firebase";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("message").value;

    if (!name || !email || !mensagem) {
      alert("Fields are required. Fill them in, please xD");
      return;
    }

    saveForm();
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact__container bd-grid">
        <form
          onSubmit={handleSubmit}
          action=""
          method="post"
          className="contact__form"
        >
          <input
            type="text"
            autoComplete="name"
            placeholder="Name"
            className="contact__input"
            id="name"
            required
          />
          <input
            type="email"
            autoComplete="email"
            placeholder="Your best email"
            className="contact__input"
            id="email"
            required
          />
          <textarea
            name=""
            id="message"
            placeholder="Enter your text here. Recommendation, congratulations, suggestion, etc..."
            cols="0"
            rows="10"
            className="contact__input"
            required
          ></textarea>
          <input
            type="submit"
            value="Enviar"
            className="contact__button button"
            id="acao"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
