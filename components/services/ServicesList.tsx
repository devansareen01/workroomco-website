'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Code, 
  Palette, 
  Gift, 
  Calendar, 
  Globe, 
  Smartphone, 
  Brush, 
  Image as ImageIcon,
  Heart,
  Cake,
  ArrowRight 
} from 'lucide-react'

const ServicesList = () => {
  const services = [
    {
      category: 'Web Development',
      icon: Code,
      color: 'from-blue-500 to-purple-600',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
      items: [
        { icon: Globe, title: 'Business Websites', description: 'Professional websites that represent your brand perfectly' },
        { icon: Code, title: 'Landing Pages', description: 'High-converting landing pages optimized for results' },
        { icon: Smartphone, title: 'Portfolio Sites', description: 'Stunning portfolios that showcase your work beautifully' },
        { icon: Globe, title: 'Custom Web Applications', description: 'Tailored web solutions for your specific needs' }
      ]
    },
    {
      category: 'UI/UX & Graphic Design',
      icon: Palette,
      color: 'from-pink-500 to-rose-600',
      description: 'Beautiful interfaces and visual communications that captivate and engage your audience.',
      items: [
        { icon: Smartphone, title: 'UI Design', description: 'Intuitive user interfaces that delight users' },
        { icon: Palette, title: 'App & Web UX', description: 'User experiences that convert and retain' },
        { icon: Brush, title: 'Branding', description: 'Complete brand identity packages' },
        { icon: ImageIcon, title: 'Logos & Graphics', description: 'Memorable logos and marketing materials' }
      ]
    },
    {
      category: 'Handmade Crafts & Cards',
      icon: Gift,
      color: 'from-green-500 to-emerald-600',
      description: 'Unique handcrafted items made with love, care, and attention to every detail.',
      items: [
        { icon: Heart, title: 'Greeting Cards', description: 'Personalized cards for every occasion' },
        { icon: Gift, title: 'Gift Hampers', description: 'Curated gift collections beautifully packaged' },
        { icon: ImageIcon, title: 'Scrapbooks', description: 'Custom memory books to treasure forever' },
        { icon: Heart, title: 'Custom Handmade Gifts', description: 'One-of-a-kind creations just for you' }
      ]
    },
    {
      category: 'Event Custom Work',
      icon: Calendar,
      color: 'from-orange-500 to-red-600',
      description: 'Specialized designs for birthdays, weddings, and special events to make moments memorable.',
      items: [
        { icon: Cake, title: 'Birthday Designs', description: 'Custom birthday decorations and themes' },
        { icon: Heart, title: 'Wedding Designs', description: 'Elegant wedding stationery and decor' },
        { icon: Calendar, title: 'Invitation Cards', description: 'Beautiful invitations for any event' },
        { icon: Gift, title: 'Event Gift Packs', description: 'Themed gift packages for special occasions' }
      ]
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Service Header */}
              <div className="text-center mb-16">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} mb-6`}>
                  <service.icon className="text-white" size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brand-dark mb-4">
                  {service.category}
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {service.description}
                </p>
              </div>

              {/* Service Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {service.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="text-white" size={20} />
                      </div>

                      {/* Content */}
                      <h3 className="text-lg font-bold text-brand-dark mb-3 group-hover:text-primary-pink transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* CTA */}
                      <Link 
                        href="/contact" 
                        className="inline-flex items-center text-brand-dark hover:text-primary-pink transition-colors font-medium text-sm group"
                      >
                        Request Quote
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesList