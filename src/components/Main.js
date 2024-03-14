import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Work from "./Work";

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1500,
  delay: 200,
});

const Main = () => {
  useEffect(() => {
    sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
    sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", {
      delay: 400,
    });
    sr.reveal(".home__social-icon", { interval: 200 });
    sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });
  }, []);

  return (
    <main className="l-main">
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Work></Work>
      <Contact></Contact>
    </main>
  );
};

export default Main;
