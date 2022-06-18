import React from "react";
import { ReactComponent as Arrowright } from "../../../images/Home/icon-svg/right.svg";

const Services = () => {
  return (
    <section className="services">
      <div className="services__container">
        <h3 className="text-blue semi-bold">The Services We Offers</h3>
        <div className="grid services__cards mt-5">
          <h2>
            We offer a variaty of services to help you to grow and build your
            brand and help you with developing your Products
          </h2>
          <div className="services__card">
            <h3 className="card__title text-blue">UI/UX Design ,Web Design</h3>
            <p className="card__paragraph mt-3_5">
              Makeing your product clean and easy to use it the important thing
              for us
            </p>
            <a
              className="button-secondary mt-3_5 text-blue"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leam More
              <Arrowright className="ml-2" />
            </a>
          </div>

          <div className="services__card">
            <h3 className="card__title text-blue">Web/App Development</h3>
            <p className="card__paragraph mt-3_5">
              Our Team will use the top technologies to develope your product
            </p>
            <a
              className="button-secondary mt-3_5 text-blue"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leam More
              <Arrowright className="ml-2" />
            </a>
          </div>
          <div className="services__card">
            <h3 className="card__title text-blue">Marketing Digital,Social Media </h3>
            <p className="card__paragraph mt-3_5">
              Grow your communty with our inbound marketing and social media
              merketing
            </p>
            <a
              className="button-secondary mt-3_5 text-blue"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leam More
              <Arrowright className="ml-2" />
            </a>
          </div>
          <div className="services__card">
            <h3 className="card__title text-blue">Brand Stratgey &Art Diraction</h3>
            <p className="card__paragraph mt-3_5">
              Help you to create an unique brand that stay in Clients Head
            </p>
            <a
              className="button-secondary mt-3_5 text-blue"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leam More
              <Arrowright className="ml-2" />
            </a>
          </div>
          <div className="services__card">
            <h3 className="card__title text-blue">Visual Identity Logo Brand</h3>
            <p className="card__paragraph mt-3_5">
              A logo Can make a big diffrance our team will Help you with that
            </p>
            <a
              className="button-secondary mt-3_5 text-blue"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leam More
              <Arrowright className="ml-2" />
            </a>
          </div>
          <div className="services__card">
            <h3 className="card__title text-blue">Video / Ads Production</h3>
            <p className="card__paragraph mt-3_5">
              What better way to reach user then with a good video to win their
              trust
            </p>
            <a
              className="button-secondary mt-3_5 text-blue"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leam More
              <Arrowright className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
