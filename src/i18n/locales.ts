export const LOCALES = ['pt-BR', 'en-US', 'es-ES'] as const

export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'pt-BR'

export const LOCALE_COOKIE = 'portfolio-locale'

export const LOCALE_META: Record<
  Locale,
  { label: string; shortLabel: string; htmlLang: string; flag: string }
> = {
  'pt-BR': { label: 'Português (Brasil)', shortLabel: 'PT', htmlLang: 'pt-BR', flag: '🇧🇷' },
  'en-US': { label: 'English (US)', shortLabel: 'EN', htmlLang: 'en-US', flag: '🇺🇸' },
  'es-ES': { label: 'Español (España)', shortLabel: 'ES', htmlLang: 'es-ES', flag: '🇪🇸' }
}

export const isLocale = (value: unknown): value is Locale =>
  typeof value === 'string' && (LOCALES as readonly string[]).includes(value)
