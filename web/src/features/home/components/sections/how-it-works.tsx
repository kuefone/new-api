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
      num: '01',
      title: t('Order a key'),
      desc: t(
        'Sign up, top up a few coins, and grab your stall key — no contract, no minimum.'
      ),
      icon: <KeyRound className='size-5' strokeWidth={1.5} />,
    },
    {
      num: '02',
      title: t('Swap the base URL'),
      desc: t(
        'Point your OpenAI / Claude / Gemini client at our endpoint. Same SDK, same calls.'
      ),
      icon: <Plug className='size-5' strokeWidth={1.5} />,
    },
    {
      num: '03',
      title: t('Ship the agent'),
      desc: t(
        'Stream tokens, hit cache, watch the live usage board — the kitchen runs 24/7.'
      ),
      icon: <Sparkles className='size-5' strokeWidth={1.5} />,
    },
  ]

  return (
    <section className='border-border relative z-10 border-t px-6 py-24 md:py-32'>
      <div className='mx-auto max-w-6xl'>
        <AnimateInView className='mb-16 max-w-xl'>
          <p className='text-muted-foreground mb-3 text-[11px] font-medium tracking-[0.18em] uppercase'>
            {t('How it works')}
          </p>
          <h2 className='font-serif text-3xl leading-[1.1] font-medium tracking-tight md:text-5xl'>
            {t('Order, plug in, and you are live')}
          </h2>
        </AnimateInView>

        <div className='grid gap-px border md:grid-cols-3'>
          {steps.map((step, i) => (
            <AnimateInView
              key={step.num}
              delay={i * 80}
              animation='fade-up'
              className='bg-background p-8'
            >
              <div className='text-muted-foreground mb-8 flex items-center justify-between'>
                <span className='font-mono text-[11px] tracking-[0.16em]'>
                  {step.num}
                </span>
                {step.icon}
              </div>
              <h3 className='mb-3 text-lg font-semibold tracking-tight'>
                {step.title}
              </h3>
              <p className='text-muted-foreground text-sm leading-6'>
                {step.desc}
              </p>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
