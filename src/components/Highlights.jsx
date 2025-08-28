import React from 'react';
import { Link } from 'react-router-dom';

const Highlights = () => {
  const highlights = [
    {
      icon: "🤝",
      title: "Aktif Projelerimiz",
      description: "Devam eden projelerimizle toplumun ihtiyaçlarına çözüm üretmeye ve kalıcı faydalar sağlamaya odaklanıyoruz.",
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: "🌱",
      title: "Gündemdeki Projeler",
      description: "Yaklaşan projelerimizle daha geniş kitlelere ulaşmayı ve yenilikçi çözümler sunmayı hedefliyoruz.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: "🕊️",
      title: "Bizden Haberler",
      description: "Vakfımızdan en güncel duyuru ve gelişmeleri takip ederek çalışmalarımızdan haberdar olabilirsiniz.",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Neler Yapıyoruz?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vakfımızın temel odak alanları ve sürekli gelişen projeleri
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon Background */}
              <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r ${highlight.color} rounded-full flex items-center justify-center text-3xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {highlight.icon}
              </div>

              {/* Content */}
              <div className="pt-10 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${highlight.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md border border-gray-200">
            <span className="text-primary-600">📊</span>
            <span className="text-gray-700 font-medium">Projelerimizi takip etmek için</span>
            <Link to="/iletisim" className="text-primary-600 hover:text-primary-700 font-semibold underline">
              iletişime geçin
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
