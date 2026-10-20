import { Metadata } from 'next'
import AboutHero from '@/components/about/AboutHero'
import AboutStory from '@/components/about/AboutStory'
import AboutMission from '@/components/about/AboutMission'
import AboutProcess from '@/components/about/AboutProcess'
import ContactCTA from '@/components/sections/ContactCTA'

export const metadata: Metadata = {
  title: 'About Us - Workroom',
  description: 'Learn about Workroom\'s mission, vision, and the passionate team behind our creative services and handmade products.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutMission />
      <AboutProcess />
      <ContactCTA />
    </>
  )
}