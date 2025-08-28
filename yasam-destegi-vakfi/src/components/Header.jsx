import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-semibold text-lg text-gray-900">
          Yaşam Desteği Vakfı
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <NavItem to="/">Anasayfa</NavItem>
          <NavItem to="/hakkimizda">Hakkımızda</NavItem>
          <NavItem to="/yonetimkurulu">Yönetim Kurulu</NavItem>
          <NavItem to="/iletisim">İletişim</NavItem>
        </nav>
      </div>
    </header>
  )
}

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `hover:text-sky-700 ${isActive ? 'text-sky-700' : 'text-gray-700'}`
      }
      aria-label={typeof children === 'string' ? children : undefined}
    >
      {children}
    </NavLink>
  )
}

