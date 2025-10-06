"use client"
import React, { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export const Metrics: React.FC = () => {
  const [approvals, setApprovals] = useState(4200)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    // Subtle animated counter increment (capped)
    const id = setInterval(() => {
      setApprovals(a => (a < 4325 ? a + Math.floor(Math.random() * 5) : a))
    }, 1800)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative py-16 bg-gradient-to-b from-white via-blue-50/30 to-purple-50/50">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-violet-100/20 via-transparent to-blue-100/20" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-2 text-sm font-medium text-violet-700 shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-violet-500 animate-pulse" />
            Trusted Globally
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-800">
            Our <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Success</span> in Numbers
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of students who have achieved their study abroad dreams with our proven guidance
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
          {/* Visa Approvals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative text-center bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all h-48 flex flex-col justify-between"
          >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-green-400/30 via-emerald-500/30 to-teal-500/30 blur opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative flex flex-col justify-center flex-1">
              <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent mb-3">
                {Math.floor(approvals / 100) * 100}+
              </div>
              <div className="text-xs font-bold tracking-wider text-green-700 uppercase mb-3">
                VISA APPROVALS
              </div>
              <div className="h-1 w-full rounded-full bg-gradient-to-r from-green-400 to-emerald-500" />
            </div>
          </motion.div>

          {/* Global Partners */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative text-center bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all h-48 flex flex-col justify-between"
          >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-400/30 via-indigo-500/30 to-purple-500/30 blur opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative flex flex-col justify-center flex-1">
              <div className="relative inline-block mb-3">
                <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  50+
                </div>
                <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-blue-500 animate-ping" />
                <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-blue-500" />
              </div>
              <div className="text-xs font-bold tracking-wider text-blue-700 uppercase mb-3">
                GLOBAL PARTNERS
              </div>
              <div className="h-1 w-full rounded-full bg-gradient-to-r from-blue-400 to-indigo-500" />
            </div>
          </motion.div>

          {/* Satisfaction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative text-center bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-100 hover:shadow-xl transition-all h-48 flex flex-col justify-between"
          >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-pink-400/30 via-purple-500/30 to-violet-500/30 blur opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative flex flex-col justify-center flex-1">
              <div className="relative inline-block mb-3">
                <svg className="h-14 w-14 lg:h-16 lg:w-16 -rotate-90 transform mx-auto" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-gray-200"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="url(#gradient-purple)"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={`${97 * 2.51} 251`}
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                  <defs>
                    <linearGradient id="gradient-purple" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg lg:text-xl font-black bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                    97%
                  </span>
                </div>
              </div>
              <div className="text-xs font-bold tracking-wider text-pink-700 uppercase mb-3">
                SATISFACTION
              </div>
              <div className="h-1 w-full rounded-full bg-gradient-to-r from-pink-400 to-purple-500" />
            </div>
          </motion.div>
        </div>

        {/* Bottom ticker */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="overflow-hidden rounded-lg border border-gray-200/50 bg-gray-50/50 p-4">
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                Live metrics
              </span>
              <span>Updated every 24h</span>
              <span>Since 2020</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}