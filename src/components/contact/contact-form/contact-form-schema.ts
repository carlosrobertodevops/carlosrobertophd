import { z } from 'zod'

import { getDictionary } from '@/i18n/dictionary'
import type { Locale } from '@/i18n/locales'

export const SERVICE_OPTIONS = [
  'UI &amp; Design de Produto',
  'Engenharia de Design',
  'Desenvolvimento Framer',
  'Sistemas de Design',
  'Interação &amp; Motion Design'
] as const

export const getContactFormSchema = (locale: Locale) => {
  const { contact } = getDictionary(locale)

  return z.object({
    name: z.string().min(2, contact.nameError),
    email: z.string().email(contact.emailError),
    service: z.string().min(1, contact.serviceError),
    message: z.string().min(10, contact.messageError)
  })
}

export type ContactFormValues = z.infer<ReturnType<typeof getContactFormSchema>>
