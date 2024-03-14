import React from "react";
import { saveForm } from "../scripts/firebase";

const Contact = () => {
  const handleSubmit = (event) => {
    console.log("está chamando");
    event.preventDefault();
    saveForm();
  };
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contato</h2>
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
            placeholder="Nome"
            className="contact__input"
            id="nome"
          />
          <input
            type="email"
            autoComplete="email"
            placeholder="Seu melhor email"
            className="contact__input"
            id="email"
          />
          <textarea
            name=""
            id="message"
            placeholder="Insira seu texto aqui"
            cols="0"
            rows="10"
            className="contact__input"
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
