import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Delivery } from '@/components/delivery'
import { Footer } from '@/components/footer'
import { WhatsAppFAB } from '@/components/whatsapp-fab'
import { Header } from '@/components/header'
import { ProductShowcase } from '@/components/product-showcase'
import { About } from '@/components/about-us'
import { Testimonials } from '@/components/testimonials'

export default function Home() {
  return (
    <main id="home">
      <Header />
      <Hero />
      <Services />
      <ProductShowcase />
      <About />
      <Delivery />
      <Testimonials />
      <Footer />
      <WhatsAppFAB />
    </main>
  )
}
