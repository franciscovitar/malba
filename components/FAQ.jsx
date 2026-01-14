'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import styles from './FAQ.module.scss'

const FAQ = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: '¿El servicio de Brasil incluye alojamiento?',
      answer: 'No, es un servicio de traslado premium. Incluye únicamente el viaje ida y vuelta en bus cama real, con coordinador. Vos elegís tu alojamiento en Brasil según tu presupuesto y preferencias. En caso de necesitar alojamiento, podemos asesorarte con los mejores alojamientos al mejor precio.',
    },
    {
      question: '¿Qué incluye exactamente el servicio a Brasil?',
      answer: 'Incluye: traslado ida y vuelta, butaca CAMA real (no semicama), coordinador durante todo el viaje, salidas garantizadas todos los domingos, y viajás en nuestra flota propia de buses nuevos.',
    },
    {
      question: '¿Desde dónde sale el bus a Brasil?',
      answer: 'El punto principal de salida es la Terminal de Córdoba (Capital). También hacemos embarques en Villa María, Rosario, Santa Fe y podemos coordinar otros puntos. Consultá disponibilidad por WhatsApp.',
    },
    {
      question: '¿Cuándo son las salidas a Brasil?',
      answer: 'Las salidas son todos los DOMINGOS durante los meses de enero, febrero, marzo y abril. Es importante reservar con anticipación para asegurar tu lugar.',
    },
    {
      question: '¿Cómo hago la reserva para Brasil?',
      answer: 'Contactanos por WhatsApp al 351 717 1672. Te vamos a pedir: fecha de viaje (domingo), punto de embarque, cantidad de pasajeros y datos personales. Luego coordinamos el pago y confirmamos tu reserva.',
    },
    {
      question: '¿Qué formas de pago aceptan?',
      answer: 'Trabajamos con transferencia y efectivo, en pesos argentinos o dólares.',
    },
    {
      question: '¿Por qué el precio es más bajo que otras agencias?',
      answer: 'Porque somos dueños de la flota. No hay intermediarios ni comisiones de agencia. Vendemos directamente, por eso podemos ofrecer el mejor precio del mercado sin sacrificar calidad.',
    },
    {
      question: '¿Qué diferencia hay entre "bus cama" y "semicama"?',
      answer: 'En un semicama, el respaldo se reclina parcialmente. En nuestro BUS CAMA, las butacas se reclinan mucho más. Es descanso verdadero, como dormir en tu cama.',
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className={styles.faq} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>❓ Preguntas Frecuentes</span>
          <h2>Respondemos tus Dudas</h2>
          <p className={styles.subtitle}>
            Si tenés alguna otra consulta, no dudes en escribirnos por WhatsApp
          </p>
        </motion.div>

        <motion.div
          className={styles.faqList}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <button
                className={styles.question}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <FaChevronDown className={styles.icon} />
              </button>
              <motion.div
                className={styles.answer}
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <p>{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
