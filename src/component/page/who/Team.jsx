import React from "react";

const Team = () => {
  return (
    <section className="who_team">
      <div className="container">
        <div className="container__main">
          <h3 className="text-blue">The team</h3>
          <h2 className="title">
            Meet The Awesome and Creative members of Our Team{" "}
          </h2>
        </div>
        <div className="container__team">
          <div className="whocard-team" key={1}>
            <img src="home/team/people02.png" alt="people02" />
            <h3 className="team__title mt-4">Jamila Smail</h3>
            <h4 className="team__subtitle mt-4">CO-Founder</h4>
          </div>
          <div className="whocard-team" key={2}>
            <img src="home/team/people03.png" alt="people03" />
            <h3 className="team__title mt-4">Farouk Dari</h3>
            <h4 className="team__subtitle mt-4">Full Stack Developer</h4>
          </div>
          <div className="whocard-team" key={3}>
            <img src="home/team/people04.png" alt="people04" />
            <h3 className="team__title mt-4">Aksel Juba</h3>
            <h4 className="team__subtitle mt-4">Graphic Designer</h4>
          </div>
          <div className="whocard-team" key={3}>
            <img src="home/team/people05.png" alt="people05" />
            <h3 className="team__title mt-4">Aksel Juba</h3>
            <h4 className="team__subtitle mt-4">Graphic Designer</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
