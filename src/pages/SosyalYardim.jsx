import React from 'react'

const asset = (p) => new URL(p, import.meta.env.BASE_URL).toString()

export default function SosyalYardim() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold mb-4">Hasta Yakını Sosyal Yardım</h1>
      <img
        src={asset('assets/images/hastayadestek.png')}
        alt="Hasta Yakını Sosyal Yardımı"
        loading="lazy"
        className="w-full h-64 object-cover rounded-md mb-6"
      />
      <h2 className="text-lg font-semibold mb-2">Hastalarımızın yakınlarına maddi ve manevi destek sağlıyoruz</h2>
      <p>
        Vakfımız, hastalık süreçlerinde hasta yakınlarının karşılaştığı maddi ve manevi zorlukları hafifletmek
        amacıyla kapsamlı sosyal yardım programları sunmaktadır. Sağlık hizmetlerine erişim, barınma, gıda ve ulaşım
        gibi ihtiyaçlar için destek sağlayarak, ailelerin daha iyi koşullarda sevdiklerine odaklanmalarını mümkün
        kılmayı hedefliyoruz. Toplumdaki dayanışma kültürünü güçlendiren bu yardım modeli, özellikle uzun süreli
        tedavi süreçlerinde ailelere nefes aldırmaktadır.
      </p>
    </div>
  )
}
