"use client"
import React from 'react'
import { motion } from 'framer-motion'

export const SuccessWall: React.FC = () => {
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
    }
  ]

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
          
          {/* Mini stats bar */}
          <div className="mt-8 inline-flex items-center gap-8 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm px-8 py-4 shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-black bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">4200+</div>
              <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Approvals</div>
            </div>
            <div className="h-8 w-px bg-gray-200" />
            <div className="text-center">
              <div className="text-2xl font-black bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">97%</div>
              <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Satisfaction</div>
            </div>
            <div className="h-8 w-px bg-gray-200" />
            <div className="text-center">
              <div className="text-2xl font-black bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">50+</div>
              <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Partners</div>
            </div>
          </div>
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
          {testimonials.map((testimonial, index) => (
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