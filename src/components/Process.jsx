import { motion } from 'motion/react'
import { PROCESS_STEPS } from '../data/content.js'

function Process() {
  return (
    <section id="como-funciona" className="process">
      <div className="process__inner">
        <div className="process__head">
          <p className="eyebrow eyebrow--inverse">Como funciona</p>
          <h2>Entender a causa vem antes de tratar o sintoma.</h2>
        </div>

        <ol className="process__steps">
          {PROCESS_STEPS.map((step, index) => (
            <motion.li
              key={step.number}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
            >
              <span className="process__number">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Process
