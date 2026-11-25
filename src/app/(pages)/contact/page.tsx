import type { Metadata } from 'next'

// Component Imports
import ContactHero from '@/components/contact/contact-hero/contact-hero'
import FeaturedWorks from '@/components/shared/featured-works/featured-works'
import Services from '@/components/shared/services/services'
import Testimonials from '@/components/shared/testimonials/testimonials'

// Data Imports
import { getCaseStudies } from '@/lib/case-studies'

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato conosco. Estamos aqui para ajudar e responder suas perguntas.',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/contact`
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${process.env.NEXT_PUBLIC_APP_URL}#website`,
      name: 'Carlos Roberto',
      description: 'Engenheiro de Design baseado em Austin.',
      url: `${process.env.NEXT_PUBLIC_APP_URL}`,
      inLanguage: 'pt-BR'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${process.env.NEXT_PUBLIC_APP_URL}#webpage`,
      name: 'Contato',
      description: 'Entre em contato conosco. Estamos aqui para ajudar e responder suas perguntas.',
      url: `${process.env.NEXT_PUBLIC_APP_URL}/contact`,
      isPartOf: {
        '@id': `${process.env.NEXT_PUBLIC_APP_URL}#website`
      },
      potentialAction: {
        '@type': 'ReadAction',
        target: [`${process.env.NEXT_PUBLIC_APP_URL}/contact`]
      }
    }
  ]
}

const ContactUsPage = async () => {
  const caseStudies = await getCaseStudies(2)

  return (
    <>
      <ContactHero />
      <FeaturedWorks caseStudies={caseStudies} layout='vertical' title='Dê uma olhada em alguns dos meus trabalhos' />
      <Services />
      <Testimonials showBorder={false} />

      {/* Add JSON-LD to your page */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c')
        }}
      />
    </>
  )
}

export default ContactUsPage
