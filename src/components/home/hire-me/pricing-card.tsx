// Next Imports
import Link from 'next/link'

import { ArrowRightIcon } from 'lucide-react'

// Component Imports
import { Badge } from '@/components/ui/badge'
import { useLocale } from '@/components/locale-provider'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'


const PricingCard = ({ className }: { className?: string }) => {
  const { dictionary } = useLocale()

  return (
    <Card className={cn('bg-background rounded-2xl border py-6', className)}>
      <CardContent className='space-y-6 px-6'>
        <div className='space-y-2.5'>
          <p className='text-foreground text-2xl font-medium lg:text-[30px]'>{dictionary.hireMe.pricingTitle}</p>
          <p className='text-muted-foreground mb-0 text-base'>{dictionary.hireMe.pricingSubtitle}</p>
          <p className='text-muted-foreground text-base'>{dictionary.hireMe.pricingDescription}</p>
        </div>

        <Separator />

        <Badge variant='secondary' className='text-foreground h-6.5 rounded-full bg-(--background-darker) font-normal'>
          {dictionary.hireMe.pricingBadge}
        </Badge>

        <p className='text-foreground mb-5.5 text-4xl font-semibold sm:text-5xl'>
          $1,900 <span className='text-muted-foreground -ml-3 text-xl font-medium lg:text-[30px]'>{dictionary.hireMe.pricingPeriod}</span>
        </p>

        <ul className='mb-5.5 grid grid-cols-2 gap-x-4 gap-y-2'>
          {dictionary.hireMe.features.map(feature => (
            <li key={feature} className='text-foreground flex items-center gap-2 text-base font-medium'>
              <span className='bg-foreground size-1.5 shrink-0 rounded-full' />
              {feature}
            </li>
          ))}
        </ul>

        <Button
          variant='outline'
          className='hover:bg-card bg-card dark:bg-card hover:text-accent h-11 gap-2.5 rounded-full pr-4 pl-4 text-base shadow-sm transition-[padding] duration-300 hover:pl-2'
          render={
            <Link href='/#select-service'>
              <span className='bg-accent relative flex size-2.5 items-center justify-center overflow-hidden rounded-full transition-all duration-300 group-hover/button:size-6.5'>
                <ArrowRightIcon className='text-accent-foreground absolute size-4.5 -translate-x-3 opacity-0 transition-all duration-300 group-hover/button:translate-x-0 group-hover/button:opacity-100' />
              </span>
              {dictionary.hireMe.cta}
            </Link>
          }
          nativeButton={false}
        />
      </CardContent>
    </Card>
  )
}

export default PricingCard
