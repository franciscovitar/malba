'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'
import styles from './Hero.module.scss'

const Hero = () => {
  const destinations = ['Camboriú', 'Florianópolis', 'Canasvieiras']

  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span>🇧🇷 Temporada 2026 - Salidas Todos los Domingos</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Brasil en Bus <span className={styles.highlight}>CAMA</span>
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Viajá con máxima comodidad desde Córdoba
          </motion.p>

          <motion.div
            className={styles.destinations}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <FaMapMarkerAlt />
            {destinations.map((dest, index) => (
              <span key={index}>
                {dest}
                {index < destinations.length - 1 && ' • '}
              </span>
            ))}
          </motion.div>

          <motion.div
            className={styles.priceBox}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className={styles.priceLabel}>Ida y Vuelta</div>
            <div className={styles.price}>USD 220</div>
            <div className={styles.priceDetail}>por persona • Bus cama • Coordinador</div>
          </motion.div>

          <motion.div
            className={styles.ctas}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <a
              href="https://wa.me/5493517171672?text=Hola%20MALBA%20VIAJES%2C%20quiero%20info%20para%20Brasil%20en%20Bus%20CAMA%20(USD%20220%20ida%20y%20vuelta).%20Salida%20desde%3A%20___.%20Domingo%3A%20___.%20Pasajeros%3A%20___."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaPrimary}
              aria-label="Reservar por WhatsApp - Brasil"
            >
              <FaWhatsapp />
              Reservar Ahora - Brasil
            </a>
            <a
              href="https://wa.me/5493514039510?text=Hola%20MALBA%20VIAJES%2C%20quiero%20cotizar%20alquiler%20de%20veh%C3%ADculo."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaSecondary}
              aria-label="Alquiler de vehículos"
            >
              <FaWhatsapp />
              Alquiler de Vehículos
            </a>
          </motion.div>

          <motion.div
            className={styles.features}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className={styles.feature}>
              <span className={styles.icon}>🚌</span>
              <span>Flota Propia</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.icon}>🛏️</span>
              <span>Butaca CAMA</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.icon}>👨‍✈️</span>
              <span>Coordinador</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
