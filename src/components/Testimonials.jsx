import { motion } from 'motion/react'
import { CLINIC, TESTIMONIAL_MAIN, TESTIMONIALS_SECONDARY } from '../data/content.js'

function Testimonials() {
  return (
    <section id="avaliacoes" className="band band--alt testimonials">
      <div className="container testimonials__inner">
        <div className="testimonials__head">
          <div>
            <p className="eyebrow">Avaliações</p>
            <h2>Histórias de quem encontrou respostas.</h2>
          </div>

          <div className="testimonials__stat">
            <span className="testimonials__stat-number">
              {CLINIC.rating} <span aria-hidden="true">★</span>
            </span>
            <span className="testimonials__stat-label">{CLINIC.reviewsLabel}</span>
          </div>
        </div>

        <span className="testimonials__badge">Depoimentos demonstrativos</span>

        <div className="testimonials__body">
          <motion.figure
            className="testimonials__main"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <blockquote>
              <p>&ldquo;{TESTIMONIAL_MAIN.quote}&rdquo;</p>
            </blockquote>
            <figcaption>{TESTIMONIAL_MAIN.context}</figcaption>
          </motion.figure>

          <div className="testimonials__side">
            {TESTIMONIALS_SECONDARY.map((item, index) => (
              <motion.figure
                key={item.quote}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.45, delay: 0.1 + index * 0.08, ease: 'easeOut' }}
              >
                <blockquote>
                  <p>&ldquo;{item.quote}&rdquo;</p>
                </blockquote>
                <figcaption>{item.context}</figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
