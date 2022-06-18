import React from "react";

const Process = () => {
  return (
    <section className="process">
      <div className="container">
        <div className="container__main">
          <div className="main">
            <h3 className="text-blue">Our Process</h3>
            <div className="headline">
              <h2 className="title">
                Our Working Process help you to get the best from our team skill{" "}
              </h2>
              <p className="process__paragraph">
                With Our team knowloadg of different process We Choose the
                perfect process to suit the Development of your Product{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="container__process">
          <div className="card">
            <div className="card__title">
              <span className="number__process">01</span>
              <h3 className="card__process">User Research</h3>
            </div>
            <p className="card__paragraph">
              User research helps us find out exactly how our target customers
              feel when interacting with a product
            </p>
            <img
              className="card__arrow--bottom"
              src="layout/arrow_bottom.png"
              alt="arrow_bottom"
            />
          </div>
          <div className="card">
            <div className="card__title">
              <span className="number__process">02</span>
              <h3 className="card__process">Design</h3>
            </div>
            <p className="card__paragraph">
              User research helps us find out exactly how our target customers
              feel when interacting with a product
            </p>
            <img
              className="card__arrow--top"
              src="layout/arrow_bottom.png"
              alt="arrow_top"
            />
          </div>
          <div className="card">
            <div className="card__title">
              <span className="number__process">03</span>
              <h3 className="card__process">Test</h3>
            </div>
            <p className="card__paragraph">
              User research helps us find out exactly how our target customers
              feel when interacting with a product
            </p>
            <img
              className="card__arrow--bottom"
              src="layout/arrow_bottom.png"
              alt="arrow_bottom"
            />
          </div>
          <div className="card">
            <div className="card__title">
              <span className="number__process">04</span>
              <h3 className="card__process">Implementation</h3>
            </div>
            <p className="card__paragraph">
              User research helps us find out exactly how our target customers
              feel when interacting with a product
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
