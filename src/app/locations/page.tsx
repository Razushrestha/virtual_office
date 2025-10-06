import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Clock, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Education Consultancy Locations in Nepal | Kathmandu, Pokhara, Chitwan',
  description: 'Find Virtual Office education consultancy offices across Nepal. We serve Kathmandu, Pokhara, Chitwan, Itahari, Biratnagar, Butwal with expert study abroad services.',
  keywords: 'consultancy locations nepal, consultancy kathmandu address, consultancy pokhara, consultancy chitwan, consultancy near me nepal'
}

const locations = [
  {
    city: 'Kathmandu',
    areas: ['Putalisadak', 'Baneshwor', 'New Baneshwor', 'Chabahil', 'Bagbazar', 'Kumaripati'],
    address: 'Putalisadak, Kathmandu 44600',
    phone: '+977-1-4123456',
    hours: '9:00 AM - 6:00 PM',
    services: ['Australia', 'Germany', 'USA', 'UK', 'Canada', 'Italy', 'Japan'],
    description: 'Our main office in Kathmandu provides comprehensive study abroad services.'
  },
  {
    city: 'Pokhara',
    areas: ['Lakeside', 'Mahendrapul', 'Bagar'],
    address: 'Lakeside, Pokhara 33700',
    phone: '+977-61-123456',
    hours: '10:00 AM - 5:00 PM', 
    services: ['Australia', 'Germany', 'Canada', 'UK'],
    description: 'Serving western Nepal with expert education consultancy services.'
  },
  {
    city: 'Chitwan',
    areas: ['Bharatpur', 'Ratnanagar'],
    address: 'Bharatpur-10, Chitwan',
    phone: '+977-56-123456',
    hours: '9:30 AM - 5:30 PM',
    services: ['Australia', 'Germany', 'Canada'],
    description: 'Professional guidance for students in central Nepal region.'
  },
  {
    city: 'Itahari',
    areas: ['Main Road', 'Dharan Road'],
    address: 'Itahari-5, Sunsari',
    phone: '+977-25-123456',
    hours: '10:00 AM - 5:00 PM',
    services: ['Australia', 'Germany', 'UK'],
    description: 'Dedicated services for eastern Nepal students.'
  },
  {
    city: 'Biratnagar',
    areas: ['Traffic Chowk', 'Main Road'],
    address: 'Traffic Chowk, Biratnagar',
    phone: '+977-21-123456',
    hours: '9:00 AM - 5:00 PM',
    services: ['Australia', 'Germany', 'Canada'],
    description: 'Complete study abroad solutions in eastern Nepal.'
  },
  {
    city: 'Butwal',
    areas: ['Traffic Chowk', 'Golpark'],
    address: 'Traffic Chowk, Butwal',
    phone: '+977-71-123456',
    hours: '9:30 AM - 5:30 PM',
    services: ['Australia', 'Germany', 'UK'],
    description: 'Expert consultancy services for western Nepal students.'
  }
]

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Education Consultancy Offices Across Nepal
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Find our consultancy services near you. We provide expert study abroad guidance 
            in major cities across Nepal including Kathmandu, Pokhara, Chitwan, and more.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white/20 px-4 py-2 rounded-full">📍 Consultancy Kathmandu</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">📍 Consultancy Pokhara</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">📍 Consultancy Chitwan</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">📍 Consultancy Near Me</span>
          </div>
        </div>
      </div>

      {/* Locations Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Consultancy Locations in Nepal
          </h2>
          <p className="text-lg text-gray-600">
            Visit our offices for free consultation and expert study abroad guidance
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((location, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  Consultancy {location.city}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-4">{location.description}</p>
              
              {/* Address */}
              <div className="flex items-start gap-2 mb-3">
                <MapPin className="w-4 h-4 text-gray-500 mt-1" />
                <span className="text-sm text-gray-700">{location.address}</span>
              </div>
              
              {/* Phone */}
              <div className="flex items-center gap-2 mb-3">
                <Phone className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-700">{location.phone}</span>
              </div>
              
              {/* Hours */}
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-700">{location.hours}</span>
              </div>
              
              {/* Areas Served */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Areas Served:</h4>
                <div className="flex flex-wrap gap-2">
                  {location.areas.map((area, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Services */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Study Destinations:</h4>
                <div className="flex flex-wrap gap-2">
                  {location.services.map((service, idx) => (
                    <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* CTA */}
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                  Visit Office
                </button>
                <button className="flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors text-sm">
                  Call Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SEO Content Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Our Consultancy Services in Nepal?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Expert consultancy services across major Nepal cities
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Consultancy meaning in Nepali: परामर्श सेवा (Professional Guidance)
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Free consultation at all our consultancy locations
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Licensed consultancy agency with proven track record
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Best consultancy for Australia, Germany, USA, UK, Canada
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Popular Consultancy Searches in Nepal
              </h3>
              <div className="grid gap-2 text-sm">
                <Link href="/nepal" className="text-blue-600 hover:underline">Consultancy Kathmandu</Link>
                <Link href="/nepal" className="text-blue-600 hover:underline">Consultancy Baneshwor</Link>
                <Link href="/nepal" className="text-blue-600 hover:underline">Consultancy Putalisadak</Link>
                <Link href="/nepal" className="text-blue-600 hover:underline">Consultancy Chabahil</Link>
                <Link href="/nepal" className="text-blue-600 hover:underline">Consultancy Pokhara</Link>
                <Link href="/nepal" className="text-blue-600 hover:underline">Consultancy Chitwan</Link>
                <Link href="/nepal" className="text-blue-600 hover:underline">Consultancy for Australia in Nepal</Link>
                <Link href="/nepal" className="text-blue-600 hover:underline">Consultancy for Germany in Nepal</Link>
                <Link href="/nepal" className="text-blue-600 hover:underline">Best Consultancy Near Me</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}