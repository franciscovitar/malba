'use client'

import Link from 'next/link'
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import styles from './Footer.module.scss'

const Footer = () => {
  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Brasil en Bus CAMA', href: '#brasil' },
    { label: 'Flota & Comodidad', href: '#flota' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <a href="#inicio" className={styles.logo}>
              <img 
                src="/LogoNavbar.png" 
                alt="MALBA VIAJES" 
                className={styles.logoImage}
              />
            </a>
            <p className={styles.tagline}>
              Tu mejor opción para viajar a Brasil en bus cama real. Flota propia, mejor precio, máxima comodidad.
            </p>
            <div className={styles.social}>
              <a
                href="https://www.instagram.com/malbaviajes/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram MALBA VIAJES"
                className={styles.socialLink}
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/malbaviajessrl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook MALBA VIAJES"
                className={styles.socialLink}
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <h4>Navegación</h4>
            <ul className={styles.links}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Contacto</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <FaWhatsapp />
                <div>
                  <p className={styles.contactLabel}>Brasil</p>
                  <a href="https://wa.me/5493517171672" target="_blank" rel="noopener noreferrer">
                    351 717 1672
                  </a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <FaWhatsapp />
                <div>
                  <p className={styles.contactLabel}>Alquiler</p>
                  <a href="https://wa.me/5493514039510" target="_blank" rel="noopener noreferrer">
                    351 403 9510
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} <strong>MALBA VIAJES SRL</strong>. Todos los derechos reservados.
          </p>
          <p className={styles.developer}>
            Desarrollado por{' '}
            <a 
              href="https://www.genovasite.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Genova
            </a>
            {' '}Agencia de Desarrollo Web y Manejo de Redes
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
