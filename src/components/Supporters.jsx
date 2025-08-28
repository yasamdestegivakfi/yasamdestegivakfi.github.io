import React from 'react';
import { Link } from 'react-router-dom';

const Supporters = () => {
  const supporters = [
    {
      name: "LSC Hacettepe",
      image: "/images/lscsupport1.jpg",
      link: "http://lsc.hacettepe.edu.tr",
      description: "Hacettepe Üniversitesi LSC"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Destekçilerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Projelerimizi destekleyen ve toplumsal fayda için 
            birlikte çalıştığımız değerli kurumlar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supporters.map((supporter, index) => (
            <a 
              key={index}
              href={supporter.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden card-hover"
            >
              <div className="p-6 text-center">
                <div className="relative mb-6">
                  <img 
                    src={supporter.image} 
                    alt={supporter.name}
                    className="w-full h-32 object-contain mx-auto group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {supporter.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {supporter.description}
                </p>
                
                <div className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                  Ziyaret Et
                  <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Destekçimiz Olmak İster misiniz?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Projelerimizi destekleyerek toplumsal fayda yaratmaya 
              katkıda bulunabilir, birlikte daha güçlü olabiliriz.
            </p>
            <Link 
              to="/iletisim" 
              className="btn-primary inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              İletişime Geç
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Supporters;
