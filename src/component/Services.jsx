import React, { useRef } from "react";
import Slider from "react-slick";
import { ReactComponent as Arrowleft } from "../images/Home/icon-svg/feather_arrow-left.svg";
import { ReactComponent as Arrowright } from "../images/Home/icon-svg/feather_arrow-right.svg";

const Services = () => {
  let slider = useRef();

  const next = () => {
    slider.slickNext();
  };
  const previous = () => {
    slider.slickPrev();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="our__services">
      <div className="container">
        <div className="container__main">
          <h3 className="text-blue card__services">Our Services</h3>
          <h2 className="title card__services_subtitle mt-6">
            Ui /Ux , Web Design{" "}
          </h2>
          <p className="mt-6">
            With a team of the best Digital Product Designer In the world at
            your hand , their goal is to create usefull andeasy to use products
            for you potentials users
          </p>
        </div>
        <div className="container__img">
          <Slider ref={(c) => (slider = c)} {...settings}>
            <div className="card-team" key={1}>
              <img src="layout/uxui.png" alt="uxui" />
            </div>
            <div className="card-team" key={2}>
              <img src="layout/annie.png" alt="annie" />
            </div>
            <div className="card-team" key={3}>
              <img src="layout/igor.png" alt="igor" />
            </div>
          </Slider>
          <div className="groupe-button--img">
            <button
              className={"button-border--rounde"}
              onClick={() => previous()}
            >
              <Arrowleft />
            </button>
            <button className="button-border--rounde" onClick={() => next()}>
              <Arrowright />
            </button>
          </div>
          <img
            className="backimage"
            src="home/team/Titik-titik2.png"
            alt="titik"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
