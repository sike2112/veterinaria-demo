import { motion } from 'motion/react'
import { MESSAGES } from '../data/content.js'
import { openWhatsApp } from '../utils/whatsapp.js'

const HERO_HIGHLIGHTS = [
  {
    title: 'Consultas',
    description: 'Atendimento completo para todas as idades',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M6 3v6.5a4.5 4.5 0 0 0 9 0V3"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M19 9v2.5a6 6 0 0 1-12 0V10"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="19.5" cy="7.5" r="1.8" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: 'Diagnóstico',
    description: 'Exames e avaliações com tecnologia',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <ellipse cx="12" cy="8.3" rx="2.1" ry="2.6" stroke="currentColor" strokeWidth="1.6" />
        <ellipse cx="7.3" cy="10.4" rx="1.6" ry="2" stroke="currentColor" strokeWidth="1.6" />
        <ellipse cx="16.7" cy="10.4" rx="1.6" ry="2" stroke="currentColor" strokeWidth="1.6" />
        <ellipse cx="5" cy="14.6" rx="1.4" ry="1.7" stroke="currentColor" strokeWidth="1.6" />
        <ellipse cx="19" cy="14.6" rx="1.4" ry="1.7" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M8.6 16.2c.5-1.6 1.8-2.6 3.4-2.6s2.9 1 3.4 2.6c.4 1.3-.7 2.6-2.1 2.3a4.7 4.7 0 0 0-2.6 0c-1.4.3-2.5-1-2.1-2.3Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Acompanhamento',
    description: 'Cuidado contínuo em cada fase da vida',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 19.2s-7.2-4.4-7.2-9.6a4 4 0 0 1 7.2-2.4 4 4 0 0 1 7.2 2.4c0 5.2-7.2 9.6-7.2 9.6Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

function Hero() {
  return (
    <section id="topo" className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <motion.span
            className="hero__rule"
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.p
            className="hero__eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Clínica veterinária
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            Saúde e cuidado para quem faz parte da&nbsp;família.
          </motion.h1>

          <motion.p
            className="hero__lead"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            A VittaVet reúne diagnóstico, prevenção e acompanhamento
            veterinário em um só lugar, com atenção a cada etapa do cuidado
            com o animal.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => openWhatsApp(MESSAGES.geral)}
            >
              Agendar consulta
            </button>
            <a className="btn btn--ghost" href="#especialidades">
              Conhecer serviços
            </a>
          </motion.div>

        </div>

        <motion.div
          className="hero__photo"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
        >
          <img
            src="/images/hero-golden.png"
            alt="Golden Retriever deitado, tranquilo"
            fetchPriority="high"
          />
        </motion.div>

        <motion.ul
          className="hero__highlights"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
          }}
        >
          {HERO_HIGHLIGHTS.map((item) => (
            <motion.li
              key={item.title}
              className="hero__highlight"
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
              }}
            >
              <span className="hero__highlight-icon">{item.icon}</span>
              <span className="hero__highlight-text">
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

export default Hero
