import React from 'react'

const asset = (p) => new URL(p, document.baseURI).toString()

const board = {
  president: {
    title: 'Yönetim Kurulu Başkanı',
    name: 'Benan Bayrakci',
    img: 'bbbigsqr.jpg',
    link: 'https://lsc.hacettepe.edu.tr/bbenan.html',
  },
  members: [
    { title: 'Yönetim Kurulu Başkan Yardımcısı', name: 'Ufuk Güneş', img: 'ufukgunes.png' },
    { title: 'Yönetim Kurulu Üyesi', name: 'Makbule Erdem', img: 'makbuleerdem.png' },
    { title: 'Yönetim Kurulu Üyesi', name: 'Hayrettin Hakan Aykan', img: 'haykansqr.jpg' },
  ],
  auditors: [
    { title: 'Denetleme Kurulu Üyesi', name: 'Selman Kesici', img: 'selmankesicisqr.jpg' },
    { title: 'Denetleme Kurulu Üyesi', name: 'Ahmet Birbilen', img: 'birbilen.jpeg' },
    { title: 'Denetleme Kurulu Üyesi', name: 'Ahmet Özer', img: 'ahmetozer.png' },
  ],
}

function PersonCard({ title, name, img, link }) {
  const image = asset(`assets/images/${img}`)
  const content = (
    <div className="w-full sm:w-64 text-center border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-5 bg-white dark:bg-gray-900 transition-transform hover:-translate-y-1 hover:shadow-md">
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="w-32 h-32 object-cover rounded-full mx-auto mb-3"
      />
      <div className="text-sm text-gray-600 dark:text-gray-300">{title}</div>
      <div className="text-base font-semibold text-gray-900 dark:text-gray-100">{name}</div>
    </div>
  )
  if (link) {
    return (
      <a href={link} target="_blank" rel="noreferrer" className="inline-block">
        {content}
      </a>
    )
  }
  return content
}

export default function YonetimKurulu() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">Yönetim Kurulu</h1>

      <img
        src={asset('assets/images/yonetim.jpg')}
        alt="Yönetim Kurulu"
        loading="lazy"
        className="w-full h-72 object-cover rounded-md mb-10"
      />

      <section className="mb-10" aria-labelledby="baskan">
        <h2 id="baskan" className="text-xl font-semibold mb-4">Başkan</h2>
        <div className="flex flex-wrap items-center gap-6">
          <PersonCard {...board.president} />
        </div>
      </section>

      <section className="mb-10" aria-labelledby="uyeler">
        <h2 id="uyeler" className="text-xl font-semibold mb-4">Yönetim Kurulu Üyeleri</h2>
        <div className="flex flex-wrap items-stretch gap-6">
          {board.members.map((m) => (
            <PersonCard key={m.name} {...m} />
          ))}
        </div>
      </section>

      <section aria-labelledby="denetleme">
        <h2 id="denetleme" className="text-xl font-semibold mb-4">Denetleme Kurulu</h2>
        <div className="flex flex-wrap items-stretch gap-6">
          {board.auditors.map((m) => (
            <PersonCard key={m.name} {...m} />
          ))}
        </div>
      </section>
    </div>
  )
}
