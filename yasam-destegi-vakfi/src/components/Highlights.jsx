import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faNewspaper, faStar } from '@fortawesome/free-solid-svg-icons'

const cards = [
  { icon: faStar, title: 'Aktif Projelerimiz' },
  { icon: faBolt, title: 'Gündemdeki Projeler' },
  { icon: faNewspaper, title: 'Bizden Haberler' },
]

export default function Highlights() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((c) => (
          <div
            key={c.title}
            className="flex items-center gap-4 rounded-lg bg-white shadow-md p-5"
          >
            <div className="w-12 h-12 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center">
              <FontAwesomeIcon icon={c.icon} />
            </div>
            <div className="font-medium">{c.title}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

