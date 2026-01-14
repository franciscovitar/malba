'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaWhatsapp, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa'
import styles from './Contact.module.scss'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [formData, setFormData] = useState({ name: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const whatsappText = `Hola MALBA VIAJES, soy ${formData.name}. Consulta: ${formData.message}`
    window.open(
      `https://wa.me/5493517171672?text=${encodeURIComponent(whatsappText)}`,
      '_blank'
    )
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contacto" className={styles.contact} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>📞 Contacto</span>
          <h2>Hablemos de tu Viaje</h2>
          <p className={styles.subtitle}>
            Estamos disponibles para responder todas tus consultas
          </p>
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            className={styles.contactCards}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <h3>🇧🇷 Brasil en Bus CAMA</h3>
                <p className={styles.cardSubtitle}>Consultas y Reservas</p>
              </div>
              <div className={styles.contactInfo}>
                <FaWhatsapp className={styles.iconLarge} />
                <div className={styles.contactDetails}>
                  <p className={styles.label}>WhatsApp</p>
                  <p className={styles.number}>351 717 1672</p>
                </div>
              </div>
              <a
                href="https://wa.me/5493517171672?text=Hola%20MALBA%20VIAJES%2C%20quiero%20info%20para%20Brasil%20en%20Bus%20CAMA%20(USD%20220%20ida%20y%20vuelta)."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButton}
              >
                <FaWhatsapp />
                Consultar Brasil
              </a>
            </div>

            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <h3>🚐 Alquiler de Vehículos</h3>
                <p className={styles.cardSubtitle}>Cotizaciones y Disponibilidad</p>
              </div>
              <div className={styles.contactInfo}>
                <FaWhatsapp className={styles.iconLarge} />
                <div className={styles.contactDetails}>
                  <p className={styles.label}>WhatsApp</p>
                  <p className={styles.number}>351 403 9510</p>
                </div>
              </div>
              <a
                href="https://wa.me/5493514039510?text=Hola%20MALBA%20VIAJES%2C%20quiero%20cotizar%20alquiler%20de%20veh%C3%ADculo."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButton}
              >
                <FaWhatsapp />
                Cotizar Alquiler
              </a>
            </div>
          </motion.div>

          <motion.div
            className={styles.formSection}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={styles.formCard}>
              <h3>Consulta Rápida</h3>
              <p className={styles.formSubtitle}>
                Completá el formulario y te contactamos por WhatsApp
              </p>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name">Tu Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ingresá tu nombre"
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="message">Tu Consulta</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Contanos qué necesitás..."
                    rows="4"
                    required
                  />
                </div>
                <button type="submit" className={styles.submitButton}>
                  <FaPaperPlane />
                  Enviar por WhatsApp
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
