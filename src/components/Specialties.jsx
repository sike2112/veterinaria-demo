import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { SPECIALTIES, MESSAGES } from '../data/content.js'
import { openWhatsApp } from '../utils/whatsapp.js'

function Specialties() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="especialidades" className="band specialties">
      <div className="container specialties__inner">
      <div className="specialties__intro">
        <p className="eyebrow eyebrow--inverse">Especialidades</p>
        <h2>Cuidado veterinário de ponta a ponta.</h2>
      </div>

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
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p>{item.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          )
        })}
      </ol>

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
