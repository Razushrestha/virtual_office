'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { SEOKeywords } from '../../components/seo/SEOKeywords'
import { BookOpen, Users, Globe, GraduationCap, FileText, Award, Phone, Mail } from 'lucide-react'

export default function NepaliPage() {
  const nepaliTerms = [
    {
      english: 'Consultancy',
      nepali: 'परामर्श सेवा',
      pronunciation: 'Paramarsha Seva',
      definition: 'विदेशी अध्ययनका लागि सल्लाह र मार्गदर्शन प्रदान गर्ने सेवा'
    },
    {
      english: 'Study Abroad',
      nepali: 'विदेशी अध्ययन',
      pronunciation: 'Videshi Adhyayan',
      definition: 'अन्य देशमा गएर उच्च शिक्षा प्राप्त गर्ने प्रक्रिया'
    },
    {
      english: 'Visa Application',
      nepali: 'भिसा आवेदन',
      pronunciation: 'Visa Aavedan',
      definition: 'अन्य देशमा प्रवेश पाउनका लागि आधिकारिक अनुमति माग्ने प्रक्रिया'
    },
    {
      english: 'University',
      nepali: 'विश्वविद्यालय',
      pronunciation: 'Vishwavidyalaya',
      definition: 'उच्च शिक्षा प्रदान गर्ने शैक्षिक संस्था'
    },
    {
      english: 'Scholarship',
      nepali: 'छात्रवृत्ति',
      pronunciation: 'Chhatrabritti',
      definition: 'शिक्षाका लागि आर्थिक सहयोग वा अनुदान'
    },
    {
      english: 'Application',
      nepali: 'आवेदन',
      pronunciation: 'Aavedan',
      definition: 'कुनै सेवा वा अवसरका लागि औपचारिक अनुरोध'
    }
  ]

  const services = [
    {
      title: 'नि:शुल्क परामर्श',
      titleEn: 'Free Consultation',
      description: 'विशेषज्ञ सल्लाहकारहरूसँग नि:शुल्क छलफल',
      descriptionEn: 'Free discussion with expert counselors'
    },
    {
      title: 'विश्वविद्यालय छनोट',
      titleEn: 'University Selection',
      description: 'तपाईंको प्रोफाइल अनुसार उत्तम विश्वविद्यालय छनोट',
      descriptionEn: 'Best university selection according to your profile'
    },
    {
      title: 'भिसा सहायता',
      titleEn: 'Visa Assistance',
      description: 'भिसा आवेदनदेखि अनुमोदनसम्मको पूर्ण सहयोग',
      descriptionEn: 'Complete support from visa application to approval'
    },
    {
      title: 'कागजात तयारी',
      titleEn: 'Document Preparation',
      description: 'आवश्यक कागजातहरूको तयारी र प्रमाणीकरण',
      descriptionEn: 'Preparation and verification of required documents'
    }
  ]

  return (
    <>
      <SEOKeywords page="nepali" location="kathmandu" />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-orange-200 to-red-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse opacity-30"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-green-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse opacity-30" style={{ animationDelay: '2s' }}></div>
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <BookOpen className="w-4 h-4" />
                नेपाली भाषामा शिक्षा परामर्श
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                  परामर्श सेवा
                </span>
                <span className="text-2xl md:text-3xl block mt-2">Consultancy Meaning in Nepali</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                नेपाली भाषामा शिक्षा सम्बन्धी सर्तहरू र विदेशी अध्ययनका लागि आवश्यक जानकारी। 
                <br />
                <span className="text-gray-500">Learn education terms in Nepali and get expert guidance for studying abroad.</span>
              </motion.p>
            </div>
          </motion.div>

          {/* Terms Dictionary */}
          <motion.div 
            className="py-16 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="mx-auto max-w-7xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  शिक्षा सम्बन्धी नेपाली शब्दकोश
                </h2>
                <p className="text-gray-600">Education Terms in Nepali Dictionary</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {nepaliTerms.map((term, index) => (
                  <motion.div
                    key={term.english}
                    className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{term.english}</h3>
                      <div className="text-2xl font-bold text-orange-600 mb-1">{term.nepali}</div>
                      <div className="text-sm text-gray-500 italic">({term.pronunciation})</div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{term.definition}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Services in Nepali */}
          <motion.div 
            className="py-16 px-6 bg-white/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            <div className="mx-auto max-w-7xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  हाम्रा सेवाहरू
                </h2>
                <p className="text-gray-600">Our Services</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={service.titleEn}
                    className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-500 mb-3">{service.titleEn}</p>
                    <p className="text-gray-600 text-sm mb-2">{service.description}</p>
                    <p className="text-gray-500 text-xs">{service.descriptionEn}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact in Nepali */}
          <motion.div 
            className="py-20 px-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <div className="mx-auto max-w-4xl">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-12 text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  सम्पर्क गर्नुहोस्
                </h2>
                <p className="text-lg mb-2 opacity-90">Contact Us</p>
                <p className="text-xl mb-8 opacity-90">
                  नि:शुल्क परामर्शका लागि आज नै सम्पर्क गर्नुहोस्।
                  <br />
                  <span className="text-lg">Contact us today for free consultation.</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-white text-orange-600 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300 flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    फोन गर्नुहोस् / Call Now
                  </button>
                  <button className="px-8 py-4 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                    <Mail className="w-5 h-5" />
                    इमेल पठाउनुहोस् / Send Email
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