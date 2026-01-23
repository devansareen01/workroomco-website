'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Eye, X } from 'lucide-react'

const PortfolioGallery = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const filters = ['All', 'Web', 'UI/UX', 'Graphics', 'Handmade Crafts']

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'Web',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      description: 'Modern e-commerce solution with seamless user experience and advanced features.',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Stripe'],
      link: '#'
    },
    {
      id: 2,
      title: 'Brand Identity Design',
      category: 'Graphics',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      description: 'Complete brand identity package for luxury fashion brand including logo, colors, and guidelines.',
      technologies: ['Adobe Illustrator', 'Photoshop', 'Brand Guidelines'],
      link: '#'
    },
    {
      id: 3,
      title: 'Wedding Invitation Suite',
      category: 'Handmade Crafts',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop',
      description: 'Elegant handcrafted wedding invitations with gold foiling and custom calligraphy.',
      technologies: ['Hand Lettering', 'Gold Foiling', 'Premium Paper'],
      link: '#'
    },
    {
      id: 4,
      title: 'Mobile App UI/UX',
      category: 'UI/UX',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      description: 'Intuitive mobile app design for fitness tracking with clean interface and smooth interactions.',
      technologies: ['Figma', 'Prototyping', 'User Research', 'Design System'],
      link: '#'
    },
    {
      id: 5,
      title: 'Restaurant Website',
      category: 'Web',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
      description: 'Responsive restaurant website with online ordering system and reservation management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Payment Integration'],
      link: '#'
    },
    {
      id: 6,
      title: 'Corporate Brochure',
      category: 'Graphics',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop',
      description: 'Professional corporate brochure design with modern layout and compelling visuals.',
      technologies: ['InDesign', 'Photoshop', 'Print Design'],
      link: '#'
    },
    {
      id: 7,
      title: 'Custom Gift Hampers',
      category: 'Handmade Crafts',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop',
      description: 'Personalized gift hampers for corporate events with custom packaging and branding.',
      technologies: ['Custom Packaging', 'Branding', 'Product Curation'],
      link: '#'
    },
    {
      id: 8,
      title: 'Dashboard UI Design',
      category: 'UI/UX',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      description: 'Clean and intuitive dashboard design for analytics platform with data visualization.',
      technologies: ['Figma', 'Data Visualization', 'Component Library'],
      link: '#'
    }
  ]

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-primary-pink to-primary-gold text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                          <Eye size={20} />
                        </button>
                        <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                          <ExternalLink size={20} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="text-sm text-primary-pink font-medium mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold text-primary-charcoal mb-3 group-hover:text-primary-pink transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="relative">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    width={800}
                    height={400}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="text-sm text-primary-pink font-medium mb-2">
                    {selectedProject.category}
                  </div>
                  <h2 className="text-3xl font-bold text-primary-charcoal mb-4">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-primary-charcoal mb-3">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={selectedProject.link}
                      className="btn-primary text-center"
                    >
                      View Project
                    </a>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="btn-secondary text-center"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default PortfolioGallery