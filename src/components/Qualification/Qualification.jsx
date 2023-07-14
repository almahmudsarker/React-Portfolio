import React, { useState } from 'react';
import './Qualification.css';
const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
      <section className="qualification section">
        <h2 className="section__title waviy">
          <span>Q</span>
          <span>u</span>
          <span>a</span>
          <span>l</span>
          <span>i</span>
          <span>f</span>
          <span>i</span>
          <span>c</span>
          <span>a</span>
          <span>t</span>
          <span>i</span>
          <span>o</span>
          <span>n</span>
        </h2>
        <span className="section__subtitle flipX">My personal journey</span>

        <div className="qualification__container container animate-link">
          <div className="qualification__tabs">
            <div
              className={
                toggleState === 1
                  ? "qualification__button button--flex qualification__active"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(1)}
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>
              Education
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification__button button--flex qualification__active"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(2)}
            >
              <i className="uil uil-briefcase-alt qualification__icon"></i>
              Experience
            </div>
          </div>

          <div className="qualification__sections">
            <div
              className={
                toggleState === 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    B.Sc - Computer Science & Engineering
                  </h3>
                  <span className="qualification__subtitle">
                    Bangladesh Army International University of Science &
                    Technology - Comilla Cantonment, Comilla
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2020 - Present
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">
                    Higher Secondary Certificate
                  </h3>
                  <span className="qualification__subtitle">
                    Milestone College - Uttara, Dhaka
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2017 - 2019
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Secondary School Certificate
                  </h3>
                  <span className="qualification__subtitle">
                    Ashuganj Tap Bidyut Kendra High School - Ashuganj,
                    Brahmanbaria
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2006 - 2017
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Applink - powered by Banglalink
                  </h3>
                  <span className="qualification__subtitle">
                    Campus Ambassador - Gulshan, Dhaka
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2022 - 2023
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">
                    Bohubrihi - online learning platform
                  </h3>
                  <span className="qualification__subtitle">
                    Campus Ambassador - Banani, Dhaka
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2022 - 2023
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Baiust Computer Club</h3>
                  <span className="qualification__subtitle">
                    Joint Secretary - Baiust, Comilla
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2023 - Present
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">
                    Baiust Research | Higher Study | Career Hub
                  </h3>
                  <span className="qualification__subtitle">
                    Student Advisor - CSE Department Baiust
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2022 - present
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Qualification;