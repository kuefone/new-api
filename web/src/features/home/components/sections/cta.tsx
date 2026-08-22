/*
Copyright (C) 2023-2026 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/
import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { AnimateInView } from '@/components/animate-in-view'
import { Button } from '@/components/ui/button'

interface CTAProps {
  className?: string
  isAuthenticated?: boolean
}

export function CTA(props: CTAProps) {
  const { t } = useTranslation()

  if (props.isAuthenticated) {
    return null
  }

  return (
    <section className='border-border relative z-10 border-t px-6 py-24 md:py-32'>
      <AnimateInView className='mx-auto max-w-3xl' animation='scale-in'>
        <p className='text-muted-foreground mb-4 text-[11px] font-medium tracking-[0.18em] uppercase'>
          StreetStallAI
        </p>
        <h2 className='font-serif text-4xl leading-[1.05] font-medium tracking-tight md:text-6xl'>
          {t('The stall is open.')}
          <br />
          {t('Step right up.')}
        </h2>
        <p className='text-muted-foreground mt-6 max-w-xl text-sm leading-7 md:text-base'>
          {t(
            'No subscription, no minimum spend. Top up what you need, route everything through one endpoint, and only pay for what your agents actually use.'
          )}
        </p>
        <div className='mt-10 flex flex-wrap items-center gap-3'>
          <Button
            className='group rounded-none'
            render={<Link to='/sign-up' />}
          >
            {t('Grab a stall key')}
            <ArrowRight className='ml-1 size-3.5 transition-transform duration-200 group-hover:translate-x-0.5' />
          </Button>
          <Button
            variant='outline'
            className='rounded-none'
            render={<Link to='/pricing' />}
          >
            {t('Check the menu')}
          </Button>
        </div>
      </AnimateInView>
    </section>
  )
}
