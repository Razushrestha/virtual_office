"use client"
import Head from 'next/head'

interface SEOKeywordsProps {
  page?: 'home' | 'services' | 'locations' | 'blog' | 'contact' | 'ai-finder' | 'discover' | 'counsellors' | 'success' | 'cities' | 'nepali' | 'nepal'
  location?: string
  service?: string
}

export const SEOKeywords: React.FC<SEOKeywordsProps> = ({ 
  page = 'home', 
  location = 'kathmandu',
  service = 'education consultancy'
}) => {
  
  // Location-specific keywords for Nepal
  const locationKeywords = {
    kathmandu: [
      'consultancy kathmandu', 'education consultancy kathmandu', 'study abroad kathmandu',
      'consultancy chabahil', 'consultancy baneshwor', 'consultancy putalisadak', 
      'consultancy new baneshwor', 'consultancy bagbazar kathmandu', 'consultancy kumaripati'
    ],
    pokhara: [
      'consultancy pokhara', 'education consultancy pokhara', 'study abroad pokhara'
    ],
    chitwan: [
      'consultancy chitwan', 'education consultancy chitwan'
    ],
    itahari: [
      'consultancy itahari', 'education consultancy itahari'
    ],
    biratnagar: [
      'consultancy biratnagar', 'education consultancy biratnagar'
    ],
    butwal: [
      'consultancy butwal', 'education consultancy butwal'
    ]
  }

  // Country-specific consultancy keywords
  const countryKeywords = [
    'consultancy for australia in nepal', 'consultancy for germany in nepal',
    'consultancy for usa in nepal', 'consultancy for uk in nepal',
    'consultancy for canada in nepal', 'consultancy for italy in nepal',
    'consultancy for japan in nepal', 'consultancy for luxembourg in nepal',
    'consultancy for austria in nepal', 'consultancy for switzerland in nepal',
    'consultancy for malta in nepal', 'consultancy for korea in nepal'
  ]

  // Service-related keywords
  const serviceKeywords = [
    'consultancy services', 'education consultancy', 'study abroad consultancy',
    'university admission consultancy', 'visa consultancy', 'student counseling',
    'abroad education guidance', 'consultancy near me', 'best consultancy',
    'consultancy contact number', 'consultancy appointment', 'free consultation'
  ]

  // Business and general keywords
  const businessKeywords = [
    'consultancy meaning in nepali', 'consultancy in nepali', 'consultancy meaning',
    'consultancy company', 'consultancy agency', 'consultancy services examples',
    'consultancy registration', 'consultancy license', 'consultancy agreement'
  ]

  // Competitive and ranking keywords
  const competitiveKeywords = [
    'no 1 consultancy in nepal', 'no 1 consultancy in world', 'no 1 consultancy in india',
    'no 1 consultancy company in india', 'no 1 job consultancy in india',
    'top 5 consulting firms in the world', 'top 100 consulting firms in the world',
    'top 1 consultancy in nepal', 'no 1 manpower in nepal', 'no 1 company in nepal',
    'no 1 job consultancy in bangalore', 'number one consulting firm in the world',
    'number 1 consultancy in nepal', 'india\'s no 1 seed fund consultancy company',
    'no 1 consultancy in hyderabad', 'tata consultancy services no 1 habibullah road',
    'one degree north consultancy reviews', 'top 20 consulting firms in world',
    'no 1 immigration consultants in india', 'top 100 consulting firms in india',
    'top 10 consultancy for abroad jobs', 'top consultancy for jobs',
    'top 3 consulting firms in the world', 'no 1 job consultancy in kerala',
    'top 10 consultancy in world', 'top 5 consultancy in delhi',
    'no 1 consultants ltd', 'most famous consulting firms', 'non it consultancy near me',
    'no consultancy meaning', 'pakistan no 1 consultancy',
    'global consultants j&k\'s no 1 placement consultancy',
    'global consultants j&k\'s no 1 placement consultancy reviews',
    'global consultants j&k\'s no 1 placement consultancy photos',
    'a one consultancy kathmandu', 'no 1 stock advisory company in india',
    'which is the best consulting firm in the world', 'no 1 consulting firm in the world',
    'top 15 consulting firms', 'world connect consultancy complaints',
    'no one consultancy', 'top 10 consultancy in nepal', 'top 5 consultancy in nepal',
    'top 10 education consultancy in nepal', 'top 10 japanese consultancy in nepal',
    'top 10 consultancy in nepal for canada', 'best consultancy in nepal for working visa',
    'best consultancy nepal'
  ]

  // Combine all keywords based on context
  const allKeywords = [
    ...locationKeywords[location as keyof typeof locationKeywords] || locationKeywords.kathmandu,
    ...countryKeywords,
    ...serviceKeywords,
    ...businessKeywords,
    ...competitiveKeywords
  ].join(', ')

  // Generate structured data for local business
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "EducationalConsultancy",
    "name": "Virtual Office Education Consultancy",
    "description": "Leading education consultancy in Nepal providing study abroad services",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Putalisadak",
      "addressLocality": "Kathmandu",
      "addressRegion": "Bagmati Province",
      "postalCode": "44600",
      "addressCountry": "NP"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "27.7172",
      "longitude": "85.3240"
    },
    "telephone": "+977-1-4123456",
    "url": "https://virtualoffice.com",
    "sameAs": [
      "https://facebook.com/virtualoffice",
      "https://instagram.com/virtualoffice"
    ],
    "serviceArea": [
      "Kathmandu", "Pokhara", "Chitwan", "Itahari", 
      "Biratnagar", "Butwal", "Birtamode"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Education Consultancy Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Study Abroad Consultancy",
            "description": "Expert guidance for international education"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "University Admission Assistance",
            "description": "Complete support for university applications"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Visa Consultation",
            "description": "Professional visa application support"
          }
        }
      ]
    }
  }

  return (
    <Head>
      <meta name="keywords" content={allKeywords} />
      <meta name="geo.region" content="NP-BAG" />
      <meta name="geo.placename" content="Kathmandu, Nepal" />
      <meta name="geo.position" content="27.7172;85.3240" />
      <meta name="ICBM" content="27.7172, 85.3240" />
      
      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
      
      {/* FAQ Schema for common consultancy questions */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Which is the best consultancy in Kathmandu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Virtual Office is among the leading education consultancies in Kathmandu, providing expert guidance for study abroad programs to Australia, Germany, USA, UK, and Canada."
                }
              },
              {
                "@type": "Question", 
                "name": "What does consultancy mean in Nepali?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Consultancy in Nepali means परामर्श सेवा (paramash sewa), which refers to professional advisory services for education, career, and other guidance."
                }
              },
              {
                "@type": "Question",
                "name": "Which consultancy is best for Australia in Nepal?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Virtual Office provides expert consultancy services for Australia study programs with experienced counselors and proven success rates."
                }
              }
            ]
          })
        }}
      />
    </Head>
  )
}