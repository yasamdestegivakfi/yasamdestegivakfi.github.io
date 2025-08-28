import React from 'react'

const asset = (p) => new URL(p, import.meta.env.BASE_URL).toString()

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

      <section className="space-y-4" aria-labelledby="kurulus">
        <h2 id="kurulus" className="text-xl font-semibold">Vakfın Kuruluşu</h2>
        <p>
          Hacettepe Üniversitesi Çocuk Yoğun Bakımda yatan hasta ve hasta yakınlarının sosyal ihtiyaçlarını
          karşılamak için oluşturulmuş yardım sandığı, vakfımızın kuruluş tohumu olmuştur. 2015 yılında kurulan
          Yaşam Desteği Uygulama Araştırma Merkezinin yürüttüğü araştırma projelerinin kaynak ihtiyacıyla birlikte
          hem bilimsel gelişmeyi hem de insani yardımı aynı çatı altında toplama iradesi ortaya çıkmıştır.
        </p>
        <p>
          Vakfımız, Vakıflar Genel Müdürlüğü tarafından 12 Şubat 2024 tarihinde tescil edilmiştir. Bilimsel
          çalışma ve toplumsal dayanışmayı birlikte büyütmeyi amaçlıyoruz.
        </p>
      </section>
    </div>
  )
}
