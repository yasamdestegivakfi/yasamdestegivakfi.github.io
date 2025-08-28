import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Hakkimizda from './pages/Hakkimizda.jsx'
import YonetimKurulu from './pages/YonetimKurulu.jsx'
import Iletisim from './pages/Iletisim.jsx'
import SosyalYardim from './pages/SosyalYardim.jsx'
import DulYetim from './pages/DulYetim.jsx'
import OgrenciBursu from './pages/OgrenciBursu.jsx'
import ArastirmaDestek from './pages/ArastirmaDestek.jsx'
import BagisBilgileri from './pages/BagisBilgileri.jsx'
import Gizlilik from './pages/Gizlilik.jsx'
import Kosullar from './pages/Kosullar.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/yonetimkurulu" element={<YonetimKurulu />} />
          <Route path="/iletisim" element={<Iletisim />} />
          <Route path="/sosyalyardim" element={<SosyalYardim />} />
          <Route path="/dulyetim" element={<DulYetim />} />
          <Route path="/ogrencibursu" element={<OgrenciBursu />} />
          <Route path="/arastirmadestek" element={<ArastirmaDestek />} />
          <Route path="/bagisbilgileri" element={<BagisBilgileri />} />
          <Route path="/gizlilik" element={<Gizlilik />} />
          <Route path="/kosullar" element={<Kosullar />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

