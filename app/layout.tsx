import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { clinic, clinicJsonLd, siteUrl } from '@/lib/site'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Clínica Odontológica Dr. Paulo Sérgio I. Moreira | Centro de Pelotas',
  description:
    'Equipe multidisciplinar de odontologia no centro de Pelotas. Atendimento humanizado e personalizado em espaço próprio e moderno. Agende pelo WhatsApp.',
  generator: 'v0.app',
  keywords: [
    'dentista Pelotas',
    'clínica odontológica Pelotas',
    'implantes',
    'ortodontia',
    'Dr. Paulo Sérgio Moreira',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Clínica Odontológica Dr. Paulo Sérgio I. Moreira',
    description:
      'Equipe multidisciplinar de odontologia no centro de Pelotas. Atendimento humanizado e personalizado.',
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: clinic.name,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: clinic.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clínica Odontológica Dr. Paulo Sérgio I. Moreira',
    description:
      'Equipe multidisciplinar de odontologia no centro de Pelotas. Atendimento humanizado e personalizado.',
    images: ['/images/og-image.jpg'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicJsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
