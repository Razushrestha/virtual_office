import React from 'react'
import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  url?: string
  image?: string
  type?: string
  schema?: Record<string, any>
}

export const SEO: React.FC<SEOProps> = ({
  title = 'AI University Finder',
  description = 'Find the right university instantly using AI + verified counsellors.',
  url = 'https://example.com',
  image = '/og-default.png',
  type = 'website',
  schema
}) => {
  const jsonLd = schema ? JSON.stringify(schema) : undefined
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />}
    </Head>
  )
}