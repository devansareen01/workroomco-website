'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

const HeroSection = () => {
  return (
    <div className="relative w-full overflow-x-clip">
      <section className="min-h-screen flex items-center justify-center relative w-full">
        {/* Background Elements - COMPLETELY CONTAINED */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="relative w-full h-full max-w-[100vw] mx-auto">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-primary-pink/10 rounded-full blur-3xl"
              style={{ 
                maxWidth: 'min(40vw, 300px)',
                maxHeight: 'min(40vw, 300px)'
              }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-brand-yellow/10 rounded-full blur-3xl"
              style={{ 
                maxWidth: 'min(50vw, 400px)',
                maxHeight: 'min(50vw, 400px)'
              }}
            />
          </div>
        </div>

        {/* Background gradient - FIXED */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary-beige via-white to-primary-pink/20 z-0"></div>

        <div className="container-custom relative z-10 text-center w-full px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl mx-auto"
          >
            {/* Badge */}
        <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.2, duration: 0.6 }}
  className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 sm:px-6 sm:py-3 rounded-full mt-16 sm:mt-8 mb-6 sm:mb-8 shadow-lg"
>
  <Sparkles className="text-brand-yellow w-4 h-4 sm:w-5 sm:h-5" />
  <span className="text-brand-dark font-medium text-sm sm:text-base">
    Premium Creative Services
  </span>
</motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-brand-dark mb-6 leading-tight break-words px-2"
            >
              Design. Develop.
              <br />
              <span className="gradient-text">Craft. Create.</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto px-2"
            >
              All Under One Roof. We bring your creative visions to life with premium quality and personalized service.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
            >
              <Link 
                href="/services" 
                className="btn-primary group w-full sm:w-auto"
                style={{ maxWidth: '200px' }}
              >
                View Services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link 
                href="/contact" 
                className="btn-secondary w-full sm:w-auto"
                style={{ maxWidth: '200px' }}
              >
                Get Quote
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-gray-200 w-full max-w-4xl mx-auto"
            >
              {[
                { number: '100+', label: 'Projects Completed' },
                { number: '50+', label: 'Happy Clients' },
                { number: '4+', label: 'Services Offered' },
                { number: '24/7', label: 'Support Available' },
              ].map((stat, index) => (
                <div key={index} className="text-center px-1">
                  <div className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-brand-dark rounded-full flex justify-center">
            <div className="w-1 h-3 bg-brand-dark rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default HeroSection