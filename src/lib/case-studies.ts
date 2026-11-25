import fs from 'fs' // Comment this line if using remote fetching
import path from 'path' // Comment this line if using remote fetching

import matter from 'gray-matter'

import { DEFAULT_LOCALE, isLocale } from '@/i18n/locales'
import type { Locale } from '@/i18n/locales'

export type CaseStudy = {
  metadata: CaseStudyMetadata
  content: string
}

export type CaseStudyMetadata = {
  slug: string
  title?: string
  description?: string
  organisation?: string
  role?: string
  duration?: string
  tools?: string[]
  publishedAt?: string
  image?: string
  heroImage?: string
  logo?: string
}

// local content directory (comment below line if using remote fetching)
const rootDirectory = path.join(process.cwd(), 'src', 'content', 'case-studies')

// Resolve o diretório do idioma, com fallback para en-US e depois para a raiz
const resolveDirectory = (locale?: Locale): string => {
  if (locale) {
    const localized = path.join(rootDirectory, locale)

    if (fs.existsSync(localized)) return localized
  }

  const fallback = path.join(rootDirectory, DEFAULT_LOCALE)

  if (fs.existsSync(fallback)) return fallback

  return rootDirectory
}

export async function getCaseStudyBySlug(slug: string, locale?: Locale): Promise<CaseStudy | null> {
  try {
    const directory = resolveDirectory(locale)
    const filePath = path.join(directory, `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

    const { data, content } = matter(fileContent)

    return { metadata: { ...data, slug }, content }
  } catch {
    return null
  }
}

export async function getCaseStudies(limit?: number, locale?: Locale): Promise<CaseStudyMetadata[]> {
  try {
    const directory = resolveDirectory(locale)
    const files = fs.readdirSync(directory).filter(file => file.endsWith('.mdx'))
    const caseStudies = await Promise.all(files.map(async (file: any) => await getCaseStudyMetadata(file, locale)))

    // Sort case studies by published date
    const sortedCaseStudies = caseStudies.sort((a, b) => {
      if (new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '')) {
        return 1
      } else {
        return -1
      }
    })

    if (limit) {
      return sortedCaseStudies.slice(0, limit)
    }

    return sortedCaseStudies
  } catch (error) {
    console.error('Error fetching case studies:', error)

    return []
  }
}

export async function getCaseStudyMetadata(
  filepath: string,
  locale?: Locale
): Promise<CaseStudyMetadata> {
  try {
    const slug = filepath.replace(/\.mdx$/, '')

    const filePath = path.join(resolveDirectory(locale), filepath)
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

    const { data } = matter(fileContent)

    return { ...data, slug }
  } catch (error) {
    console.error(`Error fetching metadata for ${filepath}:`, error)

    return { slug: filepath.replace(/\.mdx$/, '') }
  }
}

export { isLocale }
