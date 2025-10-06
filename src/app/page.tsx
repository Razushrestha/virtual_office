import React from 'react'
import { SEO } from '../components/seo/SEO'
import { SEOKeywords } from '../components/seo/SEOKeywords'
import { Hero } from '@components/home/Hero'
import { Steps } from '@components/home/Steps'
import { SuccessWall } from '@components/home/SuccessWall'
import { CountryPreview } from '@components/discover/CountryCards'
import { ServicesSnapshot } from '@components/services/ServicesGrid'
import { CounsellorPreview } from '@components/counsellors/CounsellorList'
import { BlogHighlight } from '@components/blog/FeaturedArticles'
import { OnView } from '@components/ui/OnView'

export default function HomePage() {
  return (
    <>
      <SEO 
        title="Best Education Consultancy in Nepal | Study Abroad Consultancy Kathmandu" 
        description="Leading education consultancy in Nepal. Expert study abroad guidance for Australia, Germany, USA, UK, Canada. Located in Kathmandu, Pokhara, Chitwan with free consultation." 
        schema={{
          '@context': 'https://schema.org',
          '@type': 'EducationalConsultancy',
          name: 'Virtual Office Education Consultancy Nepal',
          url: 'https://virtualoffice.com',
          description: 'Premier education consultancy in Nepal providing study abroad services',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Kathmandu',
            addressCountry: 'Nepal'
          },
          serviceArea: ['Kathmandu', 'Pokhara', 'Chitwan', 'Itahari', 'Biratnagar', 'Butwal'],
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://virtualoffice.com/ai-finder?query={search_term}',
            'query-input': 'required name=search_term'
          }
        }} 
      />
      <SEOKeywords page="home" location="kathmandu" />
      <Hero />
      <OnView y={40}><Steps /></OnView>
      <OnView y={40} delay={0.05}><SuccessWall /></OnView>
      <OnView y={40} delay={0.1}><CountryPreview /></OnView>
      <OnView y={40} delay={0.15}><ServicesSnapshot /></OnView>
      <OnView y={40} delay={0.2}><CounsellorPreview /></OnView>
      <OnView y={40} delay={0.25}><BlogHighlight /></OnView>
    </>
  )
}
