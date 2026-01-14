import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import BrazilOffer from '@/components/BrazilOffer'
import Fleet from '@/components/Fleet'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrazilOffer />
        <Fleet />
        <Services />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
