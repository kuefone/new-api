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
import { ArrowRight, BookOpen, MoreHorizontal } from 'lucide-react'
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
          className='h-11 rounded-none px-5'
          render={
            <a href={docsUrl} target='_blank' rel='noopener noreferrer' />
          }
        >
          <BookOpen className='size-4' />
          <span>{t('Docs')}</span>
        </Button>
      )
    }

    return (
      <Button
        variant='outline'
        className='h-11 rounded-none px-5'
        render={<Link to={docsUrl} />}
      >
        <BookOpen className='size-4' />
        <span>{t('Docs')}</span>
      </Button>
    )
  }

  return (
    <section
      className={`relative z-10 overflow-hidden px-6 pt-20 pb-16 md:pt-28 md:pb-24 ${props.className ?? ''}`}
    >
      <div
        aria-hidden
        className='ssa-ledger-grid pointer-events-none absolute inset-0 -z-10'
      />

      <div className='mx-auto grid max-w-6xl grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-10'>
        <div className='flex flex-col items-start text-left lg:col-span-6'>
          <div
            className='landing-animate-fade-up mb-6 opacity-0'
            style={{ animationDelay: '0ms' }}
          >
            <span className='ssa-stamp'>StreetStallAI · SSA</span>
          </div>

          <h1
            className='landing-animate-fade-up font-serif text-[clamp(2.75rem,6vw,4.5rem)] leading-[0.95] font-medium tracking-tight'
            style={{ animationDelay: '60ms' }}
          >
            <span className='block'>路边摊 AI</span>
            <span className='text-muted-foreground mt-3 block max-w-xl font-sans text-xl font-normal tracking-tight md:text-2xl'>
              {t('A no-compromise, bargain AI gateway')}
            </span>
          </h1>

          <p
            className='landing-animate-fade-up text-muted-foreground mt-6 max-w-xl text-base leading-7 opacity-0'
            style={{ animationDelay: '120ms' }}
          >
            {t(
              'Speaks OpenAI and Anthropic out of the box, routes to 30+ top-tier models — if you want value, stop shopping. There is no second one.'
            )}
          </p>

          <div
            className='landing-animate-fade-up mt-7 flex flex-wrap gap-2 opacity-0'
            style={{ animationDelay: '160ms' }}
          >
            {TAGLINE_KEYS.map((key) => (
              <span key={key} className='ssa-chip'>
                {t(key)}
              </span>
            ))}
          </div>

          <div
            className='landing-animate-fade-up mt-9 flex flex-wrap items-center gap-3 opacity-0'
            style={{ animationDelay: '220ms' }}
          >
            {props.isAuthenticated ? (
              <>
                <Button
                  className='group h-11 rounded-none px-5'
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
                  className='group h-11 rounded-none px-5'
                  render={<Link to='/sign-up' />}
                >
                  {t('Grab a stall key')}
                  <ArrowRight className='ml-1.5 size-4 transition-transform duration-200 group-hover:translate-x-0.5' />
                </Button>
                <Button
                  variant='outline'
                  className='h-11 rounded-none px-5'
                  render={<Link to='/pricing' />}
                >
                  {t('Check the menu')}
                </Button>
                {renderDocsButton()}
              </>
            )}
          </div>

          <div
            className='landing-animate-fade-up mt-12 w-full max-w-xl opacity-0'
            style={{ animationDelay: '280ms' }}
          >
            <div className='mb-4 flex flex-col gap-1'>
              <span className='text-muted-foreground text-[11px] font-medium tracking-[0.18em] uppercase'>
                {t('Supported Applications')}
              </span>
              <p className='text-muted-foreground/80 text-xs leading-relaxed'>
                {t(
                  'Supports one-click configuration and perfectly adapts to NewAPI multi-protocol configuration.'
                )}
              </p>
            </div>
            <div className='flex flex-wrap items-center gap-2'>
              <a
                href='https://cherry-ai.com'
                target='_blank'
                rel='noopener noreferrer'
                className='border-border bg-background hover:bg-muted/50 flex items-center gap-2.5 border px-4 py-2 text-sm font-medium transition-colors'
              >
                <CherryStudio.Color size={20} className='shrink-0' />
                <span>Cherry Studio</span>
              </a>

              <a
                href='https://ccswitch.io'
                target='_blank'
                rel='noopener noreferrer'
                className='border-border bg-background hover:bg-muted/50 flex items-center gap-2.5 border px-4 py-2 text-sm font-medium transition-colors'
              >
                <img
                  src='https://ccswitch.io/favicon.png'
                  alt='CC Switch'
                  className='size-5 shrink-0 object-contain'
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    const fallback = e.currentTarget.nextSibling as HTMLElement
                    if (fallback) fallback.style.display = 'flex'
                  }}
                />
                <span
                  style={{ display: 'none' }}
                  className='bg-muted text-muted-foreground size-5 shrink-0 items-center justify-center text-[10px] font-bold'
                >
                  CC
                </span>
                <span>CC Switch</span>
              </a>

              <div className='border-border text-muted-foreground flex cursor-default items-center gap-2 border px-4 py-2 text-sm'>
                <MoreHorizontal className='size-5 shrink-0' />
                <span>{t('More Apps')}</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className='landing-animate-fade-up flex w-full justify-center opacity-0 lg:col-span-6'
          style={{ animationDelay: '360ms' }}
        >
          <HeroTerminalDemo className='mt-4 lg:mt-0' />
        </div>
      </div>
    </section>
  )
}
