import React, { useState } from "react";
import "./Qualification.css";
const Qualification = () => {
  const [toggleState, setToggleState] = useState(2);
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
          {/* toggle 1 */}
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
          {/* toggle 2 */}
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
          {/* toggle 3 */}
          <div
            className={
              toggleState === 3
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(3)}
          >
            <i className="uil uil-brain qualification__icon"></i>
            Research Work
          </div>
        </div>

        <div className="qualification__sections">
          {/* Education */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* university */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  B.Sc - Computer Science & Engineering
                </h3>
                <span className="qualification__subtitle">
                  Bangladesh Army International University of Science &
                  Technology - Cumilla Cantonment, Cumilla
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2024
                  <i> # </i> CGPA: 3.30 / 4.00
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* college */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Higher Secondary Certificate - Science
                </h3>
                <span className="qualification__subtitle">
                  Milestone College - Uttara, Dhaka
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2019
                  <i> # </i> GPA: 5.00 / 5.00
                </div>
              </div>
            </div>
            {/* school */}
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
                  <i> # </i> GPA: 4.68 / 5.00
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
          {/* Work */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* ZenithhBD */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Zenitth Business Development
                </h3>
                <span className="qualification__subtitle">
                  Software Engineer Intern - Cumilla, Bangladesh
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> March 2024 - June
                  2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* persist */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Persists Venture</h3>
                <span className="qualification__subtitle">
                  Software Developer Intern - Los Angeles, USA
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> November 2023 - April
                  2024
                </div>
              </div>
            </div>
            {/* applink */}
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
            {/* bohubrihi */}
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
            {/* bcc */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Baiust Computer Club</h3>
                <span className="qualification__subtitle">
                  Joint Secretary - Baiust, Comilla
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - 2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* research hub */}
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
                  <i className="uil uil-calendar-alt"></i> 2022 - 2023
                </div>
              </div>
            </div>
            {/*  */}
          </div>
          {/* Research */}
          <div
            className={
              toggleState === 3
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* Journal */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Journal</h3>
                <span className="qualification__subtitle">
                  Leveraging A Stacking Ensemble Model for Accurate Depression
                  Prediction and Diagnosis Across All Ages
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> in proceedings of the
                  IET Software (Q2, IF:1.6), Science Citation Index Expanded
                  (Clarivate Analytics), Scopus & SCImago Indexed. Under Review
                </div>
              </div>
            </div>
            {/* Conference */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Conference</h3>
                <span className="qualification__subtitle">
                  Short-Term Rainfall Forecasting in Bangladesh Using LSTM,
                  ARIMA, and LSTM Time Series Generator Models
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> in proceedings of the
                  3rd International Conference on Intelligent Data Communication
                  Technologies and Internet of Things (IDCIoT 2025), IEEE Xplore
                  & Scopus Indexed. Accepted
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
