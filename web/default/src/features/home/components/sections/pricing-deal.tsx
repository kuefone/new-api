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
  CalendarSync,
  Coins,
  Layers3,
  Sparkles,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { AnimateInView } from '@/components/animate-in-view'

interface PricingDealProps {
  isAuthenticated?: boolean
}

export function PricingDeal(props: PricingDealProps) {
  const { t } = useTranslation()

  const highlights = [
    {
      icon: <Coins className='size-5' strokeWidth={1.5} />,
      title: t('Top up ¥1, spend like $1'),
      desc: t(
        'Step one is already a discount: every yuan you recharge spends as one dollar at the official rate.'
      ),
    },
    {
      icon: <CalendarSync className='size-5' strokeWidth={1.5} />,
      title: t('Daily official-price sync'),
      desc: t(
        'Upstream price changes are auto-imported every day — you always pay against the current official meter, no stale tables.'
      ),
    },
    {
      icon: <Layers3 className='size-5' strokeWidth={1.5} />,
      title: t('Group multiplier on top'),
      desc: t(
        'Add a per-model-group multiplier and the discount stacks again — most users land around a few mao per official US dollar of Claude Opus.'
      ),
    },
  ]

  return (
    <section className='border-border/40 relative z-10 overflow-hidden border-t px-6 py-24 md:py-32'>
      {/* Background gradient + grid */}
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 -z-10 opacity-25 dark:opacity-[0.12]'
        style={{
          background: [
            'radial-gradient(ellipse 50% 50% at 22% 30%, oklch(0.78 0.18 60 / 70%) 0%, transparent 70%)',
            'radial-gradient(ellipse 40% 40% at 78% 70%, oklch(0.74 0.20 330 / 60%) 0%, transparent 70%)',
          ].join(', '),
        }}
      />

      <div className='mx-auto max-w-6xl'>
        <AnimateInView className='mx-auto mb-14 max-w-2xl text-center'>
          <p className='text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase'>
            {t('The deal')}
          </p>
          <h2 className='text-2xl leading-tight font-bold tracking-tight md:text-3xl'>
            {t('A discount before you even start spending')}
          </h2>
          <p className='text-muted-foreground/85 mx-auto mt-4 max-w-xl text-sm leading-relaxed md:text-base'>
            {t(
              'Other gateways tax the FX, then bill against an old rate card. We do the opposite — open the menu in your home currency and let the multiplier work for you.'
            )}
          </p>
        </AnimateInView>

        <div className='grid gap-10 md:grid-cols-2 md:gap-14'>
          {/* Left: hero rate card */}
          <AnimateInView animation='scale-in'>
            <div className='ssa-rate-card border-border/40 bg-background relative overflow-hidden rounded-2xl border p-8 md:p-10'>
              {/* Animated conic background */}
              <div
                aria-hidden
                className='ssa-rate-conic pointer-events-none absolute -inset-1 -z-10 opacity-60 dark:opacity-40'
              />

              <div className='flex items-center gap-2 text-[11px] font-semibold tracking-widest text-amber-700 uppercase dark:text-amber-300'>
                <Sparkles className='size-3' />
                {t('Starting discount')}
              </div>

              <div className='mt-6 flex items-end gap-4 font-bold tabular-nums tracking-tight'>
                <span className='text-foreground/85 text-5xl md:text-6xl'>
                  ¥1
                </span>
                <span className='text-muted-foreground/70 mb-1 text-3xl md:text-4xl'>
                  =
                </span>
                <span className='ssa-rate-flash bg-gradient-to-br from-amber-400 via-rose-400 to-fuchsia-500 bg-clip-text text-5xl text-transparent md:text-6xl'>
                  $1
                </span>
              </div>

              <p className='text-muted-foreground mt-3 text-sm leading-relaxed'>
                {t(
                  'Pay in yuan, spend like dollars — at the official upstream meter. No FX surcharge, no rounding tricks.'
                )}
              </p>

              {/* Concrete example — Opus */}
              <div className='border-border/40 from-muted/40 to-muted/10 mt-8 rounded-xl border bg-gradient-to-br p-4'>
                <div className='text-muted-foreground text-[11px] font-semibold tracking-widest uppercase'>
                  {t('Real-world example')}
                </div>
                <div className='mt-2 flex items-baseline gap-2 text-sm'>
                  <span className='text-foreground/80'>
                    {t('Claude Opus official')}
                  </span>
                  <span className='font-mono text-foreground/90 tabular-nums'>
                    $1.00
                  </span>
                </div>
                <div className='mt-1.5 flex items-baseline gap-2 text-sm'>
                  <span className='text-foreground/80'>
                    {t('Through 路边摊 AI')}
                  </span>
                  <span className='ssa-rate-flash bg-gradient-to-r from-amber-500 via-rose-500 to-fuchsia-500 bg-clip-text font-mono font-semibold text-transparent tabular-nums'>
                    ≈ ¥0.30 – ¥0.60
                  </span>
                </div>
                <p className='text-muted-foreground/80 mt-3 text-xs leading-relaxed'>
                  {t(
                    'After the FX swap and the group multiplier, most users land between three and six mao for a dollar of Opus. Sure you still want to look elsewhere?'
                  )}
                </p>
              </div>

              <div className='mt-8 flex flex-wrap items-center gap-3'>
                <Button
                  className='ssa-cta-shine group relative overflow-hidden rounded-lg'
                  render={
                    <Link to={props.isAuthenticated ? '/wallet' : '/sign-up'} />
                  }
                >
                  <span className='relative z-10 inline-flex items-center'>
                    {t('Sure you don’t want to try?')}
                    <ArrowRight className='ml-1 size-3.5 transition-transform duration-200 group-hover:translate-x-0.5' />
                  </span>
                </Button>
                <Button
                  variant='outline'
                  className='border-border/50 hover:border-border hover:bg-muted/50 rounded-lg'
                  render={<Link to='/pricing' />}
                >
                  {t('See full price list')}
                </Button>
              </div>
            </div>
          </AnimateInView>

          {/* Right: highlight list */}
          <div className='flex flex-col justify-center gap-5'>
            {highlights.map((h, i) => (
              <AnimateInView
                key={h.title}
                animation='fade-left'
                delay={i * 120}
                className='border-border/40 bg-background/60 hover:bg-muted/30 group flex gap-4 rounded-xl border p-5 backdrop-blur-sm transition-colors duration-300'
              >
                <div className='text-muted-foreground border-border/50 bg-muted/30 group-hover:text-foreground flex size-11 shrink-0 items-center justify-center rounded-lg border transition-colors'>
                  {h.icon}
                </div>
                <div className='min-w-0'>
                  <h3 className='text-sm font-semibold'>{h.title}</h3>
                  <p className='text-muted-foreground mt-1 text-sm leading-relaxed'>
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
