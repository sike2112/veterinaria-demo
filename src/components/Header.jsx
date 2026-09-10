import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import { NAV_LINKS, MESSAGES } from '../data/content.js'
import { openWhatsApp } from '../utils/whatsapp.js'

function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open)
    return () => document.body.classList.remove('no-scroll')
  }, [open])

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 900) setOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="header">
      <div className="header__bar">
        <a href="#topo" className="header__brand" aria-label="VittaVet, ir para o início">
          <Logo />
        </a>

        <nav className="header__nav" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <button
            type="button"
            className="btn btn--primary btn--sm header__cta"
            onClick={() => openWhatsApp(MESSAGES.geral)}
          >
            Agendar consulta
          </button>

          <button
            type="button"
            className={`header__toggle ${open ? 'is-open' : ''}`}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        className={`header__mobile ${open ? 'is-open' : ''}`}
        aria-hidden={!open}
      >
        <nav aria-label="Navegação mobile">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="btn btn--primary header__mobile-cta"
          onClick={() => {
            setOpen(false)
            openWhatsApp(MESSAGES.geral)
          }}
        >
          Agendar consulta
        </button>
      </div>
    </header>
  )
}

export default Header
