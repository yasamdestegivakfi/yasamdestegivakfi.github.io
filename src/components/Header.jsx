import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Y</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Yaşam Desteği Vakfı</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Anasayfa
            </Link>
            <Link to="/hakkimizda" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Hakkımızda
            </Link>
            <Link to="/yonetimkurulu" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Yönetim Kurulu
            </Link>
            <Link to="/iletisim" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              İletişim
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2">
                Anasayfa
              </Link>
              <Link to="/hakkimizda" className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2">
                Hakkımızda
              </Link>
              <Link to="/yonetimkurulu" className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2">
                Yönetim Kurulu
              </Link>
              <Link to="/iletisim" className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2">
                İletişim
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
