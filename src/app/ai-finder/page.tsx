"use client"
import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { SEOKeywords } from '../../components/seo/SEOKeywords'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import { Card, CardContent, CardHeader, CardTitle, Skeleton } from '../../components/ui/Card'
import { z } from 'zod'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { 
  User, 
  MapPin, 
  GraduationCap, 
  Calendar, 
  Globe, 
  DollarSign, 
  FileText, 
  Target, 
  Star, 
  CheckCircle, 
  Sparkles, 
  Brain, 
  Clock, 
  Award,
  TrendingUp,
  Users,
  BookOpen,
  Shield,
  Heart,
  ArrowRight,
  Lightbulb,
  MessageCircle
} from 'lucide-react'

const steps = [
  { 
    id: 'profile', 
    title: 'Personal Profile', 
    description: 'Tell us about yourself',
    icon: User,
    fields: ['fullName', 'residence', 'education', 'intake']
  },
  { 
    id: 'academics', 
    title: 'Academic Background', 
    description: 'Your scores and achievements',
    icon: GraduationCap,
    fields: ['ielts', 'gre', 'gmat', 'cgpa']
  },
  { 
    id: 'preferences', 
    title: 'Study Preferences', 
    description: 'What matters most to you',
    icon: Target,
    fields: ['preferredCountry', 'fieldOfStudy', 'campusSize', 'climate']
  },
  { 
    id: 'budget', 
    title: 'Budget & Finances', 
    description: 'Financial planning details',
    icon: DollarSign,
    fields: ['budget', 'scholarshipRequired', 'workWhileStudy']
  },
  { 
    id: 'results', 
    title: 'AI Matches', 
    description: 'Your personalized recommendations',
    icon: Sparkles,
    fields: []
  }
]

const schema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  residence: z.string().min(2, 'Please select your country of residence'),
  education: z.string(),
  intake: z.string(),
  preferredCountry: z.string(),
  fieldOfStudy: z.string(),
  campusSize: z.string(),
  climate: z.string(),
  ielts: z.union([z.string().length(0), z.string().regex(/^\d(\.\d)?$/, 'Please enter valid IELTS score (e.g., 7.0)')]).optional(),
  gre: z.union([z.string().length(0), z.string().regex(/^\d{3}$/, 'Please enter valid GRE score (e.g., 320)')]).optional(),
  gmat: z.union([z.string().length(0), z.string().regex(/^\d{3}$/, 'Please enter valid GMAT score (e.g., 650)')]).optional(),
  cgpa: z.union([z.string().length(0), z.string().regex(/^\d(\.\d{1,2})?$/, 'Please enter valid CGPA (e.g., 3.8)')]).optional(),
  budget: z.coerce.number().min(1000, 'Minimum budget is $1,000').max(200000, 'Maximum budget is $200,000'),
  scholarshipRequired: z.string(),
  workWhileStudy: z.string()
})

type FinderForm = z.infer<typeof schema>

