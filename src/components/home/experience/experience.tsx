'use client'

// Component Imports
import Eyebrow from '@/components/shared/eyebrow/eyebrow'
import { useLocale } from '@/components/locale-provider'
import Timeline from '@/components/ui/timeline'
import ActivityCard from './activity-card'
import ExperienceTimelineItem from './experience-timeline-item'


const Experience = () => {
  const { dictionary } = useLocale()

  const experiences = dictionary.experience.timeline.map((item, index) => ({
    ...item,
    index: String(index + 1).padStart(2, '0'),
    logo: `/images/features/logo-${String(index + 1).padStart(2, '0')}.webp`
  }))

  return (
    <section id='experience' className='min-w-0 border-b py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-16 lg:px-10.5'>
        <div className='space-y-2'>
          <Eyebrow>{dictionary.experience.eyebrow}</Eyebrow>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
            {dictionary.experience.title}
          </h2>
        </div>

        <ActivityCard />

        <Timeline
          data={experiences.map(({ index, ...experience }) => ({
            index,
            content: <ExperienceTimelineItem {...experience} />
          }))}
        />
      </div>
    </section>
  )
}

export default Experience
