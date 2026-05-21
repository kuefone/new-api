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
import { ArrowRight, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { HeroTerminalDemo } from '../hero-terminal-demo'

interface HeroProps {
  className?: string
  isAuthenticated?: boolean
}

const TAGLINE_KEYS = [
  'Cost-effective pricing',
  'Commercial-grade concurrency',
  'Prompt cache built-in',
  'Agent friendly',
] as const

export function Hero(props: HeroProps) {
  const { t } = useTranslation()

  return (
    <section className='relative z-10 flex flex-col items-center overflow-hidden px-6 pt-28 pb-16 md:pt-36 md:pb-24'>
      {/* Radial gradient background — warm amber + cool violet to evoke a night-market neon stall */}
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 -z-10 opacity-30 dark:opacity-[0.18]'
        style={{
          background: [
            'radial-gradient(ellipse 55% 45% at 18% 22%, oklch(0.78 0.18 60 / 75%) 0%, transparent 70%)',
            'radial-gradient(ellipse 50% 40% at 82% 18%, oklch(0.70 0.20 320 / 65%) 0%, transparent 70%)',
            'radial-gradient(ellipse 45% 35% at 50% 78%, oklch(0.70 0.16 250 / 50%) 0%, transparent 70%)',
          ].join(', '),
        }}
      />
      {/* Grid pattern */}
      <div
        aria-hidden
        className='absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black_20%,transparent_100%)] bg-[size:4rem_4rem] opacity-[0.08]'
      />
      {/* Floating glow orbs */}
      <div
        aria-hidden
        className='ssa-float-orb pointer-events-none absolute top-24 left-[12%] -z-10 size-32 rounded-full bg-amber-400/20 blur-3xl dark:bg-amber-500/15'
      />
      <div
        aria-hidden
        className='ssa-float-orb pointer-events-none absolute top-40 right-[10%] -z-10 size-40 rounded-full bg-fuchsia-400/20 blur-3xl dark:bg-fuchsia-500/15'
        style={{ animationDelay: '-3s' }}
      />

      <div className='flex max-w-3xl flex-col items-center text-center'>
        {/* Brand badge — neon shimmer */}
        <div
          className='landing-animate-fade-up mb-6 inline-flex items-center gap-2 opacity-0'
          style={{ animationDelay: '0ms' }}
        >
          <span className='ssa-neon-badge relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-fuchsia-500/10 to-violet-500/10 px-4 py-1.5 text-[11px] font-medium tracking-wider text-amber-700 backdrop-blur-sm dark:border-amber-400/30 dark:text-amber-300'>
            <Sparkles className='size-3' />
            <span>StreetStallAI · SSA</span>
            <span aria-hidden className='ssa-shimmer absolute inset-0' />
          </span>
        </div>

        <h1
          className='landing-animate-fade-up text-[clamp(2.25rem,6vw,4rem)] leading-[1.1] font-bold tracking-tight'
          style={{ animationDelay: '80ms' }}
        >
          <span className='ssa-brand-glow inline-block bg-gradient-to-br from-amber-400 via-rose-400 to-fuchsia-500 bg-clip-text text-transparent'>
            路边摊 AI
          </span>
          <br />
          <span className='text-foreground/90'>
            {t('A no-compromise, bargain AI gateway')}
          </span>
        </h1>

        <p
          className='landing-animate-fade-up text-muted-foreground/85 mt-5 max-w-xl text-base leading-relaxed opacity-0 md:text-lg'
          style={{ animationDelay: '160ms' }}
        >
          {t(
            'Speaks OpenAI and Anthropic out of the box, routes to 30+ top-tier models — if you want value, stop shopping. There is no second one.'
          )}
        </p>

        {/* Animated tagline pills */}
        <div
          className='landing-animate-fade-up mt-6 flex flex-wrap items-center justify-center gap-2 opacity-0'
          style={{ animationDelay: '220ms' }}
        >
          {TAGLINE_KEYS.map((key, i) => (
            <span
              key={key}
              className='ssa-pill border-border/50 bg-muted/40 text-foreground/70 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] backdrop-blur-sm'
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <span aria-hidden className='ssa-pulse-dot bg-emerald-500' />
              {t(key)}
            </span>
          ))}
        </div>

        <div
          className='landing-animate-fade-up mt-8 flex items-center gap-3 opacity-0'
          style={{ animationDelay: '320ms' }}
        >
          {props.isAuthenticated ? (
            <Button
              className='group rounded-lg'
              render={<Link to='/dashboard' />}
            >
              {t('Go to Dashboard')}
              <ArrowRight className='ml-1 size-3.5 transition-transform duration-200 group-hover:translate-x-0.5' />
            </Button>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>

      <div
        className='landing-animate-fade-up w-full opacity-0'
        style={{ animationDelay: '420ms' }}
      >
        <HeroTerminalDemo />
      </div>
    </section>
  )
}
