import React from "react";
import { ReactComponent as Message } from "../../../images/Home/icon-svg/meassge.svg";
import { ReactComponent as Arrowright } from "../../../images/Home/icon-svg/feather_arrow-right.svg";

const Offres = () => {
  return (
    <section className="offres">
      <div className="container">
        <div className="container__main">
          <h3 className="text-blue">Our Services</h3>
          <h2 className="title">Services We Offres</h2>
          <p className="offres__paragraph">
            With Our Awesome team we offres a variaty of services from UI/UX
            design to Video Productions,Our Goal is to help you on your Road to
            Create your product
          </p>
        </div>
        <div className="container__rating"></div>
        <div className="container__cta">
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

export default Offres;
