import React from "react";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Habilidades</h2>

      <div className="skills__container bd-grid">
        <div>
          <h2 className="skills__subtitle">Habilidades Profissionais</h2>
          <p className="skills__text">
            Abaixo listo as linguagens que mais utilizei. Busco aperfeiçoar cada
            vez mais e aplicar as linguagens que aprendo, graças à Alura, Danki
            Code, Udemy e as próprias documentações das linguagens, adapto-me
            facilmente a qualquer desafio proposto. Atualmente, trabalho como
            Desenvolvedor Backend Jr na MBLabs.
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
  );
};

export default Skills;
