'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Heart } from 'lucide-react'

const AboutMission = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower businesses and individuals by transforming their creative visions into reality through innovative design, cutting-edge technology, and exceptional craftsmanship.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To become the leading creative studio that seamlessly blends digital innovation with traditional artistry, setting new standards for quality and creativity in every project.',
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Quality, creativity, integrity, and client satisfaction are at the core of everything we do. We believe in building lasting relationships through exceptional service and results.',
      color: 'from-green-500 to-emerald-600'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary-beige to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-brand-dark mb-6">
            Mission, Vision & Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our guiding principles that shape every decision we make and every project we undertake.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="text-white" size={28} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-primary-pink transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutMission