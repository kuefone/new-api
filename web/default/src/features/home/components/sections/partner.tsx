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
import { ArrowRight, Handshake, Layers, ShieldCheck, Trophy } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { AnimateInView } from '@/components/animate-in-view'

export function Partner() {
  const { t } = useTranslation()

  const perks = [
    {
      icon: <ShieldCheck className='size-5' strokeWidth={1.5} />,
      title: t('First-hand account pool'),
      desc: t(
        'We operate the keys directly upstream — no middle layer skimming quota or rate-limiting your traffic.'
      ),
    },
    {
      icon: <Layers className='size-5' strokeWidth={1.5} />,
      title: t('First-hand resources'),
      desc: t(
        'Bulk capacity, priority quotas and channel mirrors — wholesale pricing passed straight to you.'
      ),
    },
    {
      icon: <Trophy className='size-5' strokeWidth={1.5} />,
      title: t('Win-win revenue share'),
      desc: t(
        'Transparent tiered rebates, billing exports, white-label flow — your customers, your brand, our backbone.'
      ),
    },
  ]

  return (
    <section className='border-border/40 relative z-10 overflow-hidden border-t px-6 py-24 md:py-32'>
      {/* Background glow */}
      <div
        aria-hidden
        className='ssa-partner-glow pointer-events-none absolute inset-0 -z-10 opacity-30 dark:opacity-[0.15]'
      />

      <div className='mx-auto max-w-6xl'>
        <AnimateInView className='mx-auto mb-14 max-w-2xl text-center'>
          <div className='inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/[0.06] px-3 py-1 text-[11px] font-medium tracking-wider text-amber-700 dark:border-amber-400/30 dark:text-amber-300'>
            <Handshake className='size-3' />
            {t('Partner program')}
          </div>
          <h2 className='mt-4 text-2xl leading-tight font-bold tracking-tight md:text-3xl'>
            {t('Downstream resellers welcome')}
            <br />
            <span className='bg-gradient-to-r from-amber-500 via-rose-500 to-fuchsia-500 bg-clip-text text-transparent'>
              {t('let’s win together')}
            </span>
          </h2>
          <p className='text-muted-foreground/85 mx-auto mt-4 max-w-xl text-sm leading-relaxed md:text-base'>
            {t(
              'First-hand account pool, first-hand upstream resources — if you have downstream traffic, we have the wholesale rate card. Drop us a line, paperwork is light.'
            )}
          </p>
        </AnimateInView>

        <div className='grid gap-px overflow-hidden rounded-xl border border-border/40 bg-border/40 md:grid-cols-3'>
          {perks.map((p, i) => (
            <AnimateInView
              key={p.title}
              animation='scale-in'
              delay={i * 120}
              className='bg-background group hover:bg-muted/20 flex flex-col gap-3 p-7 transition-colors duration-300 md:p-8'
            >
              <div className='text-muted-foreground border-border/50 bg-muted/30 group-hover:text-foreground flex size-11 items-center justify-center rounded-lg border transition-colors'>
                {p.icon}
              </div>
              <h3 className='text-sm font-semibold'>{p.title}</h3>
              <p className='text-muted-foreground text-sm leading-relaxed'>
                {p.desc}
              </p>
            </AnimateInView>
          ))}
        </div>

        <AnimateInView animation='fade-up' className='mt-10 flex items-center justify-center gap-3'>
          <Button
            className='ssa-cta-shine group relative overflow-hidden rounded-lg'
            render={<Link to='/about' />}
          >
            <span className='relative z-10 inline-flex items-center'>
              {t('Talk to us about partnership')}
              <ArrowRight className='ml-1 size-3.5 transition-transform duration-200 group-hover:translate-x-0.5' />
            </span>
          </Button>
          <Button
            variant='outline'
            className='border-border/50 hover:border-border hover:bg-muted/50 rounded-lg'
            render={<Link to='/pricing' />}
          >
            {t('Wholesale rate card')}
          </Button>
        </AnimateInView>
      </div>
    </section>
  )
}
