"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export const ServicesSnapshot: React.FC = () => {
  const services = [
    { 
      title: 'SOP Writing', 
      desc: 'AI draft + expert review', 
      price: '$75',
      icon: '✍️',
      gradient: 'from-blue-400 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-50',
      features: ['AI-powered drafts', 'Expert review', 'Unlimited revisions'],
      popular: false,
      savings: null
    },
    { 
      title: 'Application Processing', 
      desc: 'Submission & tracking', 
      price: '$199',
      icon: '📋',
      gradient: 'from-emerald-400 to-teal-600',
      bgGradient: 'from-emerald-50 to-teal-50',
      features: ['Complete submission', 'Real-time tracking', 'Status updates'],
      popular: true,
      savings: 'Save $50'
    },
    { 
      title: 'Document Verification', 
      desc: 'OCR & integrity checks', 
      price: '$49',
      icon: '📄',
      gradient: 'from-amber-400 to-orange-600',
      bgGradient: 'from-amber-50 to-orange-50',
      features: ['OCR scanning', 'Integrity verification', 'Error detection'],
      popular: false,
      savings: null
    },
    { 
      title: 'Visa Guidance', 
      desc: 'Interview & forms prep', 
      price: '$129',
      icon: '🛂',
      gradient: 'from-purple-400 to-violet-600',
      bgGradient: 'from-purple-50 to-violet-50',
      features: ['Interview coaching', 'Form assistance', 'Mock sessions'],
      popular: false,
      savings: null
    },
    { 
      title: 'Pre-departure', 
      desc: 'Orientation & checklist', 
      price: '$39',
      icon: '✈️',
      gradient: 'from-pink-400 to-rose-600',
      bgGradient: 'from-pink-50 to-rose-50',
      features: ['Orientation sessions', 'Travel checklist', 'Cultural prep'],
      popular: false,
      savings: null
    }
  ]

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50/50 via-white to-indigo-50/30">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-indigo-100/10 via-transparent to-purple-100/10" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
            Our Services
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-800 mb-4">
            Expert <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional support at every step of your study abroad journey
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Popular badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Savings badge */}
              {service.savings && (
                <div className="absolute -top-2 -right-2 z-20">
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
                    {service.savings}
                  </div>
                </div>
              )}

              {/* Card */}
              <div className={`relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-[380px] flex flex-col ${service.popular ? 'ring-2 ring-emerald-200 border-emerald-200' : ''}`}>
                {/* Gradient header */}
                <div className={`h-20 bg-gradient-to-br ${service.bgGradient} relative overflow-hidden flex-shrink-0`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10`} />
                  <div className="absolute -top-10 -right-10 h-16 w-16 rounded-full bg-white/20 blur-xl" />
                  <div className="relative z-10 p-4 flex items-center justify-center">
                    <div className="text-3xl">{service.icon}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  {/* Title and description */}
                  <div className="mb-4">
                    <h3 className="font-bold text-gray-800 text-lg mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-6 flex-1">
                    <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-3">Includes</div>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs text-gray-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="text-center">
                      <span className="text-3xl font-black bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                        {service.price}
                      </span>
                      <div className="text-xs text-gray-500 mt-1">One-time fee</div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link 
                    href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`block w-full text-center py-3 rounded-xl bg-gradient-to-r ${service.gradient} text-white font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:scale-105 mt-auto`}
                  >
                    Learn More →
                  </Link>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`} />
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
              <div className="font-semibold text-gray-800 mb-1">Need a custom package?</div>
              <div className="text-sm text-gray-600">Get personalized pricing for multiple services</div>
            </div>
            <Link 
              href="/services" 
              className="rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-medium text-white transition hover:from-indigo-500 hover:to-purple-500 whitespace-nowrap"
            >
              View All Services →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}