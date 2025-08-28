import React from 'react'

const asset = (p) => new URL(p, import.meta.env.BASE_URL).toString()

export default function ArastirmaDestek() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold mb-4">Bilimsel Araştırma Proje Desteği</h1>
      <img
        src={asset('assets/images/research.jpg')}
        alt="Bilimsel Araştırma Desteği"
        loading="lazy"
        className="w-full h-64 object-cover rounded-md mb-6"
      />
      <h2 className="text-lg font-semibold mb-2">Bilim ve yenilik için araştırma projelerine destek</h2>
      <p>
        Yenilikçi fikirlerin hayata geçirilmesi ve bilimsel gelişmelerin hız kazanması amacıyla araştırma projelerine mali
        destek sağlıyoruz. Araştırmacıların ihtiyaç duyduğu kaynakları temin ederek, topluma fayda sağlayacak projelerin
        hayata geçmesine olanak tanıyoruz.
      </p>
    </div>
  )
}
