import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat'

export const metadata: Metadata = {
  metadataBase: new URL('https://workroomco.com'),
  title: 'Workroomco - Design. Develop. Craft. Create',
  description: 'Premium creative services including web development, UI/UX design, graphic design, and handmade crafts. Custom solutions for your business needs.',
  keywords: 'web development, UI/UX design, graphic design, handmade crafts, custom orders, creative services',
  authors: [{ name: 'Workroomco' }],
  openGraph: {
    title: 'Workroomco - Creative Services & Handmade Products',
    description: 'Design. Develop. Craft. Create — All Under One Roof.',
    url: 'https://workroomco.com',
    siteName: 'Workroomco',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workroomco - Creative Services',
    description: 'Design. Develop. Craft. Create — All Under One Roof.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-primary-beige   text-brand-dark">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}