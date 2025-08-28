import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold">SuppBridge</span>
            </div>
            <p className="text-secondary-300 text-sm leading-relaxed">
              Supporting 0-1 innovative enterprises and helping businesses test new products with confidence.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/product-testing" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Product Testing
                </Link>
              </li>
              <li>
                <Link href="/services/market-validation" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Market Validation
                </Link>
              </li>
              <li>
                <Link href="/services/innovation-consulting" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Innovation Consulting
                </Link>
              </li>
              <li>
                <Link href="/services/startup-support" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Startup Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary-400" />
                <span className="text-secondary-300 text-sm">info@suppbridge.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary-400" />
                <span className="text-secondary-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary-400" />
                <span className="text-secondary-300 text-sm">123 Bridge Street, City, State</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary-400 text-sm">
              © 2024 SuppBridge. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-secondary-400 hover:text-primary-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-secondary-400 hover:text-primary-400 transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
