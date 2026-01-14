'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { FaBed, FaShieldAlt, FaBus, FaUsers } from 'react-icons/fa'
import styles from './Fleet.module.scss'

const Fleet = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      icon: <FaBus />,
      title: 'Flota Propia',
      description: 'Somos dueños de nuestros colectivos. No dependemos de terceros.',
    },
    {
      icon: <FaBed />,
      title: 'Butaca CAMA Real',
      description: 'No semicama. Camas verdaderas para descansar como en tu casa.',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Buses Nuevos',
      description: 'Flota moderna y mantenida. Seguridad y confort garantizados.',
    },
    {
      icon: <FaUsers />,
      title: 'Coordinador a Bordo',
      description: 'Personal capacitado acompañándote durante todo el viaje.',
    },
  ]

  const images = [
    {
      src: '/images/bus-exterior.jpg',
      alt: 'Bus exterior MALBA VIAJES',
      caption: 'Flota moderna y cuidada',
    },
    {
      src: '/images/bus-interior-cama.jpg',
      alt: 'Interior bus cama',
      caption: 'Butacas cama reales',
    },
    {
      src: '/images/bus-confort.jpg',
      alt: 'Confort en el viaje',
      caption: 'Máxima comodidad',
    },
    {
      src: '/images/bus-night.jpg',
      alt: 'Viaje nocturno confortable',
      caption: 'Descansá como en tu casa',
    },
  ]

  return (
    <section id="flota" className={styles.fleet} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>🚌 Nuestra Fortaleza</span>
          <h2>Flota Propia & Comodidad</h2>
          <p className={styles.subtitle}>
            Lo que nos diferencia: tenemos flota propia. Esto significa más confianza, mejor precio y control total de la calidad.
          </p>
        </motion.div>

        <motion.div
          className={styles.featuresGrid}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={styles.featureCard}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.gallery}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className={styles.galleryTitle}>Conocé Nuestros Buses</h3>
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            effect="fade"
            loop={true}
            className={styles.swiper}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className={styles.slideContent}>
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className={styles.slideImage}
                  />
                  <div className={styles.slideCaption}>
                    <span>{image.caption}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div
          className={styles.whyUs}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3>¿Por qué es importante que tengamos flota propia?</h3>
          <div className={styles.whyUsGrid}>
            <div className={styles.whyUsItem}>
              <span className={styles.number}>01</span>
              <h4>Más Confianza</h4>
              <p>No dependemos de terceros. Controlamos todo el proceso.</p>
            </div>
            <div className={styles.whyUsItem}>
              <span className={styles.number}>02</span>
              <h4>Mejor Precio</h4>
              <p>Sin intermediarios. El precio más competitivo del mercado.</p>
            </div>
            <div className={styles.whyUsItem}>
              <span className={styles.number}>03</span>
              <h4>Calidad Garantizada</h4>
              <p>Mantenemos y cuidamos nuestros buses como si fueran nuestro hogar.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Fleet
