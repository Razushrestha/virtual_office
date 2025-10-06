"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

export const SuccessWall: React.FC = () => {
  const [showAllStories, setShowAllStories] = useState(false)
  const [storiesToShow, setStoriesToShow] = useState(5) // Initially show 5 stories

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      story: 'Got visa approval for Masters in Computer Science at University of Toronto with 50% scholarship!',
      country: 'Canada',
      program: 'Computer Science',
      university: 'University of Toronto',
      gradient: 'from-emerald-400 to-teal-600',
      flag: '🇨🇦'
    },
    {
      id: 2,
      name: 'Ahmed Hassan',
      story: 'Secured admission to Oxford University for MBA program with full funding support.',
      country: 'UK',
      program: 'MBA',
      university: 'Oxford University',
      gradient: 'from-blue-400 to-indigo-600',
      flag: '🇬🇧'
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      story: 'Successfully obtained F-1 visa for PhD in Engineering at MIT with research assistantship.',
      country: 'USA',
      program: 'PhD Engineering',
      university: 'MIT',
      gradient: 'from-purple-400 to-pink-600',
      flag: '🇺🇸'
    },
    {
      id: 4,
      name: 'David Chen',
      story: 'Approved for study permit to pursue Data Science Masters at McGill University.',
      country: 'Canada',
      program: 'Data Science',
      university: 'McGill University',
      gradient: 'from-orange-400 to-red-600',
      flag: '🇨🇦'
    },
    {
      id: 5,
      name: 'Sophie Williams',
      story: 'Received acceptance for Medicine degree at Imperial College London with merit scholarship.',
      country: 'UK',
      program: 'Medicine',
      university: 'Imperial College',
      gradient: 'from-cyan-400 to-blue-600',
      flag: '🇬🇧'
    },
    {
      id: 6,
      name: 'Raj Patel',
      story: 'Obtained student visa for Masters in Business Analytics at University of Melbourne with 40% scholarship.',
      country: 'Australia',
      program: 'Business Analytics',
      university: 'University of Melbourne',
      gradient: 'from-yellow-400 to-orange-600',
      flag: '🇦🇺'
    },
    {
      id: 7,
      name: 'Elena Rossi',
      story: 'Successfully got F-1 visa for PhD in Artificial Intelligence at Stanford University with full funding.',
      country: 'USA',
      program: 'PhD AI',
      university: 'Stanford University',
      gradient: 'from-red-400 to-pink-600',
      flag: '🇺🇸'
    },
    {
      id: 8,
      name: 'Muhammad Ali',
      story: 'Approved for study permit for Masters in Engineering at University of British Columbia.',
      country: 'Canada',
      program: 'Engineering',
      university: 'UBC',
      gradient: 'from-green-400 to-emerald-600',
      flag: '🇨🇦'
    },
    {
      id: 9,
      name: 'Jessica Taylor',
      story: 'Received acceptance for Masters in International Relations at LSE with partial scholarship.',
      country: 'UK',
      program: 'International Relations',
      university: 'London School of Economics',
      gradient: 'from-indigo-400 to-purple-600',
      flag: '🇬🇧'
    },
    {
      id: 10,
      name: 'Liam O\'Connor',
      story: 'Got student visa for Masters in Renewable Energy at University of Sydney with research opportunity.',
      country: 'Australia',
      program: 'Renewable Energy',
      university: 'University of Sydney',
      gradient: 'from-teal-400 to-cyan-600',
      flag: '🇦🇺'
    },
    {
      id: 11,
      name: 'Aisha Patel',
      story: 'Successfully obtained F-1 visa for Masters in Data Science at Carnegie Mellon University.',
      country: 'USA',
      program: 'Data Science',
      university: 'Carnegie Mellon',
      gradient: 'from-pink-400 to-rose-600',
      flag: '🇺🇸'
    },
    {
      id: 12,
      name: 'James Wilson',
      story: 'Approved for study permit for PhD in Biotechnology at University of Waterloo with full funding.',
      country: 'Canada',
      program: 'PhD Biotechnology',
      university: 'University of Waterloo',
      gradient: 'from-violet-400 to-purple-600',
      flag: '🇨🇦'
    },
    {
      id: 13,
      name: 'Fatima Al-Zahra',
      story: 'Received acceptance for Masters in Architecture at University of Cambridge with merit award.',
      country: 'UK',
      program: 'Architecture',
      university: 'University of Cambridge',
      gradient: 'from-amber-400 to-orange-600',
      flag: '🇬🇧'
    },
    {
      id: 14,
      name: 'Oliver Kim',
      story: 'Got student visa for Masters in Finance at Australian National University with scholarship.',
      country: 'Australia',
      program: 'Finance',
      university: 'Australian National University',
      gradient: 'from-emerald-400 to-green-600',
      flag: '🇦🇺'
    },
    {
      id: 15,
      name: 'Isabella Garcia',
      story: 'Successfully obtained F-1 visa for Masters in Public Health at Harvard University.',
      country: 'USA',
      program: 'Public Health',
      university: 'Harvard University',
      gradient: 'from-blue-400 to-cyan-600',
      flag: '🇺🇸'
    }
  ]

  // Pagination logic
  const displayedStories = showAllStories ? testimonials : testimonials.slice(0, storiesToShow)
  const hasMoreStories = testimonials.length > storiesToShow

  const handleShowMore = () => {
    if (showAllStories) {
      setShowAllStories(false)
      setStoriesToShow(5)
    } else {
      setShowAllStories(true)
    }
  }

  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-gray-50/50 to-blue-50/30">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-violet-100/10 via-transparent to-emerald-100/10" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Success Stories
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-800 mb-4">
            Student <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Success Wall</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real students. Real outcomes. Your journey next.
          </p>
        </div>

        {/* Success Stories Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Featured Video Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:row-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 via-gray-900 to-black p-8 text-white shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-blue-600/10 to-purple-600/20" />
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-violet-500/30 to-blue-500/30 blur-3xl" />
            
            <div className="relative z-10">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-3 py-1 text-xs font-medium">
                  <span className="h-2 w-2 rounded-full bg-red-400 animate-pulse" />
                  Live Session
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4">Visa Interview Success Tips</h3>
              <p className="text-gray-300 text-sm mb-6">
                Watch our expert counselors share proven strategies for acing your visa interview.
              </p>
              
              {/* Video placeholder with play button */}
              <div className="relative aspect-video rounded-lg bg-gray-700/50 flex items-center justify-center mb-6 group-hover:bg-gray-700/70 transition-colors">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm group-hover:scale-110 transition-transform cursor-pointer">
                  <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </div>
              
              <div className="text-xs text-gray-400">
                Auto-play muted • 12:34 duration
              </div>
            </div>
          </motion.div>

          {/* Testimonial Cards */}
          {displayedStories.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.gradient}`} />
              
              {/* Country flag and university */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{testimonial.flag}</span>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{testimonial.country}</span>
                </div>
                <div className={`px-2 py-1 rounded-full bg-gradient-to-r ${testimonial.gradient} text-white text-xs font-medium`}>
                  {testimonial.program}
                </div>
              </div>
              
              {/* Story */}
              <blockquote className="text-sm text-gray-700 leading-relaxed mb-4">
                &ldquo;{testimonial.story}&rdquo;
              </blockquote>
              
              {/* Student info */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-800 text-sm">{testimonial.name}</div>
                  <div className="text-xs text-gray-500">{testimonial.university}</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-lg">🎓</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        {(hasMoreStories || showAllStories) && (
          <div className="flex justify-center mt-12">
            <motion.button
              onClick={handleShowMore}
              className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="relative z-10">
                {showAllStories ? 'Show Less Stories' : `See More Success Stories (${testimonials.length - storiesToShow} more)`}
              </span>
              <motion.div 
                className="relative z-10"
                animate={{ rotate: showAllStories ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.div>
              
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Sparkle effect */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              </div>
            </motion.button>
          </div>
        )}

        {/* Live Feed Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 rounded-2xl border border-dashed border-emerald-300 bg-emerald-50/50 p-6"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping absolute" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <div>
                <div className="font-semibold text-emerald-800 text-sm">Live Success Feed</div>
                <div className="text-xs text-emerald-600">Real-time visa approvals will stream here</div>
              </div>
            </div>
            <div className="text-xs text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full font-medium">
              WebSocket Integration Planned
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}