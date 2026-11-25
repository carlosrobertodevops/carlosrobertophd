import { cookies } from 'next/headers'

import { DEFAULT_LOCALE, LOCALE_COOKIE, isLocale } from './locales'
import type { Locale } from './locales'
import { getDictionary } from './dictionary'
import type { Dictionary } from './dictionary'

// Le o locale do cookie no servidor (usado por server components e metadata)
export const getServerLocale = async (): Promise<Locale> => {
  const cookieStore = await cookies()
  const value = cookieStore.get(LOCALE_COOKIE)?.value

  return isLocale(value) ? value : DEFAULT_LOCALE
}

export const getServerDictionary = async (): Promise<Dictionary> => getDictionary(await getServerLocale())
