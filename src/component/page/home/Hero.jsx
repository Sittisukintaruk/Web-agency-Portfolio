import React from "react";
import { ReactComponent as Message } from "../../../images/Home/icon-svg/meassge.svg";
import { ReactComponent as Arrowright } from "../../../images/Home/icon-svg/feather_arrow-right.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__main">
          <h3 className="text-blue">Hello,</h3>
          <h1 className="mt-3">
            We Help People To Bring Their Ideas Alive
          </h1>
          <p className="mt-7">
            A talented team to help you in your journey on creating usefull and
            easy to use product
          </p>
          <div className="cta">
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
          <img className="hero__arrowleft" src="home/hero/arrow.png" alt="" />
        </div>
        <div className="hero__img">
          <div className="img">
            <img src="home/hero/people01.png" alt="people" />
            <img
              className="img__backstar"
              src="home/hero/star1.png"
              alt="star"
            />
            <img
              className="img__Titik"
              src="home/hero/Titik-titik.png"
              alt="pit"
            />

            <div className="img__work img__work--topleft ">
              <img src="home/hero/search.png" alt="" />
              <span className="ml-3 text-blue">ui/ux Designer</span>
            </div>
            <div className="img__work img__work--bottomleft ">
              <img src="home/hero/bell.png" alt="" />
              <span className="ml-3 text-blue">Icon</span>
            </div>
            <div className="img__work img__work--topright ">
              <img src="home/hero/flow.png" alt="" />
              <span className="ml-3 text-blue">Flow charts</span>
            </div>
            <div className="img__work img__work--bottomright ">
              <img src="home/hero/ui.png" alt="" />
              <span className="ml-3 text-blue">UI Kit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
