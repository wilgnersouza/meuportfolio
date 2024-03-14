import React from "react";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills__container bd-grid">
        <div>
          <h2 className="skills__subtitle">Professional Skills</h2>
          <p className="skills__text">
            Below I list some of the languages I know and proficiency. During
            the beginning of my career, next to teaching platforms and the
            documentation of the tools themselves, I was able to improve myself
            and subsequently apply all the knowledge acquired throughout my
            journey as a developer
          </p>
          <div className="skills__data__scroll">
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-nodejs skills__icon"></i>
                <span className="skills__name">NodeJs + Express + Axios</span>
              </div>
              <div className="skills__bar skills__node"></div>
              <div>
                <span className="skills__percentage">90%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-git skills__icon"></i>
                <span className="skills__name">Git + GitFlow</span>
              </div>
              <div className="skills__bar skills__git"></div>
              <div>
                <span className="skills__percentage">90%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-typescript skills__icon"></i>
                <span className="skills__name">TypeScript</span>
              </div>
              <div className="skills__bar skills__typescript"></div>
              <div>
                <span className="skills__percentage">90%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-javascript skills__icon"></i>
                <span className="skills__name">JavaScript</span>
              </div>
              <div className="skills__bar skills__js"></div>
              <div>
                <span className="skills__percentage">90%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-react skills__icon"></i>
                <span className="skills__name">React.Js</span>
              </div>
              <div className="skills__bar skills__react"></div>
              <div>
                <span className="skills__percentage">70%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-vuejs skills__icon"></i>
                <span className="skills__name">Vue.Js + PrimeVue</span>
              </div>
              <div className="skills__bar skills__vuejs"></div>
              <div>
                <span className="skills__percentage">60%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-docker skills__icon"></i>
                <span className="skills__name">Docker</span>
              </div>
              <div className="skills__bar skills__docker"></div>
              <div>
                <span className="skills__percentage">75%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-postgresql skills__icon"></i>
                <span className="skills__name">PostgreSQL</span>
              </div>
              <div className="skills__bar skills__postgresql"></div>
              <div>
                <span className="skills__percentage">80%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bx-code-alt skills__icon"></i>
                <span className="skills__name">NestJs</span>
              </div>
              <div className="skills__bar skills__nestjs"></div>
              <div>
                <span className="skills__percentage">70%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bx-code-alt skills__icon"></i>
                <span className="skills__name">Prisma</span>
              </div>
              <div className="skills__bar skills__prisma"></div>
              <div>
                <span className="skills__percentage">45%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-aws skills__icon"></i>
                <span className="skills__name">AWS</span>
              </div>
              <div className="skills__bar skills__aws"></div>
              <div>
                <span className="skills__percentage">65%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-java skills__icon"></i>
                <span className="skills__name">Java</span>
              </div>
              <div className="skills__bar skills__java"></div>
              <div>
                <span className="skills__percentage">45%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-html5 skills__icon"></i>
                <span className="skills__name">HTML</span>
              </div>
              <div className="skills__bar skills__html"></div>
              <div>
                <span className="skills__percentage">90%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-css3 skills__icon"></i>
                <span className="skills__name">CSS</span>
              </div>
              <div className="skills__bar skills__css"></div>
              <div>
                <span className="skills__percentage">80%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="skill__highlighted">
          <a href="https://engagx.com/" target="_blank" rel="noreferrer">
            <img src="https://i.imgur.com/UjbA8Pk.png" alt="" className="skills__img" />
          </a>
          <p>White Label Engagx</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
