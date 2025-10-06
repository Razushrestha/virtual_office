import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Study Abroad Blog - Expert Guides, Tips & University Information | Virtual Office',
  description: 'Get expert study abroad advice, university guides, visa tips, scholarship information and success stories. Comprehensive resources for international students planning to study overseas.',
  keywords: 'study abroad blog, university guides, visa tips, scholarship information, international education, study overseas, education consultancy, IELTS, TOEFL, SOP writing, visa interview',
  authors: [{ name: 'Virtual Office Education Experts' }],
  openGraph: {
    title: 'Study Abroad Blog - Expert Guides & Tips',
    description: 'Comprehensive study abroad resources and expert guidance for international students',
    type: 'website',
    locale: 'en_US',
    siteName: 'Virtual Office'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study Abroad Blog - Expert Guides & Tips',
    description: 'Comprehensive study abroad resources and expert guidance for international students'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/blog'
  }
}