import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hakkimizda" element={<div className="section-padding container-padding"><h1>Hakkımızda</h1></div>} />
            <Route path="/yonetimkurulu" element={<div className="section-padding container-padding"><h1>Yönetim Kurulu</h1></div>} />
            <Route path="/iletisim" element={<div className="section-padding container-padding"><h1>İletişim</h1></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
