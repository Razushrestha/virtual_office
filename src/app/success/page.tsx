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
  const [showAllStories, setShowAllStories] = useState(false)
  const [storiesToShow, setStoriesToShow] = useState(8) // Initially show 8 stories

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
    },
    {
      id: 7,
      name: 'Elena Rossi',
      story: 'Obtained student visa for PhD in Biomedical Engineering at University of Melbourne with full scholarship.',
      fullStory: 'As an international student from Italy, I was concerned about the visa process and funding. Virtual Office guided me through every step, from university selection to visa application. The full scholarship made my PhD dreams affordable!',
      country: 'Australia',
      program: 'Biomedical Engineering',
      degree: 'PhD',
      university: 'University of Melbourne',
      scholarship: 'Full Scholarship',
      year: '2024',
      duration: '4 years',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
      flag: '🇦🇺',
      gradient: 'from-yellow-400 to-orange-600',
      bgGradient: 'from-yellow-50 to-orange-50',
      rating: 5,
      hasVideo: true,
      achievements: ['PhD Admission', 'Full Scholarship', 'Visa Success'],
      beforeAfter: {
        before: 'Visa and funding concerns',
        after: 'Melbourne PhD with full funding'
      }
    },
    {
      id: 8,
      name: 'James Kim',
      story: 'Approved for Masters in Business Analytics at University of British Columbia with merit award.',
      fullStory: 'After working in tech for 3 years, I wanted to transition to data analytics. Virtual Office helped me position my experience perfectly and find programs that valued my background. UBC was the perfect choice!',
      country: 'Canada',
      program: 'Business Analytics',
      degree: 'Masters',
      university: 'University of British Columbia',
      scholarship: '$20,000',
      year: '2024',
      duration: '16 months',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      flag: '🇨🇦',
      gradient: 'from-green-400 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-50',
      rating: 5,
      hasVideo: false,
      achievements: ['Career Transition', 'Merit Award', 'Perfect Match'],
      beforeAfter: {
        before: 'Career transition uncertainty',
        after: 'UBC Analytics with scholarship'
      }
    },
    {
      id: 9,
      name: 'Fatima Al-Zahra',
      story: 'Received acceptance for Masters in International Relations at LSE with partial funding.',
      fullStory: 'LSE was my dream school for international relations, but the competition was fierce. Virtual Office helped me craft a compelling personal statement that highlighted my unique perspective and experiences from the Middle East.',
      country: 'UK',
      program: 'International Relations',
      degree: 'Masters',
      university: 'London School of Economics',
      scholarship: 'Partial Funding',
      year: '2024',
      duration: '1 year',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1c5?w=400',
      flag: '🇬🇧',
      gradient: 'from-indigo-400 to-purple-600',
      bgGradient: 'from-indigo-50 to-purple-50',
      rating: 5,
      hasVideo: true,
      achievements: ['LSE Admission', 'Partial Funding', 'Competitive Field'],
      beforeAfter: {
        before: 'Fierce competition concern',
        after: 'LSE with funding support'
      }
    },
    {
      id: 10,
      name: 'Oliver Thompson',
      story: 'Got F-1 visa for Masters in Cybersecurity at Carnegie Mellon with research opportunity.',
      fullStory: 'Cybersecurity was my passion, and Carnegie Mellon is the best in the field. Virtual Office helped me showcase my technical projects and connect with professors. The research opportunity will accelerate my career!',
      country: 'USA',
      program: 'Cybersecurity',
      degree: 'Masters',
      university: 'Carnegie Mellon University',
      scholarship: 'Research Assistantship',
      year: '2024',
      duration: '2 years',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      flag: '🇺🇸',
      gradient: 'from-red-400 to-pink-600',
      bgGradient: 'from-red-50 to-pink-50',
      rating: 5,
      hasVideo: false,
      achievements: ['CMU Admission', 'Research Role', 'F-1 Visa'],
      beforeAfter: {
        before: 'Highly competitive field',
        after: 'CMU Cybersecurity program'
      }
    },
    {
      id: 11,
      name: 'Aisha Patel',
      story: 'Secured admission to University of Sydney for Masters in Environmental Engineering with scholarship.',
      fullStory: 'Environmental engineering combines my passion for sustainability with technical expertise. Virtual Office helped me find programs aligned with my values and secure funding to make it affordable.',
      country: 'Australia',
      program: 'Environmental Engineering',
      degree: 'Masters',
      university: 'University of Sydney',
      scholarship: '$18,000',
      year: '2024',
      duration: '2 years',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      flag: '🇦🇺',
      gradient: 'from-teal-400 to-cyan-600',
      bgGradient: 'from-teal-50 to-cyan-50',
      rating: 5,
      hasVideo: true,
      achievements: ['Sydney Admission', 'Scholarship', 'Sustainability Focus'],
      beforeAfter: {
        before: 'Funding concerns',
        after: 'Sydney with full support'
      }
    },
    {
      id: 12,
      name: 'Lucas Mueller',
      story: 'Approved for PhD in Physics at University of Waterloo with full funding and teaching position.',
      fullStory: 'Physics PhD programs are extremely competitive, especially with funding. Virtual Office helped me identify professors whose research aligned with my interests and craft compelling research proposals.',
      country: 'Canada',
      program: 'Physics',
      degree: 'PhD',
      university: 'University of Waterloo',
      scholarship: 'Full Funding + TA',
      year: '2024',
      duration: '5 years',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      flag: '🇨🇦',
      gradient: 'from-violet-400 to-purple-600',
      bgGradient: 'from-violet-50 to-purple-50',
      rating: 5,
      hasVideo: false,
      achievements: ['PhD Admission', 'Full Funding', 'Teaching Position'],
      beforeAfter: {
        before: 'Competitive funding landscape',
        after: 'Waterloo PhD with full support'
      }
    },
    {
      id: 13,
      name: 'Isabella Garcia',
      story: 'Received acceptance for Masters in Public Health at Harvard with merit scholarship.',
      fullStory: 'Harvard School of Public Health was my top choice for advancing my career in global health. Virtual Office helped me articulate my vision and demonstrate my commitment to making a difference.',
      country: 'USA',
      program: 'Public Health',
      degree: 'Masters',
      university: 'Harvard University',
      scholarship: 'Merit Scholarship',
      year: '2024',
      duration: '2 years',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400',
      flag: '🇺🇸',
      gradient: 'from-pink-400 to-rose-600',
      bgGradient: 'from-pink-50 to-rose-50',
      rating: 5,
      hasVideo: true,
      achievements: ['Harvard Admission', 'Merit Scholarship', 'Global Health'],
      beforeAfter: {
        before: 'Highly competitive program',
        after: 'Harvard Public Health'
      }
    },
    {
      id: 14,
      name: 'Mohammed Rahman',
      story: 'Got student visa for Masters in Finance at University of Edinburgh with distinction scholarship.',
      fullStory: 'Edinburgh Business School has an excellent reputation in finance. Virtual Office helped me highlight my quantitative skills and career aspirations, leading to both admission and a significant scholarship.',
      country: 'UK',
      program: 'Finance',
      degree: 'Masters',
      university: 'University of Edinburgh',
      scholarship: 'Distinction Scholarship',
      year: '2024',
      duration: '1 year',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      flag: '🇬🇧',
      gradient: 'from-amber-400 to-orange-600',
      bgGradient: 'from-amber-50 to-orange-50',
      rating: 5,
      hasVideo: false,
      achievements: ['Edinburgh Admission', 'Distinction Award', 'Finance Focus'],
      beforeAfter: {
        before: 'Finance career uncertainty',
        after: 'Edinburgh Finance with scholarship'
      }
    },
    {
      id: 15,
      name: 'Sofia Andersson',
      story: 'Approved for PhD in Renewable Energy at Australian National University with research grant.',
      fullStory: 'Renewable energy research is my passion for addressing climate change. Virtual Office connected me with leading researchers and helped me secure a position at one of the world\'s top energy research centers.',
      country: 'Australia',
      program: 'Renewable Energy',
      degree: 'PhD',
      university: 'Australian National University',
      scholarship: 'Research Grant',
      year: '2024',
      duration: '4 years',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
      flag: '🇦🇺',
      gradient: 'from-emerald-400 to-green-600',
      bgGradient: 'from-emerald-50 to-green-50',
      rating: 5,
      hasVideo: true,
      achievements: ['ANU Admission', 'Research Grant', 'Climate Impact'],
      beforeAfter: {
        before: 'Finding research opportunities',
        after: 'ANU renewable energy research'
      }
    },
    {
      id: 16,
      name: 'Chen Wei',
      story: 'Secured F-1 visa for Masters in Machine Learning at University of California Berkeley.',
      fullStory: 'Berkeley\'s machine learning program is world-renowned. Virtual Office helped me stand out among thousands of applicants by showcasing my unique projects and research experience.',
      country: 'USA',
      program: 'Machine Learning',
      degree: 'Masters',
      university: 'UC Berkeley',
      scholarship: 'Merit Award',
      year: '2024',
      duration: '2 years',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      flag: '🇺🇸',
      gradient: 'from-blue-400 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-50',
      rating: 5,
      hasVideo: false,
      achievements: ['Berkeley Admission', 'Merit Award', 'ML Specialization'],
      beforeAfter: {
        before: 'Thousands of applicants',
        after: 'Berkeley ML program'
      }
    },
    {
      id: 17,
      name: 'Amelia Johnson',
      story: 'Received acceptance for Masters in Digital Marketing at University of Toronto with co-op program.',
      fullStory: 'The co-op program at University of Toronto provides invaluable industry experience. Virtual Office helped me understand the program structure and prepare a compelling application highlighting my marketing passion.',
      country: 'Canada',
      program: 'Digital Marketing',
      degree: 'Masters',
      university: 'University of Toronto',
      scholarship: 'Co-op Placement',
      year: '2024',
      duration: '20 months',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1c5?w=400',
      flag: '🇨🇦',
      gradient: 'from-purple-400 to-pink-600',
      bgGradient: 'from-purple-50 to-pink-50',
      rating: 5,
      hasVideo: true,
      achievements: ['UofT Admission', 'Co-op Program', 'Industry Experience'],
      beforeAfter: {
        before: 'Limited industry experience',
        after: 'Toronto with co-op opportunity'
      }
    },
    {
      id: 18,
      name: 'Dmitri Volkov',
      story: 'Got student visa for Masters in Aerospace Engineering at Imperial College London with research funding.',
      fullStory: 'Aerospace engineering at Imperial is cutting-edge. Virtual Office helped me connect with professors working on projects I\'m passionate about and secure research funding for my studies.',
      country: 'UK',
      program: 'Aerospace Engineering',
      degree: 'Masters',
      university: 'Imperial College London',
      scholarship: 'Research Funding',
      year: '2024',
      duration: '2 years',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      flag: '🇬🇧',
      gradient: 'from-slate-400 to-gray-600',
      bgGradient: 'from-slate-50 to-gray-50',
      rating: 5,
      hasVideo: false,
      achievements: ['Imperial Admission', 'Research Funding', 'Aerospace Focus'],
      beforeAfter: {
        before: 'Research funding uncertainty',
        after: 'Imperial with research support'
      }
    },
    {
      id: 19,
      name: 'Maya Singh',
      story: 'Approved for PhD in Neuroscience at University of Queensland with full scholarship and living allowance.',
      fullStory: 'Neuroscience research requires significant funding and resources. Virtual Office helped me find the perfect supervisor match and secure comprehensive funding that covers everything from tuition to living expenses.',
      country: 'Australia',
      program: 'Neuroscience',
      degree: 'PhD',
      university: 'University of Queensland',
      scholarship: 'Full Scholarship + Stipend',
      year: '2024',
      duration: '4 years',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      flag: '🇦🇺',
      gradient: 'from-rose-400 to-pink-600',
      bgGradient: 'from-rose-50 to-pink-50',
      rating: 5,
      hasVideo: true,
      achievements: ['UQ Admission', 'Full Funding', 'Living Allowance'],
      beforeAfter: {
        before: 'Funding and supervisor concerns',
        after: 'Queensland PhD fully funded'
      }
    },
    {
      id: 20,
      name: 'Kevin O\'Brien',
      story: 'Secured F-1 visa for Masters in Game Development at University of Southern California with industry connections.',
      fullStory: 'USC\'s game development program has incredible industry connections in Los Angeles. Virtual Office helped me showcase my creative portfolio and passion for gaming, leading to admission and valuable networking opportunities.',
      country: 'USA',
      program: 'Game Development',
      degree: 'Masters',
      university: 'University of Southern California',
      scholarship: 'Industry Partnership',
      year: '2024',
      duration: '2 years',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      flag: '🇺🇸',
      gradient: 'from-cyan-400 to-blue-600',
      bgGradient: 'from-cyan-50 to-blue-50',
      rating: 5,
      hasVideo: false,
      achievements: ['USC Admission', 'Industry Partnership', 'Creative Portfolio'],
      beforeAfter: {
        before: 'Portfolio presentation concerns',
        after: 'USC Game Development program'
      }
    },
    {
      id: 21,
      name: 'Zara Ahmed',
      story: 'Received acceptance for Masters in Sustainable Architecture at University of Calgary with green building focus.',
      fullStory: 'Sustainable architecture is the future of construction. Virtual Office helped me find a program that perfectly aligns with my environmental values and career goals in green building design.',
      country: 'Canada',
      program: 'Sustainable Architecture',
      degree: 'Masters',
      university: 'University of Calgary',
      scholarship: 'Sustainability Award',
      year: '2024',
      duration: '2 years',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400',
      flag: '🇨🇦',
      gradient: 'from-lime-400 to-green-600',
      bgGradient: 'from-lime-50 to-green-50',
      rating: 5,
      hasVideo: true,
      achievements: ['Calgary Admission', 'Sustainability Award', 'Green Focus'],
      beforeAfter: {
        before: 'Limited sustainable programs',
        after: 'Calgary sustainable architecture'
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

  // Pagination logic
  const displayedStories = showAllStories ? filteredStories : filteredStories.slice(0, storiesToShow)
  const hasMoreStories = filteredStories.length > storiesToShow

  const handleShowMore = () => {
    if (showAllStories) {
      setShowAllStories(false)
      setStoriesToShow(8)
    } else {
      setShowAllStories(true)
    }
  }

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
              {displayedStories.map((story, index) => (
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

            {/* See More Button */}
            {(hasMoreStories || showAllStories) && (
              <div className="flex justify-center mt-12 md:mt-16">
                <motion.button
                  onClick={handleShowMore}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  variants={fadeInUp}
                >
                  <span className="relative z-10">
                    {showAllStories ? 'Show Less Stories' : `See More Success Stories (${filteredStories.length - storiesToShow} more)`}
                  </span>
                  <motion.div 
                    className="relative z-10"
                    animate={{ rotate: showAllStories ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TrendingUp className="w-5 h-5" />
                  </motion.div>
                  
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Sparkle effect */}
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  </div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-700"></div>
                </motion.button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </main>
    </>
  )
}