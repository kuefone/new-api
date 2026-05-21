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
import { Button } from '@/components/ui/button'
import { AnimateInView } from '@/components/animate-in-view'

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
    <section className='relative z-10 overflow-hidden px-6 py-24 md:py-32'>
      {/* Gradient mesh background — neon stall lights */}
      <div
        aria-hidden
        className='absolute inset-0 -z-10 opacity-25 dark:opacity-[0.12]'
        style={{
          background: [
            'radial-gradient(ellipse 50% 50% at 30% 50%, oklch(0.78 0.18 60 / 70%) 0%, transparent 70%)',
            'radial-gradient(ellipse 40% 40% at 70% 40%, oklch(0.70 0.20 320 / 60%) 0%, transparent 70%)',
            'radial-gradient(ellipse 35% 35% at 50% 90%, oklch(0.70 0.16 250 / 50%) 0%, transparent 70%)',
          ].join(', '),
        }}
      />
      {/* Animated sweep */}
      <div
        aria-hidden
        className='ssa-cta-sweep pointer-events-none absolute inset-0 -z-10 opacity-50 dark:opacity-30'
      />

      <AnimateInView
        className='mx-auto max-w-2xl text-center'
        animation='scale-in'
      >
        <h2 className='text-2xl leading-tight font-bold tracking-tight md:text-4xl'>
          {t('The stall is open.')}
          <br />
          <span className='bg-gradient-to-r from-amber-400 via-rose-400 to-fuchsia-500 bg-clip-text text-transparent'>
            {t('Step right up.')}
          </span>
        </h2>
        <p className='text-muted-foreground/85 mx-auto mt-5 max-w-md text-sm leading-relaxed md:text-base'>
          {t(
            'No subscription, no minimum spend. Top up what you need, route everything through one endpoint, and only pay for what your agents actually use.'
          )}
        </p>
        <div className='mt-8 flex items-center justify-center gap-3'>
          <Button
            className='ssa-cta-shine group relative overflow-hidden rounded-lg'
            render={<Link to='/sign-up' />}
          >
            <span className='relative z-10 inline-flex items-center'>
              {t('Grab a stall key')}
              <ArrowRight className='ml-1 size-3.5 transition-transform duration-200 group-hover:translate-x-0.5' />
            </span>
          </Button>
          <Button
            variant='outline'
            className='border-border/50 hover:border-border hover:bg-muted/50 rounded-lg'
            render={<Link to='/pricing' />}
          >
            {t('Check the menu')}
          </Button>
        </div>
      </AnimateInView>
    </section>
  )
}
