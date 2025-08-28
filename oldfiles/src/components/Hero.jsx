import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-16">
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80">
          <img 
            src="/images/banner2.png" 
            alt="Yaşam Desteği Vakfı Banner" 
            className="w-full h-full object-cover mix-blend-multiply"
            loading="lazy"
          />
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Birlikte Minik Kalplere
              <span className="block text-blue-200">Umut Olalım</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Yaşam Desteği Vakfı olarak toplumun ihtiyaçlarına çözüm üretiyor, 
              kalıcı faydalar sağlıyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/hakkimizda" 
                className="btn-primary inline-flex items-center"
              >
                Hakkımızda
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                to="/bagisbilgileri" 
                className="btn-secondary text-white border-white hover:bg-white hover:text-blue-900"
              >
                Bağış Yap
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
