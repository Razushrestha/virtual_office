'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { SEOKeywords } from '../../components/seo/SEOKeywords'
import { Search, Filter, Globe, DollarSign, Clock, GraduationCap, Users, TrendingUp, Star, MapPin, BookOpen, Award } from 'lucide-react'

export default function DiscoverPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedContinent, setSelectedContinent] = useState('All')
  const [sortBy, setSortBy] = useState('popularity')

  const countries = [
    {
      code: 'CA',
      name: 'Canada',
      continent: 'North America',
      cost: '$20k-35k',
      costRange: { min: 20000, max: 35000 },
      visaTime: '4-6 weeks',
      visaSuccess: '94%',
      scholarships: 'Excellent',
      flag: '🇨🇦',
      gradient: 'from-red-400 via-red-500 to-red-600',
      bgGradient: 'from-red-50 to-orange-50',
      universities: '180+',
      programs: '2,500+',
      ranking: '#3 Global',
      workRights: 'Yes (3 years)',
      language: 'English/French',
      climate: 'Continental',
      description: 'Excellent work opportunities and permanent residency pathways with world-class education system.',
      highlights: ['Post-study work visa', 'PR pathways', 'Quality education', 'Multicultural society'],
      topCities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary'],
      topUnis: ['University of Toronto', 'McGill University', 'UBC'],
      livingCost: '$12k-18k',
      popularity: 95
    },
    {
      code: 'US',
      name: 'United States',
      continent: 'North America', 
      cost: '$25k-60k',
      costRange: { min: 25000, max: 60000 },
      visaTime: '2-4 weeks',
      visaSuccess: '89%',
      scholarships: 'Very Good',
      flag: '🇺🇸',
      gradient: 'from-blue-400 via-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-indigo-50',
      universities: '4,000+',
      programs: '10,000+',
      ranking: '#1 Global',
      workRights: 'Yes (1-3 years)',
      language: 'English',
      climate: 'Varied',
      description: 'World\'s largest higher education system with unmatched diversity and innovation opportunities.',
      highlights: ['Top universities', 'Research funding', 'Innovation hub', 'Career opportunities'],
      topCities: ['New York', 'Boston', 'San Francisco', 'Los Angeles'],
      topUnis: ['Harvard', 'MIT', 'Stanford'],
      livingCost: '$15k-25k',
      popularity: 98
    },
    {
      code: 'UK',
      name: 'United Kingdom',
      continent: 'Europe',
      cost: '$22k-45k',
      costRange: { min: 22000, max: 45000 },
      visaTime: '3-8 weeks',
      visaSuccess: '91%',
      scholarships: 'Good',
      flag: '🇬🇧',
      gradient: 'from-indigo-400 via-purple-500 to-purple-600',
      bgGradient: 'from-indigo-50 to-purple-50',
      universities: '130+',
      programs: '1,800+',
      ranking: '#2 Global',
      workRights: 'Yes (2 years)',
      language: 'English',
      climate: 'Temperate',
      description: 'Historic universities with global recognition and shorter degree duration.',
      highlights: ['1-year Masters', 'Historic universities', 'Global recognition', 'Gateway to Europe'],
      topCities: ['London', 'Edinburgh', 'Manchester', 'Cambridge'],
      topUnis: ['Oxford', 'Cambridge', 'Imperial College'],
      livingCost: '$15k-22k',
      popularity: 92
    },
    {
      code: 'AU',
      name: 'Australia',
      continent: 'Oceania',
      cost: '$18k-35k',
      costRange: { min: 18000, max: 35000 },
      visaTime: '4-12 weeks',
      visaSuccess: '88%',
      scholarships: 'Very Good',
      flag: '🇦🇺',
      gradient: 'from-green-400 via-emerald-500 to-teal-600',
      bgGradient: 'from-green-50 to-emerald-50',
      universities: '120+',
      programs: '1,600+',
      ranking: '#5 Global',
      workRights: 'Yes (2-4 years)',
      language: 'English',
      climate: 'Subtropical',
      description: 'Beautiful lifestyle with excellent education standards and research opportunities.',
      highlights: ['Relaxed lifestyle', 'Research excellence', 'Work opportunities', 'Beautiful cities'],
      topCities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth'],
      topUnis: ['ANU', 'Melbourne', 'Sydney'],
      livingCost: '$14k-20k',
      popularity: 87
    },
    {
      code: 'DE',
      name: 'Germany',
      continent: 'Europe',
      cost: '$1k-15k',
      costRange: { min: 1000, max: 15000 },
      visaTime: '6-12 weeks',
      visaSuccess: '85%',
      scholarships: 'Excellent',
      flag: '🇩🇪',
      gradient: 'from-amber-400 via-orange-500 to-red-600',
      bgGradient: 'from-amber-50 to-orange-50',
      universities: '400+',
      programs: '1,200+',
      ranking: '#4 Global',
      workRights: 'Yes (18 months)',
      language: 'German/English',
      climate: 'Continental',
      description: 'Affordable quality education with strong engineering and research programs.',
      highlights: ['Low tuition fees', 'Engineering excellence', 'Research opportunities', 'Central Europe'],
      topCities: ['Berlin', 'Munich', 'Hamburg', 'Stuttgart'],
      topUnis: ['TUM', 'LMU Munich', 'Heidelberg'],
      livingCost: '$8k-12k',
      popularity: 82
    },
    {
      code: 'NL',
      name: 'Netherlands',
      continent: 'Europe',
      cost: '$8k-20k',
      costRange: { min: 8000, max: 20000 },
      visaTime: '4-8 weeks',
      visaSuccess: '92%',
      scholarships: 'Good',
      flag: '🇳🇱',
      gradient: 'from-orange-400 via-red-500 to-pink-600',
      bgGradient: 'from-orange-50 to-red-50',
      universities: '60+',
      programs: '800+',
      ranking: '#6 Global',
      workRights: 'Yes (1 year)',
      language: 'Dutch/English',
      climate: 'Maritime',
      description: 'Progressive education system with high English proficiency and innovative programs.',
      highlights: ['English programs', 'Innovative teaching', 'High quality of life', 'Bike-friendly'],
      topCities: ['Amsterdam', 'Utrecht', 'Rotterdam', 'The Hague'],
      topUnis: ['University of Amsterdam', 'Delft University', 'Leiden University'],
      livingCost: '$12k-16k',
      popularity: 78
    }
  ]

  const continents = ['All', 'North America', 'Europe', 'Oceania']
  const sortOptions = [
    { value: 'popularity', label: 'Most Popular' },
    { value: 'cost-low', label: 'Lowest Cost' },
    { value: 'cost-high', label: 'Highest Cost' },
    { value: 'visa-success', label: 'Visa Success Rate' },
    { value: 'alphabetical', label: 'A-Z' }
  ]

  const filteredAndSortedCountries = countries
    .filter(country => {
      const matchesSearch = country.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesContinent = selectedContinent === 'All' || country.continent === selectedContinent
      return matchesSearch && matchesContinent
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return b.popularity - a.popularity
        case 'cost-low':
          return a.costRange.min - b.costRange.min
        case 'cost-high':
          return b.costRange.max - a.costRange.max
        case 'visa-success':
          return parseInt(b.visaSuccess) - parseInt(a.visaSuccess)
        case 'alphabetical':
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
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
      <SEOKeywords page="discover" location="kathmandu" />
      <Head>
        <title>Discover Study Destinations Nepal - Compare Countries & Universities | Virtual Office</title>
        <meta name="description" content="Discover best study abroad destinations for Nepali students. Compare countries, universities, costs, and scholarships for Canada, Australia, Germany, USA, UK. Expert guidance from Nepal's leading consultancy." />
        <meta name="keywords" content="study abroad destinations nepal, compare countries study abroad, best universities for nepali students, study abroad cost comparison, canada vs australia vs germany, university finder nepal, education destinations" />
        <meta property="og:title" content="Discover Study Destinations Nepal - Compare Countries & Universities" />
        <meta property="og:description" content="Find your perfect study abroad destination with expert guidance from Nepal's leading education consultancy" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Discover Study Destinations Nepal - Compare Countries & Universities" />
        <meta name="twitter:description" content="Find your perfect study abroad destination with expert guidance from Nepal's leading education consultancy" />
        <link rel="canonical" href="/discover" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse opacity-30" style={{ animationDelay: '2s' }}></div>
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
            <motion.div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-8" variants={fadeInUp}>
              <Globe className="w-4 h-4" />
              Discover Your Dream Destination
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              variants={fadeInUp}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Study Abroad
              </span>
              <br />
              <span className="text-gray-900">Destinations</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Compare costs, visa requirements, scholarships, and more across top study destinations. 
              Find the perfect country that matches your budget, career goals, and lifestyle preferences.
            </motion.p>

            {/* Search and Filter Controls */}
            <motion.div 
              className="max-w-4xl mx-auto mb-16"
              variants={fadeInUp}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg backdrop-blur-sm border border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search countries..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  {/* Continent Filter */}
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={selectedContinent}
                      onChange={(e) => setSelectedContinent(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                    >
                      {continents.map(continent => (
                        <option key={continent} value={continent}>{continent}</option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Sort */}
                  <div className="relative">
                    <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                    >
                      {sortOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Countries Grid */}
        <motion.div 
          className="px-6 pb-20"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredAndSortedCountries.map((country, index) => (
                <motion.div
                  key={country.code}
                  className={`group relative bg-gradient-to-br ${country.bgGradient} rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Country Header */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl">{country.flag}</span>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{country.name}</h3>
                          <p className="text-gray-600">{country.continent}</p>
                        </div>
                      </div>
                      <div className={`px-3 py-1 bg-gradient-to-r ${country.gradient} text-white rounded-full text-sm font-medium`}>
                        {country.ranking}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">{country.description}</p>
                    
                    {/* Key Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          <span className="text-sm font-medium text-gray-600">Tuition</span>
                        </div>
                        <p className="text-lg font-bold text-gray-900">{country.cost}</p>
                      </div>
                      
                      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-medium text-gray-600">Visa Time</span>
                        </div>
                        <p className="text-lg font-bold text-gray-900">{country.visaTime}</p>
                      </div>
                      
                      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <GraduationCap className="w-4 h-4 text-purple-600" />
                          <span className="text-sm font-medium text-gray-600">Universities</span>
                        </div>
                        <p className="text-lg font-bold text-gray-900">{country.universities}</p>
                      </div>
                      
                      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="w-4 h-4 text-amber-600" />
                          <span className="text-sm font-medium text-gray-600">Visa Success</span>
                        </div>
                        <p className="text-lg font-bold text-gray-900">{country.visaSuccess}</p>
                      </div>
                    </div>
                    
                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-800 mb-3">Key Highlights</h4>
                      <div className="flex flex-wrap gap-2">
                        {country.highlights.map((highlight, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full text-xs font-medium">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    <button className={`w-full py-3 bg-gradient-to-r ${country.gradient} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group-hover:shadow-xl`}>
                      Explore {country.name} →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="py-20 px-6"
          variants={fadeInUp}
        >
          <div className="mx-auto max-w-4xl text-center">
            <div className="bg-white rounded-3xl p-12 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Need Help Choosing the Right Destination?
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Our AI-powered tool can match you with the perfect study destination based on your preferences, budget, and career goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                  Try AI Destination Finder
                </button>
                <button className="px-8 py-4 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300">
                  Talk to Expert Counsellor
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
