'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Lightbulb, Cog, CheckCircle } from 'lucide-react'

const AboutProcess = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Consultation',
      description: 'We start with a detailed discussion to understand your needs, goals, and vision for the project.',
      features: ['Requirement Analysis', 'Goal Setting', 'Timeline Planning']
    },
    {
      icon: Lightbulb,
      title: 'Concept Development',
      description: 'Our creative team develops initial concepts and designs based on your requirements and feedback.',
      features: ['Creative Brainstorming', 'Design Mockups', 'Client Feedback']
    },
    {
      icon: Cog,
      title: 'Production',
      description: 'We bring the approved concepts to life using the best tools, technologies, and materials available.',
      features: ['Development/Crafting', 'Quality Assurance', 'Regular Updates']
    },
    {
      icon: CheckCircle,
      title: 'Delivery & Support',
      description: 'Final delivery of your project with comprehensive support and maintenance as needed.',
      features: ['Final Testing', 'Project Delivery', 'Ongoing Support']
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
            How We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven process ensures that every project is delivered on time, within budget, and exceeds expectations.
          </p>
        </motion.div>

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
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-pink to-primary-gold transform translate-x-4 z-0"></div>
              )}

              <div className="relative z-10 text-center">
                {/* Step Number */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary-pink to-primary-gold rounded-full flex items-center justify-center relative z-10">
                    <step.icon className="text-white" size={24} />
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full border-4 border-gray-100"></div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary-charcoal rounded-full flex items-center justify-center text-white text-xs font-bold z-20">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-primary-charcoal mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {step.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-primary-gold rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutProcess