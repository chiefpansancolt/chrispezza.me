import '@/styles/global.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Christopher Pezza | Architect, Developer, Husband, Father',
  description:
    'Christopher Pezza Portfolio site showcasing Work, Education, Experience, and Skills.',
  keywords: 'chris pezza, Chiefpansancolt, Portfolio, Development, Salesforce',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        {children}
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "c040d9900f0a48d48fc10fdbb06b6c97"}'
        />
      </body>
    </html>
  )
}
