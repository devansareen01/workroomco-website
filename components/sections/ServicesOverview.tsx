'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Code, Palette, Gift, Calendar, ArrowRight } from 'lucide-react'

const ServicesOverview = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites, web applications, and digital solutions built with modern technologies.',
      features: ['Responsive Design', 'Fast Performance', 'SEO Optimized', 'Mobile First'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Palette,
      title: 'UI/UX & Graphic Design',
      description: 'Beautiful interfaces, brand identity, and visual communications that captivate your audience.',
      features: ['Brand Identity', 'UI/UX Design', 'Print Design', 'Social Media'],
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: Gift,
      title: 'Handmade Crafts',
      description: 'Unique handcrafted items, greeting cards, and personalized gifts made with love and care.',
      features: ['Greeting Cards', 'Gift Hampers', 'Scrapbooks', 'Custom Gifts'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Calendar,
      title: 'Custom Event Orders',
      description: 'Specialized designs for birthdays, weddings, and special events to make your moments memorable.',
      features: ['Birthday Designs', 'Wedding Cards', 'Invitations', 'Event Packages'],
      color: 'from-orange-500 to-red-600'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-primary-charcoal mb-6">
            Our Creative Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From digital solutions to handcrafted treasures, we offer a comprehensive range of creative services to bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-white" size={28} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-primary-charcoal mb-4 group-hover:text-primary-pink transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-primary-gold rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link 
                  href="/services" 
                  className="inline-flex items-center text-primary-charcoal hover:text-primary-pink transition-colors font-medium group"
                >
                  Learn More
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesOverview