import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1 pt-20">
          <div className="container-custom py-20">
            <h1 className="text-6xl font-bold text-center text-gray-900 mb-8">
              Yaşam Desteği Vakfı
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Modern React + Vite projesi başarıyla kuruldu! Şimdi diğer komponentleri ekleyebiliriz.
            </p>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
