'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { SEOKeywords } from '../../components/seo/SEOKeywords'
import { 
  Star,
  MapPin,
  Calendar,
  Clock,
  Video,
  Phone,
  MessageCircle,
  Award,
  GraduationCap,
  Globe,
  Users,
  TrendingUp,
  CheckCircle,
  Heart,
  Filter,
  Search,
  ChevronDown,
  PlayCircle,
  BookOpen,
  Target,
  Zap,
  Shield,
  Lightbulb,
  Sparkles,
  UserCheck,
  BadgeCheck,
  ThumbsUp,
  Mail,
  Linkedin,
  ExternalLink,
  ArrowRight,
  Quote,
  Flag,
  Languages,
  BrainCircuit,
  Briefcase
} from 'lucide-react'

export default function CounsellorsPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('All')
  const [selectedCountry, setSelectedCountry] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const specialties = [
    'All', 'Study Abroad', 'Visa Guidance', 'Scholarship Expert', 'University Selection', 
    'SOP Writing', 'Interview Prep', 'Test Preparation', 'Career Counseling'
  ]

  const countries = ['All', 'USA', 'Canada', 'UK', 'Australia', 'Germany', 'Ireland', 'New Zealand']

  const counsellors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      title: 'Senior Study Abroad Counsellor',
      specialties: ['Study Abroad', 'University Selection', 'Scholarship Expert'],
      countries: ['USA', 'Canada'],
      experience: '12+ years',
      studentsHelped: '2,500+',
      successRate: '96%',
      rating: 4.9,
      reviews: 342,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b2c5?w=400',
      bio: 'Former university admissions officer with extensive experience in helping students secure admissions to top-tier universities in North America.',
      education: 'PhD in Education, Harvard University',
      languages: ['English', 'Spanish', 'French'],
      achievements: [
        'Former Harvard Admissions Officer',
        '$2.5M+ scholarships secured for students',
        'Featured in Education Weekly',
        'TEDx Speaker on Study Abroad'
      ],
      availableSlots: ['Today 2:00 PM', 'Tomorrow 10:00 AM', 'Tomorrow 3:00 PM'],
      consultationFee: 'Free',
      responseTime: '< 2 hours',
      testimonial: 'Dr. Johnson helped me get into Stanford with a full scholarship! Her guidance was invaluable.',
      testimonialAuthor: 'Priya Sharma, Stanford University',
      flag: '🇺🇸',
      gradient: 'from-blue-500 to-purple-600',
      bgGradient: 'from-blue-50 to-purple-50'
    },
    {
      id: 2,
      name: 'Prof. Michael Chen',
      title: 'UK & Europe Education Expert',
      specialties: ['Study Abroad', 'Visa Guidance', 'Interview Prep'],
      countries: ['UK', 'Germany', 'Ireland'],
      experience: '15+ years',
      studentsHelped: '3,200+',
      successRate: '94%',
      rating: 4.8,
      reviews: 287,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      bio: 'Former British Council education advisor specializing in UK and European university applications with deep knowledge of visa processes.',
      education: 'Master\'s in International Education, Oxford University',
      languages: ['English', 'Mandarin', 'German'],
      achievements: [
        'Former British Council Advisor',
        '15+ years in international education',
        'Specialized in Russell Group universities',
        'Published author on UK education'
      ],
      availableSlots: ['Today 4:00 PM', 'Tomorrow 11:00 AM', 'Tomorrow 2:00 PM'],
      consultationFee: 'Free',
      responseTime: '< 3 hours',
      testimonial: 'Prof. Chen\'s expertise in UK universities is unmatched. Got into Oxford thanks to his guidance!',
      testimonialAuthor: 'Ahmed Hassan, Oxford University',
      flag: '🇬🇧',
      gradient: 'from-green-500 to-blue-600',
      bgGradient: 'from-green-50 to-blue-50'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      title: 'SOP & Essay Writing Specialist',
      specialties: ['SOP Writing', 'Scholarship Expert', 'Career Counseling'],
      countries: ['USA', 'Canada', 'Australia'],
      experience: '8+ years',
      studentsHelped: '1,800+',
      successRate: '98%',
      rating: 4.9,
      reviews: 456,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      bio: 'Expert in crafting compelling personal statements and essays that have helped students secure admissions to top universities worldwide.',
      education: 'MA in Creative Writing, Columbia University',
      languages: ['English', 'Spanish', 'Portuguese'],
      achievements: [
        'Published author and writing coach',
        '98% admission success rate',
        'Specialized in Ivy League applications',
        'Featured in Forbes Education'
      ],
      availableSlots: ['Today 1:00 PM', 'Tomorrow 9:00 AM', 'Tomorrow 4:00 PM'],
      consultationFee: 'Free',
      responseTime: '< 1 hour',
      testimonial: 'Emma\'s SOP guidance was phenomenal. My essay stood out and got me into MIT!',
      testimonialAuthor: 'Raj Patel, MIT',
      flag: '🇺🇸',
      gradient: 'from-pink-500 to-red-600',
      bgGradient: 'from-pink-50 to-red-50'
    },
    {
      id: 4,
      name: 'Dr. Lisa Thompson',
      title: 'Visa & Immigration Expert',
      specialties: ['Visa Guidance', 'Interview Prep', 'Test Preparation'],
      countries: ['USA', 'Canada', 'Australia', 'UK'],
      experience: '10+ years',
      studentsHelped: '2,100+',
      successRate: '97%',
      rating: 4.8,
      reviews: 198,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400',
      bio: 'Former immigration officer with insider knowledge of visa processes and interview techniques for multiple countries.',
      education: 'JD in Immigration Law, Georgetown University',
      languages: ['English', 'Hindi', 'French'],
      achievements: [
        'Former US Immigration Officer',
        'Expert in F-1, Study Permit visas',
        '97% visa approval rate',
        'Immigration law specialist'
      ],
      availableSlots: ['Today 3:00 PM', 'Tomorrow 12:00 PM', 'Tomorrow 5:00 PM'],
      consultationFee: 'Free',
      responseTime: '< 2 hours',
      testimonial: 'Dr. Thompson\'s visa guidance was perfect. Got my F-1 visa approved on first attempt!',
      testimonialAuthor: 'Sophie Williams, UCLA',
      flag: '🇺🇸',
      gradient: 'from-purple-500 to-indigo-600',
      bgGradient: 'from-purple-50 to-indigo-50'
    },
    {
      id: 5,
      name: 'David Kumar',
      title: 'Test Prep & Scholarship Specialist',
      specialties: ['Test Preparation', 'Scholarship Expert', 'University Selection'],
      countries: ['USA', 'Canada', 'UK', 'Australia'],
      experience: '9+ years',
      studentsHelped: '1,600+',
      successRate: '95%',
      rating: 4.7,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      bio: 'IELTS/TOEFL expert and scholarship specialist who has helped students secure millions in funding for their education.',
      education: 'MA in Applied Linguistics, University of Toronto',
      languages: ['English', 'Hindi', 'Punjabi'],
      achievements: [
        'IELTS/TOEFL certified trainer',
        '$3M+ scholarships secured',
        'Average score improvement: 2+ bands',
        'Test prep methodology expert'
      ],
      availableSlots: ['Today 5:00 PM', 'Tomorrow 8:00 AM', 'Tomorrow 1:00 PM'],
      consultationFee: 'Free',
      responseTime: '< 4 hours',
      testimonial: 'David\'s test prep strategies helped me achieve IELTS 8.5 and secure a scholarship!',
      testimonialAuthor: 'Maria Rodriguez, UBC',
      flag: '🇨🇦',
      gradient: 'from-orange-500 to-yellow-600',
      bgGradient: 'from-orange-50 to-yellow-50'
    },
    {
      id: 6,
      name: 'Sophie Williams',
      title: 'Australia & New Zealand Expert',
      specialties: ['Study Abroad', 'Career Counseling', 'University Selection'],
      countries: ['Australia', 'New Zealand'],
      experience: '11+ years',
      studentsHelped: '1,900+',
      successRate: '93%',
      rating: 4.8,
      reviews: 176,
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400',
      bio: 'Australian education specialist with deep connections to top universities and insider knowledge of the Australian education system.',
      education: 'Master\'s in International Relations, Australian National University',
      languages: ['English', 'Mandarin'],
      achievements: [
        'Official Australian university partner',
        'Group of Eight university specialist',
        '11+ years in Australian education',
        'Post-study work visa expert'
      ],
      availableSlots: ['Today 6:00 PM', 'Tomorrow 7:00 AM', 'Tomorrow 2:00 PM'],
      consultationFee: 'Free',
      responseTime: '< 3 hours',
      testimonial: 'Sophie\'s knowledge of Australian universities is incredible. Got into University of Melbourne!',
      testimonialAuthor: 'James Chen, University of Melbourne',
      flag: '🇦🇺',
      gradient: 'from-cyan-500 to-teal-600',
      bgGradient: 'from-cyan-50 to-teal-50'
    }
  ]

  const stats = [
    { icon: Users, label: 'Expert Counsellors', value: '25+', color: 'from-blue-500 to-cyan-500' },
    { icon: UserCheck, label: 'Students Helped', value: '12,000+', color: 'from-green-500 to-emerald-500' },
    { icon: Award, label: 'Success Rate', value: '96%', color: 'from-purple-500 to-pink-500' },
    { icon: Globe, label: 'Countries Covered', value: '15+', color: 'from-orange-500 to-red-500' }
  ]

  const services = [
    {
      icon: Target,
      title: 'University Selection',
      description: 'AI-powered matching with personalized recommendations',
      features: ['Program compatibility analysis', 'Admission probability scoring', 'Scholarship opportunities']
    },
    {
      icon: Shield,
      title: 'Visa Guidance',
      description: 'End-to-end visa application support',
      features: ['Document preparation', 'Interview coaching', 'Application tracking']
    },
    {
      icon: Lightbulb,
      title: 'SOP & Essay Writing',
      description: 'Compelling personal statements that stand out',
      features: ['Professional writing review', 'Multiple draft revisions', 'University-specific customization']
    },
    {
      icon: BrainCircuit,
      title: 'Test Preparation',
      description: 'IELTS, TOEFL, GRE, GMAT coaching',
      features: ['Personalized study plans', 'Practice tests', 'Score improvement guarantee']
    }
  ]

  const filteredCounsellors = counsellors.filter(counsellor => {
    const matchesSpecialty = selectedSpecialty === 'All' || counsellor.specialties.includes(selectedSpecialty)
    const matchesCountry = selectedCountry === 'All' || counsellor.countries.includes(selectedCountry)
    const matchesSearch = counsellor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         counsellor.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         counsellor.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesSpecialty && matchesCountry && matchesSearch
  })

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
  return (
    <>
      <SEOKeywords page="counsellors" location="kathmandu" />
      <Head>
        <title>Expert Study Abroad Counsellors Nepal - Get Free Consultation Kathmandu | Virtual Office</title>
        <meta name="description" content="Connect with certified study abroad counsellors in Nepal for free consultation. Expert guidance on university selection, visa applications, scholarships, and SOP writing from experienced education consultants in Kathmandu, Pokhara, Chitwan." />
        <meta name="keywords" content="study abroad counsellors nepal, education consultants kathmandu, free consultation nepal, university selection, visa guidance nepal, scholarship experts, SOP writing help, study abroad advisors pokhara, education consultancy chitwan" />
        <meta property="og:title" content="Expert Study Abroad Counsellors Nepal - Free Consultation" />
        <meta property="og:description" content="Get expert guidance from certified education consultants in Nepal for your study abroad journey" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Expert Study Abroad Counsellors Nepal - Free Consultation" />
        <meta name="twitter:description" content="Get expert guidance from certified education consultants in Nepal for your study abroad journey" />
        <link rel="canonical" href="/counsellors" />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-30"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-200 to-orange-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-30" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-r from-green-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-30" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative">
          {/* Hero Section */}
          <header>
            <motion.section 
              className="py-16 md:py-24 px-4 md:px-6"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              aria-labelledby="counsellors-hero-title"
            >
              <div className="mx-auto max-w-7xl text-center">
                <motion.div 
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-100 via-blue-100 to-purple-100 rounded-full text-sm font-semibold mb-6 md:mb-8 border border-emerald-200/50 shadow-lg backdrop-blur-sm" 
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full flex items-center justify-center">
                    <UserCheck className="w-3 h-3 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
                    Certified Education Experts
                  </span>
                </motion.div>
                
                <motion.h1 
                  id="counsellors-hero-title"
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 md:mb-8 leading-tight"
                  variants={fadeInUp}
                >
                  <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
                    Expert Counsellors
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    Your Study Abroad Guide
                  </span>
                  <motion.div 
                    className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <BadgeCheck className="w-5 h-5 text-white m-1.5 fill-current" />
                  </motion.div>
                </motion.h1>
                
                <motion.p 
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed font-medium px-4"
                  variants={fadeInUp}
                >
                  Connect with{" "}
                  <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent font-bold">
                    certified education consultants
                  </span>{" "}
                  for personalized guidance on university selection, visa applications, and{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
                    scholarship opportunities
                  </span>.
                </motion.p>

                {/* Stats Section */}
                <motion.div 
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-16 md:mb-20 px-4"
                  variants={fadeInUp}
                >
                  {stats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                      <motion.div 
                        key={index} 
                        className="relative group cursor-pointer"
                        variants={fadeInUp}
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 rounded-xl md:rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-60 group-hover:opacity-100"></div>
                        <div className="relative bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-white/50 group-hover:shadow-xl transition-all duration-300">
                          <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${stat.color} rounded-xl md:rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-5 h-5 md:w-8 md:h-8 text-white" />
                          </div>
                          <div className="text-xl md:text-3xl font-black text-gray-900 mb-1 md:mb-2">{stat.value}</div>
                          <div className="text-gray-600 text-xs md:text-sm font-medium">{stat.label}</div>
                        </div>
                      </motion.div>
                    )
                  })}
                </motion.div>
              </div>
            </motion.section>
          </header>

          {/* Services Overview */}
          <motion.section 
            className="px-4 md:px-6 mb-16 md:mb-20"
            variants={fadeInUp}
          >
            <div className="mx-auto max-w-7xl">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4 md:mb-6">
                  Comprehensive Study Abroad Services
                </h2>
                <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                  Our expert counsellors provide end-to-end support for your international education journey
                </p>
              </div>
              
              <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {services.map((service, index) => {
                  const Icon = service.icon
                  return (
                    <motion.div
                      key={index}
                      className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50"
                      variants={fadeInUp}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="p-6 md:p-8">
                        <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">{service.title}</h3>
                        <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">{service.description}</p>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.section>

          {/* Filters Section */}
          <motion.section 
            className="px-4 md:px-6 mb-12 md:mb-16"
            variants={fadeInUp}
          >
            <div className="mx-auto max-w-7xl">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-xl border border-white/50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {/* Search */}
                  <div className="relative">
                    <label htmlFor="search-counsellors" className="sr-only">Search counsellors</label>
                    <Search className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
                    <input
                      id="search-counsellors"
                      type="text"
                      placeholder="Search counsellors by name, specialty..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-3 md:py-4 border border-gray-200 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm md:text-base"
                    />
                  </div>
                  
                  {/* Specialty Filter */}
                  <div className="relative">
                    <label htmlFor="specialty-filter" className="sr-only">Filter by specialty</label>
                    <Briefcase className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
                    <select
                      id="specialty-filter"
                      value={selectedSpecialty}
                      onChange={(e) => setSelectedSpecialty(e.target.value)}
                      className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-3 md:py-4 border border-gray-200 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white text-sm md:text-base"
                    >
                      {specialties.map(specialty => (
                        <option key={specialty} value={specialty}>{specialty}</option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Country Filter */}
                  <div className="relative">
                    <label htmlFor="country-filter" className="sr-only">Filter by country expertise</label>
                    <Globe className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
                    <select
                      id="country-filter"
                      value={selectedCountry}
                      onChange={(e) => setSelectedCountry(e.target.value)}
                      className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-3 md:py-4 border border-gray-200 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white text-sm md:text-base"
                    >
                      {countries.map(country => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Counsellors Grid */}
          <motion.section 
            className="px-4 md:px-6 pb-16 md:pb-20"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <div className="mx-auto max-w-7xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-6 md:mb-8 text-center">
                Meet Our Expert Education Counsellors
              </h2>
              <div className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {filteredCounsellors.map((counsellor, index) => (
                  <motion.div
                    key={counsellor.id}
                    className="group relative overflow-hidden rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Card Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${counsellor.bgGradient} opacity-90`}></div>
                    
                    {/* Profile Section */}
                    <div className="relative p-6 md:p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="relative">
                          <img 
                            src={counsellor.image} 
                            alt={`${counsellor.name} - Study abroad counsellor`}
                            className="w-16 h-16 md:w-20 md:h-20 rounded-2xl object-cover shadow-lg"
                          />
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-lg">{counsellor.flag}</span>
                          </div>
                          {/* Online Status */}
                          <div className="absolute top-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{counsellor.name}</h3>
                          <p className="text-gray-600 text-sm md:text-base mb-2">{counsellor.title}</p>
                          <div className="flex items-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-4 h-4 ${i < Math.floor(counsellor.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                            ))}
                            <span className="text-sm text-gray-600 ml-1">
                              {counsellor.rating} ({counsellor.reviews})
                            </span>
                          </div>
                          <div className="text-xs text-green-600 font-bold">
                            {counsellor.consultationFee} Consultation
                          </div>
                        </div>
                      </div>

                      {/* Bio */}
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                        {counsellor.bio}
                      </p>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-3 gap-3 mb-6">
                        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-3 text-center">
                          <div className="text-xs text-gray-600 mb-1">Experience</div>
                          <div className="text-sm font-bold text-gray-900">{counsellor.experience}</div>
                        </div>
                        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-3 text-center">
                          <div className="text-xs text-gray-600 mb-1">Students</div>
                          <div className="text-sm font-bold text-gray-900">{counsellor.studentsHelped}</div>
                        </div>
                        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-3 text-center">
                          <div className="text-xs text-gray-600 mb-1">Success</div>
                          <div className="text-sm font-bold text-gray-900">{counsellor.successRate}</div>
                        </div>
                      </div>

                      {/* Specialties */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-800 mb-3">Specialties:</h4>
                        <div className="flex flex-wrap gap-2">
                          {counsellor.specialties.map((specialty, idx) => (
                            <span key={idx} className="px-3 py-1 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full text-xs font-medium">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Countries */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-800 mb-3">Country Expertise:</h4>
                        <div className="flex flex-wrap gap-2">
                          {counsellor.countries.map((country, idx) => (
                            <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                              {country}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Languages */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-800 mb-3">Languages:</h4>
                        <div className="flex items-center gap-2">
                          <Languages className="w-4 h-4 text-gray-600" />
                          <span className="text-sm text-gray-700">{counsellor.languages.join(', ')}</span>
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 mb-6">
                        <Quote className="w-5 h-5 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-700 italic mb-2">&ldquo;{counsellor.testimonial}&rdquo;</p>
                        <div className="text-xs text-gray-600">- {counsellor.testimonialAuthor}</div>
                      </div>

                      {/* Available Slots */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-800 mb-3">Available Slots:</h4>
                        <div className="space-y-2">
                          {counsellor.availableSlots.slice(0, 2).map((slot, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                              <Clock className="w-4 h-4 text-green-600" />
                              {slot}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-3">
                        <motion.button 
                          className={`w-full py-3 bg-gradient-to-r ${counsellor.gradient} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 text-sm flex items-center justify-center gap-2`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Video className="w-4 h-4" />
                          Book Free Consultation
                        </motion.button>
                        
                        <div className="grid grid-cols-3 gap-2">
                          <motion.button 
                            className="py-2 bg-white/80 backdrop-blur-sm text-gray-700 rounded-lg font-medium hover:bg-white transition-all duration-300 text-xs flex items-center justify-center gap-1"
                            whileHover={{ scale: 1.02 }}
                          >
                            <MessageCircle className="w-3 h-3" />
                            Chat
                          </motion.button>
                          <motion.button 
                            className="py-2 bg-white/80 backdrop-blur-sm text-gray-700 rounded-lg font-medium hover:bg-white transition-all duration-300 text-xs flex items-center justify-center gap-1"
                            whileHover={{ scale: 1.02 }}
                          >
                            <Phone className="w-3 h-3" />
                            Call
                          </motion.button>
                          <motion.button 
                            className="py-2 bg-white/80 backdrop-blur-sm text-gray-700 rounded-lg font-medium hover:bg-white transition-all duration-300 text-xs flex items-center justify-center gap-1"
                            whileHover={{ scale: 1.02 }}
                          >
                            <Mail className="w-3 h-3" />
                            Email
                          </motion.button>
                        </div>
                      </div>

                      {/* Response Time */}
                      <div className="mt-4 text-center">
                        <span className="text-xs text-gray-600">
                          Responds {counsellor.responseTime}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

        </div>
      </main>
    </>
  )
}
