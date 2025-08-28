import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Yaşam Desteği Vakfı</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/gizlilik" className="hover:text-gray-900">Gizlilik</Link>
            <Link to="/kosullar" className="hover:text-gray-900">Kullanım Şartları</Link>
            <a href="https://github.com/yasamdestegivakfi" target="_blank" rel="noreferrer" className="hover:text-gray-900">Tasarım</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

