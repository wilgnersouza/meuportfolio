import React from "react";

const Work = () => {
  return (
    <section className="work section" id="work">
      <h2 className="section-title">Work Experience</h2>
      <p className="text_work bd-grid">
        Here I list some of my work/projects that I developed during these years
        as a developer. You can click on any image to be redirected to the
        respective website or you can visit my Github again by going to the top
        of this portfolio or clicking{" "}
        <a
          href="https://github.com/wilgnersouza"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
      </p>
      <div className="work__container bd-grid">
        <a
          href="https://datacrazy.io/"
          target="_blank"
          className="work__img"
          rel="noreferrer"
        >
          <img src="https://i.imgur.com/5Aq0mQ9.png" alt="CRM Data Crazy" />
        </a>
        <a
          href="https://programapleno.com.br/"
          target="_blank"
          className="work__img"
          rel="noreferrer"
        >
          <img src="https://i.imgur.com/6JYYP5z.png" alt="Arco Pleno" />
        </a>
        <a
          href="https://www.raketo.com.br/"
          target="_blank"
          className="work__img"
          rel="noreferrer"
        >
          <img src="https://i.imgur.com/bbByNiV.png" alt="Raketo" />
        </a>
        <a
          href="https://www.anbima.com.br/pt_br/pagina-inicial.htm"
          target="_blank"
          className="work__img"
          rel="noreferrer"
        >
          <img src="https://i.imgur.com/HQIWaQ9.png" alt="Anbima Edu" />
        </a>
        <a
          href="https://maxipas.com.br/plataforma/"
          target="_blank"
          className="work__img"
          rel="noreferrer"
        >
          <img src="https://i.imgur.com/ZTJcGt8.png" alt="Maxipas PIOM" />
        </a>
        <a
          href="https://robertacarbonari.com.br/"
          target="_blank"
          className="work__img"
          rel="noreferrer"
        >
          <img src="https://i.imgur.com/Ocx3T7G.png" alt="You - Roberta Carbonari" />
        </a>
      </div>
      <p className="bd-grid disclaimer-note">
        <span className="disclaimer">*Disclaimer:</span>
        <span className="rest">
          I <span className="do-not">do not </span>
          maintain some of the projects mentioned above, therefore some of those
          projects may be impacted by posterior work done by people who are
          still involved with them.
        </span>
      </p>
    </section>
  );
};

export default Work;
