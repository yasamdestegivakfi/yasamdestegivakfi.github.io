import React from 'react'
import { Link } from 'react-router-dom'

const posts = [
  {
    title: 'Hasta Yakını Sosyal Yardımı',
    to: '/sosyalyardim',
    img: 'hastayadestek.webp',
  },
  {
    title: 'Dul ve Yetim Aile Desteği',
    to: '/dulyetim',
    img: 'orphan.webp',
  },
  { title: 'Öğrenci Bursu', to: '/ogrencibursu', img: 'ogrencidestek.webp' },
  {
    title: 'Bilimsel Araştırma Proje Desteği',
    to: '/arastirmadestek',
    img: 'research.jpg',
  },
]

const asset = (p) => new URL(p, import.meta.env.BASE_URL).toString()

export default function Posts() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">Projelerimiz</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map((p) => (
          <Link
            key={p.to}
            to={p.to}
            className="block rounded-lg border bg-white shadow-md hover:-translate-y-2 transition-all"
          >
            <img
              src={asset(`assets/images/${p.img}`)}
              alt={p.title}
              loading="lazy"
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-base font-semibold text-gray-800">{p.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

