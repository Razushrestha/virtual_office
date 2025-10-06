"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'
import { motion } from 'framer-motion'
import Head from 'next/head'

interface BreadcrumbItem {
  label: string
  href: string
}

// Define custom labels for routes
const routeLabels: Record<string, string> = {
  '/': 'Home',
  '/discover': 'Discover Universities',
  '/services': 'Our Services',
  '/ai-finder': 'AI University Finder',
  '/success': 'Success Stories',
  '/blog': 'Blog & Resources',
  '/counsellors': 'Expert Counsellors',
  '/contact': 'Contact Us',
}

export const Breadcrumb: React.FC = () => {
  const pathname = usePathname()
  
  // Don't show breadcrumb on home page
  if (pathname === '/') {
    return null
  }

  const pathSegments = pathname.split('/').filter(Boolean)
  
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    ...pathSegments.map((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/')
      const label = routeLabels[href] || segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
      return { label, href }
    })
  ]

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://virtualoffice.com${item.href}`
    }))
  }

  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      
      <div className="bg-gray-50/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.nav
            className="flex items-center py-3 text-sm"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            aria-label="Breadcrumb"
          >
            <ol className="flex items-center space-x-2" itemScope itemType="https://schema.org/BreadcrumbList">
              {breadcrumbItems.map((item, index) => {
                const isLast = index === breadcrumbItems.length - 1
                
                return (
                  <motion.li 
                    key={item.href} 
                    className="flex items-center"
                    variants={itemVariants}
                    itemProp="itemListElement"
                    itemScope
                    itemType="https://schema.org/ListItem"
                  >
                    <meta itemProp="position" content={String(index + 1)} />
                    
                    {index === 0 ? (
                      <Link
                        href={item.href}
                        className="group flex items-center text-gray-500 hover:text-gray-700 transition-colors duration-200"
                        itemProp="item"
                      >
                        <span itemProp="name" className="sr-only">{item.label}</span>
                        <Home 
                          className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform duration-200" 
                          aria-label={item.label}
                        />
                      </Link>
                    ) : (
                      <>
                        <ChevronRight className="w-4 h-4 text-gray-400 mx-2" aria-hidden="true" />
                        {isLast ? (
                          <span 
                            className="font-medium text-gray-900 truncate max-w-xs"
                            itemProp="name"
                            aria-current="page"
                          >
                            {item.label}
                          </span>
                        ) : (
                          <Link
                            href={item.href}
                            className="text-gray-500 hover:text-gray-700 transition-colors duration-200 truncate max-w-xs hover:underline"
                            itemProp="item"
                          >
                            <span itemProp="name">{item.label}</span>
                          </Link>
                        )}
                      </>
                    )}
                  </motion.li>
                )
              })}
            </ol>
          </motion.nav>
        </div>
      </div>
    </>
  )
}