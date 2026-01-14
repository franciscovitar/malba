'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaWhatsapp, FaCheck, FaTimes, FaCalendarAlt, FaDollarSign } from 'react-icons/fa'
import styles from './BrazilOffer.module.scss'

const BrazilOffer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const includes = [
    'Traslado ida y vuelta',
    'Butaca CAMA real (no semicama)',
    'Coordinador durante todo el viaje',
    'Salidas garantizadas todos los domingos',
    'Flota propia, buses nuevos',
  ]

  const notIncludes = [
    'Alojamiento (te asesoramos)',
    'Comidas',
    'Excursiones opcionales',
  ]

  const embarquePoints = [
    'Terminal de Córdoba (principal)',
    'Villa María',
    'Rosario',
    'Santa Fe',
    'Otras localidades (consultar)',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="brasil" className={styles.brazilOffer} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>⭐ Servicio Estrella</span>
          <h2>Brasil en Bus CAMA</h2>
          <p className={styles.subtitle}>
            La mejor forma de viajar a Brasil: comodidad, precio y confianza en un solo paquete
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className={styles.card} variants={itemVariants}>
            <div className={styles.cardHeader}>
              <FaCheck className={styles.iconGreen} />
              <h3>Qué Incluye</h3>
            </div>
            <ul className={styles.list}>
              {includes.map((item, index) => (
                <li key={index}>
                  <FaCheck className={styles.checkIcon} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className={styles.card} variants={itemVariants}>
            <div className={styles.cardHeader}>
              <FaTimes className={styles.iconRed} />
              <h3>Qué NO Incluye</h3>
            </div>
            <ul className={styles.list}>
              {notIncludes.map((item, index) => (
                <li key={index}>
                  <FaTimes className={styles.timesIcon} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className={styles.note}>
              Es un servicio de traslado premium. Vos elegís tu alojamiento. Podemos asesorarte con los mejores alojamientos al mejor precio.
            </p>
          </motion.div>

          <motion.div className={`${styles.card} ${styles.priceCard}`} variants={itemVariants}>
            <div className={styles.cardHeader}>
              <FaDollarSign className={styles.iconYellow} />
              <h3>Precio</h3>
            </div>
            <div className={styles.priceDisplay}>
              <span className={styles.currency}>USD</span>
              <span className={styles.amount}>220</span>
            </div>
            <p className={styles.priceDetail}>por persona • ida y vuelta</p>
            <div className={styles.priceFeatures}>
              <span>✓ Sin cargos ocultos</span>
              <span>✓ Mejor precio garantizado</span>
            </div>
          </motion.div>

          <motion.div className={styles.card} variants={itemVariants}>
            <div className={styles.cardHeader}>
              <FaCalendarAlt className={styles.iconBlue} />
              <h3>Salidas</h3>
            </div>
            <div className={styles.schedule}>
              <p className={styles.scheduleMain}>
                Todos los <strong>DOMINGOS</strong>
              </p>
              <p className={styles.scheduleMonths}>
                Enero • Febrero • Marzo • Abril
              </p>
            </div>
            <p className={styles.note}>
              Confirmá disponibilidad y horarios por WhatsApp
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.embarqueSection}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3>Puntos de Embarque</h3>
          <div className={styles.embarqueGrid}>
            {embarquePoints.map((point, index) => (
              <div key={index} className={styles.embarquePoint}>
                <span className={styles.marker}>📍</span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="https://wa.me/5493517171672?text=Hola%20MALBA%20VIAJES%2C%20quiero%20info%20para%20Brasil%20en%20Bus%20CAMA%20(USD%20220%20ida%20y%20vuelta).%20Salida%20desde%3A%20___.%20Domingo%3A%20___.%20Pasajeros%3A%20___."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
            aria-label="Consultar disponibilidad por WhatsApp"
          >
            <FaWhatsapp />
            Consultar Disponibilidad y Reservar
          </a>
          <p className={styles.ctaNote}>
            Respuesta inmediata • WhatsApp: <strong>351 717 1672</strong>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default BrazilOffer
