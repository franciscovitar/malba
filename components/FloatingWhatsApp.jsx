'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaTimes } from 'react-icons/fa'
import styles from './FloatingWhatsApp.module.scss'

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const whatsappOptions = [
    {
      label: 'Brasil en Bus CAMA',
      number: '5493517171672',
      text: 'Hola MALBA VIAJES, quiero info para Brasil en Bus CAMA (USD 220 ida y vuelta).',
      color: 'primary',
    },
    {
      label: 'Alquiler de Vehículos',
      number: '5493514039510',
      text: 'Hola MALBA VIAJES, quiero cotizar alquiler de vehículo.',
      color: 'secondary',
    },
  ]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.floatingContainer}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className={styles.optionsMenu}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
              >
                {whatsappOptions.map((option, index) => (
                  <motion.a
                    key={index}
                    href={`https://wa.me/${option.number}?text=${encodeURIComponent(option.text)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.option} ${styles[option.color]}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`WhatsApp ${option.label}`}
                  >
                    <FaWhatsapp />
                    <span>{option.label}</span>
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            className={styles.mainButton}
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: isOpen ? 180 : 0 }}
            aria-label={isOpen ? 'Cerrar menú WhatsApp' : 'Abrir menú WhatsApp'}
          >
            {isOpen ? <FaTimes /> : <FaWhatsapp />}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FloatingWhatsApp
