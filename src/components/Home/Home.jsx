import React from 'react';
import './Home.css';
import Social from './Social';
const Home = () => {
    return (
       <section className="home section" id="home">
              <div className="home__container container grid">
                <div className="home__content grid">
                  <Social />  
                </div>
              </div>
       </section>
    );
};

export default Home;