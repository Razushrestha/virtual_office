'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { SEOKeywords } from '../../components/seo/SEOKeywords'
import { 
  FileText, 
  Send, 
  Shield, 
  Plane, 
  Users, 
  CheckCircle, 
  Star, 
  Clock, 
  DollarSign, 
  Award, 
  Zap, 
  Target, 
  BookOpen, 
  MessageCircle,
  ArrowRight,
  Phone,
  Calendar
} from 'lucide-react'

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const serviceCategories = ['All', 'Applications', 'Documents', 'Visa & Travel', 'Career Support']

  const services = [
    {
      id: 'sop-writing',
      title: 'SOP Writing',
      shortDesc: 'AI-assisted drafts + expert review',
      fullDesc: 'Professional statement of purpose writing with AI-powered initial drafts and expert human review to create compelling narratives.',
      price: '$75',
      originalPrice: '$120',
      icon: FileText,
      gradient: 'from-blue-400 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-50',
      category: 'Applications',
      duration: '3-5 days',
      satisfaction: '98%',
      features: [
        'AI-powered initial draft',
        'Expert writer review & editing',
        'Unlimited revisions',
        'University-specific customization',
        'Plagiarism check included',
        '24/7 support'
      ],
      popular: false,
      savings: 'Save $45',
      testimonial: {
        text: 'The SOP they created helped me get into my dream university. The blend of AI efficiency and human expertise was perfect.',
        author: 'Sarah Chen',
        university: 'Stanford University'
      }
    },
    {
      id: 'application-processing',
      title: 'Complete Application Management',
      shortDesc: 'End-to-end submission & tracking',
      fullDesc: 'Full application management from document preparation to submission tracking with real-time status updates.',
      price: '$199',
      originalPrice: '$280',
      icon: Send,
      gradient: 'from-emerald-400 to-teal-600',
      bgGradient: 'from-emerald-50 to-teal-50',
      category: 'Applications',
      duration: '2-3 weeks',
      satisfaction: '97%',
      features: [
        'Complete application submission',
        'Real-time tracking dashboard',
        'Deadline management',
        'University communication handling',
        'Status update notifications',
        'Document organization'
      ],
      popular: true,
      savings: 'Save $81',
      testimonial: {
        text: 'They handled everything perfectly. I could focus on my studies while they managed all my applications seamlessly.',
        author: 'David Kumar',
        university: 'University of Toronto'
      }
    },
    {
      id: 'document-verification',
      title: 'Smart Document Verification',
      shortDesc: 'OCR scanning & integrity checks',
      fullDesc: 'Advanced document verification using OCR technology and integrity checks to ensure all your documents meet university standards.',
      price: '$49',
      originalPrice: '$75',
      icon: Shield,
      gradient: 'from-amber-400 to-orange-600',
      bgGradient: 'from-amber-50 to-orange-50',
      category: 'Documents',
      duration: '1-2 days',
      satisfaction: '99%',
      features: [
        'OCR scanning technology',
        'Integrity verification',
        'Format compliance check',
        'Error detection & correction',
        'Digital certification',
        'Instant report generation'
      ],
      popular: false,
      savings: 'Save $26',
      testimonial: {
        text: 'Caught several formatting issues that would have delayed my application. Super thorough and fast!',
        author: 'Emma Wilson',
        university: 'Oxford University'
      }
    },
    {
      id: 'visa-guidance',
      title: 'Visa Interview Coaching',
      shortDesc: 'Interview prep & form assistance',
      fullDesc: 'Comprehensive visa preparation including mock interviews, form assistance, and expert guidance to maximize approval chances.',
      price: '$129',
      originalPrice: '$180',
      icon: Plane,
      gradient: 'from-purple-400 to-violet-600',
      bgGradient: 'from-purple-50 to-violet-50',
      category: 'Visa & Travel',
      duration: '1 week',
      satisfaction: '96%',
      features: [
        'Mock interview sessions',
        'Form completion assistance',
        'Document preparation guide',
        'Country-specific guidance',
        'Success rate tracking',
        'Post-interview support'
      ],
      popular: false,
      savings: 'Save $51',
      testimonial: {
        text: 'The mock interviews gave me so much confidence. Got my visa approved on the first try!',
        author: 'Michael Zhang',
        university: 'University of Melbourne'
      }
    },
    {
      id: 'career-counseling',
      title: 'Career Path Consultation',
      shortDesc: 'Expert guidance for career planning',
      fullDesc: 'Personalized career counseling to help you choose the right program and plan your career path with industry insights.',
      price: '$89',
      originalPrice: '$130',
      icon: Target,
      gradient: 'from-rose-400 to-pink-600',
      bgGradient: 'from-rose-50 to-pink-50',
      category: 'Career Support',
      duration: '1-2 sessions',
      satisfaction: '95%',
      features: [
        'One-on-one consultation',
        'Career assessment test',
        'Industry insights report',
        'Program recommendations',
        'ROI analysis',
        'Follow-up support'
      ],
      popular: false,
      savings: 'Save $41',
      testimonial: {
        text: 'Helped me discover the perfect program that aligned with my career goals. Invaluable guidance!',
        author: 'Priya Patel',
        university: 'MIT'
      }
    },
    {
      id: 'scholarship-hunting',
      title: 'Scholarship Application Support',
      shortDesc: 'Find & apply for scholarships',
      fullDesc: 'Comprehensive scholarship search and application support to help reduce your education costs significantly.',
      price: '$159',
      originalPrice: '$220',
      icon: Award,
      gradient: 'from-cyan-400 to-blue-600',
      bgGradient: 'from-cyan-50 to-blue-50',
      category: 'Applications',
      duration: '2-4 weeks',
      satisfaction: '94%',
      features: [
        'Scholarship database access',
        'Eligibility assessment',
        'Application assistance',
        'Essay writing support',
        'Deadline tracking',
        'Success rate optimization'
      ],
      popular: false,
      savings: 'Save $61',
      testimonial: {
        text: 'Found scholarships worth $15,000! The team knows exactly where to look and how to apply.',
        author: 'Alex Johnson',
        university: 'Harvard University'
      }
    }
  ]

  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(service => service.category === selectedCategory)

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

  const stats = [
    { icon: Users, label: 'Students Helped', value: '10,000+' },
    { icon: CheckCircle, label: 'Success Rate', value: '97%' },
    { icon: Star, label: 'Average Rating', value: '4.9/5' },
    { icon: Clock, label: 'Avg. Processing Time', value: '3 days' }
  ]

  return (
    <>
      <SEOKeywords page="services" location="kathmandu" />
      <Head>
        <title>Study Abroad Services Nepal - University Application, Visa, Scholarships | Virtual Office</title>
        <meta name="description" content="Complete study abroad services in Nepal - University applications, visa assistance, scholarship guidance, SOP writing, IELTS preparation. Expert consultancy services in Kathmandu, Pokhara, Chitwan." />
        <meta name="keywords" content="study abroad services nepal, university application nepal, visa assistance kathmandu, scholarship guidance, SOP writing service, IELTS preparation nepal, education consultancy services, study abroad help pokhara" />
        <meta property="og:title" content="Study Abroad Services Nepal - Complete Education Consultancy" />
        <meta property="og:description" content="Expert study abroad services in Nepal - from university applications to visa assistance" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Study Abroad Services Nepal - Complete Education Consultancy" />
        <meta name="twitter:description" content="Expert study abroad services in Nepal - from university applications to visa assistance" />
        <link rel="canonical" href="/services" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse opacity-30" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative">
        {/* Hero Section */}
        <motion.div 
          className="py-20 px-6"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="mx-auto max-w-7xl text-center">
            <motion.div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-8" variants={fadeInUp}>
              <Zap className="w-4 h-4" />
              AI-Powered + Human Expert Services
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              variants={fadeInUp}
            >
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Study Abroad
              </span>
              <br />
              <span className="text-gray-900">Services</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              From application to arrival, we provide comprehensive support powered by AI efficiency and human expertise. 
              Your success is our mission.
            </motion.p>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16"
              variants={fadeInUp}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                )
              })}
            </motion.div>
          </div>
        </motion.div>

        {/* Service Categories */}
        <motion.div 
          className="px-6 mb-12"
          variants={fadeInUp}
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-wrap justify-center gap-4">
              {serviceCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="px-6 pb-20"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredServices.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={service.id}
                    className={`group relative bg-gradient-to-br ${service.bgGradient} rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute top-6 right-6 z-10">
                        <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                          MOST POPULAR
                        </div>
                      </div>
                    )}

                    {/* Savings Badge */}
                    {service.savings && (
                      <div className="absolute top-6 left-6 z-10">
                        <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                          {service.savings}
                        </div>
                      </div>
                    )}

                    <div className="p-8">
                      {/* Service Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">{service.price}</div>
                          {service.originalPrice && (
                            <div className="text-sm text-gray-500 line-through">{service.originalPrice}</div>
                          )}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-700 mb-6 leading-relaxed">{service.fullDesc}</p>
                      
                      {/* Service Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <Clock className="w-4 h-4 text-blue-600" />
                            <span className="text-xs font-medium text-gray-600">Duration</span>
                          </div>
                          <p className="text-sm font-bold text-gray-900">{service.duration}</p>
                        </div>
                        
                        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <Star className="w-4 h-4 text-amber-600" />
                            <span className="text-xs font-medium text-gray-600">Satisfaction</span>
                          </div>
                          <p className="text-sm font-bold text-gray-900">{service.satisfaction}</p>
                        </div>
                      </div>
                      
                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-800 mb-3">What&apos;s Included:</h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        {service.features.length > 4 && (
                          <button className="text-xs text-blue-600 hover:text-blue-800 mt-2">
                            +{service.features.length - 4} more features
                          </button>
                        )}
                      </div>
                      
                      {/* Testimonial */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 mb-6">
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-amber-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-xs text-gray-700 mb-2 italic">&ldquo;{service.testimonial.text}&rdquo;</p>
                        <div className="text-xs">
                          <span className="font-semibold text-gray-900">{service.testimonial.author}</span>
                          <span className="text-gray-600"> • {service.testimonial.university}</span>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="space-y-3">
                        <button className={`w-full py-3 bg-gradient-to-r ${service.gradient} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group-hover:shadow-xl`}>
                          Get Started →
                        </button>
                        <button className="w-full py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-white/50 transition-all duration-300 flex items-center justify-center gap-2">
                          <MessageCircle className="w-4 h-4" />
                          Ask Questions
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="py-20 px-6"
          variants={fadeInUp}
        >
          <div className="mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Start Your Study Abroad Journey?
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Get a free consultation and personalized service recommendations based on your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Free Consultation
                </button>
                <button className="px-8 py-4 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now: +1 (555) 123-4567
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
