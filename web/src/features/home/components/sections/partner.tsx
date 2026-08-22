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
import {
  ArrowRight,
  Handshake,
  Layers,
  ShieldCheck,
  Trophy,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { AnimateInView } from '@/components/animate-in-view'
import { Button } from '@/components/ui/button'

export function Partner() {
  const { t } = useTranslation()

  const perks = [
    {
      num: '01',
      icon: <ShieldCheck className='size-4' strokeWidth={1.5} />,
      title: t('First-hand account pool'),
      desc: t(
        'We operate the keys directly upstream — no middle layer skimming quota or rate-limiting your traffic.'
      ),
    },
    {
      num: '02',
      icon: <Layers className='size-4' strokeWidth={1.5} />,
      title: t('First-hand resources'),
      desc: t(
        'Bulk capacity, priority quotas and channel mirrors — wholesale pricing passed straight to you.'
      ),
    },
    {
      num: '03',
      icon: <Trophy className='size-4' strokeWidth={1.5} />,
      title: t('Win-win revenue share'),
      desc: t(
        'Transparent tiered rebates, billing exports, white-label flow — your customers, your brand, our backbone.'
      ),
    },
  ]

  return (
    <section className='border-border relative z-10 border-t px-6 py-24 md:py-32'>
      <div className='mx-auto max-w-6xl'>
        <AnimateInView className='mb-14 max-w-2xl'>
          <div className='text-muted-foreground mb-4 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase'>
            <Handshake className='size-3.5' />
            {t('Partner program')}
          </div>
          <h2 className='font-serif text-3xl leading-[1.1] font-medium tracking-tight md:text-5xl'>
            {t('Downstream resellers welcome')}
            <span className='text-muted-foreground'>
              {' '}
              — {t('let’s win together')}
            </span>
          </h2>
          <p className='text-muted-foreground mt-5 max-w-xl text-sm leading-7 md:text-base'>
            {t(
              'First-hand account pool, first-hand upstream resources — if you have downstream traffic, we have the wholesale rate card. Drop us a line, paperwork is light.'
            )}
          </p>
        </AnimateInView>

        <div className='grid gap-px border md:grid-cols-3'>
          {perks.map((p, i) => (
            <AnimateInView
              key={p.title}
              animation='scale-in'
              delay={i * 80}
              className='bg-background flex flex-col gap-4 p-8'
            >
              <div className='text-muted-foreground flex items-center justify-between'>
                <span className='font-mono text-[11px] tracking-[0.16em]'>
                  {p.num}
                </span>
                {p.icon}
              </div>
              <h3 className='text-base font-semibold tracking-tight'>
                {p.title}
              </h3>
              <p className='text-muted-foreground text-sm leading-6'>
                {p.desc}
              </p>
            </AnimateInView>
          ))}
        </div>

        <AnimateInView
          animation='fade-up'
          className='mt-10 flex flex-wrap items-center gap-3'
        >
          <Button className='group rounded-none' render={<Link to='/about' />}>
            {t('Talk to us about partnership')}
            <ArrowRight className='ml-1 size-3.5 transition-transform duration-200 group-hover:translate-x-0.5' />
          </Button>
          <Button
            variant='outline'
            className='rounded-none'
            render={<Link to='/pricing' />}
          >
            {t('Wholesale rate card')}
          </Button>
        </AnimateInView>
      </div>
    </section>
  )
}
