import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText('TR00 0000 0000 0000 0000 0000 00');
  };

  return (
    <section className="section-padding bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto container-padding text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Bağışlarınız İçin IBAN Adresimiz
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Her bağışınız, toplumumuzun ihtiyaç duyduğu alanlarda 
            kalıcı değişim yaratmamıza yardımcı olur.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <span className="text-blue-100 font-medium">IBAN:</span>
              <div className="bg-white/20 rounded-lg px-4 py-2 font-mono text-lg font-bold text-white">
                TR00 0000 0000 0000 0000 0000 00
              </div>
              <button 
                onClick={copyToClipboard}
                className="bg-white/20 hover:bg-white/30 text-white px-3 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
                title="IBAN'ı kopyala"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Kopyala
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/bagisbilgileri" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Bağış Yap
            </Link>
            <Link 
              to="/iletisim" 
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold rounded-xl transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Bilgi Al
            </Link>
          </div>

          <div className="mt-12 text-center">
            <p className="text-blue-100 text-sm">
              💝 Bağışlarınız vergi matrahından düşürülebilir
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
