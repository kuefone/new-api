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
import { CherryStudio } from '@lobehub/icons'
import { Link } from '@tanstack/react-router'
import { ArrowRight, BookOpen, MoreHorizontal, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/ui/button'
import { useStatus } from '@/hooks/use-status'

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
  const { status } = useStatus()
  const docsUrl =
    (status?.docs_link as string | undefined) || 'https://docs.newapi.pro'

  const renderDocsButton = () => {
    const isExternal = docsUrl.startsWith('http')
    if (isExternal) {
      return (
        <Button
          variant='outline'
          className='group border-border/50 hover:border-border hover:bg-muted/50 inline-flex h-11 items-center gap-1.5 rounded-lg px-5 text-sm font-medium'
          render={
            <a href={docsUrl} target='_blank' rel='noopener noreferrer' />
          }
        >
          <BookOpen className='text-muted-foreground/80 group-hover:text-foreground size-4 transition-colors duration-200' />
          <span>{t('Docs')}</span>
        </Button>
      )
    }

    return (
      <Button
        variant='outline'
        className='group border-border/50 hover:border-border hover:bg-muted/50 inline-flex h-11 items-center gap-1.5 rounded-lg px-5 text-sm font-medium'
        render={<Link to={docsUrl} />}
      >
        <BookOpen className='text-muted-foreground/80 group-hover:text-foreground size-4 transition-colors duration-200' />
        <span>{t('Docs')}</span>
      </Button>
    )
  }

  return (
    <section
      className={`relative z-10 overflow-hidden px-6 pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-36 lg:pb-28 ${props.className ?? ''}`}
    >
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 -z-10 opacity-30 dark:opacity-[0.16]'
        style={{
          background: [
            'radial-gradient(ellipse 55% 45% at 18% 22%, oklch(0.78 0.18 60 / 75%) 0%, transparent 70%)',
            'radial-gradient(ellipse 50% 40% at 82% 18%, oklch(0.70 0.20 320 / 65%) 0%, transparent 70%)',
            'radial-gradient(ellipse 45% 35% at 50% 78%, oklch(0.70 0.16 250 / 50%) 0%, transparent 70%)',
          ].join(', '),
        }}
      />
      <div
        aria-hidden
        className='absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black_20%,transparent_100%)] bg-[size:4rem_4rem] opacity-[0.08]'
      />

      <div className='mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8'>
        <div className='flex flex-col items-start text-left lg:col-span-6'>
          <div
            className='landing-animate-fade-up mb-5 inline-flex items-center gap-2 opacity-0'
            style={{ animationDelay: '0ms' }}
          >
            <span className='ssa-neon-badge relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-fuchsia-500/10 to-violet-500/10 px-4 py-1.5 text-[11px] font-medium tracking-wider text-amber-700 backdrop-blur-sm dark:border-amber-400/30 dark:text-amber-300'>
              <Sparkles className='size-3' />
              <span>StreetStallAI · SSA</span>
              <span aria-hidden className='ssa-shimmer absolute inset-0' />
            </span>
          </div>

          <h1
            className='landing-animate-fade-up text-[clamp(2.25rem,4.5vw,3.25rem)] leading-[1.15] font-bold tracking-tight'
            style={{ animationDelay: '60ms' }}
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
            className='landing-animate-fade-up text-muted-foreground/85 mt-5 max-w-xl text-base leading-relaxed opacity-0 md:text-[15px]'
            style={{ animationDelay: '120ms' }}
          >
            {t(
              'Speaks OpenAI and Anthropic out of the box, routes to 30+ top-tier models — if you want value, stop shopping. There is no second one.'
            )}
          </p>

          <div
            className='landing-animate-fade-up mt-6 flex flex-wrap items-center gap-2 opacity-0'
            style={{ animationDelay: '160ms' }}
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
            className='landing-animate-fade-up mt-8 flex flex-wrap items-center gap-3 opacity-0'
            style={{ animationDelay: '220ms' }}
          >
            {props.isAuthenticated ? (
              <>
                <Button
                  className='group h-11 rounded-lg px-5 text-sm font-medium'
                  render={<Link to='/dashboard' />}
                >
                  {t('Go to Dashboard')}
                  <ArrowRight className='ml-1.5 size-4 transition-transform duration-200 group-hover:translate-x-0.5' />
                </Button>
                {renderDocsButton()}
              </>
            ) : (
              <>
                <Button
                  className='ssa-cta-shine group relative h-11 overflow-hidden rounded-lg px-5 text-sm font-medium'
                  render={<Link to='/sign-up' />}
                >
                  <span className='relative z-10 inline-flex items-center'>
                    {t('Grab a stall key')}
                    <ArrowRight className='ml-1.5 size-4 transition-transform duration-200 group-hover:translate-x-0.5' />
                  </span>
                </Button>
                <Button
                  variant='outline'
                  className='border-border/50 hover:border-border hover:bg-muted/50 h-11 rounded-lg px-5 text-sm font-medium'
                  render={<Link to='/pricing' />}
                >
                  {t('Check the menu')}
                </Button>
                {renderDocsButton()}
              </>
            )}
          </div>

          <div
            className='landing-animate-fade-up mt-10 w-full max-w-xl opacity-0'
            style={{ animationDelay: '280ms' }}
          >
            <div className='mb-4 flex flex-col gap-1'>
              <span className='text-muted-foreground/50 text-[10px] font-bold tracking-[0.15em] uppercase'>
                {t('Supported Applications')}
              </span>
              <p className='text-muted-foreground/60 text-xs leading-relaxed'>
                {t(
                  'Supports one-click configuration and perfectly adapts to NewAPI multi-protocol configuration.'
                )}
              </p>
            </div>
            <div className='flex flex-wrap items-center gap-3'>
              <a
                href='https://cherry-ai.com'
                target='_blank'
                rel='noopener noreferrer'
                className='group border-border/40 bg-muted/15 text-foreground/80 hover:border-border hover:bg-muted/30 hover:text-foreground flex items-center gap-3 rounded-full border px-5 py-2.5 text-sm font-medium shadow-[0_1px_2.5px_rgba(0,0,0,0.01)] backdrop-blur-xs transition-all duration-300 hover:scale-[1.02]'
              >
                <CherryStudio.Color size={24} className='shrink-0' />
                <span>Cherry Studio</span>
              </a>

              <a
                href='https://ccswitch.io'
                target='_blank'
                rel='noopener noreferrer'
                className='group border-border/40 bg-muted/15 text-foreground/80 hover:border-border hover:bg-muted/30 hover:text-foreground flex items-center gap-3 rounded-full border px-5 py-2.5 text-sm font-medium shadow-[0_1px_2.5px_rgba(0,0,0,0.01)] backdrop-blur-xs transition-all duration-300 hover:scale-[1.02]'
              >
                <img
                  src='https://ccswitch.io/favicon.png'
                  alt='CC Switch'
                  className='size-6 shrink-0 rounded-md object-contain'
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    const fallback = e.currentTarget.nextSibling as HTMLElement
                    if (fallback) fallback.style.display = 'flex'
                  }}
                />
                <span
                  style={{ display: 'none' }}
                  className='size-6 shrink-0 items-center justify-center rounded-md bg-amber-500/10 text-[10px] font-bold text-amber-600 dark:bg-amber-400/10 dark:text-amber-400'
                >
                  CC
                </span>
                <span>CC Switch</span>
              </a>

              <div className='group border-border/40 bg-muted/15 text-foreground/55 hover:border-border hover:bg-muted/30 hover:text-foreground flex cursor-default items-center gap-2.5 rounded-full border px-5 py-2.5 text-sm font-medium shadow-[0_1px_2.5px_rgba(0,0,0,0.01)] backdrop-blur-xs transition-all duration-300 hover:scale-[1.02]'>
                <MoreHorizontal className='text-muted-foreground/60 group-hover:text-foreground size-6 shrink-0 transition-colors' />
                <span>{t('More Apps')}</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className='landing-animate-fade-up flex w-full justify-center opacity-0 lg:col-span-6'
          style={{ animationDelay: '360ms' }}
        >
          <HeroTerminalDemo className='mt-8 lg:mt-0' />
        </div>
      </div>
    </section>
  )
}
