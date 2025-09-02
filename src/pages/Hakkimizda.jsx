import React from 'react'

const asset = (p) => new URL(p, document.baseURI).toString()

export default function Hakkimizda() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">Hakkımızda</h1>

      <img
        src={asset('assets/images/senet.webp')}
        alt="Yaşam Desteği Vakfı"
        loading="lazy"
        className="w-full h-72 object-cover rounded-md mb-8"
      />

      <section className="mb-10" aria-labelledby="hikayemiz">
        <h2 id="hikayemiz" className="text-xl font-semibold mb-4">Hikayemiz</h2>
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute inset-0 w-full h-full rounded-md"
            src="https://www.youtube.com/embed/VRBEARAwn1k?si=DmvYHZJDqwq8tw0P"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>

      <section className="space-y-4 mb-10" aria-labelledby="kurulus">
        <h2 id="kurulus" className="text-xl font-semibold">Vakfın Kuruluşu</h2>
        <p>
          Hacettepe Üniversitesi Çocuk Yoğun Bakımda yatan hasta ve hasta yakınlarının sosyal ihtiyaçlarını
          karşılamak için oluşturulmuş olan mütevazı yardım sandığı, vakfımızın kuruluş tohumu olmuştur. 2015
          yılında kurulan Yaşam Desteği Uygulama Araştırma Merkezinin yürüttüğü araştırma projelerinin kaynak
          ihtiyacıyla birlikte hem bilimsel gelişmeyi hem de insani yardımı aynı çatı altında toplama iradesi
          ortaya çıkmıştır.
        </p>
        <p>
          Vakfımız, T.C. Kültür ve Turizm Bakanlığı Vakıflar Genel Müdürlüğü tarafından 12 Şubat 2024 tarihinde
          tescil edilmiş, 22 Şubat 2024 tarihli ve 32468 sayılı Resmî Gazete&#39;de yayımlanarak tüzel kişilik
          kazanmıştır.
        </p>
      </section>

      <section className="space-y-4 mb-10" aria-labelledby="gayemiz">
        <h2 id="gayemiz" className="text-xl font-semibold">Vakfın Gayesi</h2>
        <p>
          Yaşam Desteği Vakfı; temel yaşam desteği, ileri yaşam desteği, ekstrakorporeal yaşam desteği, sosyal
          yaşam desteği, kültürel yaşam desteği, manevi yaşam desteği ve ekolojik yaşam desteği alanlarında
          faaliyet göstermeyi amaçlar.
        </p>
        <div className="space-y-2">
          <h3 className="font-semibold">Temel Yaşam Desteği</h3>
          <p>Kalp ve/veya solunumu duran bireye dakikalar içinde uygulanan canlandırma yöntemlerini içerir.</p>
          <h3 className="font-semibold">İleri Yaşam Desteği</h3>
          <p>Organ ve sistem fonksiyonlarının ileri teknoloji ile desteklenmesini içeren uzmanlık gerektiren uygulamalardır.</p>
          <h3 className="font-semibold">Ekstrakorporeal Yaşam Desteği</h3>
          <p>Organ yetmezliklerinin tedavisinde kanın vücut dışına çıkarılıp işlenmesine dayanan uygulamaları kapsar.</p>
          <h3 className="font-semibold">Sosyal, Kültürel ve Manevi Yaşam Desteği</h3>
          <p>Sosyal yardım, kültürel mirasın korunması ve manevi iyilik hâlinin desteklenmesini içerir.</p>
          <h3 className="font-semibold">Ekolojik Yaşam Desteği</h3>
          <p>İnsan ve tüm canlıların sürdürülebilir iyilik hâli için yapılan çalışmaları kapsar.</p>
        </div>
      </section>

      <section className="space-y-4 mb-10" aria-labelledby="faaliyet-alanlari">
        <h2 id="faaliyet-alanlari" className="text-xl font-semibold">Vakfın Faaliyet Alanları</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Yaşam desteği alanlarında bilimsel araştırmaları ve araştırmacıları desteklemek; eğitim faaliyetleri yürütmek.</li>
          <li>Uzmanlar arasında iş birliği ve dayanışmayı sağlamak; ulusal-uluslararası platformlarda temsil etmek.</li>
          <li>Yaşam desteği için gerekli teknolojileri hastalar ve profesyoneller için ulaşılabilir kılmak.</li>
          <li>Uygulamaların kalite standartlarının belirlenmesi ve akreditasyonu için çalışmak.</li>
          <li>Topluma yönelik eğitim ve farkındalık faaliyetleri yürütmek; danışmanlık hizmetleri vermek.</li>
          <li>Sosyal, kültürel ve manevi alanlarda yaşamı desteklemek.</li>
          <li>Ekolojik planda sağlıklı ve sürdürülebilir ortamlar oluşturmak.</li>
        </ul>
      </section>

      <section className="space-y-4 mb-10" aria-labelledby="faaliyet-araclari">
        <h2 id="faaliyet-araclari" className="text-xl font-semibold">Faaliyet Araçları</h2>
        <p>
          Uygulama, eğitim, araştırma, iş birliği, iletişim, akreditasyon ve kalite geliştirme faaliyetleri yürütür; kurs,
          çalıştay, kongre, konferans, sempozyum ve eğitim programları düzenler. Yaşam desteği uygulamalarına yönelik
          donanım, cihaz, yöntem ve teknoloji geliştirilmesini destekler; kurum ve kuruluşlarla iş birliği yapar, bilimsel ve
          teknik bilgi paylaşımı sağlar ve toplumsal farkındalığı artırıcı platformlar oluşturur.
        </p>
      </section>

      <section className="space-y-4 mb-10" aria-labelledby="islemler">
        <h2 id="islemler" className="text-xl font-semibold">Gayeyi Gerçekleştirmek İçin Yapılabilecek İş ve İşlemler</h2>
        <p>
          Vakıf; amaç ve hizmet konuları doğrultusunda taşınır/taşınmaz edinir, yönetir, değerlendirir; gelir elde edici
          projeler yürütür; gerektiğinde iktisadi işletmeler/şirketler kurar ve iştirak edebilir; yurt içi ve yurt dışı kişi ve
          kurumlarla iş birliği yapar; gerekli hallerde finansman temin eder ve hukuka uygun tüm tasarruflarda bulunur.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="degerler">
        <h2 id="degerler" className="text-xl font-semibold">Değerlerimiz</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Şeffaflık ve hesap verebilirlik</li>
          <li>Toplumsal sorumluluk</li>
          <li>Sürdürülebilirlik</li>
          <li>İnovasyon ve sürekli gelişim</li>
          <li>İnsan odaklı yaklaşım</li>
        </ul>
      </section>
    </div>
  )
}
