import React from 'react'

const asset = (p) => new URL(p, document.baseURI).toString()

export default function BagisBilgileri() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold mb-4">Bağış Yaparak Destek Olun</h1>
      <img
        src={asset('assets/images/donation.jpg')}
        alt="Bağış"
        loading="lazy"
        className="w-full h-64 object-cover rounded-md mb-6"
      />
      <p className="mb-4">
        Siz de bağış yaparak ihtiyaç sahiplerine umut olabilir ve destek sağlayabilirsiniz. Maddi yardımlarınız,
        ailelerin temel ihtiyaçlarının karşılanmasından çocukların eğitimine kadar birçok alanda kullanılmaktadır.
      </p>
      <h2 className="text-lg font-semibold mb-2">Bağış Bilgileri</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>IBAN:</strong> TR85 0001 2001 5410 0016 1000 42</li>
        <li><strong>Alıcı İsmi:</strong> Yaşam Desteği Vakfı</li>
        <li><strong>Banka Adı:</strong> Halkbank</li>
      </ul>
      <p>
        Bağış yaparken açıklama kısmına desteklemek istediğiniz projeyi (ör. "Sosyal Yardım Projesi") belirtmeyi
        unutmayınız. Yardımlarınız, ihtiyaç sahiplerine güvenle ulaştırılacaktır.
      </p>
    </div>
  )
}
