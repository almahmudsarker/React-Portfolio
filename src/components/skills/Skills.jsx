import React from 'react';
import './Skills.css';
import FrontEnd from './FrontEnd';
import BackEnd from './BackEnd';
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
        </div>
      </section>
    );
};

export default Skills;