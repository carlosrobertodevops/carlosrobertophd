'use client'

// React Imports
import { useEffect, useRef, useState } from 'react'

// Third-party Imports
import { CheckIcon, ChevronDownIcon } from 'lucide-react'

// Component Imports
import { useLocale } from '@/components/locale-provider'

// Lib Imports
import { LOCALES, LOCALE_META } from '@/i18n/locales'
import type { Locale } from '@/i18n/locales'

// Util Imports
import { cn } from '@/lib/utils'

const LocaleSwitcher = ({ className }: { className?: string }) => {
  const { locale, setLocale } = useLocale()
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const handleSelect = (next: Locale) => {
    setLocale(next)
    setIsOpen(false)
  }

  const current = LOCALE_META[locale]

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      <button
        type='button'
        onClick={() => setIsOpen(open => !open)}
        aria-label='Language'
        aria-expanded={isOpen}
        aria-haspopup='listbox'
        className='text-muted-foreground hover:text-accent hover:bg-accent/10 flex h-8 w-full items-center justify-center gap-1.5 overflow-hidden rounded-md px-2 transition-colors max-lg:h-7'
      >
        <span className='text-sm leading-none' aria-hidden='true'>
          {current.flag}
        </span>
        <span className='hidden overflow-hidden text-sm whitespace-nowrap transition-all duration-300 ease-out lg:inline-block lg:max-w-0 lg:opacity-0 lg:group-hover:ml-2 lg:group-hover:max-w-24 lg:group-hover:opacity-100'>
          {current.shortLabel}
        </span>
        <ChevronDownIcon className='size-3.5 shrink-0 lg:hidden' />
      </button>

      {isOpen && (
        <div
          role='listbox'
          className='bg-card absolute bottom-full left-0 z-80 mb-1 w-44 overflow-hidden rounded-lg border p-1 shadow-lg'
        >
          {LOCALES.map(item => {
            const meta = LOCALE_META[item]

            return (
              <button
                key={item}
                type='button'
                role='option'
                aria-selected={item === locale}
                onClick={() => handleSelect(item)}
                className={cn(
                  'hover:bg-accent/10 hover:text-accent flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm transition-colors',
                  item === locale && 'text-accent bg-accent/10'
                )}
              >
                <span aria-hidden='true'>{meta.flag}</span>
                <span className='grow'>{meta.label}</span>
                {item === locale && <CheckIcon className='size-3.5 shrink-0' />}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default LocaleSwitcher
