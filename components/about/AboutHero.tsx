'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const AboutHero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-primary-beige via-white to-primary-pink/20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-brand-dark mb-6">
              About <span className="gradient-text">Workroomco</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              We are passionate creators who believe in the power of design, technology, and craftsmanship to transform ideas into beautiful realities.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded with a vision to bridge the gap between digital innovation and traditional craftsmanship, Workroomco has grown into a creative studio that serves clients worldwide with premium quality services.
            </p>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Team collaboration"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-pink/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-yellow/20 rounded-full blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero