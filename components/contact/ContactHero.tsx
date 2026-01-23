'use client'

import { motion } from 'framer-motion'

const ContactHero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-primary-beige via-white to-primary-pink/20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-primary-charcoal mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Ready to start your next project? We'd love to hear from you. Get in touch and let's create something amazing together.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactHero