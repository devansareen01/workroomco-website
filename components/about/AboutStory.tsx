'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Award, Globe } from 'lucide-react'

const AboutStory = () => {
  const stats = [
    { icon: Users, number: '50+', label: 'Happy Clients' },
    { icon: Award, number: '100+', label: 'Projects Completed' },
    { icon: Globe, number: '10+', label: 'Countries Served' },
    { icon: Heart, number: '98%', label: 'Client Satisfaction' }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-primary-charcoal mb-6">
              Our Story
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Workroomco began as a small creative studio with a big dream: to create a space where digital innovation meets traditional craftsmanship. What started as a passion project has evolved into a comprehensive creative service provider.
              </p>
              <p>
                We believe that every project, whether it's a cutting-edge website or a handcrafted wedding invitation, deserves the same level of attention, creativity, and care. This philosophy has guided us through every client relationship and every project we undertake.
              </p>
              <p>
                Today, we're proud to serve clients from around the world, helping them bring their visions to life through our unique blend of technical expertise and artistic craftsmanship.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-white to-primary-beige rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary-pink to-primary-gold rounded-2xl flex items-center justify-center">
                  <stat.icon className="text-white" size={28} />
                </div>
                <div className="text-3xl font-bold text-primary-charcoal mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutStory