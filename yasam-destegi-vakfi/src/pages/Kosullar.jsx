import React from 'react'

export default function Kosullar() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold mb-4">Kullanım Şartları</h1>
      <p className="mb-4">Bu web sitesini kullanarak aşağıdaki şartları kabul etmiş sayılırsınız:</p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Web sitesindeki tüm içerik Yaşam Desteği Vakfı'na aittir ve telif hakkı ile korunur.</li>
        <li>Bilgilerin doğruluğu ve güncelliği için çaba gösterilse de garanti verilmez.</li>
        <li>İçerik izinsiz kopyalanamaz, çoğaltılamaz veya dağıtılamaz.</li>
        <li>Erişim sırasında oluşabilecek zararlardan vakfımız sorumlu tutulamaz.</li>
        <li>Üçüncü taraf bağlantıların içeriklerinden vakfımız sorumlu değildir.</li>
      </ul>
      <p>
        Daha fazla bilgi için <a className="text-sky-600 hover:text-sky-700" href="mailto:yasamdestegivakfi@gmail.com">yasamdestegivakfi@gmail.com</a>
        {' '}üzerinden bizimle iletişime geçebilirsiniz.
      </p>
    </div>
  )
}
