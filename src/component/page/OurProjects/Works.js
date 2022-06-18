import React from "react";
import { ReactComponent as Arrowright } from "../../../images/Home/icon-svg/right.svg";

const Works = () => {
  return (
    <section className="projects__works">
      <div className="container">
        <div className="container__projects">
          <div className="card__work">
            <div className="project">
              <div className="project__main">
                <h3 className="text-blue headline--work">UI/UX Design</h3>
                <h2 className="title--work">
                  Delex Relay , a delivery platfrome
                </h2>
                <p>
                  Delex is a Delivery Platforme for bussiness owner And
                  indivudial who want to send packages from a point to an other
                  ,Delex offer a tracking system too
                </p>
              </div>
              <div className="project__img">
                <img src="project/delex.png" alt="delex" />
              </div>
            </div>
            <a
              className="button-secondary  text-blue"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check the project <Arrowright className="ml-2" />
            </a>
          </div>
          <div className="card__work">
            <div className="project">
              <div className="project__main">
                <h3 className="text-blue headline--work">
                  Web / app Development
                </h3>
                <h2 className="title--work">
                  Cooke Me ,Fresh food At your Home
                </h2>
                <p>
                  Cooke me is an platform that offer fresh meal with a cheap
                  price and allow indivudial to sell their meals
                </p>
              </div>
              <div className="project__img">
                <img src="project/cooke me.png" alt="delex" />
              </div>
            </div>
            <a
              className="button-secondary  text-blue"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check the project <Arrowright className="ml-2" />
            </a>
          </div>
          <div className="card__work">
            <div className="project">
              <div className="project__main">
                <h3 className="text-blue headline--work">UI/UX Design</h3>
                <h2 className="title--work">
                  ADOC,Your Online Medical Appoinments
                </h2>
                <p>
                  ADOC Is an online Medical appoinment That allow user To take
                  an appoinment with a doctor , it alos work as a medical files
                  Holder
                </p>
              </div>
              <div className="project__img">
                <img src="project/ADOC.png" alt="ADOC" />
              </div>
            </div>
            <a
              className="button-secondary  text-blue"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check the project <Arrowright className="ml-2" />
            </a>
          </div>
        </div>
        <a
          className="button-secondary text-blue bottom--mt "
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore More Projects
          <Arrowright className="ml-2" />
        </a>
      </div>
    </section>
  );
};

export default Works;
