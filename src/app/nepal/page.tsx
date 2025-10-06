import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Education Consultancy in Nepal | Study Abroad Services Kathmandu',
  description: 'Leading education consultancy in Nepal with offices in Kathmandu, Pokhara, Chitwan. Expert guidance for Australia, Germany, USA, UK, Canada study abroad programs.',
  keywords: 'consultancy nepal, education consultancy kathmandu, study abroad nepal, consultancy services nepal, university admission nepal',
  openGraph: {
    title: 'Nepal Education Consultancy Services | Virtual Office',
    description: 'Premier study abroad consultancy in Nepal. Expert counseling services in Kathmandu, Pokhara, Chitwan for international education.',
  }
}

export default function NepalPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* SEO Content will be added here */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Education Consultancy Services in Nepal
        </h1>
        <p className="text-lg text-gray-600">
          Comprehensive study abroad guidance across Nepal with expert counseling services.
        </p>
      </div>
    </div>
  )
}