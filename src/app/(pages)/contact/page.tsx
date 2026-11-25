import type { Metadata } from 'next'

// Component Imports
import ContactHero from '@/components/contact/contact-hero/contact-hero'
import FeaturedWorks from '@/components/shared/featured-works/featured-works'
import Services from '@/components/shared/services/services'
import Testimonials from '@/components/shared/testimonials/testimonials'

// Data Imports
import { getCaseStudies } from '@/lib/case-studies'
import { getServerDictionary, getServerLocale } from '@/i18n/server'

export const generateMetadata = async (): Promise<Metadata> => {
  const dictionary = await getServerDictionary()

  return {
    title: dictionary.contactMeta.title,
    description: dictionary.contactMeta.description,
    keywords: ['keyword1', 'keyword2', 'keyword3'],
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_APP_URL}/contact`
    }
  }
}

const ContactUsPage = async () => {
  const locale = await getServerLocale()
  const dictionary = await getServerDictionary()
  const caseStudies = await getCaseStudies(2, locale)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${process.env.NEXT_PUBLIC_APP_URL}#website`,
        name: dictionary.siteMeta.siteName,
        description: dictionary.siteMeta.jsonLdDescription,
        url: `${process.env.NEXT_PUBLIC_APP_URL}`,
        inLanguage: locale
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${process.env.NEXT_PUBLIC_APP_URL}#webpage`,
        name: dictionary.contactMeta.title,
        description: dictionary.contactMeta.description,
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

  return (
    <>
      <ContactHero />
      <FeaturedWorks
        caseStudies={caseStudies}
        layout='vertical'
        title={dictionary.featuredWorks.contactTitle}
      />
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
