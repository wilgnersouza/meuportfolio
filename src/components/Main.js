import React from "react";
import { saveForm } from "../scripts/firebase";

const Main = () => {
  const handleSubmit = (event) => {
    console.log('está chamando');
    event.preventDefault(); 
    saveForm();
  };
  return (
    <main className="l-main">
      <section className="home bd-grid" id="home">
        <div className="home__data">
          <h1 className="home__title">
            Olá!
            <br />
            Eu sou <span className="home__title-color">Wilgner,</span>
            <br />
            Software Developer
          </h1>
          <a href="#contact" className="button">
            Contate-me
          </a>
        </div>

        <div className="home__social">
          <a
            href="https://www.linkedin.com/in/wilgner-souza-stw97/"
            target="_blank"
            className="home__social-icon"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/wilgnersouza"
            target="_blank"
            className="home__social-icon"
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5592992806495"
            target="_blank"
            className="home__social-icon"
            rel="noreferrer"
          >
            <i className="bx bxl-whatsapp"></i>
          </a>
        </div>

        <div className="home__img">
          <svg
            className="home__blob"
            viewBox="0 0 479 467"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <mask id="mask0" maskType="alpha">
              <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
            </mask>
            <g mask="url(#mask0)">
              <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
              <image
                className="home__blob-img"
                x="50"
                y="60"
                href="/perfil.png"
              />
            </g>
          </svg>
        </div>
      </section>
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
              Federal do Amazonas, e desde então venho me aventurando no mundo
              do Desenvolvimento. Possuo conhecimento de tudo um pouco:
              Hardware, Software, Redes, Servidores e, claro, a programação. Ao
              longo dos anos no IFAM e também na faculdade, aprendi muito sobre
              as linguagens Pascal, Delphi, Android, Java, HTML, CSS e
              JavaScript. Com muitos cursos no meu curriculo, aprendi mais sobre
              NodeJs, React e React Native, Angular e PHP. Sou rápido e ágil na
              hora de aprender e aplicar meus conhecimentos. Abaixo estão um
              pouco das minhas habilidades e trabalhos desenvolvidos, além do
              formulário para contatar-me.{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="skills section" id="skills">
        <h2 className="section-title">Habilidades</h2>

        <div className="skills__container bd-grid">
          <div>
            <h2 className="skills__subtitle">Habilidades Profissionais</h2>
            <p className="skills__text">
              Abaixo listo as linguagens que mais utilizei. Busco aperfeiçoar
              cada vez mais e aplicar as linguagens que aprendo, graças à Alura,
              Danki Code, Udemy e as próprias documentações das linguagens,
              adapto-me facilmente a qualquer desafio proposto. Atualmente,
              trabalho como Desenvolvedor Backend Jr na MBLabs.
            </p>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-html5 skills__icon"></i>
                <span className="skills__name">HTML</span>
              </div>
              <div className="skills__bar skills__html"></div>
              <div>
                <span className="skills__percentage">80%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-css3 skills__icon"></i>
                <span className="skills__name">CSS</span>
              </div>
              <div className="skills__bar skills__css"></div>
              <div>
                <span className="skills__percentage">70%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-javascript skills__icon"></i>
                <span className="skills__name">JavaScript</span>
              </div>
              <div className="skills__bar skills__js"></div>
              <div>
                <span className="skills__percentage">65%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-nodejs skills__icon"></i>
                <span className="skills__name">NodeJs</span>
              </div>
              <div className="skills__bar skills__node"></div>
              <div>
                <span className="skills__percentage">35%</span>
              </div>
            </div>
          </div>
          <div>
            <img src="/work1.PNG" alt="" className="skills__img" />
          </div>
        </div>
      </section>
      <section className="work section" id="work">
        <h2 className="section-title">Trabalhos</h2>
        <p className="text_work bd-grid">
          Aqui listo alguns dos meus trabalhos e projetos que desenvolvi ao
          longo da minha caminhada como desenvolvedor. Você pode clicar em
          qualquer imagem para ser redirecionado ao diretorio no GitHub e assim
          visualizar outros projetos meus 😁.
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
      <section className="contact section" id="contact">
        <h2 className="section-title">Contato</h2>
        <div className="contact__container bd-grid">
          <form onSubmit={handleSubmit} action="" method="post" className="contact__form">
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
    </main>
  );
};

export default Main;
