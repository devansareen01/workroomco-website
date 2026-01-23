import { Metadata } from 'next'
import ServicesHero from '@/components/services/ServicesHero'
import ServicesList from '@/components/services/ServicesList'
import ProcessSection from '@/components/services/ProcessSection'
import ContactCTA from '@/components/sections/ContactCTA'

export const metadata: Metadata = {
  title: 'Our Services - Workroomco',
  description: 'Comprehensive creative services including web development, UI/UX design, graphic design, handmade crafts, and custom event orders.',
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ProcessSection />
      <ContactCTA />
    </>
  )
}