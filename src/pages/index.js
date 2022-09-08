import React from "react";
import Hero from "../components/hero";
import How from "../components/how";

const Home = () => {
  return (
    <div className='max-w-6xl mx-auto p-8 md:p-0'>
      <Hero />
      <How />
    </div>
  );
};

export default Home;
