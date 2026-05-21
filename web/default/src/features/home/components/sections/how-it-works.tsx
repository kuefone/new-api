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
import { KeyRound, Plug, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { AnimateInView } from '@/components/animate-in-view'

export function HowItWorks() {
  const { t } = useTranslation()

  const steps = [
    {
      num: '1',
      title: t('Order a key'),
      desc: t(
        'Sign up, top up a few coins, and grab your stall key — no contract, no minimum.'
      ),
      icon: <KeyRound className='size-6' strokeWidth={1.5} />,
    },
    {
      num: '2',
      title: t('Swap the base URL'),
      desc: t(
        'Point your OpenAI / Claude / Gemini client at our endpoint. Same SDK, same calls.'
      ),
      icon: <Plug className='size-6' strokeWidth={1.5} />,
    },
    {
      num: '3',
      title: t('Ship the agent'),
      desc: t(
        'Stream tokens, hit cache, watch the live usage board — the kitchen runs 24/7.'
      ),
      icon: <Sparkles className='size-6' strokeWidth={1.5} />,
    },
  ]

  return (
    <section className='border-border/40 relative z-10 border-t px-6 py-24 md:py-32'>
      <div className='mx-auto max-w-6xl'>
        <AnimateInView className='mb-16 text-center md:mb-20'>
          <p className='text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase'>
            {t('How it works')}
          </p>
          <h2 className='text-2xl font-bold tracking-tight md:text-3xl'>
            {t('Order, plug in, and you are live')}
          </h2>
        </AnimateInView>

        <div className='ssa-steps relative grid gap-8 md:grid-cols-3 md:gap-12'>
          {/* Decorative connector line between steps */}
          <div
            aria-hidden
            className='absolute top-8 hidden h-px md:left-[16.6%] md:right-[16.6%] md:block'
            style={{
              background:
                'linear-gradient(to right, transparent, var(--border) 20%, var(--border) 80%, transparent)',
            }}
          />
          {steps.map((step, i) => (
            <AnimateInView
              key={step.num}
              delay={i * 150}
              animation='fade-up'
              className='relative flex flex-col items-center text-center'
            >
              <div className='relative mb-6'>
                <div className='text-muted-foreground border-border/50 bg-background group-hover:text-foreground flex size-16 items-center justify-center rounded-2xl border transition-colors'>
                  {step.icon}
                </div>
                <div className='ssa-step-badge absolute -top-2 -right-2 flex size-6 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-fuchsia-500 text-xs font-bold text-white shadow-[0_0_18px_-2px_var(--tw-shadow-color)] shadow-fuchsia-500/40'>
                  {step.num}
                </div>
              </div>
              <h3 className='mb-2 text-base font-semibold'>{step.title}</h3>
              <p className='text-muted-foreground max-w-[240px] text-sm leading-relaxed'>
                {step.desc}
              </p>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
