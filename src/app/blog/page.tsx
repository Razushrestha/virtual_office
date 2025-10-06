'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { SEOKeywords } from '../../components/seo/SEOKeywords'
import { 
  Calendar,
  Clock,
  User,
  Eye,
  Heart,
  Share2,
  BookOpen,
  TrendingUp,
  Globe,
  GraduationCap,
  Plane,
  DollarSign,
  MapPin,
  Star,
  ChevronRight,
  Search,
  Filter,
  Tag,
  ArrowRight,
  Play,
  Download,
  Bookmark,
  MessageCircle,
  ThumbsUp,
  Sparkles,
  Award,
  Target,
  Lightbulb,
  PenTool,
  Users,
  Trophy
} from 'lucide-react'

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTag, setSelectedTag] = useState('All')

  // SEO-optimized categories with descriptive names
  const categories = [
    { id: 'All', name: 'All Posts', icon: BookOpen, count: 156, color: 'from-blue-500 to-cyan-500' },
    { id: 'Study Abroad', name: 'Study Abroad Guides', icon: Plane, count: 45, color: 'from-purple-500 to-pink-500' },
    { id: 'Visa Guide', name: 'Visa Application Help', icon: Globe, count: 38, color: 'from-green-500 to-emerald-500' },
    { id: 'Scholarships', name: 'Scholarship Tips', icon: DollarSign, count: 32, color: 'from-orange-500 to-red-500' },
    { id: 'Universities', name: 'University Rankings', icon: GraduationCap, count: 41, color: 'from-indigo-500 to-purple-500' }
  ]

  const tags = ['All', 'Canada', 'USA', 'UK', 'Australia', 'Masters', 'PhD', 'Undergraduate', 'IELTS', 'TOEFL', 'SOP', 'Interview']

  const featuredPost = {
    id: 1,
    title: 'Complete Guide to Studying in Canada 2024: Everything You Need to Know',
    excerpt: 'Discover the ultimate guide to pursuing higher education in Canada, including top universities, visa requirements, scholarship opportunities, and insider tips from successful international students.',
    content: 'Canada has emerged as one of the most popular destinations for international students, offering world-class education, multicultural environment, and excellent post-graduation opportunities...',
    author: 'Dr. Sarah Johnson',
    authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b2c5?w=150',
    authorBio: 'Study Abroad Expert & Former Immigration Officer',
    date: '2024-10-01',
    readTime: '12 min read',
    category: 'Study Abroad',
    tags: ['Canada', 'Masters', 'Visa', 'Universities'],
    image: 'https://images.unsplash.com/photo-1503614472-8c93d56cd601?w=800',
    views: '15.2K',
    likes: '892',
    comments: '156',
    featured: true,
    difficulty: 'Beginner',
    rating: 4.9,
    downloadCount: '2.1K'
  }

  const blogPosts = [
    {
      id: 2,
      title: 'Top 10 Universities in UK for International Students 2024',
      excerpt: 'Explore the best UK universities offering exceptional programs for international students, including admission requirements and scholarship opportunities.',
      author: 'Prof. Michael Chen',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      date: '2024-09-28',
      readTime: '8 min read',
      category: 'Universities',
      tags: ['UK', 'Rankings', 'Admissions'],
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=600',
      views: '12.8K',
      likes: '654',
      comments: '89',
      featured: false,
      difficulty: 'Intermediate',
      rating: 4.7,
      trending: true
    },
    {
      id: 3,
      title: 'How to Write a Winning Statement of Purpose (SOP)',
      excerpt: 'Master the art of writing compelling SOPs that get you admitted to your dream university with these proven strategies and examples.',
      author: 'Emma Rodriguez',
      authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      date: '2024-09-25',
      readTime: '10 min read',
      category: 'Study Abroad',
      tags: ['SOP', 'Applications', 'Tips'],
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600',
      views: '18.5K',
      likes: '1.2K',
      comments: '234',
      featured: false,
      difficulty: 'Beginner',
      rating: 4.8,
      trending: true
    },
    {
      id: 4,
      title: 'Scholarship Opportunities for Indian Students in 2024',
      excerpt: 'Comprehensive list of scholarships available for Indian students planning to study abroad, including eligibility and application process.',
      author: 'Raj Patel',
      authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      date: '2024-09-22',
      readTime: '15 min read',
      category: 'Scholarships',
      tags: ['Scholarships', 'Funding', 'India'],
      image: 'https://images.unsplash.com/photo-1427751840561-9852520f8ce8?w=600',
      views: '22.1K',
      likes: '1.8K',
      comments: '345',
      featured: false,
      difficulty: 'Intermediate',
      rating: 4.9
    },
    {
      id: 5,
      title: 'Student Visa Interview: Common Questions & Best Answers',
      excerpt: 'Prepare for your student visa interview with these commonly asked questions and expert-approved answers that increase your approval chances.',
      author: 'Lisa Thompson',
      authorImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150',
      date: '2024-09-20',
      readTime: '7 min read',
      category: 'Visa Guide',
      tags: ['Visa', 'Interview', 'Tips'],
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600',
      views: '9.7K',
      likes: '567',
      comments: '78',
      featured: false,
      difficulty: 'Beginner',
      rating: 4.6
    },
    {
      id: 6,
      title: 'IELTS vs TOEFL: Which Test Should You Take?',
      excerpt: 'Complete comparison of IELTS and TOEFL exams to help you choose the right English proficiency test for your study abroad goals.',
      author: 'David Kumar',
      authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      date: '2024-09-18',
      readTime: '6 min read',
      category: 'Study Abroad',
      tags: ['IELTS', 'TOEFL', 'English Tests'],
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600',
      views: '14.3K',
      likes: '823',
      comments: '167',
      featured: false,
      difficulty: 'Beginner',
      rating: 4.5
    },
    {
      id: 7,
      title: 'Cost of Living Guide: USA vs Canada vs UK vs Australia',
      excerpt: 'Detailed breakdown of living expenses in top study destinations to help you budget effectively for your international education.',
      author: 'Sophie Williams',
      authorImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150',
      date: '2024-09-15',
      readTime: '11 min read',
      category: 'Study Abroad',
      tags: ['Cost', 'Budget', 'Comparison'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600',
      views: '16.9K',
      likes: '945',
      comments: '201',
      featured: false,
      difficulty: 'Intermediate',
      rating: 4.7
    }
  ]

  const trendingTopics = [
    { name: 'Canada Immigration', posts: 23, trend: '+15%' },
    { name: 'Masters in AI', posts: 18, trend: '+28%' },
    { name: 'Scholarship Tips', posts: 31, trend: '+12%' },
    { name: 'Visa Updates', posts: 14, trend: '+22%' },
    { name: 'University Rankings', posts: 27, trend: '+8%' }
  ]

  const expertAuthors = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Study Abroad Expert',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b2c5?w=150',
      posts: 45,
      followers: '12.5K',
      expertise: ['Visa Guidance', 'University Selection']
    },
    {
      name: 'Prof. Michael Chen',
      role: 'Education Consultant',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      posts: 38,
      followers: '8.9K',
      expertise: ['University Rankings', 'Program Selection']
    },
    {
      name: 'Emma Rodriguez',
      role: 'SOP Writing Expert',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      posts: 32,
      followers: '15.2K',
      expertise: ['SOP Writing', 'Application Strategy']
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag)
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesTag && matchesSearch
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
      <SEOKeywords page="blog" location="kathmandu" />
      <Head>
        <title>Study Abroad Blog - Expert Guides, Tips & University Information Nepal | Virtual Office</title>
        <meta name="description" content="Get expert study abroad advice, university guides, visa tips, scholarship information and success stories from leading consultancy in Nepal. Comprehensive resources for Nepali students planning to study overseas." />
        <meta name="keywords" content="study abroad blog nepal, university guides kathmandu, visa tips nepal, scholarship information, international education consultancy, study overseas from nepal, education consultancy kathmandu, IELTS preparation nepal, TOEFL nepal, SOP writing help, visa interview tips" />
        <meta property="og:title" content="Study Abroad Blog - Expert Guides & Tips Nepal" />
        <meta property="og:description" content="Comprehensive study abroad resources and expert guidance for Nepali international students" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Study Abroad Blog - Expert Guides & Tips Nepal" />
        <meta name="twitter:description" content="Comprehensive study abroad resources and expert guidance for Nepali international students" />
        <link rel="canonical" href="/blog" />
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
            aria-labelledby="blog-hero-title"
          >
          <div className="mx-auto max-w-7xl text-center">
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-full text-sm font-semibold mb-8 border border-blue-200/50 shadow-lg backdrop-blur-sm" 
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <PenTool className="w-3 h-3 text-white" />
              </div>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
                Expert Insights & Guidance
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 md:mb-8 leading-tight"
              variants={fadeInUp}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm">
                Study Abroad
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Blog & Resources
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
                <Lightbulb className="w-5 h-5 text-white m-1.5 fill-current" />
              </motion.div>
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed font-medium px-4"
              variants={fadeInUp}
            >
              Get expert study abroad advice, university guides, visa tips, and scholarship information from{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
                certified education consultants
              </span>{" "}
              to make your international education journey{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-bold">
                successful and stress-free
              </span>.
            </motion.p>

            {/* Quick Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto px-4"
              variants={fadeInUp}
            >
              {[
                { icon: BookOpen, label: 'Articles', value: '156+', color: 'from-blue-500 to-cyan-500' },
                { icon: Users, label: 'Expert Authors', value: '25+', color: 'from-purple-500 to-pink-500' },
                { icon: Eye, label: 'Monthly Readers', value: '50K+', color: 'from-green-500 to-emerald-500' },
                { icon: Award, label: 'Success Rate', value: '94%', color: 'from-orange-500 to-red-500' }
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div 
                    key={index} 
                    className="relative group cursor-pointer"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-60 group-hover:opacity-100"></div>
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 group-hover:shadow-xl transition-all duration-300">
                      <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl shadow-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-black text-gray-900 mb-1">{stat.value}</div>
                      <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </motion.section>
        </header>

        {/* Featured Post */}
        <motion.div 
          className="px-6 mb-16"
          variants={fadeInUp}
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-8">
              <h2 className="text-3xl font-black text-gray-900 mb-2">Featured Article</h2>
              <p className="text-gray-600">Must-read content from our experts</p>
            </div>
            
            <motion.div 
              className="relative group overflow-hidden rounded-3xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
              <div className="relative bg-white/95 backdrop-blur-sm p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-bold">
                        FEATURED
                      </span>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{featuredPost.date}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-4 md:mb-6 leading-tight">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-6 mb-8">
                      <div className="flex items-center gap-3">
                        <img 
                          src={featuredPost.authorImage} 
                          alt={featuredPost.author}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-semibold text-gray-900">{featuredPost.author}</div>
                          <div className="text-gray-500 text-sm">{featuredPost.authorBio}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6 mb-8 text-gray-500">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{featuredPost.readTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm">{featuredPost.views} views</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{featuredPost.likes} likes</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <motion.button 
                        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <BookOpen className="w-5 h-5" />
                        Read Full Article
                      </motion.button>
                      <motion.button 
                        className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl font-bold hover:bg-gray-50 transition-all duration-300 flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Bookmark className="w-5 h-5" />
                        Save for Later
                      </motion.button>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl"></div>
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="relative w-full h-80 object-cover rounded-2xl shadow-lg"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-bold text-gray-900">{featuredPost.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Categories & Filters */}
        <motion.div 
          className="px-6 mb-16"
          variants={fadeInUp}
        >
          <div className="mx-auto max-w-7xl">
            {/* Categories */}
            <div className="mb-6 md:mb-8">
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-4 md:mb-6 px-4 md:px-0">Browse by Study Abroad Category</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
                {categories.map((category) => {
                  const Icon = category.icon
                  return (
                    <motion.button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`relative group p-6 rounded-2xl transition-all duration-300 ${
                        selectedCategory === category.id 
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                          : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:shadow-lg border border-gray-200'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="text-center">
                        <div className={`w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center ${
                          selectedCategory === category.id 
                            ? 'bg-white/20' 
                            : `bg-gradient-to-r ${category.color}`
                        }`}>
                          <Icon className={`w-6 h-6 ${
                            selectedCategory === category.id ? 'text-white' : 'text-white'
                          }`} />
                        </div>
                        <div className="font-bold text-sm mb-1">{category.name}</div>
                        <div className={`text-xs ${
                          selectedCategory === category.id ? 'text-white/80' : 'text-gray-500'
                        }`}>
                          {category.count} posts
                        </div>
                      </div>
                    </motion.button>
                  )
                })}
              </div>
            </div>

            {/* Search and Tags */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-xl border border-white/50">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                {/* Search */}
                <div className="relative">
                  <label htmlFor="search-articles" className="sr-only">Search articles</label>
                  <Search className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
                  <input
                    id="search-articles"
                    type="text"
                    placeholder="Search articles, topics, authors..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-3 md:py-4 border border-gray-200 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm md:text-base"
                  />
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {tags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(tag)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        selectedTag === tag
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="px-6 pb-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Blog Posts */}
              <div className="lg:col-span-3">
                <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-6 md:mb-8">Latest Study Abroad Articles & Guides</h2>
                <div className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2">
                  {filteredPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      className="group relative overflow-hidden rounded-3xl bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50"
                      variants={fadeInUp}
                      whileHover={{ scale: 1.02 }}
                    >
                      {/* Image */}
                      <div className="relative overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        
                        {/* Badges */}
                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-bold">
                            {post.category}
                          </span>
                          {post.trending && (
                            <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full text-xs font-bold">
                              TRENDING
                            </span>
                          )}
                        </div>
                        
                        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                            <span className="text-xs font-bold text-gray-900">{post.rating}</span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <img 
                            src={post.authorImage} 
                            alt={post.author}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <div className="flex-1 text-sm text-gray-600">
                            <span className="font-medium">{post.author}</span>
                            <span className="mx-2">•</span>
                            <span>{post.date}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 md:mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 md:mb-4">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-gray-500 text-sm">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{post.readTime}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              <span>{post.views}</span>
                            </div>
                          </div>
                          
                          <motion.button 
                            className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                            whileHover={{ x: 5 }}
                          >
                            Read More
                            <ArrowRight className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6 md:space-y-8">
                {/* Trending Topics */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-lg border border-white/50">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    Trending Topics
                  </h3>
                  <div className="space-y-4">
                    {trendingTopics.map((topic, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 cursor-pointer">
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">{topic.name}</div>
                          <div className="text-gray-500 text-xs">{topic.posts} posts</div>
                        </div>
                        <div className="text-green-600 text-sm font-bold">{topic.trend}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expert Authors */}
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/50">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Users className="w-5 h-5 text-purple-600" />
                    Expert Authors
                  </h3>
                  <div className="space-y-4">
                    {expertAuthors.map((author, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 cursor-pointer">
                        <img 
                          src={author.image} 
                          alt={author.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 text-sm">{author.name}</div>
                          <div className="text-gray-500 text-xs">{author.role}</div>
                          <div className="text-gray-400 text-xs">{author.posts} posts • {author.followers} followers</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                  <p className="text-blue-100 mb-6 text-sm">Get the latest study abroad tips and guides delivered to your inbox.</p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                    <motion.button 
                      className="w-full py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Subscribe Now
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}