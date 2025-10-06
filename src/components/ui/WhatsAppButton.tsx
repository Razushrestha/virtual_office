'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, User, Mail, Phone, GraduationCap, Globe, DollarSign, Calendar, FileText } from 'lucide-react'

interface FormData {
  fullName: string
  email: string
  phone: string
  currentEducation: string
  preferredCountry: string
  fieldOfStudy: string
  budgetRange: string
  plannedIntake: string
  ieltsScore: string
  message: string
}

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    currentEducation: '',
    preferredCountry: '',
    fieldOfStudy: '',
    budgetRange: '',
    plannedIntake: '',
    ieltsScore: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create WhatsApp message
    const message = `Hi! I'm interested in studying abroad. Here are my details:

📝 *Personal Information:*
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}

🎓 *Academic Information:*
Current Education: ${formData.currentEducation}
Field of Study: ${formData.fieldOfStudy}
IELTS Score: ${formData.ieltsScore || 'Not taken yet'}

🌍 *Study Preferences:*
Preferred Country: ${formData.preferredCountry}
Budget Range: ${formData.budgetRange}
Planned Intake: ${formData.plannedIntake}

💬 *Additional Message:*
${formData.message || 'No additional message'}

Please guide me with the study abroad process. Thank you!`

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message)
    const whatsappNumber = "+9779803661701"
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank')
    
    // Close modal and reset form
    setIsOpen(false)
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      currentEducation: '',
      preferredCountry: '',
      fieldOfStudy: '',
      budgetRange: '',
      plannedIntake: '',
      ieltsScore: '',
      message: ''
    })
  }

  return (
    <>
      {/* WhatsApp Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-16 right-3 xs:bottom-20 xs:right-4 sm:bottom-24 sm:right-4 z-50 w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-2xl flex items-center justify-center transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        aria-label="Open WhatsApp consultation form"
        type="button"
      >
        <MessageCircle className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7" aria-hidden="true" />
      </motion.button>

      {/* Form Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-2 xs:p-4 sm:p-6 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-white rounded-xl xs:rounded-2xl p-4 xs:p-6 w-full max-w-sm xs:max-w-md sm:max-w-lg md:max-w-2xl max-h-[95vh] xs:max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4 xs:mb-6">
                <div className="flex items-center gap-2 xs:gap-3">
                  <div className="w-8 h-8 xs:w-10 xs:h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 xs:w-5 xs:h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg xs:text-xl font-bold text-gray-900">WhatsApp Consultation</h2>
                    <p className="text-xs xs:text-sm text-gray-600 hidden xs:block">Fill out your details for personalized guidance</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close consultation form"
                  type="button"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 xs:space-y-6">
                {/* Personal Information */}
                <div className="space-y-3 xs:space-y-4">
                  <h3 className="text-base xs:text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <User className="w-4 h-4 xs:w-5 xs:h-5 text-blue-600" />
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4">
                    <div>
                      <label className="block text-xs xs:text-sm font-medium text-gray-700 mb-1 xs:mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 xs:px-4 py-2 xs:py-3 text-sm xs:text-base border border-gray-300 rounded-lg xs:rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="+977 98XXXXXXXX"
                      />
                    </div>
                  </div>
                </div>

                {/* Academic Information */}
                <div className="space-y-3 xs:space-y-4">
                  <h3 className="text-base xs:text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 xs:w-5 xs:h-5 text-purple-600" />
                    Academic Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Education Level *
                      </label>
                      <select
                        name="currentEducation"
                        value={formData.currentEducation}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Select your education level</option>
                        <option value="High School (+2)">High School (+2)</option>
                        <option value="Bachelor's Degree">Bachelor&apos;s Degree</option>
                        <option value="Master's Degree">Master&apos;s Degree</option>
                        <option value="Diploma">Diploma</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Field of Study *
                      </label>
                      <select
                        name="fieldOfStudy"
                        value={formData.fieldOfStudy}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Select field of study</option>
                        <option value="Computer Science & IT">Computer Science & IT</option>
                        <option value="Business Administration">Business Administration</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Medicine & Health Sciences">Medicine & Health Sciences</option>
                        <option value="Data Science & Analytics">Data Science & Analytics</option>
                        <option value="Psychology">Psychology</option>
                        <option value="Arts & Design">Arts & Design</option>
                        <option value="Law">Law</option>
                        <option value="Education">Education</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        IELTS/TOEFL Score (if taken)
                      </label>
                      <input
                        type="text"
                        name="ieltsScore"
                        value={formData.ieltsScore}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="e.g., IELTS 7.0 or TOEFL 100"
                      />
                    </div>
                  </div>
                </div>

                {/* Study Preferences */}
                <div className="space-y-3 xs:space-y-4">
                  <h3 className="text-base xs:text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <Globe className="w-4 h-4 xs:w-5 xs:h-5 text-orange-600" />
                    Study Preferences
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Country *
                      </label>
                      <select
                        name="preferredCountry"
                        value={formData.preferredCountry}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Select preferred country</option>
                        <option value="Australia">Australia</option>
                        <option value="Canada">Canada</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="Germany">Germany</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Not Sure">Not Sure</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range (USD) *
                      </label>
                      <select
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        <option value="$10,000 - $20,000">$10,000 - $20,000</option>
                        <option value="$20,000 - $30,000">$20,000 - $30,000</option>
                        <option value="$30,000 - $50,000">$30,000 - $50,000</option>
                        <option value="$50,000 - $70,000">$50,000 - $70,000</option>
                        <option value="$70,000+">$70,000+</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Planned Intake *
                      </label>
                      <select
                        name="plannedIntake"
                        value={formData.plannedIntake}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Select planned intake</option>
                        <option value="Spring 2025">Spring 2025</option>
                        <option value="Fall 2025">Fall 2025</option>
                        <option value="Spring 2026">Spring 2026</option>
                        <option value="Fall 2026">Fall 2026</option>
                        <option value="Not Sure">Not Sure</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Message */}
                <div className="space-y-3 xs:space-y-4">
                  <h3 className="text-base xs:text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <FileText className="w-4 h-4 xs:w-5 xs:h-5 text-green-600" />
                    Additional Information
                  </h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Any specific questions or requirements?
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your specific needs, questions, or concerns..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-3 xs:pt-4">
                  <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 xs:py-4 px-4 xs:px-6 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 text-sm xs:text-base"
                  >
                    <Send className="w-4 h-4 xs:w-5 xs:h-5" />
                    Send to WhatsApp
                  </button>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    This will open WhatsApp with your details pre-filled
                  </p>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}