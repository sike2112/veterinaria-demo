import Logo from './Logo.jsx'
import { CLINIC, HOURS, NAV_LINKS, MESSAGES } from '../data/content.js'
import { getWhatsAppUrl } from '../utils/whatsapp.js'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <Logo inverse />
          <p>
            {CLINIC.city} — {CLINIC.state}
          </p>
        </div>

        <nav className="footer__nav" aria-label="Navegação do rodapé">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__hours">
          <p className="footer__label">Horários</p>
          <ul>
            {HOURS.map((item) => (
              <li key={item.day}>
                <span>{item.day}</span>
                <span>{item.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__contact">
          <p className="footer__label">Contato</p>
          <a href={getWhatsAppUrl(MESSAGES.geral)}>WhatsApp</a>
          <a href={CLINIC.instagramUrl} target="_blank" rel="noreferrer">
            Instagram {CLINIC.instagramHandle}
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          © {new Date().getFullYear()} {CLINIC.fullName}
        </p>
        <p>Site demonstrativo — protótipo de portfólio</p>
      </div>
    </footer>
  )
}

export default Footer
