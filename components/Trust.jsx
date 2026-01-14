'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaShieldAlt, FaBus, FaUserFriends, FaClock, FaStar, FaCheckCircle } from 'react-icons/fa'
import styles from './Trust.module.scss'

const Trust = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const trustItems = [
    {
      icon: <FaBus />,
      title: 'Flota Propia',
      description: 'No dependemos de terceros. Controlamos 100% de la calidad y el servicio.',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Empresa Seria',
      description: 'MALBA VIAJES SRL. Empresa legalmente constituida con años de trayectoria.',
    },
    {
      icon: <FaUserFriends />,
      title: 'Coordinador a Bordo',
      description: 'Personal capacitado acompañándote durante todo el viaje. Atención personalizada.',
    },
    {
      icon: <FaClock />,
      title: 'Puntualidad',
      description: 'Salidas y llegadas en tiempo y forma. Tu tiempo es valioso.',
    },
    {
      icon: <FaStar />,
      title: 'Experiencia',
      description: 'Años dedicados al transporte de pasajeros y turismo. Sabemos lo que hacemos.',
    },
    {
      icon: <FaCheckCircle />,
      title: 'Atención Directa',
      description: 'Hablás con nosotros, los dueños. Sin call centers, sin intermediarios.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section id="confianza" className={styles.trust} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>🤝 Por qué elegirnos</span>
          <h2>Tu Confianza, Nuestra Prioridad</h2>
          <p className={styles.subtitle}>
            No somos una agencia más. Somos dueños de nuestra flota y estamos comprometidos con tu experiencia.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className={styles.iconWrapper}>
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.highlight}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className={styles.highlightContent}>
            <h3>La Diferencia MALBA VIAJES</h3>
            <p>
              Cuando viajás con nosotros, viajás en <strong>nuestros buses</strong>, con <strong>nuestro personal</strong>, 
              y hablás con <strong>nosotros directamente</strong>. No hay intermediarios ni sorpresas. 
              Esa es nuestra garantía de calidad y el mejor precio del mercado.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Trust
