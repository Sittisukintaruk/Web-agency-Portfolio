import React from "react";
import { ReactComponent as Message } from "../../../images/Home/icon-svg/meassge.svg";
import { ReactComponent as Arrowright } from "../../../images/Home/icon-svg/feather_arrow-right.svg";

const About = () => {
  return (
    <section className="who_about">
      <div className="container">
        <div className="container__main">
          <h3 className="text-blue">About Us</h3>
          <h2 className="title">What we do is what make us Who we are</h2>
          <p>
            DigitUx is a Digital agencay founded 2022, that create User Centred
            Product that help her client to evolve ,our core idealogy is
            Perfection , our goal is to make usefull and easy to use products
            And help people to grow their business,
          </p>
        </div>
        <div className="container_cta">
          <a
            className="button-primary"
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let’s Talk
            <Message className="ml-3" />
          </a>
          <a
            className="button-borderless ml cta--bigger"
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check our Services
            <Arrowright className="ml-3" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
