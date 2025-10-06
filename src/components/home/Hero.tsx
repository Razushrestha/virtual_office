"use client"
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Button } from '../ui/Button'
import { MetricCard } from '../ui/MetricCard'
import { motion, useReducedMotion } from 'framer-motion'

interface QuickMatch {
  name: string
  country: string
  score: number
}

export const Hero: React.FC = () => {
  const [matches, setMatches] = useState<QuickMatch[] | null>(null)
  const [loading, setLoading] = useState(false)
  const countryRef = useRef<HTMLSelectElement | null>(null)
  const courseRef = useRef<HTMLInputElement | null>(null)
  const shouldReduceMotion = useReducedMotion()

  const handlePreview = () => {
    setLoading(true)
    setMatches(null)
    // Simulate network call for AI match demo
    setTimeout(() => {
      const selectedCountry = countryRef.current?.value || 'Canada'
      const course = courseRef.current?.value || 'Computer Science'
      setMatches([
        { name: `${selectedCountry} Tech University`, country: selectedCountry, score: 88 },
        { name: `${selectedCountry} International College`, country: selectedCountry, score: 83 },
        { name: `${selectedCountry} Institute of ${course.split(' ')[0]}`, country: selectedCountry, score: 79 }
      ])
      setLoading(false)
    }, 900)
  }

  return (
    <section className="relative flex min-h-[85vh] xs:min-h-[88vh] sm:min-h-[90vh] flex-col justify-center overflow-hidden" role="banner">
      {/* Light texture layer */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.01]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px'
      }} />
      {/* Animated background gradient overlay */}
      <div className={`pointer-events-none absolute inset-0 bg-gradient-hero opacity-30 ${shouldReduceMotion ? '' : 'animate-gradient-move'}`} />
      {/* Decorative floating blobs - responsive sizes */}
      <motion.span
        aria-hidden="true"
        className="absolute -top-16 -left-12 xs:-top-20 xs:-left-16 block h-[300px] w-[300px] xs:h-[420px] xs:w-[420px] sm:h-[500px] sm:w-[500px] rounded-full bg-violet-300/15 blur-3xl"
        animate={shouldReduceMotion ? {} : { y: [0, -25, 0], rotate: [0, 25, -10, 0] }}
        transition={shouldReduceMotion ? {} : { duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.span
        aria-hidden="true"
        className="absolute -bottom-20 -right-8 xs:-bottom-24 xs:-right-10 block h-[250px] w-[250px] xs:h-[340px] xs:w-[340px] sm:h-[400px] sm:w-[400px] rounded-full bg-blue-300/15 blur-3xl"
        animate={shouldReduceMotion ? {} : { y: [0, 30, 0] }}
        transition={shouldReduceMotion ? {} : { duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-full w-full opacity-25 bg-[radial-gradient(circle_at_center,#8b5cf6_0%,transparent_60%)]" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl py-16 xs:py-20 sm:py-24 md:py-32">
        <div className="grid gap-8 xs:gap-10 sm:gap-14 md:grid-cols-2 items-center">
          <div className="relative z-10 flex flex-col justify-center text-center lg:text-left mx-auto max-w-2xl lg:max-w-none">
          <div className="mb-3 xs:mb-4 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-3 xs:px-4 py-1 text-xs font-medium text-violet-700 shadow-soft-lg">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 animate-pulse-soft" />
            Smart Guidance. Real Outcomes.
          </div>
          <h1 className="text-balance text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="gradient-text bg-clip-text text-transparent">Find Your Perfect Study Destination</span>
            <span className="block pt-1 xs:pt-2 text-gray-800 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl">In <span className="relative inline-block"><span className="relative z-10 bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">60 Seconds</span><span className="absolute inset-x-1 -bottom-1 block h-1 xs:h-2 rounded-full bg-violet-500/30 blur-sm" /></span>.</span>
          </h1>
          <p className="mt-4 xs:mt-6 max-w-prose text-sm xs:text-base sm:text-lg leading-relaxed text-gray-600">
            Blend powerful AI matching with human expertise. Instantly shortlist programs, understand admission chances, and plan a visa-proof application strategy.
          </p>
          <div className="mt-5 xs:mt-6">
            <label className="mb-2 block text-xs font-medium text-gray-600" htmlFor="hero-search">Where do you want to study?</label>
            <div className="flex w-full overflow-hidden rounded-lg xs:rounded-xl border border-gray-300 bg-white shadow-lg hover:shadow-xl transition-all duration-300 focus-within:border-violet-400 focus-within:ring-2 focus-within:ring-violet-200 focus-within:shadow-xl">
              <input 
                id="hero-search" 
                className="flex-1 bg-transparent px-4 xs:px-6 py-3 xs:py-4 text-sm text-gray-800 placeholder:text-gray-400 outline-none" 
                placeholder="e.g. Canada, UK, Australia" 
              />
              <button 
                type="button" 
                className="group relative px-6 xs:px-8 py-3 xs:py-4 bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 text-white font-bold text-xs xs:text-sm transition-all duration-300 hover:from-blue-700 hover:via-violet-700 hover:to-purple-700 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 active:scale-95"
                aria-label="Search for study destinations"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Search
                </span>
                
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
                
                {/* Sparkle effect */}
                <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 via-violet-400/20 to-purple-400/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                </div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-700" aria-hidden="true"></div>
              </button>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/ai-finder" className="group relative rounded-lg bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 px-[1px] py-[1px] text-sm font-medium shadow-soft-lg transition hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400">
              <span className="block rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3 text-white backdrop-blur-md dark:from-violet-500 dark:to-blue-500">Try Our Free AI University Finder <span className="ml-1 inline-block translate-y-0 transition-transform group-hover:translate-y-[-2px]" aria-hidden="true">→</span></span>
            </Link>
            <Link href="/book" className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition hover:border-violet-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2">
              Book Counseling
            </Link>
            <Link href="/discover" className="rounded-lg border border-transparent bg-violet-50 px-6 py-3 text-sm font-medium text-violet-700 hover:bg-violet-100 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2">
              Explore Countries
            </Link>
          </div>
          </div>
        </div>
        <div className="relative">
          {/* Accent ring */}
            <div className="pointer-events-none absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-tr from-violet-500/50 via-blue-400/40 to-fuchsia-400/40 opacity-60 blur-2xl" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="group relative rounded-3xl border border-white/40 bg-white/80 p-6 shadow-soft-lg backdrop-blur-xl dark:border-white/10 dark:bg-gray-700/60"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/10 via-transparent to-blue-500/10 opacity-0 transition group-hover:opacity-100" />
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-800 dark:text-gray-100">
              <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-tr from-violet-600 to-blue-500 text-[10px] font-bold text-white shadow">AI</span>
              Quick AI Match (Demo)
            </h3>
            <form className="space-y-4 text-sm" onSubmit={(e) => { e.preventDefault(); handlePreview() }}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="mb-1 block text-[11px] font-medium uppercase tracking-wide text-gray-600 dark:text-gray-400">Preferred Country</label>
                  <select ref={countryRef} className="w-full rounded-md border border-gray-300/70 bg-white/70 px-3 py-2 text-gray-800 backdrop-blur focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200 dark:border-gray-600 dark:bg-gray-800/60 dark:text-gray-100 dark:focus:ring-violet-500/40">
                    {['Canada','UK','USA','Australia'].map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div className="sm:col-span-1">
                  <label className="mb-1 block text-[11px] font-medium uppercase tracking-wide text-gray-600 dark:text-gray-400">Course Area</label>
                  <input ref={courseRef} className="w-full rounded-md border border-gray-300/70 bg-white/70 px-3 py-2 text-gray-800 placeholder:text-gray-400 backdrop-blur focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200 dark:border-gray-600 dark:bg-gray-800/60 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:ring-violet-500/40" placeholder="Computer Science" />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-[11px] font-medium uppercase tracking-wide text-gray-600 dark:text-gray-400">Budget / Year (USD)</label>
                <input type="number" className="w-full rounded-md border border-gray-300/70 bg-white/70 px-3 py-2 text-gray-800 placeholder:text-gray-400 backdrop-blur focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200 dark:border-gray-600 dark:bg-gray-800/60 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:ring-violet-500/40" placeholder="15000" />
              </div>
              <Button disabled={loading} type="submit" className="w-full" loading={loading}>Preview Matches</Button>
            </form>
            {matches && (
              <div className="mt-6 space-y-2 rounded-lg border border-gray-200/70 bg-white/70 p-4 text-xs backdrop-blur dark:border-gray-600 dark:bg-gray-800/60">
                <div className="mb-1 font-medium text-gray-700 dark:text-gray-200">Top Matches (Demo)</div>
                {matches.map(m => (
                  <div key={m.name} className="flex items-center justify-between">
                    <span className="truncate pr-2 text-gray-700 dark:text-gray-200">{m.name}</span>
                    <span className="font-semibold text-violet-600 dark:text-violet-400">{m.score}</span>
                  </div>
                ))}
                <div className="pt-1 text-[10px] text-gray-500 dark:text-gray-400">Sample data — full report after email capture.</div>
              </div>
            )}
            {!matches && !loading && (
              <div className="mt-6 rounded-lg border border-dashed border-gray-300/70 p-4 text-xs text-gray-500 backdrop-blur dark:border-gray-600 dark:text-gray-400">
                Enter details & click preview to view demo matches.
              </div>
            )}
            <div className="mt-6 flex items-center justify-between gap-3 rounded-lg border border-violet-200/60 bg-gradient-to-r from-violet-50/70 to-blue-50/60 p-3 text-[10px] font-medium text-violet-700 dark:border-violet-500/30 dark:from-violet-500/10 dark:to-blue-500/10 dark:text-violet-300">
              <span>Full report includes eligibility, deadlines & docs checklist.</span>
              <Link href="/ai-finder" className="rounded bg-violet-600 px-2 py-1 text-white hover:bg-violet-500 dark:bg-violet-500 dark:hover:bg-violet-400">Start →</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}