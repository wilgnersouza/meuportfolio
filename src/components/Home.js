import React from "react";
import Typical from "react-typical";

const Home = () => {
  return (
    <section className="home bd-grid" id="home">
      <div className="home__data">
        <h3 className="home__title">
          Hi 😁
          <br />
          I'm <span className="home__title-color">Wilgner,</span>
          <br />{" "}
          <Typical
            loop={Infinity}
            steps={["Software Dev", 1400, "Back-End Dev", 1400, "Front-End Dev", 1400, "DevOps", 1400]}
          ></Typical>
        </h3>
        <a href="#contact" className="button">
          Contact me
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
          <mask id="mask0" mask-type="alpha">
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
  );
};

export default Home;
