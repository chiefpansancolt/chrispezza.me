import Head from 'next/head'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Work from '@/components/Work'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Christopher Pezza | Architect, Developer, Husband, Father, Streamer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Christopher Pezza Portfolio site showcasing Work, Education, Experience, and Skills"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
        <About />
        <Work />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
