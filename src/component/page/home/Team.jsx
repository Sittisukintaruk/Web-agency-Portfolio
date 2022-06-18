import React, { useRef } from "react";
import Slider from "react-slick";
import { ReactComponent as Arrowleft } from "../../../images/Home/icon-svg/feather_arrow-left.svg";
import { ReactComponent as Arrowright } from "../../../images/Home/icon-svg/feather_arrow-right.svg";
const Team = () => {
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
    <>
      <section className="team">
        <div className="container">
          <div className="container__main pt-1">
            <h3 className="text-blue semi-bold">The Team behind DigitUX</h3>
            <h2 className="mt-5">
              A team of creative Who Excited to help you with your Idea
            </h2>
            <p className="mt-7 ">
              Our team of digital product creators and Tch Bring Skilled will
              take your idea to the next level and help you with your product
            </p>
          </div>
        </div>
        <div className="container__img">
          <Slider ref={(c) => (slider = c)} {...settings}>
            <div className="card-team" key={1}>
              <img src="home/team/people02.png" alt="people02" />
              <h3 className="team__title mt-4">Jamila Smail</h3>
              <h4 className="team__subtitle mt-4">CO-Founder</h4>
            </div>
            <div className="card-team" key={2}>
              <img src="home/team/people03.png" alt="people03" />
              <h3 className="team__title mt-4">Farouk Dari</h3>
              <h4 className="team__subtitle mt-4">Full Stack Developer</h4>
            </div>
            <div className="card-team" key={3}>
              <img src="home/team/people04.png" alt="people04" />
              <h3 className="team__title mt-4">Aksel Juba</h3>
              <h4 className="team__subtitle mt-4">Graphic Designer</h4>
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
        </div>
      </section>
    </>
  );
};

export default Team;
