'use client'

// React Imports
import { useState } from 'react'

// Component Imports
import { useLocale } from '@/components/locale-provider'

// Util Imports
import { cn } from '@/lib/utils'

const POSITIONS = [
  'top-[10%] left-[12%] rotate-[-8deg]',
  'top-[4%] left-[62%] rotate-[10deg]',
  'top-[3%] left-[3%] rotate-[-6deg]',
  'top-[54%] left-[68%] rotate-[12deg]',
  'top-[45%] left-[36%] rotate-[4deg]',
  '-top-[2%] -left-[3%] rotate-[-10deg]'
]

const SurpriseNote = () => {
  const { dictionary } = useLocale()
  const [step, setStep] = useState(0)
  const note = { text: dictionary.about.surpriseNotes[step], position: POSITIONS[step] }

  return (
    <div className='relative h-full'>
      {/* Decorative grab bar */}
      <div className='bg-background absolute top-8 right-[16%] left-[16%] h-2 rounded-full' />

      <div
        onMouseEnter={() => setStep(prev => (prev + 1) % POSITIONS.length)}
        className={cn('absolute z-20 w-32 cursor-pointer transition-all duration-500', note.position)}
      >
        <img src='/images/about-me/note.webp' alt='Note bg' className='w-full' />
        <p className='absolute inset-0 flex items-center justify-center px-4 text-center [font-family:var(--font-delicious-handrawn)] text-neutral-800'>
          {note.text}
        </p>
      </div>

      <p className='text-card-foreground absolute bottom-0 left-[10%] text-[26px] font-medium sm:text-nowrap md:left-1/2 md:-translate-x-1/2'>
        {dictionary.about.surprise}
      </p>
    </div>
  )
}

export default SurpriseNote
