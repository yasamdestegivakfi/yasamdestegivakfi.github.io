import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Hasta Yakını Sosyal Yardımı",
      description: "Hasta yakınlarına, zorlu süreçlerinde maddi ve manevi destek sağlayarak, hastalık sürecinde yaşanan yükü hafifletmek amaçlanmıştır.",
      image: "/images/pic01.jpg",
      link: "/sosyalyardim",
      icon: "🏥"
    },
    {
      title: "Dul ve Yetim Aile Desteği",
      description: "Dul ve yetim ailelere ekonomik ve sosyal destek sunarak, yaşam koşullarını iyileştirme hedeflenmektedir.",
      image: "/images/pic02.jpg",
      link: "/dulyetim",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      title: "Öğrenci Bursu",
      description: "Eğitim hayatında maddi zorluk yaşayan öğrencilere burs desteği sağlayarak, geleceğin başarılı bireylerini yetiştirmeyi amaçlamaktadır.",
      image: "/images/pic03.jpg",
      link: "/ogrencibursu",
      icon: "🎓"
    },
    {
      title: "Bilimsel Araştırma Proje Desteği",
      description: "Bilimsel araştırmalara maddi kaynak sağlayarak, yenilikçi projelerin hayata geçirilmesine ve bilimsel gelişmelere katkıda bulunma amaçlanmaktadır.",
      image: "/images/pic04.jpg",
      link: "/arastirmadestek",
      icon: "🔬"
    },
    {
      title: "Transplantasyon",
      description: "Transplantasyon sürecinde hasta ve aile desteği.",
      image: "/images/banner.png",
      link: "/",
      icon: "💚"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Toplumun farklı kesimlerine yönelik kapsamlı destek programları ile 
            yaşam kalitesini artırmayı hedefliyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index}
              to={service.link}
              className="group block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden card-hover"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 text-4xl">
                  {service.icon}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mt-4 flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
                  Detayları Gör
                  <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
