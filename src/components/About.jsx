import React from "react";

const About = () => {
  return (
    <section className="about section " id="about">
      <h2 className="section-title">About</h2>
      <div className="about__container bd-grid">
        <div className="about__img">
          <img src="https://i.imgur.com/WXAvfA2.png" alt="" />
        </div>

        <div>
          <h2 className="about__subtitle " style={{ color: "#789AF7" }}>
            Ho Am I?
          </h2>
          <p className="about__text">
            I'm a 26-year-old full-stack web developer based in Manaus-AM .
            Brazil, and currently delving deeper into Front-end development in
            general. My specialty is the back-end, having actually started the
            my career as a developer in this area. At the moment, I'm working
            with React.Js + Vue.Js and Nest.Js + Prisma, but with knowledge of
            several other technologies as well.
          </p>
          <h2 className="about__subtitle " style={{ color: "#789AF7" }}>
            What do I like?
          </h2>
          <p className="about__text">
            Currently my main interests in the software industry are front-end
            web and mobile development, UI/UX design and API deepening and
            development. Recently, I resumed studies with Cloud Development and
            Ethical Hacking and have created personal projects applying this
            knowledge. I'm a fan of culture in general, so we can sit down and
            talk about whatever type of subject.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
