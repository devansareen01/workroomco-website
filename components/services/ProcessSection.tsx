'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Palette, Code, Truck } from 'lucide-react'

const ProcessSection = () => {
  const steps = [
    {
      number: '1',
      title: 'Idea',
      icon: Lightbulb,
      description: 'We start by understanding your vision, goals, and requirements through detailed consultation.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      number: '2',
      title: 'Design',
      icon: Palette,
      description: 'Our creative team develops concepts, wireframes, and designs that bring your ideas to life.',
      color: 'from-pink-500 to-rose-600'
    },
    {
      number: '3',
      title: 'Develop',
      icon: Code,
      description: 'We build, craft, or code your project using the best practices and premium materials.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      number: '4',
      title: 'Deliver',
      icon: Truck,
      description: 'Final testing, quality assurance, and delivery of your completed project with full support.',
      color: 'from-orange-500 to-red-600'
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
            Our Work Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial concept to final delivery, we follow a proven process that ensures exceptional results every time.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
   
          <div
            className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-pink to-brand-yellow transform -translate-y-1/2 -z-10"
          ></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="text-center">
                  {/* Step Number */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center relative z-10`}>
                      <step.icon className="text-white" size={28} />
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full border-4 border-gray-100"></div>
                    <div className="absolute -top-2 left-12 w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center text-white text-sm font-bold z-20">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-brand-dark mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-gray-200"
        >
          {[
            { number: '7-14', label: 'Days Average Delivery' },
            { number: '100%', label: 'Quality Guarantee' },
            { number: '24/7', label: 'Support Available' },
            { number: '98%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ProcessSection