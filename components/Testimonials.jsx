'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import styles from './Testimonials.module.scss'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const testimonials = [
    {
      text: 'Viajé a Brasil en el bus cama y fue increíble. Las butacas son realmente camas, no como otros que dicen cama y son semicama. Llegué descansado y listo para disfrutar.',
      author: 'Martin Galindo',
      service: 'Brasil en Bus CAMA',
    },
    {
      text: 'Contraté el servicio de alquiler de colectivo para un evento de la empresa. Todo impecable, puntualidad y el vehículo en perfectas condiciones. Totalmente recomendable.',
      author: 'Agustín Martinez',
      service: 'Alquiler de Colectivo',
    },
    {
      text: 'La atención es directa con los dueños, se nota que les importa. El coordinador que viajó con nosotros fue muy atento. Nos sentimos seguros y cómodos todo el viaje.',
      author: 'Sandra Prieto',
      service: 'Traslado Grupal',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className={styles.testimonials} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>💬 Testimonios</span>
          <h2>Lo Que Dicen Nuestros Pasajeros</h2>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <FaQuoteLeft className={styles.quoteIcon} />
              <p className={styles.text}>{testimonial.text}</p>
              <div className={styles.footer}>
                <p className={styles.author}>{testimonial.author}</p>
                <p className={styles.service}>{testimonial.service}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
