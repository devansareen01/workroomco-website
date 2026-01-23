import { Metadata } from 'next'
import PortfolioHero from '@/components/portfolio/PortfolioHero'
import PortfolioGallery from '@/components/portfolio/PortfolioGallery'
import ContactCTA from '@/components/sections/ContactCTA'

export const metadata: Metadata = {
  title: 'Portfolio - Workroomco',
  description: 'Explore our portfolio of successful projects across web development, UI/UX design, graphic design, and handmade crafts.',
}

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGallery />
      <ContactCTA />
    </>
  )
}