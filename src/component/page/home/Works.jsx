import React from "react";
import { ReactComponent as Arrowright } from "../../../images/Home/icon-svg/right.svg";

const Works = () => {
  return (
    <section className="works">
      <div className="container">
        <div className="container__title">
          <h3 className="text-blue semi-bold">The work we realised</h3>
          <h2 className="mt-5">
            The work we did that made our <br /> Client happy and satisfied
          </h2>
        </div>
        <div className="works_cards">
          <div className="card">
            <a className="img--hover" href="http://">
              <img src="home/works/work01.png" alt="ui/ux" />
            </a>
            <h6 className="text-blue bold mt-3">
              <a href="http://">UI/UX</a>
            </h6>
            <h6 className="">Delex Relay </h6>
          </div>
          <div className="card">
            <a className="img--hover" href="http://">
              <img src="home/works/work02.png" alt="ui/ux" />
            </a>
            <h6 className="text-blue bold mt-3">
              <a href="http://">Web / app Development</a>
            </h6>
            <h6 className="">Cooke Me </h6>
          </div>
          <div className="card grid--span">
            <a className="img--hover fixed-height" href="http://">
              <img src="home/works/work03.png" alt="ui/ux" />
            </a>
            <h6 className="text-blue bold mt-3">
              <a href="http://">UI/UX Design</a>
            </h6>
            <h6 className="">ADOC </h6>
          </div>
          <div className="card">
            <a className="img--hover" href="http://">
              <img src="home/works/work04.png" alt="ui/ux" />
            </a>
            <h6 className="text-blue bold mt-3">
              <a href="http://">UI/UX Design</a>
            </h6>
            <h6 className="">Booking.com </h6>
          </div>
          <div className="card">
            <a className="img--hover" href="http://">
              <img src="home/works/work05.png" alt="ui/ux" />
            </a>
            <h6 className="text-blue bold mt-3">
              <a href="http://">UI/UX Design</a>
            </h6>
            <h6 className="">Homely </h6>
          </div>
        </div>
        <a className="button-secondary center" href="http://">
          Explore More Projects
          <Arrowright className="ml-4" />
        </a>
      </div>
    </section>
  );
};

export default Works;
