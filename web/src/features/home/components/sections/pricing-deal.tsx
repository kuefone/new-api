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
import { ArrowRight, CalendarSync, Coins, Layers3 } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { AnimateInView } from '@/components/animate-in-view'
import { Button } from '@/components/ui/button'

interface PricingDealProps {
  isAuthenticated?: boolean
}

export function PricingDeal(props: PricingDealProps) {
  const { t } = useTranslation()

  const highlights = [
    {
      num: '01',
      icon: <Coins className='size-4' strokeWidth={1.5} />,
      title: t('Top up ¥1, spend like $1'),
      desc: t(
        'Step one is already a discount: every yuan you recharge spends as one dollar at the official rate.'
      ),
    },
    {
      num: '02',
      icon: <CalendarSync className='size-4' strokeWidth={1.5} />,
      title: t('Daily official-price sync'),
      desc: t(
        'Upstream price changes are auto-imported every day — you always pay against the current official meter, no stale tables.'
      ),
    },
    {
      num: '03',
      icon: <Layers3 className='size-4' strokeWidth={1.5} />,
      title: t('Group multiplier on top'),
      desc: t(
        'Add a per-model-group multiplier and the discount stacks again — most users land around a few mao per official US dollar of Claude Opus.'
      ),
    },
  ]

  return (
    <section className='border-border relative z-10 border-t px-6 py-24 md:py-32'>
      <div className='mx-auto max-w-6xl'>
        <AnimateInView className='mb-14 max-w-2xl'>
          <p className='text-muted-foreground mb-3 text-[11px] font-medium tracking-[0.18em] uppercase'>
            {t('The deal')}
          </p>
          <h2 className='font-serif text-3xl leading-[1.1] font-medium tracking-tight md:text-5xl'>
            {t('A discount before you even start spending')}
          </h2>
          <p className='text-muted-foreground mt-5 max-w-xl text-sm leading-7 md:text-base'>
            {t(
              'Other gateways tax the FX, then bill against an old rate card. We do the opposite — open the menu in your home currency and let the multiplier work for you.'
            )}
          </p>
        </AnimateInView>

        <div className='grid gap-10 md:grid-cols-2 md:gap-16'>
          <AnimateInView animation='scale-in'>
            <div className='border-border bg-background border p-8 md:p-10'>
              <div className='text-muted-foreground text-[11px] font-medium tracking-[0.18em] uppercase'>
                {t('Starting discount')}
              </div>

              <div className='mt-8 flex items-end gap-4 font-serif font-medium tracking-tight'>
                <span className='text-6xl md:text-7xl'>¥1</span>
                <span className='text-muted-foreground mb-2 text-3xl'>=</span>
                <span className='text-6xl md:text-7xl'>$1</span>
              </div>

              <p className='text-muted-foreground mt-5 text-sm leading-6'>
                {t(
                  'Pay in yuan, spend like dollars — at the official upstream meter. No FX surcharge, no rounding tricks.'
                )}
              </p>

              <div className='ssa-ledger-table mt-8'>
                <div className='text-muted-foreground text-[11px] font-medium tracking-[0.16em] uppercase'>
                  {t('Real-world example')}
                </div>
                <div className='mt-4 flex items-baseline justify-between gap-4 border-b py-2.5 text-sm'>
                  <span>{t('Claude Opus official')}</span>
                  <span className='font-mono tabular-nums'>$1.00</span>
                </div>
                <div className='flex items-baseline justify-between gap-4 py-2.5 text-sm'>
                  <span>{t('Through 路边摊 AI')}</span>
                  <span className='font-mono font-medium tabular-nums'>
                    ≈ ¥0.30 – ¥0.60
                  </span>
                </div>
                <p className='text-muted-foreground mt-4 text-xs leading-5'>
                  {t(
                    'After the FX swap and the group multiplier, most users land between three and six mao for a dollar of Opus. Sure you still want to look elsewhere?'
                  )}
                </p>
              </div>

              <div className='mt-8 flex flex-wrap items-center gap-3'>
                <Button
                  className='group rounded-none'
                  render={
                    <Link to={props.isAuthenticated ? '/wallet' : '/sign-up'} />
                  }
                >
                  {t('Sure you don’t want to try?')}
                  <ArrowRight className='ml-1 size-3.5 transition-transform duration-200 group-hover:translate-x-0.5' />
                </Button>
                <Button
                  variant='outline'
                  className='rounded-none'
                  render={<Link to='/pricing' />}
                >
                  {t('See full price list')}
                </Button>
              </div>
            </div>
          </AnimateInView>

          <div className='flex flex-col justify-center'>
            {highlights.map((h, i) => (
              <AnimateInView
                key={h.title}
                animation='fade-left'
                delay={i * 80}
                className={`border-border flex gap-4 py-6 ${i < highlights.length - 1 ? 'border-b' : ''}`}
              >
                <div className='text-muted-foreground flex size-10 shrink-0 items-center justify-center border'>
                  {h.icon}
                </div>
                <div className='min-w-0'>
                  <div className='text-muted-foreground mb-1 font-mono text-[10px] tracking-[0.16em]'>
                    {h.num}
                  </div>
                  <h3 className='text-sm font-semibold'>{h.title}</h3>
                  <p className='text-muted-foreground mt-1.5 text-sm leading-6'>
                    {h.desc}
                  </p>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
