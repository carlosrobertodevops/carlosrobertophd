'use client'

// React Imports
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

// Lib Imports
import { DEFAULT_LOCALE, LOCALE_COOKIE, isLocale } from '@/i18n/locales'
import type { Locale } from '@/i18n/locales'
import { getDictionary } from '@/i18n/dictionary'
import type { Dictionary } from '@/i18n/dictionary'

type LocaleContextValue = {
  locale: Locale
  dictionary: Dictionary
  setLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

const readCookie = (): Locale => {
  if (typeof document === 'undefined') return DEFAULT_LOCALE

  const match = document.cookie.match(new RegExp(`(?:^|; )${LOCALE_COOKIE}=([^;]*)`))
  const value = match?.[1]

  return isLocale(value) ? value : DEFAULT_LOCALE
}

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE)

  // Sincroniza com o cookie após a hidratação para evitar divergência de servidor
  useEffect(() => {
    const stored = readCookie()

    if (stored !== DEFAULT_LOCALE) {
      setLocaleState(stored)
    }
  }, [])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`
    document.documentElement.lang = next
  }, [])

  const value = useMemo(
    () => ({ locale, dictionary: getDictionary(locale), setLocale }),
    [locale, setLocale]
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export const useLocale = () => {
  const context = useContext(LocaleContext)

  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider')
  }

  return context
}