export default function AIFinderPage() {
  const [step, setStep] = useState(0)
  const [loadingMatches, setLoadingMatches] = useState(false)
  const [matches, setMatches] = useState<any[] | null>(null)
  const form = useForm<FinderForm>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: '',
      residence: '',
      education: 'High School',
      intake: 'Fall 2025',
      preferredCountry: 'Canada',
      fieldOfStudy: 'Computer Science',
      campusSize: 'Medium',
      climate: 'Temperate',
      ielts: '',
      gre: '',
      gmat: '',
      cgpa: '',
      budget: 25000,
      scholarshipRequired: 'Preferred',
      workWhileStudy: 'Yes'
    }
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

  const next = async () => {
    // Validate current step fields
    const currentStepFields = steps[step]?.fields || []
    const valid = currentStepFields.length > 0 
      ? await form.trigger(currentStepFields as any, { shouldFocus: true })
      : true
    
    if (!valid) return
    
    if (step < steps.length - 2) {
      setStep(s => s + 1)
    } else if (step === steps.length - 2) {
      // Fetch results
      const values = form.getValues()
      setLoadingMatches(true)
      setMatches(null)
      
      // Simulate API call with more realistic data
      setTimeout(() => {
        const mockMatches = [
          {
            name: 'University of Toronto',
            country: 'Canada',
            program: values.fieldOfStudy,
            estTuition: '$28,000',
            score: 95,
            ranking: '#1 in Canada',
            scholarships: '$15,000 available',
            location: 'Toronto, ON',
            acceptance: '78%',
            gradient: 'from-red-400 to-red-600',
            highlights: ['Top research university', 'Co-op programs', 'Diverse community']
          },
          {
            name: 'McGill University',
            country: 'Canada',
            program: values.fieldOfStudy,
            estTuition: '$25,000',
            score: 92,
            ranking: '#2 in Canada',
            scholarships: '$12,000 available',
            location: 'Montreal, QC',
            acceptance: '68%',
            gradient: 'from-blue-400 to-blue-600',
            highlights: ['Historic campus', 'Bilingual environment', 'Strong alumni network']
          },
          {
            name: 'University of British Columbia',
            country: 'Canada',
            program: values.fieldOfStudy,
            estTuition: '$30,000',
            score: 89,
            ranking: '#3 in Canada',
            scholarships: '$18,000 available',
            location: 'Vancouver, BC',
            acceptance: '72%',
            gradient: 'from-green-400 to-emerald-600',
            highlights: ['Beautiful campus', 'Innovation hub', 'Industry connections']
          }
        ]
        setMatches(mockMatches)
        setLoadingMatches(false)
        setStep(steps.length - 1)
      }, 2000)
    }
  }
  const back = () => setStep(s => Math.max(0, s - 1))
  const progressPct = ((step) / (steps.length - 1)) * 100

  const renderStep = () => {
    if (step === 0) {
      return (
        <motion.div 
          className="space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="text-center mb-8" variants={fadeInUp}>
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Let&apos;s Get to Know You</h3>
            <p className="text-gray-600">Help us understand your background to provide the best recommendations</p>
          </motion.div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div variants={fadeInUp}>
              <Input 
                label="Full Name" 
                placeholder="Enter your full name"
                {...form.register('fullName')} 
                error={form.formState.errors.fullName?.message} 
              />
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <label className="mb-2 block text-sm font-medium text-gray-700">Country of Residence</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <select 
                  {...form.register('residence')} 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option value="">Select your country</option>
                  <option value="India">India</option>
                  <option value="China">China</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              {form.formState.errors.residence && (
                <p className="mt-1 text-sm text-red-600">{form.formState.errors.residence.message}</p>
              )}
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <label className="mb-2 block text-sm font-medium text-gray-700">Highest Education Level</label>
              <div className="relative">
                <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <select 
                  {...form.register('education')} 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option value="High School">High School</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Bachelor's">Bachelor&apos;s Degree</option>
                  <option value="Master's">Master&apos;s Degree</option>
                  <option value="PhD">PhD</option>
                </select>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <label className="mb-2 block text-sm font-medium text-gray-700">Intended Intake</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <select 
                  {...form.register('intake')} 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option value="Fall 2025">Fall 2025</option>
                  <option value="Winter 2026">Winter 2026</option>
                  <option value="Fall 2026">Fall 2026</option>
                  <option value="Winter 2027">Winter 2027</option>
                </select>
              </div>
            </motion.div>
          </div>
          
          <motion.div className="bg-blue-50 rounded-xl p-6" variants={fadeInUp}>
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-900">Pro Tip</h4>
                <p className="text-blue-700 text-sm mt-1">
                  Be accurate with your information. Our AI uses this data to find the most suitable universities for your profile.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )
    }
    
    if (step === 1) {
      return (
        <motion.div 
          className="space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="text-center mb-8" variants={fadeInUp}>
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Academic Background</h3>
            <p className="text-gray-600">Share your test scores and academic achievements (all fields are optional)</p>
          </motion.div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div variants={fadeInUp}>
              <Input 
                label="IELTS Score (Optional)" 
                placeholder="e.g., 7.5"
                hint="Overall band score"
                {...form.register('ielts')} 
                error={form.formState.errors.ielts?.message} 
              />
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <Input 
                label="GRE Score (Optional)" 
                placeholder="e.g., 320"
                hint="Total score out of 340"
                {...form.register('gre')} 
                error={form.formState.errors.gre?.message} 
              />
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <Input 
                label="GMAT Score (Optional)" 
                placeholder="e.g., 650"
                hint="Total score out of 800"
                {...form.register('gmat')} 
                error={form.formState.errors.gmat?.message} 
              />
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <Input 
                label="CGPA/GPA (Optional)" 
                placeholder="e.g., 3.8"
                hint="On a 4.0 scale"
                {...form.register('cgpa')} 
                error={form.formState.errors.cgpa?.message} 
              />
            </motion.div>
          </div>
          
          <motion.div className="bg-green-50 rounded-xl p-6" variants={fadeInUp}>
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-green-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-green-900">Don&apos;t have test scores yet?</h4>
                <p className="text-green-700 text-sm mt-1">
                  No worries! Many universities accept applications without test scores. Our AI will find options that match your current profile.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )
    }
    
    if (step === 2) {
      return (
        <motion.div 
          className="space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="text-center mb-8" variants={fadeInUp}>
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Study Preferences</h3>
            <p className="text-gray-600">Tell us what kind of study environment you prefer</p>
          </motion.div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div variants={fadeInUp}>
              <label className="mb-2 block text-sm font-medium text-gray-700">Preferred Country</label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <select 
                  {...form.register('preferredCountry')} 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option value="Canada">Canada</option>
                  <option value="USA">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                  <option value="Netherlands">Netherlands</option>
                </select>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <label className="mb-2 block text-sm font-medium text-gray-700">Field of Study</label>
              <div className="relative">
                <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <select 
                  {...form.register('fieldOfStudy')} 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option value="Computer Science">Computer Science</option>
                  <option value="Business Administration">Business Administration</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Medicine">Medicine</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Psychology">Psychology</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <label className="mb-2 block text-sm font-medium text-gray-700">Campus Size Preference</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <select 
                  {...form.register('campusSize')} 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option value="Small">Small (Under 5,000 students)</option>
                  <option value="Medium">Medium (5,000-15,000 students)</option>
                  <option value="Large">Large (15,000+ students)</option>
                  <option value="No Preference">No Preference</option>
                </select>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <label className="mb-2 block text-sm font-medium text-gray-700">Climate Preference</label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <select 
                  {...form.register('climate')} 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option value="Temperate">Temperate (Mild seasons)</option>
                  <option value="Cold">Cold (Snowy winters)</option>
                  <option value="Warm">Warm (Hot summers)</option>
                  <option value="Tropical">Tropical (Year-round warmth)</option>
                  <option value="No Preference">No Preference</option>
                </select>
              </div>
            </motion.div>
          </div>
          
          <motion.div className="bg-purple-50 rounded-xl p-6" variants={fadeInUp}>
            <div className="flex items-start gap-3">
              <Heart className="w-5 h-5 text-purple-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-purple-900">Why do preferences matter?</h4>
                <p className="text-purple-700 text-sm mt-1">
                  Your preferences help us find universities where you&apos;ll not just succeed academically, but also feel at home and enjoy your student life.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )
    }
    
    if (step === 3) {
      return (
        <motion.div 
          className="space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="text-center mb-8" variants={fadeInUp}>
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Budget & Financial Planning</h3>
            <p className="text-gray-600">Help us understand your financial situation for accurate recommendations</p>
          </motion.div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div className="md:col-span-2" variants={fadeInUp}>
              <Input 
                label="Annual Budget (USD)" 
                type="number"
                placeholder="25000"
                hint="Total budget including tuition and living expenses"
                {...form.register('budget', { valueAsNumber: true })} 
                error={form.formState.errors.budget?.message} 
              />
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <label className="mb-2 block text-sm font-medium text-gray-700">Scholarship Requirement</label>
              <div className="relative">
                <Award className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <select 
                  {...form.register('scholarshipRequired')} 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option value="Required">Required (Need financial aid)</option>
                  <option value="Preferred">Preferred (Would help)</option>
                  <option value="Not Needed">Not Needed (Can self-fund)</option>
                </select>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <label className="mb-2 block text-sm font-medium text-gray-700">Work While Studying</label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <select 
                  {...form.register('workWhileStudy')} 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option value="Yes">Yes, I plan to work part-time</option>
                  <option value="Maybe">Maybe, if needed</option>
                  <option value="No">No, I want to focus on studies</option>
                </select>
              </div>
            </motion.div>
          </div>
          
          <motion.div className="bg-orange-50 rounded-xl p-6" variants={fadeInUp}>
            <div className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-orange-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-orange-900">Budget Planning Tip</h4>
                <p className="text-orange-700 text-sm mt-1">
                  Consider all costs: tuition, housing, food, transportation, and personal expenses. Most countries allow part-time work for international students.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )
    }
    
    if (step === 4) {
      return (
        <motion.div 
          className="space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {loadingMatches && (
            <motion.div className="text-center" variants={fadeInUp}>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">AI is Analyzing Your Profile</h3>
              <p className="text-gray-600 mb-8">Please wait while we find the perfect universities for you...</p>
              
              <div className="grid gap-4 max-w-2xl mx-auto">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                    <Skeleton className="h-6 w-3/4 mb-3" />
                    <Skeleton className="h-4 w-1/2 mb-2" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
          
          {!loadingMatches && matches && (
            <motion.div variants={fadeInUp}>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Perfect Matches Found!</h3>
                <p className="text-gray-600">Based on your profile, here are the top university recommendations</p>
              </div>
              
              <div className="space-y-6">
                {matches.map((match, index) => (
                  <motion.div
                    key={match.name}
                    className={`bg-gradient-to-r ${match.gradient} p-1 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="bg-white rounded-xl p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="text-xl font-bold text-gray-900">{match.name}</h4>
                            <span className={`px-3 py-1 bg-gradient-to-r ${match.gradient} text-white rounded-full text-sm font-medium`}>
                              {match.score}% Match
                            </span>
                          </div>
                          <p className="text-gray-600 mb-1">{match.location} • {match.program}</p>
                          <p className="text-sm text-gray-500">{match.ranking}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">{match.estTuition}</div>
                          <div className="text-sm text-gray-500">per year</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xs text-gray-500 mb-1">Scholarships</div>
                          <div className="font-semibold text-green-600">{match.scholarships}</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xs text-gray-500 mb-1">Acceptance Rate</div>
                          <div className="font-semibold text-blue-600">{match.acceptance}</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3 md:col-span-1 col-span-2">
                          <div className="text-xs text-gray-500 mb-1">Why it&apos;s perfect</div>
                          <div className="font-semibold text-purple-600">Great match score</div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-gray-800 mb-2">Key Highlights:</h5>
                        <div className="flex flex-wrap gap-2">
                          {match.highlights.map((highlight: string, idx: number) => (
                            <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <Button className="flex-1" size="sm">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Save University
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <ArrowRight className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageCircle className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div className="mt-8 text-center" variants={fadeInUp}>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-bold text-blue-900 mb-2">Want more personalized guidance?</h4>
                  <p className="text-blue-700 text-sm mb-4">
                    Book a free consultation with our expert counsellors to discuss your matches and application strategy.
                  </p>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    Book Free Consultation
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      )
    }
  }

  return (
    <>
      <SEOKeywords page="ai-finder" location="kathmandu" />
      <Head>
        <title>AI University Finder Nepal - Smart University Matching Tool | Virtual Office</title>
        <meta name="description" content="Find your perfect university with our AI-powered matching tool. Get personalized university recommendations based on your profile, budget, and preferences. Free consultation for Nepali students." />
        <meta name="keywords" content="AI university finder nepal, university matching tool, smart university search, personalized university recommendations, study abroad AI tool, university finder kathmandu, education AI nepal" />
        <meta property="og:title" content="AI University Finder Nepal - Smart University Matching Tool" />
        <meta property="og:description" content="Find your perfect university with AI-powered matching technology and expert guidance" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI University Finder Nepal - Smart University Matching Tool" />
        <meta name="twitter:description" content="Find your perfect university with AI-powered matching technology and expert guidance" />
        <link rel="canonical" href="/ai-finder" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse opacity-30" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative">
        {/* Hero Section */}
        <motion.div 
          className="py-24 px-6 relative overflow-hidden"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {/* Additional background elements */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-2xl animate-pulse opacity-40"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full mix-blend-multiply filter blur-2xl animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
          
          <div className="mx-auto max-w-7xl text-center relative z-10">
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-transparent bg-clip-text rounded-full text-sm font-semibold mb-8 border border-blue-200/50 shadow-lg backdrop-blur-sm" 
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Brain className="w-3 h-3 text-white" />
              </div>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
                AI-Powered University Matching
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-black mb-8 leading-tight"
              variants={fadeInUp}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm">
                Find Your Perfect
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                University Match
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
                <Sparkles className="w-5 h-5 text-white m-1.5" />
              </motion.div>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed font-medium"
              variants={fadeInUp}
            >
              Answer a few questions and let our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
                advanced AI
              </span>{" "}
              analyze thousands of universities to find your perfect matches. Get personalized recommendations in just{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-bold">
                30 seconds
              </span>.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20"
              variants={fadeInUp}
            >
              {[
                { icon: Users, label: 'Students Matched', value: '50,000+', color: 'from-blue-500 to-cyan-500', bg: 'from-blue-50 to-cyan-50' },
                { icon: GraduationCap, label: 'Universities', value: '2,000+', color: 'from-green-500 to-emerald-500', bg: 'from-green-50 to-emerald-50' },
                { icon: Star, label: 'Accuracy Rate', value: '96%', color: 'from-amber-500 to-yellow-500', bg: 'from-amber-50 to-yellow-50' },
                { icon: Clock, label: 'Average Time', value: '30s', color: 'from-purple-500 to-pink-500', bg: 'from-purple-50 to-pink-50' }
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div 
                    key={index} 
                    className={`relative group cursor-pointer`}
                    variants={fadeInUp}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.bg} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-60 group-hover:opacity-100`}></div>
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 group-hover:shadow-xl transition-all duration-300">
                      <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-black text-gray-900 mb-2">{stat.value}</div>
                      <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="px-6 pb-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[400px_1fr]">
              {/* Progress Sidebar */}
              <motion.div 
                className="space-y-6"
                variants={fadeInUp}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-3xl blur-xl opacity-60"></div>
                  <Card className="relative bg-white/90 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-white" />
                        </div>
                        <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent font-bold">
                          Your Progress
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="relative">
                        <div className="h-3 w-full overflow-hidden rounded-full bg-gradient-to-r from-gray-200 to-gray-300">
                          <motion.div 
                            className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-all duration-700 ease-out shadow-lg" 
                            style={{ inlineSize: `${progressPct}%` }}
                            initial={{ inlineSize: 0 }}
                            animate={{ inlineSize: `${progressPct}%` }}
                          />
                        </div>
                        <motion.div 
                          className="absolute -top-1 bg-white rounded-full p-1 shadow-lg border-2 border-purple-600"
                          style={{ insetInlineStart: `${Math.max(0, progressPct - 2)}%` }}
                          animate={{ 
                            scale: [1, 1.1, 1],
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <div className="w-3 h-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                        </motion.div>
                      </div>
                      
                      <div className="space-y-3">
                        {steps.map((stepData, i) => {
                          const Icon = stepData.icon
                          const isActive = i === step
                          const isCompleted = i < step
                          return (
                            <motion.div 
                              key={stepData.id} 
                              className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                                isActive ? 'bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border-2 border-purple-200 shadow-lg' : 
                                isCompleted ? 'bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200' : 
                                'bg-gray-50/50 hover:bg-gray-100/50 border border-gray-200'
                              }`}
                              whileHover={{ scale: 1.02 }}
                              transition={{ duration: 0.2 }}
                            >
                              <motion.div 
                                className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg ${
                                  isActive ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white' :
                                  isCompleted ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white' :
                                  'bg-gradient-to-r from-gray-300 to-gray-400 text-gray-600'
                                }`}
                                animate={isActive ? {
                                  boxShadow: [
                                    '0 0 0 0 rgba(147, 51, 234, 0.4)',
                                    '0 0 0 10px rgba(147, 51, 234, 0)',
                                    '0 0 0 0 rgba(147, 51, 234, 0)'
                                  ]
                                } : {}}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                {isCompleted ? <CheckCircle className="w-6 h-6" /> : <Icon className="w-6 h-6" />}
                              </motion.div>
                              <div className="flex-1">
                                <div className={`font-bold text-lg ${
                                  isActive ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent' :
                                  isCompleted ? 'text-green-800' :
                                  'text-gray-600'
                                }`}>
                                  {stepData.title}
                                </div>
                                <div className="text-sm text-gray-500 font-medium">{stepData.description}</div>
                              </div>
                              {isActive && (
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                >
                                  <Sparkles className="w-5 h-5 text-purple-600" />
                                </motion.div>
                              )}
                            </motion.div>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Enhanced Tips Card */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-pink-200 to-orange-200 rounded-3xl blur-xl opacity-60"></div>
                  <Card className="relative bg-gradient-to-br from-purple-50/90 via-pink-50/90 to-orange-50/90 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600"></div>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <motion.div 
                          className="w-12 h-12 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg"
                          animate={{ 
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.05, 1]
                          }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <Lightbulb className="w-6 h-6 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="font-black text-lg bg-gradient-to-r from-purple-800 via-pink-800 to-orange-800 bg-clip-text text-transparent mb-3">
                            💡 Pro Tip
                          </h3>
                          <motion.p 
                            className="text-purple-700 text-sm leading-relaxed font-medium"
                            key={step}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {step === 0 && "🎯 Provide accurate information for the best matches. Don't worry about test scores if you don't have them yet - many top universities are test-optional!"}
                            {step === 1 && "📊 Test scores are optional but help us find more precise matches. Focus on your strengths - we'll find universities that value your unique profile."}
                            {step === 2 && "🌟 Your preferences help us understand what kind of university environment you'll thrive in. Think about where you'll be happiest for the next few years!"}
                            {step === 3 && "💰 Being realistic about your budget helps us find affordable options and scholarship opportunities. Remember, there are funding options available!"}
                            {step === 4 && "🎉 Review your matches carefully. You can save favorites and get expert guidance from our counsellors to maximize your success!"}
                          </motion.p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>

              {/* Main Form */}
              <motion.div 
                className="space-y-8"
                variants={fadeInUp}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-3xl blur-2xl opacity-50"></div>
                  <Card className="relative bg-white/95 backdrop-blur-md border-0 shadow-2xl rounded-3xl overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
                    <CardHeader className="pb-6 pt-8">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <CardTitle className="text-3xl font-black">
                          {step < steps.length - 1 ? (
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                              Step {step + 1}: {steps[step].title}
                            </span>
                          ) : (
                            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                              🎉 Your University Matches
                            </span>
                          )}
                        </CardTitle>
                      </motion.div>
                    </CardHeader>
                    <CardContent className="px-8 pb-8">
                      <FormProvider {...form}>
                        <form onSubmit={(e) => { e.preventDefault(); next() }} className="space-y-8">
                          <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                          >
                            {renderStep()}
                          </motion.div>
                          
                          {step < steps.length - 1 && (
                            <div className="flex justify-between items-center border-t border-gray-200 pt-8">
                              <Button 
                                type="button" 
                                variant="outline" 
                                disabled={step === 0} 
                                onClick={back}
                                className="px-8 py-3 rounded-xl border-2 hover:bg-gray-50 transition-all duration-300"
                              >
                                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                                Back
                              </Button>
                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Button 
                                  type="submit"
                                  className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                  {step === steps.length - 2 ? (
                                    <>
                                      <Sparkles className="w-5 h-5 mr-2" />
                                      ✨ Generate Matches
                                    </>
                                  ) : (
                                    <>
                                      Continue Journey
                                      <ArrowRight className="w-5 h-5 ml-2" />
                                    </>
                                  )}
                                </Button>
                              </motion.div>
                            </div>
                          )}
                        </form>
                      </FormProvider>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
