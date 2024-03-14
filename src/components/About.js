import React from "react";

const About = () => {
  return (
    <section className="about section " id="about">
      <h2 className="section-title">Sobre</h2>
      <div className="about__container bd-grid">
        <div className="about__img">
          <img src="/capa.png" alt="" />
        </div>

        <div>
          <h2 className="about__subtitle">Eu sou Wilgner</h2>
          <p className="about__text">
            Trabalho na área de TI desde 2015, quando me formei no Instituto
            Federal do Amazonas, e desde então venho me aventurando no mundo do
            Desenvolvimento. Possuo conhecimento de tudo um pouco: Hardware,
            Software, Redes, Servidores e, claro, a programação. Ao longo dos
            anos no IFAM e também na faculdade, aprendi muito sobre as
            linguagens Pascal, Delphi, Android, Java, HTML, CSS e JavaScript.
            Com muitos cursos no meu curriculo, aprendi mais sobre NodeJs, React
            e React Native, Angular e PHP. Sou rápido e ágil na hora de aprender
            e aplicar meus conhecimentos. Abaixo estão um pouco das minhas
            habilidades e trabalhos desenvolvidos, além do formulário para
            contatar-me.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
