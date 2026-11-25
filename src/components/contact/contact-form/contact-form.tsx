'use client'

// Third-party Imports
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'

// Type Imports
import type { ContactFormValues } from './contact-form-schema'
import { getContactFormSchema, SERVICE_OPTIONS } from './contact-form-schema'

// Component Imports
import { Button } from '@/components/ui/button'
import { useLocale } from '@/components/locale-provider'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup } from '@/components/ui/select'

// Util Imports
import { cn } from '@/lib/utils'

type ContactFormProps = {
  className?: string
}

const ContactForm = ({ className }: ContactFormProps) => {
  const { dictionary, locale } = useLocale()

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(getContactFormSchema(locale)),
    defaultValues: {
      name: '',
      email: '',
      service: '',
      message: ''
    }
  })

  const onSubmit = (values: ContactFormValues) => {
    console.log(values)
    toast.success(dictionary.contact.success)
    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn('space-y-5', className)}>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem className='gap-1'>
              <FormLabel className='text-muted-foreground text-base'>{dictionary.contact.name}</FormLabel>
              <FormControl>
                <Input
                  placeholder={dictionary.contact.namePlaceholder}
                  className='border-border h-11 rounded-[12px] bg-(--background-darker)'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem className='gap-1'>
              <FormLabel className='text-muted-foreground text-base'>{dictionary.contact.email}</FormLabel>
              <FormControl>
                <Input
                  type='email'
                  placeholder={dictionary.contact.emailPlaceholder}
                  className='border-border h-11 rounded-[12px] bg-(--background-darker)'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='service'
          render={({ field }) => (
            <FormItem className='gap-1'>
              <FormLabel className='text-muted-foreground text-base'>{dictionary.contact.service}</FormLabel>
              <Select value={field.value || undefined} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className='border-border h-11! w-full rounded-[12px] bg-(--background-darker)'>
                    <SelectValue placeholder={dictionary.contact.selectService} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    {SERVICE_OPTIONS.map(service => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem className='gap-1'>
              <FormLabel className='text-muted-foreground text-base'>{dictionary.contact.message}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={dictionary.contact.messagePlaceholder}
                  className='border-border min-h-25 rounded-[12px] bg-(--background-darker)'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type='submit'
          variant='outline'
          className='hover:bg-card hover:text-accent rounded-[12px bg-card h-10 w-full'
        >
          {dictionary.contact.submit}
        </Button>
      </form>
    </Form>
  )
}

export default ContactForm
