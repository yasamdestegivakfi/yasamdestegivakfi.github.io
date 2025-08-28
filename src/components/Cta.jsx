import React from 'react'
import { Link } from 'react-router-dom'

export default function Cta() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-lg bg-sky-50 border border-sky-100 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-sky-800">Bağış Bilgileri</h3>
          <p className="text-sm text-sky-900/80">IBAN: TR00 0000 0000 0000 0000 0000 00</p>
        </div>
        <Link
          to="/bagisbilgileri"
          className="inline-flex items-center justify-center rounded-md bg-sky-600 text-white px-4 py-2 hover:bg-sky-700"
        >
          Bağış yap
        </Link>
      </div>
    </section>
  )
}

