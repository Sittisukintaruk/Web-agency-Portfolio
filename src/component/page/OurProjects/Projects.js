import React from "react";
import { ReactComponent as Message } from "../../../images/Home/icon-svg/meassge.svg";
import { ReactComponent as Arrowright } from "../../../images/Home/icon-svg/feather_arrow-right.svg";

const Projects = () => {
  return (
    <section className="projects">
      <div className="container">
        <div className="container__main">
          <h3 className="text-blue">Our Projects</h3>
          <h2 className="title mt-4">Project We Realised</h2>
          <p className="offres__paragraph">
            Our team helped alot of startup and company to realise their
            Products and helped thousnd of client to grow their business
          </p>
        </div>
        <div className="container__ratings">
          <div className="rate">
            <h5 className="rate__headline">Happy Clients</h5>
            <span className="rate__count">+150</span>
          </div>
          <div className="rate">
            <h5 className="rate__headline">Project Done</h5>
            <span className="rate__count">+450</span>
          </div>
          <div className="rate">
            <h5 className="rate__headline">Solutions Created</h5>
            <span className="rate__count">+10</span>
          </div>
          <div className="rate">
            <h5 className="rate__headline">Bussiness Growed</h5>
            <span className="rate__count">+25</span>
          </div>
        </div>
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
            Check our Project
            <Arrowright className="ml-3" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
