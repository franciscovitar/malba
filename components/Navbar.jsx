'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa'
import styles from './Navbar.module.scss'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Brasil en Bus CAMA', href: '#brasil' },
    { label: 'Flota & Comodidad', href: '#flota' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Preguntas Frecuentes', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <motion.nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        <a href="#inicio" className={styles.logo} aria-label="MALBA VIAJES - Inicio">
          <img 
            src="/LogoNavbar.png" 
            alt="MALBA VIAJES" 
            className={styles.logoImage}
          />
        </a>

        <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={handleLinkClick}>
                {link.label}
              </a>
            </li>
          ))}
          <li className={styles.ctaGroup}>
            <a
              href="https://wa.me/5493517171672?text=Hola%20MALBA%20VIAJES%2C%20quiero%20info%20para%20Brasil%20en%20Bus%20CAMA%20(USD%20220%20ida%20y%20vuelta)."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaPrimary}
              aria-label="WhatsApp Brasil"
            >
              <FaWhatsapp /> Brasil
            </a>
            <a
              href="https://wa.me/5493514039510?text=Hola%20MALBA%20VIAJES%2C%20quiero%20cotizar%20alquiler%20de%20veh%C3%ADculo."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaSecondary}
              aria-label="WhatsApp Alquiler"
            >
              <FaWhatsapp /> Alquiler
            </a>
          </li>
        </ul>

        <button
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </motion.nav>
  )
}

export default Navbar
