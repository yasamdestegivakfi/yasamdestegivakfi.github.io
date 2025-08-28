import React from 'react'

const asset = (p) => new URL(p, import.meta.env.BASE_URL).toString()

export default function DulYetim() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold mb-4">Dul ve Yetim Aile Desteği</h1>
      <img
        src={asset('assets/images/orphan.webp')}
        alt="Dul ve Yetim Aile Desteği"
        loading="lazy"
        className="w-full h-64 object-cover rounded-md mb-6"
      />
      <h2 className="text-lg font-semibold mb-2">Kendi yetimini veya başkasına ait bir yetimi gözetip kollayan kimseyle ben cennette şöyle yanyana bulunacağız. (Müslim, Zühd 42)</h2>
      <p>
        Zor yaşam koşulları ile mücadele eden dul ve yetim ailelere ekonomik ve sosyal destek sağlayarak, onların
        yaşam standartlarını yükseltmeyi ve toplumsal eşitliği artırmayı amaçlıyoruz. Vakfımız, temel ihtiyaçların
        karşılanmasından eğitim ve istihdam desteğine kadar birçok alanda ailelerin yanında yer almakta, çocukların
        geleceklerini güvence altına almayı hedeflemektedir. Dayanışma bilincine dayanan bu projelerle, topluma umut
        aşılayan bir misyon üstleniyoruz.
      </p>
    </div>
  )
}
