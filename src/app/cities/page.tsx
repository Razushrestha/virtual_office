'use client'
import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { SEOKeywords } from '../../components/seo/SEOKeywords'
import { MapPin, Phone, Mail, Clock, Users, Award, Globe, GraduationCap } from 'lucide-react'

export default function NepalCitiesPage() {
  const cities = [
    {
      name: 'Bharatpur',
      district: 'Chitwan',
      population: '280,000+',
      description: 'Major commercial hub and educational center in central Nepal',
      services: ['University Applications', 'Visa Assistance', 'IELTS Preparation', 'Career Counseling'],
      specialization: 'Engineering and Medical Programs',
      contact: '+977-56-530001',
      email: 'bharatpur@virtualoffice.com.np'
    },
    {
      name: 'Birgunj',
      district: 'Parsa',
      population: '240,000+',
      description: 'Border city with strong trade connections and growing student population',
      services: ['Study Abroad Guidance', 'Document Preparation', 'Scholarship Assistance', 'Pre-departure Services'],
      specialization: 'Business and Trade Programs',
      contact: '+977-51-520001',
      email: 'birgunj@virtualoffice.com.np'
    },
    {
      name: 'Dharan',
      district: 'Sunsari',
      population: '170,000+',
      description: 'Educational hub in eastern Nepal with multiple colleges and universities',
      services: ['University Selection', 'Application Processing', 'Language Training', 'Cultural Preparation'],
      specialization: 'Medical and Engineering Fields',
      contact: '+977-25-520001',
      email: 'dharan@virtualoffice.com.np'
    },
    {
      name: 'Janakpur',
      district: 'Dhanusha',
      population: '200,000+',
      description: 'Historic city with growing focus on international education',
      services: ['Career Guidance', 'University Partnerships', 'Student Support', 'Academic Planning'],
      specialization: 'Liberal Arts and Social Sciences',
      contact: '+977-41-520001',
      email: 'janakpur@virtualoffice.com.np'
    },
    {
      name: 'Hetauda',
      district: 'Makwanpur',
      population: '150,000+',
      description: 'Industrial city with emerging educational opportunities',
      services: ['Course Selection', 'Application Support', 'Interview Preparation', 'Visa Guidance'],
      specialization: 'Technical and Vocational Training',
      contact: '+977-57-520001',
      email: 'hetauda@virtualoffice.com.np'
    },
    {
      name: 'Nepalgunj',
      district: 'Banke',
      population: '140,000+',
      description: 'Gateway to western Nepal with diverse student community',
      services: ['International Programs', 'Scholarship Search', 'Document Verification', 'Travel Assistance'],
      specialization: 'Healthcare and Education Programs',
      contact: '+977-81-520001',
      email: 'nepalgunj@virtualoffice.com.np'
    }
  ]

  return (
    <>
      <SEOKeywords page="cities" location="nepal" />
      <Head>
        <title>Education Consultancy Services in Nepal Cities - Bharatpur, Birgunj, Dharan | Virtual Office</title>
        <meta name="description" content="Professional education consultancy services across major Nepal cities including Bharatpur, Birgunj, Dharan, Janakpur, Hetauda, Nepalgunj. Expert study abroad guidance for students in every district." />
        <meta name="keywords" content="education consultancy bharatpur, study abroad birgunj, consultancy dharan, education services janakpur, study abroad hetauda, consultancy nepalgunj, nepal cities education, district wise consultancy services" />
        <meta property="og:title" content="Education Consultancy Services in Nepal Cities" />
        <meta property="og:description" content="Professional education consultancy services across major Nepal cities" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/cities" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-green-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse opacity-30"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse opacity-30" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative">
          {/* Hero Section */}
          <motion.div 
            className="py-20 px-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mx-auto max-w-7xl text-center">
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <MapPin className="w-4 h-4" />
                Serving All Major Cities in Nepal
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Education Consultancy
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Across Nepal Cities
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Professional study abroad guidance and education consultancy services available in major cities across Nepal. Find expert counselors near you.
              </motion.p>
            </div>
          </motion.div>

          {/* Cities Grid */}
          <motion.div 
            className="py-16 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="mx-auto max-w-7xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cities.map((city, index) => (
                  <motion.div
                    key={city.name}
                    className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{city.name}</h3>
                      <div className="flex items-center gap-2 text-gray-600 mb-4">
                        <MapPin className="w-4 h-4" />
                        <span>{city.district} District • {city.population}</span>
                      </div>
                      <p className="text-gray-600">{city.description}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Award className="w-4 h-4 text-blue-600" />
                        Specialization
                      </h4>
                      <p className="text-blue-600 font-medium">{city.specialization}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-green-600" />
                        Services Offered
                      </h4>
                      <ul className="space-y-2">
                        {city.services.map((service, idx) => (
                          <li key={idx} className="text-gray-600 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Phone className="w-4 h-4" />
                          <span className="text-sm">{city.contact}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Mail className="w-4 h-4" />
                          <span className="text-sm">{city.email}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div 
            className="py-20 px-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <div className="mx-auto max-w-4xl">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Can&apos;t Find Your City?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  We provide online consultancy services to students across all districts of Nepal. Get expert guidance from anywhere in the country.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call +977-1-5970777
                  </button>
                  <button className="px-8 py-4 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                    <Mail className="w-5 h-5" />
                    Email Us Today
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}