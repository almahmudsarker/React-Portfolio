import React from 'react';
import './Home.css';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import Particle from '../Particle';
const Home = () => {
    return (
      <>
      <Particle />
        <section className="home section" id="home">
          <div className="home__container container grid">
            <div className="home__content grid">
              <Social />

              <div className="home__img"></div>

              <Data />
            </div>
            <ScrollDown />
          </div>
        </section>
      </>
    );
};

export default Home;