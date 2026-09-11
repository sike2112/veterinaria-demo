import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { SPECIALTIES, MESSAGES } from '../data/content.js'
import { openWhatsApp } from '../utils/whatsapp.js'

const PANEL_TRANSITION = { duration: 0.4, ease: 'easeOut' }

function Specialties() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [mobileActive, setMobileActive] = useState(0)

  return (
    <section id="especialidades" className="band specialties">
      <div className="container specialties__inner">
      <div className="specialties__intro">
        <p className="eyebrow eyebrow--inverse">Especialidades</p>
        <h2>Cuidado veterinário de ponta a ponta.</h2>
      </div>

      {/* Desktop accordion — unchanged, hidden on mobile via CSS */}
      <ol className="specialties__list">
        {SPECIALTIES.map((item, index) => {
          const isActive = index === activeIndex
          return (
            <li key={item.number} className={isActive ? 'is-active' : ''}>
              <button
                type="button"
                className="specialties__row"
                aria-expanded={isActive}
                onClick={() => setActiveIndex(isActive ? -1 : index)}
              >
                <span className="specialties__number">{item.number}</span>
                <span className="specialties__title">{item.title}</span>
                <span className="specialties__icon" aria-hidden="true">
                  {isActive ? '−' : '+'}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    className="specialties__panel"
                    initial={{ height: 0, opacity: 0, y: 6 }}
                    animate={{ height: 'auto', opacity: 1, y: 0 }}
                    exit={{ height: 0, opacity: 0, y: -4 }}
                    transition={PANEL_TRANSITION}
                  >
                    <div className="specialties__panel-inner">
                      <p>{item.description}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          )
        })}
      </ol>

      {/* Mobile list — separate, isolated implementation. Does not reuse the
          desktop accordion's DOM/CSS (no grid, no animation, no shared panel
          classes). Shown only on mobile via CSS; desktop never sees this. */}
      <div className="specialties__mobile">
        {SPECIALTIES.map((item, index) => {
          const isActive = index === mobileActive
          return (
            <div className={isActive ? 'mobile-specialty is-active' : 'mobile-specialty'} key={item.number}>
              <button
                type="button"
                className="mobile-specialty__row"
                aria-expanded={isActive}
                onClick={() => setMobileActive(isActive ? -1 : index)}
              >
                <span className="mobile-specialty__number">{item.number}</span>
                <span className="mobile-specialty__title">{item.title}</span>
                <span className="mobile-specialty__icon" aria-hidden="true">
                  {isActive ? '−' : '+'}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    className="mobile-specialty__panel"
                    initial={{ height: 0, opacity: 0, y: 6 }}
                    animate={{ height: 'auto', opacity: 1, y: 0 }}
                    exit={{ height: 0, opacity: 0, y: -4 }}
                    transition={PANEL_TRANSITION}
                  >
                    <p className="mobile-specialty__description">{item.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>

      <div className="specialties__footer">
        <p>Atendimento para diferentes espécies, com atenção às particularidades de cada uma.</p>
        <button
          type="button"
          className="btn btn--light"
          onClick={() => openWhatsApp(MESSAGES.especialidades)}
        >
          Falar com a clínica
        </button>
      </div>
      </div>
    </section>
  )
}

export default Specialties
