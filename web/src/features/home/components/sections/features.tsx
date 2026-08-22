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
import {
  Database,
  Gauge,
  HeartHandshake,
  Layers,
  Receipt,
  ShieldCheck,
  Wallet,
  Wand2,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { AnimateInView } from '@/components/animate-in-view'

interface FeaturesProps {
  className?: string
}

const PRICE_ROWS: Array<{ name: string; official: string; ssa: string }> = [
  { name: 'GPT-class', official: '$15.00', ssa: '$1.50' },
  { name: 'Claude-class', official: '$18.00', ssa: '$1.80' },
  { name: 'Gemini-class', official: '$10.00', ssa: '$1.00' },
]

export function Features(_props: FeaturesProps) {
  const { t } = useTranslation()

  const features = [
    {
      id: 'price',
      num: '01',
      title: t('Street-stall pricing'),
      desc: t(
        'Direct upstream channels and bulk-purchased quotas — flagship models priced at roughly one tenth of the official meter. Same call, one-tenth the bill.'
      ),
      span: 'md:col-span-2',
      icon: <Wallet className='size-4' />,
      visual: (
        <div className='ssa-ledger-table mt-6'>
          <div className='text-muted-foreground grid grid-cols-3 border-b px-0 py-2 text-[10px] font-medium tracking-[0.16em] uppercase'>
            <span>{t('model')}</span>
            <span className='text-right'>{t('official')}</span>
            <span className='text-right'>SSA</span>
          </div>
          {PRICE_ROWS.map((row) => (
            <div
              key={row.name}
              className='grid grid-cols-3 border-b py-2.5 text-sm last:border-b-0'
            >
              <span>{row.name}</span>
              <span className='text-muted-foreground text-right line-through'>
                {row.official}
              </span>
              <span className='text-right font-medium tabular-nums'>
                {row.ssa}
              </span>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 'cache',
      num: '02',
      title: t('Prompt cache that pays you back'),
      desc: t(
        'Automatic cache read & write across providers. Repeated context lands on warm tokens — faster and dramatically cheaper.'
      ),
      span: 'md:col-span-1',
      icon: <Database className='size-4' />,
      visual: (
        <div className='mt-6 flex items-end justify-between gap-6'>
          <div>
            <div className='font-serif text-4xl font-medium tracking-tight'>
              85%
            </div>
            <div className='text-muted-foreground mt-1 text-[11px] tracking-[0.14em] uppercase'>
              cache
            </div>
          </div>
          <div className='text-muted-foreground max-w-[7rem] pb-1 text-right text-xs leading-5'>
            hit rate on repeated context
          </div>
        </div>
      ),
    },
    {
      id: 'concurrent',
      num: '03',
      title: t('Commercial-grade concurrency'),
      desc: t(
        'High-performance Go core, Redis-backed limiters and channel scheduling — survives traffic spikes that bring others to their knees.'
      ),
      span: 'md:col-span-1',
      icon: <Gauge className='size-4' />,
      visual: (
        <div className='mt-6 flex h-16 items-end justify-between gap-1'>
          {[36, 60, 44, 78, 52, 84, 92, 68, 96, 72].map((h, i) => (
            <span
              key={i}
              className='bg-foreground/80 w-full'
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      ),
    },
    {
      id: 'agent',
      num: '04',
      title: t('Built for agents'),
      desc: t(
        'Streaming, function calls, tool use, MCP-ready endpoints and per-key budgets. Wire up your autonomous workflows in minutes.'
      ),
      span: 'md:col-span-2',
      icon: <Wand2 className='size-4' />,
      visual: (
        <div className='mt-6 flex flex-wrap gap-2'>
          {[
            'streaming',
            'function_call',
            'tool_use',
            'vision',
            'mcp',
            'embeddings',
            'rerank',
            'image_gen',
          ].map((tag) => (
            <span key={tag} className='ssa-chip font-mono'>
              {tag}
            </span>
          ))}
        </div>
      ),
    },
  ]

  const additionalFeatures = [
    {
      icon: <Layers className='size-4' strokeWidth={1.5} />,
      title: t('Unified API surface'),
      desc: t(
        'One OpenAI-compatible base URL routes to 200+ models across providers.'
      ),
    },
    {
      icon: <Receipt className='size-4' strokeWidth={1.5} />,
      title: t('Itemized billing'),
      desc: t(
        'Per-request token, cache and cost breakdown — no mystery line on your bill.'
      ),
    },
    {
      icon: <ShieldCheck className='size-4' strokeWidth={1.5} />,
      title: t('Keys you can trust'),
      desc: t(
        'Per-key quota, IP allowlist, rate limit and grouping for safe sharing.'
      ),
    },
    {
      icon: <HeartHandshake className='size-4' strokeWidth={1.5} />,
      title: t('Open source, self-hostable'),
      desc: t(
        'Take the recipe home — fork, audit, deploy under your own roof anytime.'
      ),
    },
  ]

  return (
    <section className='relative z-10 px-6 py-24 md:py-32'>
      <div className='mx-auto max-w-6xl'>
        <AnimateInView className='mb-14 max-w-xl'>
          <p className='text-muted-foreground mb-3 text-[11px] font-medium tracking-[0.18em] uppercase'>
            {t('Why pick this stall')}
          </p>
          <h2 className='font-serif text-3xl leading-[1.1] font-medium tracking-tight md:text-5xl'>
            {t('Same models,')}
            <br />
            {t('street-stall prices.')}
          </h2>
        </AnimateInView>

        <div className='grid gap-px border md:grid-cols-3'>
          {features.map((f, i) => (
            <AnimateInView
              key={f.id}
              delay={i * 80}
              animation='scale-in'
              className={`bg-background p-7 md:p-8 ${f.span}`}
            >
              <div className='mb-4 flex items-center justify-between'>
                <span className='text-muted-foreground font-mono text-[11px] tracking-[0.16em]'>
                  {f.num}
                </span>
                <span className='text-muted-foreground'>{f.icon}</span>
              </div>
              <h3 className='text-base font-semibold tracking-tight'>
                {f.title}
              </h3>
              <p className='text-muted-foreground mt-2 text-sm leading-6'>
                {f.desc}
              </p>
              {f.visual}
            </AnimateInView>
          ))}
        </div>

        <div className='mt-12 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10'>
          {additionalFeatures.map((f, i) => (
            <AnimateInView
              key={f.title}
              delay={i * 80}
              animation='fade-up'
              className='flex flex-col'
            >
              <div className='text-muted-foreground mb-3'>{f.icon}</div>
              <h3 className='mb-1.5 text-sm font-semibold'>{f.title}</h3>
              <p className='text-muted-foreground text-xs leading-5'>
                {f.desc}
              </p>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
