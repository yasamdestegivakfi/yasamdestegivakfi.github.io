import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Highlights from '../components/Highlights';
import CTA from '../components/CTA';
import Supporters from '../components/Supporters';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Highlights />
      <CTA />
      <Supporters />
    </div>
  );
};

export default Home;
