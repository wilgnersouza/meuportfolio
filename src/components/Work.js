import React from "react";

const Work = () => {
  return (
    <section className="work section" id="work">
      <h2 className="section-title">Trabalhos</h2>
      <p className="text_work bd-grid">
        Aqui listo alguns dos meus trabalhos e projetos que desenvolvi ao longo
        da minha caminhada como desenvolvedor. Você pode clicar em qualquer
        imagem para ser redirecionado ao diretorio no GitHub e assim visualizar
        outros projetos meus 😁.
      </p>
      <div className="work__container bd-grid">
        <a
          href="https://github.com/wilgnersouza/projeto_starbucks"
          target="_blank"
          className="work__img"
          rel="noreferrer"
        >
          <img src="/work1.PNG" alt="" />
        </a>
        <a
          href="https://github.com/wilgnersouza/Clone_Fbook"
          target="_blank"
          className="work__img"
          rel="noreferrer"
        >
          <img src="/work2.png" alt="" />
        </a>
        <a
          href="https://github.com/wilgnersouza/projeto-imobiliaria"
          target="_blank"
          className="work__img"
          rel="noreferrer"
        >
          <img src="/work3.png" alt="" />
        </a>
        <a
          href="https://github.com/wilgnersouza/Projeto-Empresa"
          target="_blank"
          className="work__img"
          rel="noreferrer"
        >
          <img src="/work4.png" alt="" />
        </a>
        <a
          href="https://github.com/wilgnersouza/app-supermercado"
          target="_blank"
          className="work__img"
          rel="noreferrer"
        >
          <img src="/work5.png" alt="" />
        </a>
        <a
          href="https://github.com/wilgnersouza/pokedexApp"
          target="_blank"
          className="work__img"
          rel="noreferrer"
        >
          <img src="/work6.png" alt="" />
        </a>
      </div>
    </section>
  );
};

export default Work;
