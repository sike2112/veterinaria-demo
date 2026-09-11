import { motion } from 'motion/react'

const CARE_POINTS = ['Atendimento individual', 'Explicação clara', 'Acompanhamento', 'Cuidado com o animal']

function Care() {
  return (
    <section id="sobre" className="section care">
      <div className="care__head">
        <p className="eyebrow">Sobre a VittaVet</p>
        <h2>Atendimento atento ao pet e claro para quem cuida dele.</h2>
      </div>

      <div className="care__body">
        <motion.div
          className="care__media"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <span className="care__media-backdrop" aria-hidden="true" />
          <img
            src="/images/vet-dog.jpg"
            alt="Veterinário examina a cabeça de um cão enquanto a tutora o acompanha de perto"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        <div className="care__content">
          <p className="section__lead">
            Cada animal é atendido individualmente, com escuta atenta ao
            histórico contado pelo tutor e explicações claras sobre cada
            etapa do cuidado. Consultas de retorno são combinadas conforme a
            evolução de cada caso.
          </p>

          <ul className="care__tags">
            {CARE_POINTS.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Care
