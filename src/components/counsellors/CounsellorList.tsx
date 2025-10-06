"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export const CounsellorPreview: React.FC = () => {
  const counsellors = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      title: 'Senior Education Consultant',
      countries: ['Canada', 'USA'],
      rating: 4.9,
      reviews: 127,
      experience: '8+ years',
      specialties: ['Engineering', 'Computer Science', 'Business'],
      avatar: '👩‍🏫',
      verified: true,
      responseTime: '< 2 hours',
      successRate: '96%',
      languages: ['English', 'Mandarin'],
      gradient: 'from-blue-400 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-50'
    },
    {
      id: 2,
      name: 'Prof. Michael Kumar',
      title: 'Immigration & Visa Expert',
      countries: ['UK', 'Australia'],
      rating: 4.8,
      reviews: 89,
      experience: '12+ years',
      specialties: ['Medicine', 'PhD Programs', 'Research'],
      avatar: '👨‍💼',
      verified: true,
      responseTime: '< 1 hour',
      successRate: '98%',
      languages: ['English', 'Hindi'],
      gradient: 'from-emerald-400 to-teal-600',
      bgGradient: 'from-emerald-50 to-teal-50'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      title: 'Study Abroad Specialist',
      countries: ['Canada', 'UK', 'USA'],
      rating: 4.9,
      reviews: 156,
      experience: '10+ years',
      specialties: ['MBA', 'Finance', 'Law'],
      avatar: '👩‍💻',
      verified: true,
      responseTime: '< 3 hours',
      successRate: '94%',
      languages: ['English', 'Spanish'],
      gradient: 'from-purple-400 to-violet-600',
      bgGradient: 'from-purple-50 to-violet-50'
    },
    {
      id: 4,
      name: 'James Thompson',
      title: 'Global Education Advisor',
      countries: ['Canada', 'UK', 'USA', 'Australia'],
      rating: 4.7,
      reviews: 203,
      experience: '15+ years',
      specialties: ['Arts', 'Social Sciences', 'Liberal Arts'],
      avatar: '👨‍🎓',
      verified: true,
      responseTime: '< 4 hours',
      successRate: '92%',
      languages: ['English', 'French'],
      gradient: 'from-orange-400 to-red-600',
      bgGradient: 'from-orange-50 to-red-50'
    }
  ]

  const getCountryFlags = (countries: string[]) => {
    const flagMap: { [key: string]: string } = {
      'Canada': '🇨🇦',
      'UK': '🇬🇧',
      'USA': '🇺🇸',
      'Australia': '🇦🇺'
    }
    return countries.map(country => flagMap[country] || '🌍').join(' ')
  }

  const getSuccessColor = (rate: string) => {
    const num = parseInt(rate)
    if (num >= 95) return 'text-emerald-700 bg-emerald-100'
    if (num >= 90) return 'text-blue-700 bg-blue-100'
    return 'text-amber-700 bg-amber-100'
  }

  return (
    <section className="relative py-20 bg-gradient-to-b from-indigo-50/30 via-white to-purple-50/30">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-purple-100/10 via-transparent to-blue-100/10" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-4 py-2 text-sm font-medium text-purple-700 shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
            Expert Guidance
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-800 mb-4">
            Verified <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Counsellors</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with experienced education consultants who have helped thousands of students achieve their dreams
          </p>
        </div>

        {/* Counsellors Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {counsellors.map((counsellor, index) => (
            <motion.div
              key={counsellor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-[520px] flex flex-col">
                {/* Header with avatar and verification */}
                <div className={`h-24 bg-gradient-to-br ${counsellor.bgGradient} relative overflow-hidden flex-shrink-0`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${counsellor.gradient} opacity-10`} />
                  <div className="absolute -top-10 -right-10 h-16 w-16 rounded-full bg-white/20 blur-xl" />
                  
                  {/* Verification badge */}
                  {counsellor.verified && (
                    <div className="absolute top-3 right-3">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-1">
                        <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Avatar */}
                  <div className="relative z-10 p-4 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-2xl shadow-lg">
                      {counsellor.avatar}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  {/* Name and title */}
                  <div className="mb-4 text-center">
                    <h3 className="font-bold text-gray-800 text-lg mb-1">{counsellor.name}</h3>
                    <p className="text-sm text-gray-600">{counsellor.title}</p>
                  </div>

                  {/* Rating and reviews */}
                  <div className="mb-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="flex items-center">
                        <span className="text-yellow-400 text-lg">★</span>
                        <span className="font-bold text-gray-800 ml-1">{counsellor.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({counsellor.reviews} reviews)</span>
                    </div>
                  </div>

                  {/* Countries */}
                  <div className="mb-4">
                    <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Specializes in</div>
                    <div className="flex items-center justify-center gap-2 text-2xl mb-2">
                      {getCountryFlags(counsellor.countries)}
                    </div>
                    <div className="text-xs text-gray-600 text-center">
                      {counsellor.countries.join(', ')}
                    </div>
                  </div>

                  {/* Key stats */}
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">Experience</span>
                      <span className="font-semibold text-gray-800">{counsellor.experience}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">Response Time</span>
                      <span className="font-semibold text-gray-800">{counsellor.responseTime}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">Success Rate</span>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getSuccessColor(counsellor.successRate)}`}>
                        {counsellor.successRate}
                      </span>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-6 flex-1">
                    <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Expertise</div>
                    <div className="flex flex-wrap gap-1">
                      {counsellor.specialties.slice(0, 3).map((specialty, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="mb-6">
                    <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Languages</div>
                    <div className="text-xs text-gray-600">
                      {counsellor.languages.join(', ')}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link 
                    href={`/counsellors/${counsellor.id}`}
                    className={`block w-full text-center py-3 rounded-xl bg-gradient-to-r ${counsellor.gradient} text-white font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:scale-105 mt-auto`}
                  >
                    Book a Session →
                  </Link>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${counsellor.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`} />
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
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm px-8 py-6 shadow-lg">
            <div className="text-center sm:text-left">
              <div className="font-semibold text-gray-800 mb-1">Need personalized guidance?</div>
              <div className="text-sm text-gray-600">Schedule a free consultation with our experts</div>
            </div>
            <Link 
              href="/counsellors" 
              className="rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 text-sm font-medium text-white transition hover:from-purple-500 hover:to-indigo-500 whitespace-nowrap"
            >
              View All Counsellors →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}