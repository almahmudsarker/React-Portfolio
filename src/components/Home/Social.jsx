import React from 'react';

const Social = () => {
    return (
      <div className="home__social animate-link">
        <a
          href="https://www.instagram.com/almahmudsarker7/"
          className="home__social-icon"
          target="_blank"
        >
          <i className="uil uil-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/almahmudsarker/"
          className="home__social-icon"
          target="_blank"
        >
          <i className="uil uil-dribbble"></i>
        </a>
        <a
          href="https://github.com/almahmudsarker"
          className="home__social-icon"
          target="_blank"
        >
          <i className="uil uil-github-alt"></i>
        </a>
      </div>
    );
};

export default Social;