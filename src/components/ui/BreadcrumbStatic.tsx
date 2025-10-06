import { ChevronRight, Home, MoreHorizontal } from 'lucide-react'
import Link from 'next/link'

interface BreadcrumbProps {
  items: Array<{
    label: string
    href: string
    isCurrentPage?: boolean
  }>
  maxItems?: number
  separator?: React.ReactNode
  className?: string
}

export const BreadcrumbStatic: React.FC<BreadcrumbProps> = ({
  items,
  maxItems = 3,
  separator = <ChevronRight className="w-4 h-4 text-gray-400" />,
  className = ''
}) => {
  // Collapse breadcrumb items if too many
  const displayItems = items.length > maxItems ? [
    items[0], // Always show home
    { label: '...', href: '', isEllipsis: true },
    ...items.slice(-2) // Show last 2 items
  ] : items

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://virtualoffice.com${item.href}`
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <nav aria-label="Breadcrumb" className={`flex ${className}`}>
        <ol className="flex items-center space-x-1 md:space-x-2 text-sm">
          {displayItems.map((item, index) => {
            const isLast = index === displayItems.length - 1
            const isEllipsis = 'isEllipsis' in item
            
            return (
              <li key={`${item.href}-${index}`} className="flex items-center">
                {index > 0 && (
                  <span className="mx-1 md:mx-2" aria-hidden="true">
                    {separator}
                  </span>
                )}
                
                {isEllipsis ? (
                  <button
                    className="flex items-center justify-center w-6 h-6 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Show more breadcrumb items"
                  >
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                ) : index === 0 ? (
                  <Link
                    href={item.href}
                    className="flex items-center text-gray-500 hover:text-gray-700 transition-colors p-1 rounded hover:bg-gray-100"
                    aria-label="Home"
                  >
                    <Home className="w-4 h-4" />
                    <span className="sr-only">{item.label}</span>
                  </Link>
                ) : isLast ? (
                  <span 
                    className="font-medium text-gray-900 truncate max-w-[150px] md:max-w-xs"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-500 hover:text-gray-700 hover:underline transition-colors truncate max-w-[100px] md:max-w-xs"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}