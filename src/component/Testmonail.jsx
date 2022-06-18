import React, { useRef } from "react";
import { ReactComponent as Arrowright } from "../images/Home/icon-svg/feather_arrow-right.svg";
import { ReactComponent as Arrowleft } from "../images/Home/icon-svg/feather_arrow-left.svg";
import Slider from "react-slick";
import "react-multi-carousel/lib/styles.css";

const Testmonail = () => {
  let slider = useRef();

  const next = () => {
    slider.slickNext();
  };
  const previous = () => {
    slider.slickPrev();
  };

  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <section className="testmonail">
      <div className="container">
        <h3 className="text-blue">Testmonial</h3>
        <h2 className="mt-5">
          You still hesitate about working with Us ? Check what They say about
          Us
        </h2>
        <Slider
          ref={(c) => (slider = c)}
          {...settings}
          className="container__cards"
        >
          <div>
            <div className="card">
              <p className="textmonail__paragraph">
                Our team of digital product creators and Tch Bring Skilled will
                take your idea to the next level and help you with your product
              </p>
              <div className="card__client mt-8">
                <div className="card__photo">
                  <img src="layout/people.png" alt="people" />
                </div>
                <div className="card__info ml-2">
                  <h4 className="semi-bold">Smail yefsssah</h4>
                  <h4 className="medium">CEO Innova</h4>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card">
              <p className="textmonail__paragraph">
                Our team of digital product creators and Tch Bring Skilled will
                take your idea to the next level and help you with your product
              </p>
              <div className="card__client mt-8">
                <div className="card__photo">
                  <img src="layout/people02.png" alt="people" />
                </div>
                <div className="card__info ml-2">
                  <h4 className="semi-bold">Smail yefsssah</h4>
                  <h4 className="medium">CEO Innova</h4>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card">
              <p className="textmonail__paragraph">
                Our team of digital product creators and Tch Bring Skilled will
                take your idea to the next level and help you with your product
              </p>
              <div className="card__client mt-8">
                <div className="card__photo">
                  <img src="layout/people02.png" alt="people" />
                </div>
                <div className="card__info ml-2">
                  <h4 className="semi-bold">Smail yefsssah</h4>
                  <h4 className="medium">CEO Innova</h4>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card">
              <p className="textmonail__paragraph">
                Our team of digital product creators
              </p>
              <div className="card__client mt-8">
                <div className="card__photo">
                  <img src="layout/people02.png" alt="people" />
                </div>
                <div className="card__info ml-2">
                  <h4 className="semi-bold">Smail yefsssah</h4>
                  <h4 className="medium">CEO Innova</h4>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <div className="container__buttons">
          <button
            className="button-border--rounde"
            onClick={() => {
              previous();
            }}
          >
            <Arrowleft />
          </button>
          <button
            className="button-border--rounde ml-9"
            onClick={() => {
              next();
            }}
          >
            <Arrowright />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testmonail;
