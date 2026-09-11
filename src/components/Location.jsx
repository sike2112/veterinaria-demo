import { motion } from 'motion/react'
import { CLINIC, HOURS, MESSAGES } from '../data/content.js'
import { openWhatsApp } from '../utils/whatsapp.js'

function Location() {
  return (
    <section id="contato" className="band band--alt location">
      <div className="container">
        <motion.div
          className="location__card"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="location__info">
            <span className="hero__rule" aria-hidden="true" />
            <p className="eyebrow">Localização</p>
            <h2>
              Localização demonstrativa · {CLINIC.city} — {CLINIC.state}
            </h2>

            <ul className="location__hours">
              {HOURS.map((item) => (
                <li key={item.day}>
                  <span className="location__hours-day">{item.day}</span>
                  <span
                    className={`location__hours-time ${item.closed ? 'is-closed' : ''}`}
                  >
                    {item.time}
                  </span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="btn btn--primary"
              onClick={() => openWhatsApp(MESSAGES.contato)}
            >
              Falar pelo WhatsApp
            </button>
          </div>

          <div className="location__visual" aria-hidden="true">
            <span className="location__ring location__ring--1" />
            <span className="location__ring location__ring--2" />
            <span className="location__ring location__ring--3" />
            <span className="location__pin" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Location
