import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Success Stories - Study Abroad Achievements | Virtual Office',
  description: 'Read inspiring success stories from international students who achieved their study abroad dreams. See real visa approvals, scholarships, and university acceptances with detailed testimonials.',
  keywords: 'student success stories, study abroad success, international student testimonials, visa approval stories, scholarship winners, university acceptance, study abroad testimonials, student achievements',
  authors: [{ name: 'Virtual Office Education Experts' }],
  openGraph: {
    title: 'Student Success Stories - Study Abroad Achievements',
    description: 'Inspiring success stories from international students who achieved their study abroad dreams',
    type: 'website',
    locale: 'en_US',
    siteName: 'Virtual Office'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Success Stories - Study Abroad Achievements',
    description: 'Inspiring success stories from international students who achieved their study abroad dreams'
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
    canonical: '/success'
  }
}