'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Harpreet Kaur',
      role: 'Founder, Phulkari Threads — Ludhiana',
      content: 'Workroomco built our boutique website from scratch and it finally feels like our brand. Customers from Canada and the UK now order directly through the site. Very professional and always available on WhatsApp.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Rohan & Ananya Malhotra',
      role: 'Wedding Clients — Chandigarh',
      content: 'Our handmade wedding invitations were the talk of the shaadi! Every card was crafted with so much love and detail. Both our families kept asking who designed them.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Arjun Mehta',
      role: 'Co-founder, ChaiCraft Café — Delhi',
      content: 'They designed our logo, menu and Instagram creatives. The branding feels premium yet warm, exactly what we wanted for our café. Footfall went up noticeably after the launch.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Priya Sharma',
      role: 'Mother of the Birthday Girl — Amritsar',
      content: 'The birthday theme decor and custom gift hampers made my daughter\'s first birthday so special. Everything matched perfectly and was delivered on time. Highly recommended!',
      rating: 5,
    },
    {
      id: 5,
      name: 'Vikram Iyer',
      role: 'Product Manager, FinEdge Solutions — Bengaluru',
      content: 'The UI/UX redesign of our dashboard was thoughtful and clean. The team understood our users and turned complex flows into something simple. Great communication throughout.',
      rating: 5,
    },
    {
      id: 6,
      name: 'Sneha Kapoor',
      role: 'Wellness Coach — Mumbai',
      content: 'I got a scrapbook made for my parents\' 25th anniversary and they were in tears. Such a personal, beautiful piece of work. Will definitely order again for Diwali gifting.',
      rating: 5,
    },
  ]

  const initials = (name: string) =>
    name
      .split(/\s|&/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join('')
      .toUpperCase()

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
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative h-full">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-gradient-to-r from-brand-pink to-brand-yellow rounded-full flex items-center justify-center">
                    <Quote className="text-white" size={16} />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4 pt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-brand-pink fill-current" size={20} />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-pink to-brand-yellow text-brand-ivory font-semibold flex items-center justify-center mr-4 flex-shrink-0">
                    {initials(testimonial.name)}
                  </div>
                  <div>
                    <div className="font-bold text-brand-dark">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200"
        >
          {[
            { number: '98%', label: 'Client Satisfaction' },
            { number: '100+', label: 'Projects Delivered' },
            { number: '50+', label: 'Happy Clients' },
            { number: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-dark mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials