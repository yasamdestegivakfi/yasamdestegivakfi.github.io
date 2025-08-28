import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800/80">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-600 dark:text-gray-300">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-700 dark:text-gray-300">&copy; {new Date().getFullYear()} Yaşam Desteği Vakfı</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/gizlilik" className="hover:text-gray-900 dark:hover:text-gray-100">Gizlilik</Link>
            <Link to="/kosullar" className="hover:text-gray-900 dark:hover:text-gray-100">Kullanım Şartları</Link>
            <a href="https://github.com/yasamdestegivakfi" target="_blank" rel="noreferrer" className="hover:text-gray-900 dark:hover:text-gray-100">Tasarım</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
