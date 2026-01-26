'use client'

import { motion } from 'framer-motion'

const PortfolioHero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-primary-beige via-white to-primary-pink/20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-brand-dark mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Explore our collection of successful projects across web development, design, and handcrafted creations. Each piece tells a unique story of creativity and craftsmanship.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioHero