'use client'

// React Imports
import { useState } from 'react'

// Third-party Imports
import { format } from 'date-fns'
import { enUS, es, ptBR } from 'date-fns/locale'
import { toast } from 'sonner'

// Component Imports
import { Input } from '@/components/ui/input'
import { useLocale } from '@/components/locale-provider'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

type DetailsStepProps = {
  service: { title: string; price: string; duration: string } | undefined
  date: Date | undefined
  time: string | null
  onSuccess: (name: string) => void
}

const DetailsStep = ({ service, date, time, onSuccess }: DetailsStepProps) => {
  const { dictionary, locale } = useLocale()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [notes, setNotes] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log({ name, email, notes })
    toast.success(dictionary.selectService.details.success)
    onSuccess(name)
    setName('')
    setEmail('')
    setNotes('')
  }

  const dateLocale = locale === 'en-US' ? enUS : locale === 'es-ES' ? es : ptBR
  const datePattern = locale === 'en-US' ? 'EEE, MMM d' : 'EEEE, d MMM'

  const serviceValue = service ? `${service.title} · ${service.duration}` : '—'
  const dateTimeValue = date && time ? `${format(date, datePattern, { locale: dateLocale })} · ${time}` : '—'
  const priceValue = service?.price ?? '—'

  return (
    <div className='space-y-4'>
      <div className='space-y-3 rounded-xl bg-(--background-darker) p-4'>
        <div className='flex items-start gap-2'>
          <span className='bg-accent mt-1.5 size-2.5 shrink-0 rounded-full' />
          <div>
            <p className='text-muted-foreground text-[10px] tracking-wide uppercase'>{dictionary.selectService.details.service}</p>
            <p className='text-sm font-semibold'>{serviceValue}</p>
          </div>
        </div>

        <div className='flex items-start gap-2'>
          <span className='mt-1.5 size-2.5 shrink-0 rounded-full bg-sky-600' />
          <div>
            <p className='text-muted-foreground text-[10px] tracking-wide uppercase'>{dictionary.selectService.details.dateTime}</p>
            <p className='text-sm'>{dateTimeValue}</p>
          </div>
        </div>

        <div className='flex items-start gap-2'>
          <span className='bg-accent mt-1.5 size-2.5 shrink-0 rounded-full' />
          <div>
            <p className='text-muted-foreground text-[10px] tracking-wide uppercase'>{dictionary.selectService.details.price}</p>
            <p className='text-accent text-sm font-bold'>{priceValue}</p>
          </div>
        </div>
      </div>

      <form id='details-form' onSubmit={handleSubmit} className='space-y-4'>
        <div className='space-y-2'>
          <Label htmlFor='details-name'>{dictionary.selectService.details.fullName}</Label>
          <Input
            id='details-name'
            placeholder={dictionary.selectService.details.namePlaceholder}
            className='h-14.5 rounded-[16px] px-4.5 focus-visible:ring-0'
            required
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='details-email'>{dictionary.selectService.details.email}</Label>
          <Input
            id='details-email'
            type='email'
            placeholder={dictionary.selectService.details.emailPlaceholder}
            className='h-14.5 rounded-[16px] px-4.5 focus-visible:ring-0'
            required
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='details-notes'>{dictionary.selectService.details.notes}</Label>
          <Textarea
            id='details-notes'
            placeholder={dictionary.selectService.details.notesPlaceholder}
            className='min-h-20 resize-none rounded-[16px] px-4.5 focus-visible:ring-0'
            value={notes}
            onChange={event => setNotes(event.target.value)}
          />
        </div>
      </form>
    </div>
  )
}

export default DetailsStep
