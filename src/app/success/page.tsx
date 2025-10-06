'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { SEOKeywords } from '../../components/seo/SEOKeywords'
import { 
  Star, 
  MapPin, 
  GraduationCap, 
  Trophy, 
  Calendar, 
  DollarSign, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Heart, 
  Play,
  Quote,
  Award,
  Globe,
  BookOpen,
  Sparkles,
  Filter,
  Search
} from 'lucide-react'

export default function SuccessPage() {
  const [selectedCountry, setSelectedCountry] = useState('All')
  const [selectedProgram, setSelectedProgram] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const successStories = [
    {
      id: 1,
      name: 'Priya Sharma',
      story: 'Got visa approval for Masters in Computer Science at University of Toronto with 50% scholarship!',
      fullStory: 'After struggling with my initial applications, Virtual Office helped me craft a compelling SOP and identify the perfect programs. The AI matching was spot-on, and the counsellor guidance was invaluable. I not only got accepted but also received a 50% merit scholarship covering my entire tuition!',
      country: 'Canada',
      program: 'Computer Science',
      degree: 'Masters',
      university: 'University of Toronto',
      scholarship: '$25,000',
      year: '2024',
      duration: '2 years',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b2c5?w=400',
      flag: '🇨🇦',
      gradient: 'from-emerald-400 to-teal-600',
      bgGradient: 'from-emerald-50 to-teal-50',
      rating: 5,
      videoThumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400',
      hasVideo: true,
      achievements: ['50% Scholarship', 'Fast Visa Approval', 'Research Assistant'],
      beforeAfter: {
        before: 'Rejected from 3 universities',
        after: 'Accepted with scholarship'
      }
    },
    {
      id: 2,
      name: 'Ahmed Hassan',
      story: 'Secured admission to Oxford University for MBA program with full funding support.',
      fullStory: 'Coming from a non-traditional background, I thought Oxford was impossible. Virtual Office helped me highlight my unique experiences and craft applications that stood out. The interview preparation was exceptional, and I landed full funding!',
      country: 'UK',
      program: 'MBA',
      degree: 'Masters',
      university: 'Oxford University',
      scholarship: 'Full Funding',
      year: '2024',
      duration: '1 year',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      flag: '🇬🇧',
      gradient: 'from-blue-400 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-50',
      rating: 5,
      hasVideo: false,
      achievements: ['Full Funding', 'Oxford Admission', 'Career Change'],
      beforeAfter: {
        before: 'Career uncertainty',
        after: 'Oxford MBA with funding'
      }
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      story: 'Successfully obtained F-1 visa for PhD in Engineering at MIT with research assistantship.',
      fullStory: 'The PhD application process seemed overwhelming until I found Virtual Office. They helped me connect with the right professors, craft research proposals, and navigate the complex application requirements. Landing MIT with funding was beyond my dreams!',
      country: 'USA',
      program: 'PhD Engineering',
      degree: 'PhD',
      university: 'MIT',
      scholarship: 'Research Assistantship',
      year: '2024',
      duration: '5 years',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      flag: '🇺🇸',
      gradient: 'from-purple-400 to-pink-600',
      bgGradient: 'from-purple-50 to-pink-50',
      rating: 5,
      hasVideo: true,
      achievements: ['MIT Admission', 'Research Funding', 'F-1 Visa'],
      beforeAfter: {
        before: 'Confused about PhD process',
        after: 'MIT PhD with funding'
      }
    },
    {
      id: 4,
      name: 'David Chen',
      story: 'Approved for study permit to pursue Data Science Masters at McGill University.',
      fullStory: 'As an international student with average grades, I was worried about my chances. Virtual Office helped me find programs that valued my work experience and highlighted my potential. McGill was the perfect match!',
      country: 'Canada',
      program: 'Data Science',
      degree: 'Masters',
      university: 'McGill University',
      scholarship: '$15,000',
      year: '2024',
      duration: '2 years',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      flag: '🇨🇦',
      gradient: 'from-orange-400 to-red-600',
      bgGradient: 'from-orange-50 to-red-50',
      rating: 5,
      hasVideo: false,
      achievements: ['Study Permit', 'Merit Scholarship', 'Perfect Match'],
      beforeAfter: {
        before: 'Average academic profile',
        after: 'McGill admission with scholarship'
      }
    },
    {
      id: 5,
      name: 'Sophie Williams',
      story: 'Received acceptance for Medicine degree at Imperial College London with merit scholarship.',
      fullStory: 'Medical school admissions are incredibly competitive. Virtual Office helped me craft a standout personal statement and prepare for interviews. Their guidance was crucial in helping me stand out among thousands of applicants.',
      country: 'UK',
      program: 'Medicine',
      degree: 'MBBS',
      university: 'Imperial College London',
      scholarship: 'Merit Scholarship',
      year: '2024',
      duration: '6 years',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400',
      flag: '🇬🇧',
      gradient: 'from-cyan-400 to-blue-600',
      bgGradient: 'from-cyan-50 to-blue-50',
      rating: 5,
      hasVideo: true,
      achievements: ['Medical School', 'Merit Scholarship', 'Competitive Field'],
      beforeAfter: {
        before: 'Worried about competition',
        after: 'Imperial College Medicine'
      }
    },
    {
      id: 6,
      name: 'Raj Patel',
      story: 'Got into Stanford for Masters in AI with teaching assistantship and full tuition waiver.',
      fullStory: 'Stanford was my dream school but seemed unreachable. Virtual Office helped me craft applications that showcased my passion for AI and connected me with current students. The teaching assistantship makes it financially viable!',
      country: 'USA',
      program: 'Artificial Intelligence',
      degree: 'Masters',
      university: 'Stanford University',
      scholarship: 'Full Tuition Waiver',
      year: '2024',
      duration: '2 years',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      flag: '🇺🇸',
      gradient: 'from-indigo-400 to-purple-600',
      bgGradient: 'from-indigo-50 to-purple-50',
      rating: 5,
      hasVideo: false,
      achievements: ['Stanford Admission', 'Full Funding', 'Teaching Assistant'],
      beforeAfter: {
        before: 'Dream seemed unreachable',
        after: 'Stanford with full funding'
      }
    }
  ]

  const countries = ['All', 'Canada', 'USA', 'UK', 'Australia', 'Germany']
  const programs = ['All', 'Computer Science', 'MBA', 'Engineering', 'Medicine', 'Data Science', 'AI']

  const filteredStories = successStories.filter(story => {
    const matchesCountry = selectedCountry === 'All' || story.country === selectedCountry
    const matchesProgram = selectedProgram === 'All' || story.program.includes(selectedProgram)
    const matchesSearch = story.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         story.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.program.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCountry && matchesProgram && matchesSearch
  })

  const stats = [
    { icon: Users, label: 'Success Stories', value: '10,000+', color: 'from-blue-500 to-cyan-500' },
    { icon: Trophy, label: 'Average Scholarship', value: '$18,500', color: 'from-green-500 to-emerald-500' },
    { icon: TrendingUp, label: 'Visa Success Rate', value: '96%', color: 'from-purple-500 to-pink-500' },
    { icon: Globe, label: 'Countries', value: '25+', color: 'from-orange-500 to-red-500' }
  ]

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
      <SEOKeywords page="success" location="kathmandu" />
      <Head>
        <title>Nepali Student Success Stories - Study Abroad Achievements Nepal | Virtual Office</title>
        <meta name="description" content="Read inspiring success stories from Nepali students who achieved their study abroad dreams with Virtual Office Nepal. Real visa approvals, scholarships, and university acceptances from Kathmandu, Pokhara, Chitwan students." />
        <meta name="keywords" content="nepali student success stories, study abroad success nepal, nepali student testimonials, visa approval stories nepal, scholarship winners nepal, university acceptance nepal, study abroad testimonials kathmandu, student achievements" />
        <meta property="og:title" content="Nepali Student Success Stories - Study Abroad Achievements" />
        <meta property="og:description" content="Inspiring success stories from Nepali students who achieved their study abroad dreams" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nepali Student Success Stories - Study Abroad Achievements" />
        <meta name="twitter:description" content="Inspiring success stories from Nepali students who achieved their study abroad dreams" />
        <link rel="canonical" href="/success" />
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
            aria-labelledby="success-hero-title"
          >
          <div className="mx-auto max-w-7xl text-center">
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 rounded-full text-sm font-semibold mb-8 border border-green-200/50 shadow-lg backdrop-blur-sm" 
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-6 h-6 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center">
                <Trophy className="w-3 h-3 text-white" />
              </div>
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
                Real Student Success Stories
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 md:mb-8 leading-tight"
              variants={fadeInUp}
            >
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
                Success Stories
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Dreams Achieved
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
                <Star className="w-5 h-5 text-white m-1.5 fill-current" />
              </motion.div>
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed font-medium px-4"
              variants={fadeInUp}
            >
              Read inspiring success stories from international students who achieved their study abroad dreams with our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
                expert guidance and AI-powered university matching
              </span>{" "}
              and{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-bold">
                comprehensive visa support
              </span>.
            </motion.p>

            {/* Stats Section */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-16 md:mb-20 px-4"
              variants={fadeInUp}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div 
                    key={index} 
                    className="relative group cursor-pointer"
                    variants={fadeInUp}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-60 group-hover:opacity-100"></div>
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-white/50 group-hover:shadow-xl transition-all duration-300">
                      <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${stat.color} rounded-xl md:rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-5 h-5 md:w-8 md:h-8 text-white" />
                      </div>
                      <div className="text-xl md:text-3xl font-black text-gray-900 mb-1 md:mb-2">{stat.value}</div>
                      <div className="text-gray-600 text-xs md:text-sm font-medium">{stat.label}</div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </motion.section>
        </header>

        {/* Filters Section */}
        <motion.div 
          className="px-4 md:px-6 mb-8 md:mb-12"
          variants={fadeInUp}
        >
          <div className="mx-auto max-w-7xl">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-xl border border-white/50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {/* Search */}
                <div className="relative">
                  <label htmlFor="search-stories" className="sr-only">Search success stories</label>
                  <Search className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
                  <input
                    id="search-stories"
                    type="text"
                    placeholder="Search students, universities..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-3 md:py-4 border border-gray-200 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm md:text-base"
                  />
                </div>
                
                {/* Country Filter */}
                <div className="relative">
                  <label htmlFor="country-filter" className="sr-only">Filter by country</label>
                  <Globe className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
                  <select
                    id="country-filter"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-3 md:py-4 border border-gray-200 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white text-sm md:text-base"
                  >
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
                
                {/* Program Filter */}
                <div className="relative">
                  <BookOpen className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedProgram}
                    onChange={(e) => setSelectedProgram(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                  >
                    {programs.map(program => (
                      <option key={program} value={program}>{program}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Success Stories Grid */}
        <motion.div 
          className="px-4 md:px-6 pb-16 md:pb-20"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-6 md:mb-8 text-center">International Student Success Stories</h2>
            <div className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {filteredStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Card Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${story.bgGradient} opacity-90`}></div>
                  
                  {/* Profile Image */}
                  <div className="relative p-4 md:p-8 pb-0">
                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="relative">
                        <img 
                          src={story.image} 
                          alt={`${story.name} - Study abroad success story`}
                          className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl object-cover shadow-lg"
                        />
                        <div className="absolute -bottom-1 md:-bottom-2 -right-1 md:-right-2 w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-sm md:text-lg">{story.flag}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900">{story.name}</h3>
                        <p className="text-gray-600 text-xs md:text-sm">{story.university}</p>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(story.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Story Content */}
                  <div className="relative px-4 md:px-8 pb-4 md:pb-8">
                    {/* Quote */}
                    <div className="mb-4 md:mb-6">
                      <Quote className="w-5 h-5 md:w-6 md:h-6 text-gray-400 mb-2 md:mb-3" />
                      <p className="text-gray-700 leading-relaxed italic text-sm md:text-base">&ldquo;{story.story}&rdquo;</p>
                    </div>

                    {/* Program Details */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <GraduationCap className="w-4 h-4 text-blue-600" />
                          <span className="text-xs font-medium text-gray-600">Program</span>
                        </div>
                        <p className="text-sm font-bold text-gray-900">{story.program}</p>
                      </div>
                      
                      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Award className="w-4 h-4 text-green-600" />
                          <span className="text-xs font-medium text-gray-600">Scholarship</span>
                        </div>
                        <p className="text-sm font-bold text-gray-900">{story.scholarship}</p>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-800 mb-3">Key Achievements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {story.achievements.map((achievement, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full text-xs font-medium">
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Before/After */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 mb-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-xs text-red-600 font-medium mb-1">Before</div>
                          <div className="text-sm text-gray-700">{story.beforeAfter.before}</div>
                        </div>
                        <div>
                          <div className="text-xs text-green-600 font-medium mb-1">After</div>
                          <div className="text-sm text-gray-700">{story.beforeAfter.after}</div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button className={`flex-1 py-3 bg-gradient-to-r ${story.gradient} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 text-sm`}>
                        Read Full Story
                      </button>
                      {story.hasVideo && (
                        <button className="px-4 py-3 bg-white/80 backdrop-blur-sm text-gray-700 rounded-xl font-semibold hover:bg-white transition-all duration-300 flex items-center justify-center">
                          <Play className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="py-16 md:py-20 px-4 md:px-6"
          variants={fadeInUp}
        >
          <div className="mx-auto max-w-4xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl md:rounded-3xl blur-xl opacity-20"></div>
              <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl md:rounded-3xl p-8 md:p-12 text-white text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 md:mb-6">
                  Ready to Write Your Success Story?
                </h2>
                <p className="text-blue-100 mb-6 md:mb-8 text-base md:text-xl leading-relaxed">
                  Join thousands of students who achieved their study abroad dreams with our expert guidance and AI-powered matching.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <motion.button 
                    className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Sparkles className="w-5 h-5" />
                    Start AI Matching
                  </motion.button>
                  <motion.button 
                    className="px-8 py-4 border-2 border-white/30 text-white rounded-2xl font-bold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Heart className="w-5 h-5" />
                    Share Your Story
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
    </>
  )
}