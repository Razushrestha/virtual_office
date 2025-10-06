'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, Heart, ArrowRight } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const quickLinks = [
    { name: 'AI University Finder', href: '/ai-finder' },
    { name: 'Study Abroad Services', href: '/services' },
    { name: 'Expert Counsellors', href: '/counsellors' },
    { name: 'Success Stories', href: '/success' },
    { name: 'University Partners', href: '/partners' },
    { name: 'Scholarship Guide', href: '/scholarships' }
  ]

  const studyDestinations = [
    { name: 'Study in USA', href: '/destinations/usa' },
    { name: 'Study in UK', href: '/destinations/uk' },
    { name: 'Study in Canada', href: '/destinations/canada' },
    { name: 'Study in Australia', href: '/destinations/australia' },
    { name: 'Study in Germany', href: '/destinations/germany' },
    { name: 'Study in Ireland', href: '/destinations/ireland' }
  ]

  const resources = [
    { name: 'Student Blog', href: '/blog' },
    { name: 'University Rankings', href: '/rankings' },
    { name: 'Cost Calculator', href: '/calculator' },
    { name: 'IELTS Preparation', href: '/ielts' },
    { name: 'Visa Guide', href: '/visa' },
    { name: 'FAQ', href: '/faq' }
  ]

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/virtualoffice', color: 'hover:text-blue-600' },
    { icon: Twitter, href: 'https://twitter.com/virtualoffice', color: 'hover:text-blue-400' },
    { icon: Linkedin, href: 'https://linkedin.com/company/virtualoffice', color: 'hover:text-blue-700' },
    { icon: Instagram, href: 'https://instagram.com/virtualoffice', color: 'hover:text-pink-600' },
    { icon: Youtube, href: 'https://youtube.com/virtualoffice', color: 'hover:text-red-600' }
  ]

  return (
    <motion.footer 
      className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 right-1/3 w-80 h-80 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative">
        {/* Newsletter Section */}
        <motion.div 
          className="border-b border-slate-200/50 py-16"
          variants={fadeInUp}
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-12 text-white">
              <div className="mx-auto max-w-2xl text-center">
                <motion.h3 
                  className="text-3xl font-bold mb-4"
                  variants={fadeInUp}
                >
                  Stay Updated with Study Abroad News
                </motion.h3>
                <motion.p 
                  className="text-blue-100 mb-8 text-lg"
                  variants={fadeInUp}
                >
                  Get the latest updates on universities, scholarships, visa changes, and exclusive study abroad opportunities.
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                  variants={fadeInUp}
                >
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
                  />
                  <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 group">
                    Subscribe
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-5">
              {/* Company Info */}
              <motion.div 
                className="lg:col-span-2"
                variants={fadeInUp}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">VO</span>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Virtual Office
                  </h3>
                </div>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Your trusted partner in international education. We use AI technology combined with expert counseling to help students find their perfect university match in just 30 seconds.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">+1 (555) 123-4567</div>
                      <div className="text-sm">24/7 Student Support</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">hello@virtualoffice.edu</div>
                      <div className="text-sm">Get in touch with us</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">New York, NY 10001</div>
                      <div className="text-sm">Visit our office</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div variants={fadeInUp}>
                <h4 className="text-lg font-bold text-gray-900 mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href} 
                        className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Study Destinations */}
              <motion.div variants={fadeInUp}>
                <h4 className="text-lg font-bold text-gray-900 mb-6">Study Destinations</h4>
                <ul className="space-y-3">
                  {studyDestinations.map((destination, index) => (
                    <li key={index}>
                      <a 
                        href={destination.href} 
                        className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {destination.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Resources */}
              <motion.div variants={fadeInUp}>
                <h4 className="text-lg font-bold text-gray-900 mb-6">Resources</h4>
                <ul className="space-y-3">
                  {resources.map((resource, index) => (
                    <li key={index}>
                      <a 
                        href={resource.href} 
                        className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {resource.name}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Social Links */}
                <div className="mt-8">
                  <h5 className="text-sm font-semibold text-gray-900 mb-4">Follow Us</h5>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon
                      return (
                        <a
                          key={index}
                          href={social.href}
                          className={`w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-600 ${social.color} transition-all hover:shadow-lg hover:-translate-y-1`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon className="w-4 h-4" />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-slate-200/50 py-8"
          variants={fadeInUp}
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <span>© {currentYear} Virtual Office. Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>for students worldwide.</span>
              </div>
              <div className="flex gap-8 text-sm text-gray-600">
                <a href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</a>
                <a href="/cookies" className="hover:text-blue-600 transition-colors">Cookie Policy</a>
                <a href="/accessibility" className="hover:text-blue-600 transition-colors">Accessibility</a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}