'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaWhatsapp, FaBus, FaUsers, FaCar, FaMapMarkedAlt } from 'react-icons/fa'
import styles from './Services.module.scss'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      icon: <FaBus />,
      title: 'Alquiler de Colectivos',
      description: 'Colectivos modernos para agencias, eventos, excursiones y contingentes. Flota propia con conductores profesionales.',
      whatsappText: 'Hola MALBA VIAJES, quiero cotizar alquiler de colectivo para fecha: ___. Origen/destino: ___. Cantidad de pasajeros: ___.',
    },
    {
      icon: <FaUsers />,
      title: 'Alquiler de Minibuses',
      description: 'Minibuses para grupos medianos. Ideales para traslados corporativos, turismo o eventos especiales.',
      whatsappText: 'Hola MALBA VIAJES, quiero cotizar alquiler de minibus para fecha: ___. Origen/destino: ___. Cantidad de pasajeros: ___.',
    },
    {
      icon: <FaUsers />,
      title: 'Alquiler de Combis',
      description: 'Combis para grupos pequeños. Perfectas para traslados aeropuerto, salidas familiares o grupos reducidos.',
      whatsappText: 'Hola MALBA VIAJES, quiero cotizar alquiler de combi para fecha: ___. Origen/destino: ___. Cantidad de pasajeros: ___.',
    },
    {
      icon: <FaCar />,
      title: 'Alquiler de Autos',
      description: 'Autos para viajes individuales o familiares. Vehículos en excelente estado y con seguro completo.',
      whatsappText: 'Hola MALBA VIAJES, quiero cotizar alquiler de auto para fecha: ___. Origen/destino: ___. Cantidad de pasajeros: ___.',
    },
    {
      icon: <FaMapMarkedAlt />,
      title: 'Traslados Corporativos',
      description: 'Servicios de traslado para empresas: aeropuerto, eventos, conferencias. Puntualidad y profesionalismo garantizado.',
      whatsappText: 'Hola MALBA VIAJES, quiero cotizar traslado corporativo para fecha: ___. Origen/destino: ___. Cantidad de pasajeros: ___.',
    },
    {
      icon: <FaBus />,
      title: 'Viajes y Excursiones',
      description: 'Armamos tu viaje a medida. Además de Brasil, consultanos por otros destinos y paquetes personalizados.',
      whatsappText: 'Hola MALBA VIAJES, quiero info sobre viajes y excursiones. Destino: ___. Fecha tentativa: ___. Cantidad de pasajeros: ___.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="servicios" className={styles.services} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>📋 Servicios Completos</span>
          <h2>Alquiler de Vehículos</h2>
          <p className={styles.subtitle}>
            Además de nuestros viajes a Brasil, ofrecemos alquiler de vehículos para todo tipo de necesidades.
            Consultá disponibilidad y cotizaciones.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a
                href={`https://wa.me/5493514039510?text=${encodeURIComponent(service.whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButton}
                aria-label={`Cotizar ${service.title}`}
              >
                <FaWhatsapp />
                Cotizar
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.contactBox}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3>¿Necesitás un servicio a medida?</h3>
          <p>Contáctanos por WhatsApp y armamos la solución perfecta para tu necesidad</p>
          <a
            href="https://wa.me/5493514039510?text=Hola%20MALBA%20VIAJES%2C%20quiero%20consultar%20por%20un%20servicio%20personalizado."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactButton}
            aria-label="Contacto personalizado"
          >
            <FaWhatsapp />
            Contacto Personalizado
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
