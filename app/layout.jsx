import './globals.scss'

export const metadata = {
  title: 'MALBA VIAJES SRL - Brasil en Bus CAMA desde Córdoba | Alquiler de Colectivos y Combis',
  description: 'Viajes a Brasil (Camboriú, Florianópolis, Canasvieiras) en bus cama real desde Córdoba por USD 220. Salidas todos los domingos. Flota propia, máxima comodidad. También alquiler de colectivos, minibuses, combis y autos.',
  keywords: 'brasil en bus, bus cama cordoba, viajes brasil cordoba, camboriu desde cordoba, florianopolis bus, canasvieiras, transporte de pasajeros, bus cama real, alquiler de colectivos, alquiler de combis, alquiler de minibuses, alquiler de autos, malba viajes',
  authors: [{ name: 'MALBA VIAJES SRL' }],
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'MALBA VIAJES SRL - Brasil en Bus CAMA desde Córdoba',
    description: 'Viajes a Brasil en bus cama real por USD 220. Flota propia, salidas todos los domingos. Camboriú, Florianópolis, Canasvieiras.',
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MALBA VIAJES SRL - Brasil en Bus CAMA desde Córdoba',
    description: 'Viajes a Brasil en bus cama real por USD 220. Flota propia, salidas todos los domingos.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1f3188',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
