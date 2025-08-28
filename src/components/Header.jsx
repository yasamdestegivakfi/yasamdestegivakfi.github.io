import React, { useEffect, useMemo, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  const [mode, setMode] = useTheme()
  const label = useMemo(() => {
    if (mode === 'dark') return 'Koyu'
    if (mode === 'light') return 'Açık'
    return 'Sistem'
  }, [mode])

  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 border-b border-transparent dark:border-gray-800/80 ${scrolled ? 'shadow-header' : ''}`}>
      <div className={`header-surface mx-auto max-w-6xl px-4 py-3 flex items-center justify-between ${scrolled ? 'transition-base' : ''}`}>
        <Link to="/" className="font-semibold text-lg text-gray-900 dark:text-gray-100">
          Yaşam Desteği Vakfı
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavItem to="/">Anasayfa</NavItem>
          <NavItem to="/hakkimizda">Hakkımızda</NavItem>
          <NavItem to="/yonetimkurulu">Yönetim Kurulu</NavItem>
          <NavItem to="/iletisim">İletişim</NavItem>
          <ThemeToggle mode={mode} setMode={setMode} label={label} />
        </nav>
        <div className="md:hidden">
          <ThemeToggle mode={mode} setMode={setMode} label={label} />
        </div>
      </div>
    </header>
  )
}

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `relative transition-base after:transition-all after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-sky-600 dark:after:bg-sky-400 ${isActive ? 'text-sky-700 dark:text-sky-300 after:w-full' : 'text-gray-700 dark:text-gray-300 after:w-0 hover:text-sky-700 dark:hover:text-sky-300 hover:after:w-full'}`}
      aria-label={typeof children === 'string' ? children : undefined}
    >
      {children}
    </NavLink>
  )
}

function ThemeToggle({ mode, setMode, label }) {
  const icon = mode === 'dark' ? '🌙' : mode === 'light' ? '☀️' : '💻'
  const next = () => {
    setMode(mode === 'system' ? 'dark' : mode === 'dark' ? 'light' : 'system')
  }

  return (
    <button
      type="button"
      onClick={next}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 bg-white/70 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-base"
      aria-label={`Tema: ${label}`}
      title={`Tema: ${label} (tıkla: değiştir)`}
    >
      <span aria-hidden>{icon}</span>
      <span className="hidden sm:inline">{label}</span>
    </button>
  )
}

function useTheme() {
  const getSystem = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  const readStored = () => {
    try { return localStorage.getItem('theme') || 'system' } catch { return 'system' }
  }
  const [mode, setMode] = useState(readStored())

  // apply theme class to html element
  const apply = (m) => {
    const root = document.documentElement
    const effective = m === 'system' ? getSystem() : m
    root.classList.toggle('dark', effective === 'dark')
    root.dataset.theme = m
  }

  useEffect(() => {
    apply(mode)
    try { localStorage.setItem('theme', mode) } catch {}
  }, [mode])

  useEffect(() => {
    if (mode !== 'system') return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => apply('system')
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [mode])

  return [mode, setMode]
}
