'use client'

// React Imports
import { useEffect, useState } from 'react'

// Third-party Imports
import { AnimatePresence, motion } from 'motion/react'

// Component Imports
import { useLocale } from '@/components/locale-provider'

const GREETINGS: Record<string, string[]> = {
  'pt-BR': ['Olá', 'Oi', 'E aí', 'Bom dia'],
  'en-US': ['Hello', 'Hi', 'Hey there', 'Good day'],
  'es-ES': ['Hola', 'Hey', 'Buenos días', 'Buenas tardes']
}

const INTERVAL_MS = 2200

const GreetingWord = () => {
  const { locale } = useLocale()
  const [index, setIndex] = useState(0)

  const greetings = GREETINGS[locale] ?? GREETINGS['pt-BR']

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % greetings.length)
    }, INTERVAL_MS)

    return () => clearInterval(timer)
  }, [greetings.length])

  return (
    <span className='mr-2 inline-grid overflow-hidden align-bottom'>
      {/* Invisible sizers reserve space for the widest greeting so surrounding text doesn't shift */}
      {greetings.map(word => (
        <span key={word} className='invisible col-start-1 row-start-1 whitespace-nowrap' aria-hidden='true'>
          {word}
        </span>
      ))}

      <AnimatePresence mode='popLayout' initial={false}>
        <motion.span
          key={greetings[index]}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className='col-start-1 row-start-1 inline-block whitespace-nowrap'
        >
          {greetings[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default GreetingWord
