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
  const [showAllPosts, setShowAllPosts] = useState(false)
  const [postsToShow, setPostsToShow] = useState(6) // Initially show 6 posts

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
    title: 'Step-by-Step Guide to Student Visa Processing (2025 Updated)',
    excerpt: 'Complete guide to student visa processing with step-by-step instructions, requirements, and tips for a successful application in 2025.',
    content: `Studying abroad is a dream for many students — but the visa process can often feel confusing and stressful. This complete guide will walk you through every step of student visa processing and explain the essential requirements you'll need to fulfill before traveling to your dream destination.

✈️ **Step 1: Choose Your Destination and Course**

Before applying for a student visa, you must decide which country and course you want to study.
Each country has different visa rules, so always check the official immigration or embassy website.
Make sure your selected course and institution are recognized and accredited by that country's education authority.

**Tips:**
• Research tuition fees and living costs.
• Check post-study work opportunities.
• Consult with your education consultant for eligibility criteria.

📝 **Step 2: Receive the Offer Letter**

Once you apply to a university or college and get accepted, you will receive an Offer Letter or Confirmation of Enrolment (CoE).
This document is mandatory for the visa application.

**You'll need:**
• Academic transcripts and certificates
• Valid passport
• Proof of English proficiency (IELTS, TOEFL, or PTE)
• Application fee payment`,
    author: 'Visa Expert Team',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    authorBio: 'Expert visa consultants with 10+ years of experience in student visa processing',
    date: '2024-10-06',
    readTime: '15 min read',
    category: 'Visa Guide',
    tags: ['Visa', 'Student Visa', '2025 Guide', 'Documentation', 'Process'],
    image: 'https://images.unsplash.com/photo-1554734867-bf3c00a49371?w=800',
    views: '25.3K',
    likes: '1.8K',
    comments: '342',
    featured: true,
    difficulty: 'Beginner',
    rating: 4.9,
    downloadCount: '3.2K'
  }

  const blogPosts = [
    {
      id: 13,
      title: 'Compare Student Visa Process: USA vs UK vs Canada vs Australia (2025 Edition)',
      excerpt: 'Comprehensive comparison of student visa processes across all four major destinations with requirements, timelines, costs, and post-study work opportunities.',
      content: `Choosing where to study abroad can be one of the biggest decisions in your academic journey.
While the USA, UK, Canada, and Australia are all top destinations for international students, each has its own visa process, requirements, and benefits.

In this guide, we compare the student visa processes for all four countries in 2025 — so you can make the best decision for your education and future career.

🎓 **Step-by-Step Overview of Visa Processes**

| Country | Visa Name | Application Type | Processing Time | Work Rights (During Study) |
|---------|-----------|------------------|-----------------|---------------------------|
| 🇺🇸 USA | F-1 Visa | DS-160 + Interview | 3–6 weeks | 20 hrs/week (on-campus only) |
| 🇬🇧 UK | Student Visa (Tier 4) | Online via Gov.UK | 3–6 weeks | 20 hrs/week |
| 🇨🇦 Canada | Study Permit | Online via IRCC | 4–8 weeks | 20 hrs/week |
| 🇦🇺 Australia | Subclass 500 | Online via ImmiAccount | 4–6 weeks | 24 hrs/week (no limit during holidays) |

🧾 **Document Requirements Comparison**

| Requirement | USA | UK | Canada | Australia |
|-------------|-----|----|---------| ----------|
| Offer Letter / CAS / I-20 | ✅ I-20 Form | ✅ CAS Letter | ✅ LOA | ✅ CoE |
| Proof of Funds | ✅ Required | ✅ Required (28 days) | ✅ Required | ✅ Required |
| English Proficiency | ✅ IELTS/TOEFL/Duolingo | ✅ IELTS/PTE | ✅ IELTS/PTE/TOEFL | ✅ IELTS/PTE |
| Medical / Insurance | ✅ Medical + Health Insurance | ✅ TB Test + IHS | ✅ Medical Exam | ✅ OSHC |
| Visa Interview | ✅ Mandatory | ❌ Optional | ❌ Optional | ❌ Optional |
| Biometric Required | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |

💰 **Financial Requirements (2025 Estimates)**

| Country | Minimum Living Cost Proof | Tuition Proof | Total Estimated Fund Required |
|---------|---------------------------|---------------|------------------------------|
| 🇺🇸 USA | Around USD $10,000–$12,000/year | 1 year tuition | USD $30,000+ |
| 🇬🇧 UK | £1,023–£1,334/month (9 months) | 1 year tuition | £20,000–£25,000+ |
| 🇨🇦 Canada | CAD $20,635/year | 1 year tuition | CAD $30,000+ |
| 🇦🇺 Australia | AUD $24,505/year | 1 year tuition | AUD $35,000+ |

🗣 **Visa Interview and Success Tips**

| Country | Interview Required | Tips |
|---------|-------------------|------|
| 🇺🇸 USA | ✅ Yes | Be confident, clear about course and sponsor, know your university well |
| 🇬🇧 UK | ⚠️ Sometimes | Prepare a short video or online interview if requested |
| 🇨🇦 Canada | ❌ No (usually) | Focus on financial transparency and SOP quality |
| 🇦🇺 Australia | ❌ No | Ensure GTE (Genuine Temporary Entrant) statement is strong |

🕒 **Processing Time and Difficulty Level**

| Country | Average Time | Difficulty Level |
|---------|--------------|------------------|
| 🇺🇸 USA | 3–6 weeks | Medium (due to interview) |
| 🇬🇧 UK | 3–6 weeks | Easy |
| 🇨🇦 Canada | 4–8 weeks | Medium |
| 🇦🇺 Australia | 4–6 weeks | Easy |

🎯 **Post-Study Work Opportunities**

| Country | Work Visa After Study | Duration | Name of Visa |
|---------|----------------------|----------|--------------|
| 🇺🇸 USA | OPT (Optional Practical Training) | 1–3 years | OPT / STEM OPT |
| 🇬🇧 UK | Graduate Route | 2 years (3 for PhD) | Graduate Visa |
| 🇨🇦 Canada | Post-Graduation Work Permit (PGWP) | 1–3 years | PGWP |
| 🇦🇺 Australia | Temporary Graduate Visa | 2–4 years | Subclass 485 |

🧭 **Which Country Is Best for You?**

• **🇺🇸 USA**: Best for world-class research, innovation, and technology programs.
• **🇬🇧 UK**: Best for fast-track master's degrees and global exposure.
• **🇨🇦 Canada**: Best for PR opportunities and affordable living.
• **🇦🇺 Australia**: Best for lifestyle, weather, and post-study work balance.

✅ **Final Tips Before Applying**

• Start your visa process at least 3–4 months before your course begins.
• Prepare your financial documents carefully — many refusals happen due to insufficient proof.
• Write a strong SOP or GTE statement showing your genuine intent to study.
• Keep both digital and printed copies of all your documents.
• Always apply through a trusted education consultancy to avoid errors.

🌍 **Final Thoughts**

Each of these countries offers world-class education and global career exposure — but your choice should depend on your academic goals, financial plan, and lifestyle preferences.
Whether it's the innovation-driven USA, career-focused UK, opportunity-rich Canada, or vibrant Australia — all can lead you toward a successful global future.

With expert guidance from your education consultancy, your study abroad dream in 2025 can turn into a life-changing reality.`,
      author: 'Dr. Michael Thompson',
      authorImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150',
      date: '2025-10-06',
      readTime: '22 min read',
      category: 'Study Abroad',
      tags: ['Comparison', 'USA', 'UK', 'Canada', 'Australia', 'Visa Guide'],
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800',
      views: '5.7K',
      likes: 423,
      comments: '134',
      featured: true,
      difficulty: 'Beginner',
      rating: 4.9,
      downloadCount: '3.1K',
      trending: true,
      isNew: true
    },
    {
      id: 12,
      title: 'USA Student Visa Process 2025 — Step-by-Step Guide for International Students',
      excerpt: 'Complete guide to US student visa (F-1) process with I-20 requirements, SEVIS fee, DS-160 form, and visa interview preparation for 2025.',
      content: `The United States has long been one of the most popular study destinations in the world, home to Ivy League universities, world-class research, and diverse career opportunities.
If you're planning to study in the USA, understanding the student visa process is one of the most crucial steps before your journey begins.

This detailed 2025 guide will help you understand how to apply for a US student visa, what documents you'll need, and how to succeed in your visa interview.

🎓 **Step 1: Get Accepted by a SEVP-Approved Institution**

To study in the US, you must first be accepted by a SEVP (Student and Exchange Visitor Program)-approved school, college, or university.
Once you are accepted, the institution will issue an I-20 form — a crucial document required for your visa application.

**Documents for admission:**
• Academic transcripts and certificates
• English proficiency (IELTS, TOEFL, or Duolingo)
• Statement of Purpose (SOP)
• Passport copy
• Application and registration fees

💵 **Step 2: Pay the SEVIS Fee (Form I-901)**

Before applying for your visa, you must pay the SEVIS (Student and Exchange Visitor Information System) fee online.
This fee is required to activate your student record in the SEVIS database.

**Fee (as of 2025):**
• F-1 visa: USD $350
• J-1 visa: USD $220

After payment, print and keep the I-901 SEVIS payment confirmation — it will be required during your visa interview.

💻 **Step 3: Complete the DS-160 Form Online**

Next, fill out the DS-160 form, which is the official Online Nonimmigrant Visa Application.
You can find it on the U.S. Department of State website.

**You'll need:**
• Your I-20 form
• SEVIS payment receipt
• Passport information
• Recent digital photo (per US specifications)

After completing the form, save the DS-160 confirmation page with the barcode — you'll need it for your visa appointment.

🗓 **Step 4: Schedule Visa Appointments (OFC + Interview)**

You'll have to schedule two separate appointments:
• **OFC (Offsite Facilitation Center)** – for biometrics (photo and fingerprints)
• **US Embassy/Consulate** – for your visa interview

**To book appointments:**
• Visit the official US Visa Information and Appointment website for your country.
• Pay the visa application fee (around USD $185 for F-1 visas).

🗣 **Step 5: Attend the Visa Interview**

The visa interview is the most important step in your USA student visa process.
It determines whether you are a genuine student and if you meet all visa requirements.

**Documents to carry for interview:**
• Valid passport
• I-20 form
• DS-160 confirmation page
• Visa fee and SEVIS fee receipts
• Admission letter from university
• Academic transcripts and certificates
• Bank statements / financial proofs
• SOP or study plan

**Common interview questions:**
• Why did you choose this university?
• Who is sponsoring your education?
• What are your career plans after graduation?
• How will you finance your studies?

**Tips:**
• Be confident and honest.
• Keep answers short, clear, and focused.
• Dress neatly and maintain eye contact.

⏳ **Step 6: Wait for Visa Decision**

After the interview, the visa officer will inform you about the decision.
If approved, your passport will be kept for visa stamping and returned within 3–7 working days.
Your visa type will be F-1, M-1, or J-1, depending on your course.

✈️ **Step 7: Prepare for Travel to the USA**

Congratulations! You can now prepare for your flight.
Remember, you can enter the U.S. up to 30 days before your course start date.

**Before departure checklist:**
• Carry passport with visa and I-20 form
• Keep SEVIS and admission receipts
• Book airport pickup and housing
• Attend pre-departure orientation

Upon arrival, show your I-20 form and passport to the CBP (Customs and Border Protection) officer at the airport.

📋 **Summary: USA Student Visa Requirements 2025**

| Category | Documents Required |
|----------|-------------------|
| Admission | I-20 Form, Offer Letter, Passport |
| Financial | Bank Statement, Sponsor Letter, Loan Letter |
| English | IELTS, TOEFL, or Duolingo |
| Forms | DS-160, SEVIS (I-901) Receipt |
| Others | Visa Fee Receipt, Photos, SOP, Academic Documents |

🌍 **Final Thoughts**

The USA Student Visa Process (2025) can seem complex, but with proper preparation and guidance, it becomes manageable and rewarding.
Start early, gather all documents carefully, and practice for your interview confidently.
With expert support from your trusted education consultancy, your dream to study in the USA is one step away from reality!`,
      author: 'Prof. Lisa Anderson',
      authorImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150',
      date: '2025-10-06',
      readTime: '19 min read',
      category: 'Visa Guide',
      tags: ['USA', 'F-1 Visa', 'I-20', 'SEVIS', 'DS-160'],
      image: 'https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=800',
      views: '4.1K',
      likes: 312,
      comments: '89',
      featured: true,
      difficulty: 'Advanced',
      rating: 4.9,
      downloadCount: '2.3K',
      trending: true,
      isNew: true
    },
    {
      id: 11,
      title: 'UK Student Visa Process 2025 — Step-by-Step Guide for International Students',
      excerpt: 'Complete guide to UK Student Visa (Tier 4) process with CAS requirements, financial proof, and step-by-step application instructions for 2025.',
      content: `The United Kingdom continues to attract thousands of international students each year, offering world-class education, globally recognized degrees, and valuable post-study work opportunities.
If you're planning to study in the UK in 2025, understanding the student visa process is essential for a smooth journey from your home country to your university campus.

Here's a complete, updated guide on the UK Student Visa (Tier 4) process — step-by-step.

🎓 **Step 1: Receive Your CAS (Confirmation of Acceptance for Studies)**

Before you can apply for a UK student visa, you need to receive a CAS letter from your university or college.
This letter confirms that you have been officially accepted into a course of study.

**Documents required to receive CAS:**
• Academic transcripts and certificates
• Passport copy
• English proficiency (IELTS/TOEFL/PTE/DUOLINGO)
• Tuition deposit payment receipt

Once issued, your CAS number will be needed during the visa application.

💻 **Step 2: Apply Online for UK Student Visa**

All UK visa applications are done online via the official Gov.UK website.
You can apply up to 6 months before your course starts.

**You'll need:**
• CAS number
• Passport
• Financial proof
• English test result
• ATAS certificate (for some courses)

After completing the form, you'll book an appointment for biometrics and document submission at your nearest VFS Global center.

💰 **Step 3: Prepare Financial Documents**

You must show that you have enough funds to pay for your course fees and living expenses.

**As of 2025:**
• For courses outside London: £1,023 per month for up to 9 months
• For courses in London: £1,334 per month for up to 9 months
• Plus, tuition fees for the first year

**Accepted financial proofs:**
• Bank statements (for at least 28 consecutive days)
• Education loan letter
• Sponsor letter (if applicable)
• Scholarship award letter

🩺 **Step 4: Pay the IHS Fee and Book Biometrics**

Before submitting your visa application, you must pay the Immigration Health Surcharge (IHS) fee, which allows you to access the UK's National Health Service (NHS) during your stay.

**IHS Fee (2025):**
• Around £776 per year for students

Then, book a biometric appointment at the VFS center to provide fingerprints and a photo.

🧾 **Step 5: Submit Required Documents**

At your VFS appointment, you'll need to submit all original documents and biometric data.

**Required documents:**
• Valid passport
• CAS letter
• Financial proof
• IHS payment receipt
• Visa application form
• English test result
• TB test certificate (if required)
• Passport-size photos

🕒 **Step 6: Wait for Visa Processing**

Visa processing time is usually 3 to 6 weeks.
You'll receive an email or SMS once your decision is ready.
If approved, you'll receive your Entry Clearance Visa (Vignette) in your passport.

🛬 **Step 7: Prepare for Travel and Arrival in the UK**

You can travel to the UK up to 1 month before your course starts.
Upon arrival, you'll collect your Biometric Residence Permit (BRP) within 10 days at the location mentioned in your visa decision letter.

**Before departure checklist:**
• Print CAS, visa letter, and BRP collection address
• Pack original academic and financial documents
• Carry passport and vaccination certificates
• Join pre-departure session from your consultancy

📋 **Summary: UK Student Visa Requirements 2025**

| Category | Documents Required |
|----------|-------------------|
| Admission | CAS, Passport, Offer Letter |
| Financial | Bank Statement, Loan Letter, Sponsor Letter |
| Health | IHS Fee Receipt, TB Certificate |
| English | IELTS, PTE, TOEFL, or DUOLINGO |
| Other | Visa Application Form, Photos, SOP |

🌍 **Final Thoughts**

The UK Student Visa Process (2025) is one of the most straightforward — if you prepare early and follow the correct steps.
Ensure your financial documents meet the 28-day rule, keep your CAS details accurate, and be ready for any verification.
With expert guidance from your education consultancy, your dream of studying in the UK is just a few steps away.`,
      author: 'Dr. James Wilson',
      authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      date: '2025-10-06',
      readTime: '16 min read',
      category: 'Visa Guide',
      tags: ['UK', 'Student Visa', 'CAS', 'Tier 4', 'IHS'],
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800',
      views: '2.8K',
      likes: 189,
      comments: '67',
      featured: false,
      difficulty: 'Intermediate',
      rating: 4.8,
      downloadCount: '1.4K',
      trending: true,
      isNew: true
    },
    {
      id: 2,
      title: 'Australia Student Visa Process 2025 — Step-by-Step Guide for International Students',
      excerpt: 'Complete guide to Australian student visa (subclass 500) process with step-by-step instructions, CoE requirements, and financial capacity guidelines for 2025.',
      content: `Australia remains one of the most popular destinations for higher education, thanks to its world-class universities, post-study work rights, and quality of life.
If you're planning to study in Australia, this guide will walk you through each step of the visa process, required documents, and tips to ensure a smooth application.

🎓 **Step 1: Apply to an Australian Institution and Receive CoE**

Before applying for a visa, you must first receive a Confirmation of Enrolment (CoE) from a registered Australian education provider.
This proves that you have been officially accepted into a full-time course.

**Documents required to apply for admission:**
• Academic transcripts
• Passport copy
• English test (IELTS, PTE, TOEFL)
• Application form and registration fee

Once your offer is accepted and tuition deposit paid, your institution will issue your CoE.

💻 **Step 2: Create an ImmiAccount and Start Visa Application**

All student visa applications for Australia are submitted online through the official Department of Home Affairs website.
Create your ImmiAccount and select Student Visa (subclass 500).

**You'll need:**
• CoE number
• Passport details
• OSHC (Overseas Student Health Cover) information
• Proof of financial capacity
• SOP or GTE statement (Genuine Temporary Entrant)

💰 **Step 3: Show Proof of Financial Capacity**

The Australian Government requires proof that you can cover your tuition and living costs while studying.
As of 2025, you must demonstrate access to at least AUD $24,505 per year for living expenses, plus tuition and travel costs.

**Accepted financial proofs:**
• Bank statements
• Income documents of sponsors
• Education loan approval letters
• Scholarship award letters

🩺 **Step 4: Complete Health Examination and Get OSHC**

Before your visa is approved, you must complete a medical examination by a panel doctor approved by the Australian embassy.
You also need to purchase Overseas Student Health Cover (OSHC) for the duration of your course.

**Pro tip:** Most universities can help arrange OSHC through providers like BUPA, Medibank, or Allianz Care.

📝 **Step 5: Prepare and Upload Visa Documents**

Upload all required documents in your ImmiAccount. Make sure all files are clear, translated into English (if necessary), and up to date.

**Documents checklist:**
• Valid passport
• CoE
• English test result
• OSHC certificate
• Financial documents
• GTE statement
• Academic documents
• Birth certificate or National ID (if applicable)

🎙 **Step 6: Submit Visa Application and Pay Fee**

Once all documents are ready, submit your application and pay the visa application fee (currently around AUD $710).
Keep your Transaction Reference Number (TRN) safe for tracking your application.

💬 **Step 7: Attend Interview or Biometrics (if required)**

In some cases, students may be asked to provide biometric information or attend an interview at the Australian Visa Application Centre (VFS).
Be honest, confident, and clearly explain your study intentions.

⏳ **Step 8: Wait for Visa Decision**

Visa processing time usually takes between 3 to 6 weeks, depending on your application completeness and time of year.
You can track your visa status using your ImmiAccount or TRN.

Once approved, you'll receive your Visa Grant Letter via email.

🧳 **Step 9: Prepare for Travel and Arrival in Australia**

Congratulations! You can now plan your journey.
Check the entry requirements, pack your documents, and prepare for your new life in Australia.

**Before departure checklist:**
• Print visa grant letter
• Carry original documents
• Book airport pickup and accommodation
• Attend your consultancy's pre-departure session

📋 **Summary: Required Documents for Australia Student Visa 2025**

| Category | Documents Required |
|----------|-------------------|
| Admission | CoE, Offer Letter, Passport |
| Financial | Bank Statement, Loan Letter, Sponsor Proof |
| English | IELTS/PTE/TOEFL |
| Health | OSHC, Medical Certificate |
| Other | GTE Statement, SOP, Visa Fee Receipt |

🌏 **Final Thoughts**

Getting your Australian student visa can be easy — if you prepare early, stay organized, and submit genuine documents.
With the right guidance from your trusted education consultancy, your dream to study in Australia can come true smoothly and confidently.`,
      author: 'Australia Visa Specialists',
      authorImage: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150',
      authorBio: 'Certified Australian immigration advisors specializing in student visa applications',
      date: '2024-10-06',
      readTime: '12 min read',
      category: 'Visa Guide',
      tags: ['Australia', 'Student Visa', 'Subclass 500', 'CoE', 'OSHC', '2025 Guide'],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      views: '22.1K',
      likes: '1.5K',
      comments: '298',
      featured: true,
      difficulty: 'Beginner',
      rating: 4.8,
      downloadCount: '2.8K',
      trending: true,
      isNew: true
    },
    {
      id: 10,
      title: 'Canada Student Visa Process 2025 — Complete Step-by-Step Guide',
      excerpt: 'Complete guide to Canada Study Permit process with DLI requirements, financial proof, and step-by-step application instructions for 2025.',
      content: `Canada is one of the top destinations for international students because of its world-class education, affordable tuition fees, and welcoming culture.
If you plan to study in Canada, understanding the student visa (study permit) process is the key to a successful application.
Here's a complete 2025 guide covering all steps, requirements, and expert tips.

🎯 **Step 1: Choose a Designated Learning Institution (DLI)**

Before applying for a student visa, make sure you've been accepted by a Designated Learning Institution (DLI) — only DLIs are approved by the Canadian government to host international students.
You can find the full DLI list on the official Government of Canada website.

**Documents for admission:**
• Academic transcripts and certificates
• English proficiency (IELTS/TOEFL/PTE)
• Valid passport
• Application and registration fees

Once accepted, you'll receive a Letter of Acceptance (LOA) — required for your visa application.

💻 **Step 2: Apply for Study Permit Online**

You can apply for your Canada Study Permit through the IRCC (Immigration, Refugees, and Citizenship Canada) website.

**You'll need:**
• Letter of Acceptance (LOA)
• Valid passport
• Recent photos
• Proof of financial support
• Statement of Purpose (SOP)
• Visa fee payment receipt

Make sure all documents are scanned clearly and translated into English or French (if necessary).

💰 **Step 3: Show Proof of Financial Support**

To qualify, you must prove you can pay for your tuition and living expenses during your study period.

**Minimum funds required (as of 2025):**
• Tuition fees for one year
• Living expenses: CAD $20,635 per year (outside Quebec)
• Travel and accommodation costs

**Accepted proofs:**
• Bank statement (past 4 months)
• Income certificate or tax documents
• Education loan letter
• Sponsor letter (if applicable)

🩺 **Step 4: Complete Medical Examination and Biometrics**

After applying, IRCC will send instructions to complete a medical examination with an approved panel physician.
You'll also receive a request for biometrics (fingerprints and photo), which must be done at a VFS Global center.

**Important:** Your application will not be processed until both are completed.

📄 **Step 5: Upload Documents and Submit Application**

When all requirements are ready, submit your complete application online and pay the visa fee (around CAD $150 plus biometrics fee).

**Document checklist:**
• Passport
• LOA
• Financial documents
• Photos
• SOP
• Medical and biometrics receipts

⏳ **Step 6: Wait for Visa Decision**

After submission, you can track your visa status through your IRCC account.
Processing time usually takes 4–8 weeks, depending on your country and season.

**If approved, you'll receive:**
• Port of Entry (POE) Letter of Introduction, and
• Study Permit Approval (to be issued at the airport upon arrival in Canada).

✈️ **Step 7: Prepare for Travel to Canada**

Once you've received your approval, it's time to prepare for your journey!

**Pre-departure checklist:**
• Carry your passport and POE letter
• Have your tuition fee and accommodation details ready
• Keep copies of all documents (digital + printed)
• Attend your consultancy's pre-departure session

At the airport, a border services officer will issue your Study Permit after verifying your documents.

📋 **Summary: Canada Student Visa Requirements 2025**

| Category | Documents Required |
|----------|-------------------|
| Admission | Letter of Acceptance (LOA), Passport |
| Financial | Bank Statement, Loan Letter, Sponsor Letter |
| Health | Medical Certificate, Biometrics |
| English | IELTS/TOEFL/PTE |
| Other | SOP, Photos, Visa Fee Receipt |

🌍 **Final Thoughts**

The Canada Student Visa Process might seem lengthy, but with proper guidance and preparation, you can complete it smoothly.
Start your application early, maintain financial transparency, and ensure all documents are genuine.
With the support of your trusted education consultancy, your dream of studying in Canada can become reality in 2025!`,
      author: 'Sarah Johnson',
      authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b188?w=150',
      date: '2025-10-06',
      readTime: '18 min read',
      category: 'Visa Guide',
      tags: ['Canada', 'Study Permit', 'DLI', 'IRCC', 'Student Visa'],
      views: '3.2K',
      likes: 247,
      rating: 4.9,
      downloadCount: '1.9K',
      trending: true,
      isNew: true,
      difficulty: 'Intermediate'
    },
    {
      id: 3,
      title: 'Step-by-Step Guide to Student Visa Processing (2025 Updated)',
      excerpt: 'Complete guide to student visa processing with step-by-step instructions, requirements, and tips for a successful application in 2025.',
      content: `Studying abroad is a dream for many students — but the visa process can often feel confusing and stressful. This complete guide will walk you through every step of student visa processing and explain the essential requirements you'll need to fulfill before traveling to your dream destination.

✈️ **Step 1: Choose Your Destination and Course**

Before applying for a student visa, you must decide which country and course you want to study.
Each country has different visa rules, so always check the official immigration or embassy website.
Make sure your selected course and institution are recognized and accredited by that country's education authority.

**Tips:**
• Research tuition fees and living costs.
• Check post-study work opportunities.
• Consult with your education consultant for eligibility criteria.

📝 **Step 2: Receive the Offer Letter**

Once you apply to a university or college and get accepted, you will receive an Offer Letter or Confirmation of Enrolment (CoE).
This document is mandatory for the visa application.

**You'll need:**
• Academic transcripts and certificates
• Valid passport
• Proof of English proficiency (IELTS, TOEFL, or PTE)
• Application fee payment

💰 **Step 3: Arrange Financial Documents**

Embassies want to ensure you can cover your tuition and living expenses during your studies.
You must show proof of sufficient funds — either through bank statements, sponsor letters, or scholarships.

**Financial documents may include:**
• Recent bank statement (last 3–6 months)
• Income certificate of sponsor
• Affidavit of support
• Loan approval letter (if applicable)

🩺 **Step 4: Medical and Health Insurance**

Most countries require a medical examination and health insurance coverage before granting a student visa.

**Common requirements:**
• Medical test at an embassy-approved hospital
• Health insurance for the entire duration of your stay
• Immunization records (for certain destinations)

📄 **Step 5: Prepare and Submit Visa Documents**

After you've gathered all required documents, it's time to submit your visa application either online or via the embassy/VFS center.

**Essential visa documents:**
• Valid passport
• Offer Letter / CAS / CoE
• Financial documents
• Medical report
• Visa application form
• Passport-size photos
• Statement of Purpose (SOP)
• Visa fee payment receipt

👩‍💼 **Step 6: Attend the Interview (if required)**

Some embassies conduct interviews to assess your study plans, financial capacity, and genuine intent to study.

**Tips for your interview:**
• Be confident and honest.
• Clearly explain why you chose your course and university.
• Bring all your original documents.

🕒 **Step 7: Wait for Visa Decision**

After submitting your application, you'll receive a tracking ID to check your visa status.
Processing times vary depending on the country and season — it may take 2 to 6 weeks.

✅ **Step 8: Receive Your Visa and Prepare for Departure**

Once approved, you'll receive your student visa stamped on your passport.
Now you can book your flight, pack your bags, and attend a pre-departure briefing organized by your consultancy.

**Before you fly:**
• Make digital copies of all documents.
• Carry your admission letter and visa approval.
• Keep emergency contacts handy.

📋 **Summary of Student Visa Requirements**

| Category | Documents Required |
|----------|-------------------|
| Academic | Offer Letter, Transcripts, English Test |
| Financial | Bank Statement, Sponsor Letter, Affidavit |
| Identity | Valid Passport, Photos |
| Health | Medical Report, Insurance |
| Others | SOP, Visa Form, Fee Receipt |

🌍 **Final Thoughts**

Applying for a student visa may seem complicated, but with the right guidance and preparation, the process becomes smooth and stress-free.
Always start early, prepare your documents properly, and consult your trusted education consultancy for professional support.`,
      author: 'Visa Expert Team',
      authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      authorBio: 'Expert visa consultants with 10+ years of experience in student visa processing',
      date: '2024-10-06',
      readTime: '15 min read',
      category: 'Visa Guide',
      tags: ['Visa', 'Student Visa', '2025 Guide', 'Documentation', 'Process'],
      image: 'https://images.unsplash.com/photo-1554734867-bf3c00a49371?w=800',
      views: '25.3K',
      likes: '1.8K',
      comments: '342',
      featured: true,
      difficulty: 'Beginner',
      rating: 4.9,
      downloadCount: '3.2K',
      trending: true,
      isNew: true
    },
    {
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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

  // Pagination logic
  const displayedPosts = showAllPosts ? filteredPosts : filteredPosts.slice(0, postsToShow)
  const hasMorePosts = filteredPosts.length > postsToShow

  const handleShowMore = () => {
    if (showAllPosts) {
      setShowAllPosts(false)
      setPostsToShow(6)
    } else {
      setShowAllPosts(true)
    }
  }

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
                  {displayedPosts.map((post, index) => (
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

                {/* See More Button */}
                {(hasMorePosts || showAllPosts) && (
                  <div className="flex justify-center mt-8 md:mt-12">
                    <motion.button
                      onClick={handleShowMore}
                      className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-3"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">
                        {showAllPosts ? 'Show Less' : `See More Posts (${filteredPosts.length - postsToShow} more)`}
                      </span>
                      <motion.div 
                        className="relative z-10"
                        animate={{ rotate: showAllPosts ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronRight className="w-5 h-5" />
                      </motion.div>
                      
                      {/* Animated background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Sparkle effect */}
                      <div className="absolute inset-0 rounded-full overflow-hidden">
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                      </div>
                    </motion.button>
                  </div>
                )}
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