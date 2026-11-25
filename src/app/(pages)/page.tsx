// Component Imports
import Hero from '@/components/home/hero/hero'
import About from '@/components/home/about/about'
import FeaturedWorks from '@/components/shared/featured-works/featured-works'
import Experience from '@/components/home/experience/experience'
import Services from '@/components/shared/services/services'
import Testimonials from '@/components/shared/testimonials/testimonials'
import HireMe from '@/components/home/hire-me/hire-me'
import SelectService from '@/components/home/select-service/select-service'

// Data Imports
import { getCaseStudies } from '@/lib/case-studies'
import { getServerDictionary, getServerLocale } from '@/i18n/server'

const Home = async () => {
  const locale = await getServerLocale()
  const dictionary = await getServerDictionary()
  const caseStudies = await getCaseStudies(undefined, locale)

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
      }
    ]
  }

  return (
    <>
      <Hero />
      <About />
      <FeaturedWorks caseStudies={caseStudies} />
      <Experience />
      <Services />
      <Testimonials />
      <HireMe />
      <SelectService />

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

export default Home
