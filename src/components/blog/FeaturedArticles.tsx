"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export const BlogHighlight: React.FC = () => {
  const posts = [
    { 
      id: 1, 
      title: 'Top 10 Scholarships in Canada 2025', 
      slug: 'scholarships-canada-2025',
      excerpt: 'Discover the most lucrative scholarship opportunities for international students in Canada this year.',
      category: 'Scholarships',
      readTime: '5 min read',
      author: 'Sarah Chen',
      date: 'Oct 3, 2025',
      featured: true,
      gradient: 'from-emerald-400 to-teal-600',
      bgGradient: 'from-emerald-50 to-teal-50',
      icon: '🎓'
    },
    { 
      id: 2, 
      title: 'Visa Interview Tips: What to Avoid', 
      slug: 'visa-interview-tips',
      excerpt: 'Common mistakes that can derail your visa interview and how to avoid them for guaranteed success.',
      category: 'Visa Guide',
      readTime: '7 min read',
      author: 'Michael Kumar',
      date: 'Oct 1, 2025',
      featured: false,
      gradient: 'from-blue-400 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-50',
      icon: '🛂'
    },
    { 
      id: 3, 
      title: 'How to Write a Powerful SOP', 
      slug: 'write-powerful-sop',
      excerpt: 'Step-by-step guide to crafting a statement of purpose that gets you accepted to top universities.',
      category: 'Application',
      readTime: '10 min read',
      author: 'Emily Rodriguez',
      date: 'Sep 28, 2025',
      featured: false,
      gradient: 'from-purple-400 to-violet-600',
      bgGradient: 'from-purple-50 to-violet-50',
      icon: '✍️'
    },
    { 
      id: 4, 
      title: 'Best Study Destinations for 2025', 
      slug: 'best-study-destinations-2025',
      excerpt: 'Compare top countries for international education based on cost, opportunities, and quality of life.',
      category: 'Country Guide',
      readTime: '8 min read',
      author: 'James Thompson',
      date: 'Sep 25, 2025',
      featured: false,
      gradient: 'from-orange-400 to-red-600',
      bgGradient: 'from-orange-50 to-red-50',
      icon: '🌍'
    },
    { 
      id: 5, 
      title: 'Document Checklist for University Applications', 
      slug: 'document-checklist-university',
      excerpt: 'Complete checklist of documents needed for university applications across different countries.',
      category: 'Preparation',
      readTime: '6 min read',
      author: 'Sarah Chen',
      date: 'Sep 22, 2025',
      featured: false,
      gradient: 'from-pink-400 to-rose-600',
      bgGradient: 'from-pink-50 to-rose-50',
      icon: '📋'
    },
    { 
      id: 6, 
      title: 'Financial Planning for Study Abroad', 
      slug: 'financial-planning-study-abroad',
      excerpt: 'Smart strategies to budget and finance your international education without breaking the bank.',
      category: 'Finance',
      readTime: '12 min read',
      author: 'Michael Kumar',
      date: 'Sep 20, 2025',
      featured: false,
      gradient: 'from-cyan-400 to-blue-600',
      bgGradient: 'from-cyan-50 to-blue-50',
      icon: '💰'
    }
  ]

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'Scholarships': 'text-emerald-700 bg-emerald-100',
      'Visa Guide': 'text-blue-700 bg-blue-100',
      'Application': 'text-purple-700 bg-purple-100',
      'Country Guide': 'text-orange-700 bg-orange-100',
      'Preparation': 'text-pink-700 bg-pink-100',
      'Finance': 'text-cyan-700 bg-cyan-100'
    }
    return colorMap[category] || 'text-gray-700 bg-gray-100'
  }

  return (
    <section className="relative py-20 bg-gradient-to-b from-purple-50/30 via-white to-blue-50/30">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-indigo-100/10 via-transparent to-purple-100/10" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
            Latest Insights
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-800 mb-4">
            Resources & <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Guides</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert advice, tips, and comprehensive guides to help you navigate your study abroad journey
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Featured badge */}
              {post.featured && (
                <div className="absolute -top-3 left-4 z-20">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    Featured
                  </div>
                </div>
              )}

              {/* Card */}
              <div className={`relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-[400px] flex flex-col ${post.featured ? 'ring-2 ring-emerald-200 border-emerald-200' : ''}`}>
                {/* Header with icon and category */}
                <div className={`h-20 bg-gradient-to-br ${post.bgGradient} relative overflow-hidden flex-shrink-0`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-10`} />
                  <div className="absolute -top-10 -right-10 h-16 w-16 rounded-full bg-white/20 blur-xl" />
                  <div className="relative z-10 p-4 flex items-center justify-between">
                    <div className="text-2xl">{post.icon}</div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Title */}
                  <h3 className="font-bold text-gray-800 text-lg mb-3 leading-tight group-hover:text-gray-900 transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta information */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">{post.readTime}</span>
                      <div className="flex items-center gap-1 text-gray-400">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs">156 views</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link 
                    href={`/blog/${post.slug}`}
                    className={`block w-full text-center py-3 rounded-xl bg-gradient-to-r ${post.gradient} text-white font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:scale-105 mt-auto`}
                  >
                    Read Article →
                  </Link>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${post.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`} />
              </div>
            </motion.article>
          ))}
        </div>

        {/* See More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Link 
            href="/blog"
            className="inline-flex items-center gap-3 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <span className="text-gray-600 font-medium">Explore more articles and guides</span>
            <div className="rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-2 text-sm font-medium text-white transition group-hover:from-indigo-500 group-hover:to-purple-500">
              See More Articles →
            </div>
          </Link>
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-12 text-center"
        >
          <div className="max-w-md mx-auto rounded-2xl border border-dashed border-indigo-300 bg-indigo-50/50 p-6">
            <div className="mb-4">
              <div className="text-sm font-semibold text-indigo-800 mb-2">Stay Updated</div>
              <div className="text-xs text-indigo-600">Get the latest articles and guides delivered to your inbox</div>
            </div>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-sm border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-indigo-500 hover:to-purple-500 transition">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}