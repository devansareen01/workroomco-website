'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Clock, DollarSign, Heart, Headphones } from 'lucide-react'

const WhyChooseUs = () => {
  const features = [
    {
      icon: CheckCircle,
      title: 'Custom Solutions',
      description: 'Tailored services that perfectly match your unique requirements and vision.',
    },
    {
      icon: Heart,
      title: 'Premium Design',
      description: 'High-quality, elegant designs that stand out and make lasting impressions.',
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising on quality or attention to detail.',
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Competitive rates that provide excellent value for premium creative services.',
    },
    {
      icon: Headphones,
      title: 'Personal Support',
      description: '24/7 dedicated support to ensure your complete satisfaction throughout the process.',
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary-beige to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-brand-dark mb-6">
              Why Choose <span className="gradient-text">Workroomco</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              We combine creativity, technology, and craftsmanship to deliver exceptional results that exceed expectations. Here's what sets us apart:
            </p>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-brand-pink to-brand-yellow 
rounded-xl flex items-center justify-center 
shadow-md transition-transform duration-300 hover:scale-105 hover:brightness-110
">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
             {/* Main Card */}
<div className="glass-card p-8 relative z-10">
  <div className="text-center">
    <div className="text-4xl font-bold text-brand-dark mb-2">98%</div>
    <div className="text-gray-600 mb-6">Client Satisfaction Rate</div>
    
    <div className="grid grid-cols-2 gap-4 text-center">
      <div>
        <div className="text-2xl font-bold text-brand-pink mb-1">100+</div>
        <div className="text-sm text-gray-600">Projects</div>
      </div>
      <div>
        <div className="text-2xl font-bold text-brand-yellow mb-1">50+</div>
        <div className="text-sm text-gray-600">Clients</div>
      </div>
    </div>
  </div>
</div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary-pink/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand-yellow/20 rounded-full blur-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs