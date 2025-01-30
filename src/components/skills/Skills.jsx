import React from "react";
import BackEnd from "./BackEnd";
import FrontEnd from "./FrontEnd";
import "./Skills.css";
import Tools from "./Tools";
const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title waviy">
        <span>S</span>
        <span>k</span>
        <span>i</span>
        <span>l</span>
        <span>l</span>
        <span>s</span>
      </h2>
      <span className="section__subtitle flipX">My technical level</span>

      <div className="skills__container container grid">
        <FrontEnd />
        <BackEnd />
        <Tools />
      </div>
    </section>
  );
};

export default Skills;
