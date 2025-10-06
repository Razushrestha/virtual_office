import { FileText, Send, Shield, Plane, Users, CheckCircle, Star, Clock, DollarSign, Award, Zap, Target, BookOpen, MessageCircle } from 'lucide-react'

export const serviceCategories = ['All', 'Applications', 'Documents', 'Visa & Travel', 'Career Support']

export const services = [
  {
    id: 'sop-writing',
    title: 'SOP Writing',
    shortDesc: 'AI-assisted drafts + expert review',
    fullDesc: 'Professional statement of purpose writing with AI-powered initial drafts and expert human review to create compelling narratives.',
    price: '$75',
    originalPrice: '$120',
    icon: FileText,
    gradient: 'from-blue-400 to-indigo-600',
    bgGradient: 'from-blue-50 to-indigo-50',
    category: 'Applications',
    duration: '3-5 days',
    satisfaction: '98%',
    features: [
      'AI-powered initial draft',
      'Expert writer review & editing',
      'Unlimited revisions',
      'University-specific customization',
      'Plagiarism check included',
      '24/7 support'
    ],
    popular: false,
    savings: 'Save $45',
    testimonial: {
      text: 'The SOP team transformed my generic draft into a compelling story that got me into my dream university!',
      author: 'Priya Sharma',
      university: 'University of Toronto'
    }
  },
  {
    id: 'visa-application',
    title: 'Visa Application',
    shortDesc: 'Complete application assistance',
    fullDesc: 'End-to-end visa application support with document preparation, form filling, and interview coaching.',
    price: '$120',
    originalPrice: '$180',
    icon: Send,
    gradient: 'from-emerald-400 to-teal-600',
    bgGradient: 'from-emerald-50 to-teal-50',
    category: 'Visa & Travel',
    duration: '7-10 days',
    satisfaction: '96%',
    features: [
      'Complete document checklist',
      'Form filling assistance',
      'Interview preparation',
      'Follow-up support',
      'Success guarantee',
      'Refund policy'
    ],
    popular: true,
    savings: 'Save $60',
    testimonial: {
      text: 'Got my student visa approved on first attempt thanks to their thorough preparation!',
      author: 'Rajesh Kumar',
      university: 'Australia Student Visa'
    }
  },
  {
    id: 'document-verification',
    title: 'Document Verification',
    shortDesc: 'Attestation & authentication',
    fullDesc: 'Complete document verification, attestation, and authentication services for international education.',
    price: '$45',
    originalPrice: '$70',
    icon: Shield,
    gradient: 'from-purple-400 to-pink-600',
    bgGradient: 'from-purple-50 to-pink-50',
    category: 'Documents',
    duration: '2-3 days',
    satisfaction: '99%',
    features: [
      'Educational certificates',
      'Embassy attestation',
      'Apostille services',
      'Translation services',
      'Digital verification',
      'Express processing'
    ],
    popular: false,
    savings: 'Save $25',
    testimonial: {
      text: 'Handled all my document verification efficiently. Saved me weeks of running around!',
      author: 'Suman Thapa',
      university: 'UK Student'
    }
  }
]

export const stats = [
  { icon: Users, label: 'Students Helped', value: '12,000+' },
  { icon: CheckCircle, label: 'Success Rate', value: '96%' },
  { icon: Star, label: 'Average Rating', value: '4.8/5' },
  { icon: Clock, label: 'Avg. Processing Time', value: '3 days' }
]