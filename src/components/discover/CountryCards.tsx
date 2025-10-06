"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export const CountryPreview: React.FC = () => {
  const countries = [
    { 
      code: 'CA', 
      name: 'Canada', 
      cost: '20k-35k', 
      visa: 'High', 
      scholarships: 'Yes',
      flag: '🇨🇦',
      gradient: 'from-red-400 via-red-500 to-red-600',
      bgGradient: 'from-red-50 to-orange-50',
      universities: '180+',
      programs: '2,500+',
      description: 'Excellent work opportunities and permanent residency pathways',
      highlights: ['Post-study work visa', 'PR pathways', 'Quality education']
    },
    { 
      code: 'UK', 
      name: 'United Kingdom', 
      cost: '22k-38k', 
      visa: 'High', 
      scholarships: 'Limited',
      flag: '🇬🇧',
      gradient: 'from-blue-400 via-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-indigo-50',
      universities: '130+',
      programs: '1,800+',
      description: 'World-renowned universities and rich cultural heritage',
      highlights: ['1-year Masters', 'Historic universities', 'Global recognition']
    },
    { 
      code: 'AU', 
      name: 'Australia', 
      cost: '18k-32k', 
      visa: 'Medium', 
      scholarships: 'Yes',
      flag: '🇦🇺',
      gradient: 'from-green-400 via-emerald-500 to-teal-600',
      bgGradient: 'from-green-50 to-emerald-50',
      universities: '120+',
      programs: '1,600+',
      description: 'Beautiful lifestyle with excellent education standards',
      highlights: ['Relaxed lifestyle', 'Research excellence', 'Work opportunities']
    },
    { 
      code: 'JP', 
      name: 'Japan', 
      cost: '10k-25k', 
      visa: 'Medium', 
      scholarships: 'Yes',
      flag: '🇯🇵',
      gradient: 'from-pink-400 via-rose-500 to-red-600',
      bgGradient: 'from-pink-50 to-rose-50',
      universities: '90+',
      programs: '1,200+',
      description: 'Advanced technology and unique cultural experience',
      highlights: ['Tech innovation', 'Cultural immersion', 'Job prospects']
    },
    { 
      code: 'US', 
      name: 'United States', 
      cost: '25k-50k', 
      visa: 'Variable', 
      scholarships: 'Yes',
      flag: '🇺🇸',
      gradient: 'from-purple-400 via-violet-500 to-indigo-600',
      bgGradient: 'from-purple-50 to-violet-50',
      universities: '200+',
      programs: '3,000+',
      description: 'World\'s largest higher education system with diverse opportunities',
      highlights: ['Top universities', 'Research funding', 'Career growth']
    }
  ]

  const getVisaColor = (visa: string) => {
    switch (visa) {
      case 'High': return 'text-green-700 bg-green-100'
      case 'Medium': return 'text-amber-700 bg-amber-100'
      case 'Variable': return 'text-blue-700 bg-blue-100'
      default: return 'text-gray-700 bg-gray-100'
    }
  }

  const getScholarshipColor = (scholarships: string) => {
    switch (scholarships) {
      case 'Yes': return 'text-emerald-700 bg-emerald-100'
      case 'Limited': return 'text-orange-700 bg-orange-100'
      default: return 'text-gray-700 bg-gray-100'
    }
  }

  return (
    <section className="relative py-20 bg-gradient-to-b from-blue-50/30 via-white to-purple-50/30">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-100/10 via-transparent to-purple-100/10" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            Popular Destinations
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-800 mb-4">
            Top Study <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Destinations</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the world&apos;s leading study destinations and find your perfect match
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {countries.map((country, index) => (
            <motion.div
              key={country.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-[520px] flex flex-col">
                {/* Gradient header */}
                <div className={`h-24 bg-gradient-to-br ${country.bgGradient} relative overflow-hidden flex-shrink-0`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${country.gradient} opacity-10`} />
                  <div className="absolute -top-10 -right-10 h-20 w-20 rounded-full bg-white/20 blur-xl" />
                  <div className="relative z-10 p-4 flex items-center justify-between">
                    <div>
                      <div className="text-2xl mb-1">{country.flag}</div>
                      <h3 className="font-bold text-gray-800 text-base leading-tight">{country.name}</h3>
                    </div>
                    <div className={`px-2 py-1 rounded-full bg-gradient-to-r ${country.gradient} text-white text-xs font-semibold`}>
                      {country.code}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col">
                  {/* Description */}
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed line-clamp-2">
                    {country.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="text-center p-2 rounded-lg bg-gray-50">
                      <div className="font-bold text-sm text-gray-800">{country.universities}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">Universities</div>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-gray-50">
                      <div className="font-bold text-sm text-gray-800">{country.programs}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">Programs</div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-700">Average Cost</span>
                      <span className="text-xs font-bold text-gray-800">${country.cost}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-700">Visa Success</span>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getVisaColor(country.visa)}`}>
                        {country.visa}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-700">Scholarships</span>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getScholarshipColor(country.scholarships)}`}>
                        {country.scholarships}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-4 flex-1">
                    <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Key Benefits</div>
                    <div className="flex flex-wrap gap-1">
                      {country.highlights.slice(0, 3).map((highlight, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link 
                    href={`/discover/${country.code.toLowerCase()}`}
                    className={`block w-full text-center py-2 rounded-xl bg-gradient-to-r ${country.gradient} text-white font-semibold text-xs hover:shadow-lg transition-all duration-300 hover:scale-105 mt-auto`}
                  >
                    Explore {country.name} →
                  </Link>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${country.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm px-8 py-4 shadow-lg">
            <span className="text-sm text-gray-600">Can&apos;t decide? Let our AI help you</span>
            <Link 
              href="/ai-finder" 
              className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 text-sm font-medium text-white transition hover:from-blue-500 hover:to-purple-500"
            >
              Use AI Finder →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}