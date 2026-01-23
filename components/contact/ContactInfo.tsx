'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, Clock, MapPin, MessageCircle, Instagram } from 'lucide-react'

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['6239684682', '9815748083'],
      description: 'Call us directly for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['devansareen6@gmail.com'],
      description: 'Send us an email and we\'ll respond within 24 hours'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      details: ['@workroom_co'],
      description: 'Follow us for latest updates and behind-the-scenes content',
      link: 'https://www.instagram.com/workroom_co/'
    },
    {
      icon: Clock,
      title: 'Response Time',
      details: ['Within 24 hours'],
      description: 'We pride ourselves on quick response times'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: ['Quick Chat Available'],
      description: 'Click the floating button for instant messaging'
    }
  ]

  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer: 'Most projects are completed within 7-14 days, depending on complexity and requirements.'
    },
    {
      question: 'Do you offer revisions?',
      answer: 'Yes, we include up to 3 rounds of revisions in all our packages to ensure your complete satisfaction.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept bank transfers, UPI, and major credit cards. Payment terms are flexible based on project scope.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Absolutely! We serve clients worldwide and can accommodate different time zones and communication preferences.'
    }
  ]

  return (
    <section className="bg-gradient-to-br from-primary-beige to-white py-16">
      <div className="container-custom max-w-2xl">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-primary-charcoal mb-8">
            Get in Touch
          </h2>

          {/* Contact Methods */}
          <div className="space-y-6 mb-12">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-pink to-primary-gold rounded-xl flex items-center justify-center">
                  <method.icon className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-charcoal mb-2">
                    {method.title}
                  </h3>
                  <div className="space-y-1 mb-2">
                    {method.details.map((detail, idx) => (
                      <div key={idx} className="text-primary-pink font-medium">
                        {method.link ? (
                          <a 
                            href={method.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-primary-gold transition-colors"
                          >
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {method.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-primary-charcoal mb-6">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <h4 className="text-lg font-semibold text-primary-charcoal mb-3">
                    {faq.question}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 p-6 bg-gradient-to-r from-primary-charcoal to-gray-900 rounded-2xl text-white"
          >
            <div className="flex items-center space-x-3 mb-4">
              <Clock className="text-primary-gold" size={24} />
              <h3 className="text-xl font-bold">Business Hours</h3>
            </div>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              * Emergency support available 24/7 for ongoing projects
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactInfo