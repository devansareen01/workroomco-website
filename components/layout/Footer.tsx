import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-brand-ivory rounded-xl p-2">
                <Image
                  src="/logo.png"
                  alt="Workroomco Logo"
                  width={613}
                  height={380}
                  className="h-9 md:h-10 w-auto object-contain"
                  quality={100}
                />
              </div>
              <span className="text-3xl font-playfair font-bold text-brand-ivory leading-none">Workroomco</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Design. Develop. Craft. Create — All Under One Roof. We bring your creative visions to life with premium quality and personalized service.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/workroom_co/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-pink transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-pink transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-pink transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-ivory">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-ivory">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-gray-300">6239684682</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-gray-300">9815748083</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-gray-300">devansareen6@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2026 Workroomco. All rights reserved. Made with ❤️ for creative minds.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer