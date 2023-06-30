import React from 'react';

const BackEnd = () => {
    return (
      <div className="skills__content animate-link">
        <h3 className="skills__title">Backend development</h3>

        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">Node.js</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">Express.js</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">MongoDB</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
          </div>
          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">Firebase</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">JWT</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">Axios</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BackEnd;