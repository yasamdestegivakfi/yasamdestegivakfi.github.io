import React from 'react'

export default function Gizlilik() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold mb-4">Gizlilik Politikası</h1>
      <p className="mb-4">
        Yaşam Desteği Vakfı olarak, kişisel verilerinizin gizliliğine önem veriyoruz. İşbu Gizlilik Politikası,
        6698 sayılı KVKK kapsamında kişisel verilerinizin toplanması, işlenmesi, aktarılması ve korunmasına ilişkin
        esasları açıklar.
      </p>
      <h2 className="text-lg font-semibold mb-2">1. Veri Sorumlusu</h2>
      <p className="mb-4">Yaşam Desteği Vakfı, KVKK kapsamında "Veri Sorumlusu"dur.</p>
      <h2 className="text-lg font-semibold mb-2">2. Toplanan Kişisel Veriler</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Kimlik bilgileri</li>
        <li>İletişim bilgileri</li>
        <li>Finansal bilgiler (bağış vb.)</li>
        <li>Web sitesi kullanım bilgileri (IP, çerezler vb.)</li>
      </ul>
      <h2 className="text-lg font-semibold mb-2">3. İşleme Amaçları</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Vakıf faaliyetlerinin yürütülmesi</li>
        <li>Bağış ve yardımların yönetimi</li>
        <li>Yasal yükümlülüklerin yerine getirilmesi</li>
        <li>İletişim ve bilgilendirme</li>
      </ul>
      <h2 className="text-lg font-semibold mb-2">4. Aktarım</h2>
      <p className="mb-4">Gerekli durumlarda yetkili kurumlar ve hizmet sağlayıcılarla sınırlı ve ölçülü paylaşım yapılabilir.</p>
      <h2 className="text-lg font-semibold mb-2">5. Güvenlik Tedbirleri</h2>
      <p className="mb-4">Kişisel verilerin korunması için teknik ve idari tedbirler alınmaktadır.</p>
      <h2 className="text-lg font-semibold mb-2">6. Çerezler</h2>
      <p className="mb-4">Web sitemizde çerezler kullanılmaktadır; tarayıcı ayarlarınızdan yönetebilirsiniz.</p>
      <h2 className="text-lg font-semibold mb-2">7. İlgili Kişi Hakları</h2>
      <p className="mb-4">KVKK m.11 kapsamındaki haklarınızı kullanabilirsiniz.</p>
      <h2 className="text-lg font-semibold mb-2">İletişim</h2>
      <p>Daha fazla bilgi için <a className="text-sky-600 hover:text-sky-700" href="mailto:yasamdestegivakfi@gmail.com">yasamdestegivakfi@gmail.com</a> adresinden bize ulaşın.</p>
    </div>
  )
}
