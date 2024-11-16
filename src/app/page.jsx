import About from '@/components/About'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import Work from '@/components/Work'

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Certifications />
      <Work />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}
