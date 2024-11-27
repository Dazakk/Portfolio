import React from 'react';
import background from '../assets/background-home.jpg';

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex items-center relative"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {/* Contenuto */}
      <div className="relative container mx-auto px-44 text-white flex flex-col items-start">
        <p className="text-5xl md:text-6xl font-bold !leading-tight tracking-wide">
          Crafting seamless <br/>experiences, where <br/>form meets function<br/>
        </p>
      </div>
    </section>
  );
};

export default Home;
