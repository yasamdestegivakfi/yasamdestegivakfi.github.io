import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Highlights from './components/Highlights';
import CTA from './components/CTA';
import Supporters from './components/Supporters';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Services />
        <Highlights />
        <CTA />
        <Supporters />
      </main>
      <Footer />
    </div>
  );
}

export default App;
