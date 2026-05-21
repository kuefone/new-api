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
      icon: <Wallet className='size-4 text-amber-500' />,
      visual: (
        <div className='mt-4 overflow-hidden rounded-lg border border-amber-500/20 bg-amber-500/[0.04]'>
          <div className='grid grid-cols-3 border-b border-amber-500/15 bg-amber-500/[0.06] px-3 py-1.5 text-[10px] font-semibold tracking-wider text-amber-700 uppercase dark:text-amber-300'>
            <span>{t('model')}</span>
            <span className='text-right text-muted-foreground/70'>
              {t('official')}
            </span>
            <span className='text-right'>SSA</span>
          </div>
          {PRICE_ROWS.map((row, i) => (
            <div
              key={row.name}
              className='ssa-price-row grid grid-cols-3 px-3 py-1.5 text-xs tabular-nums'
              style={{ animationDelay: `${i * 140}ms` }}
            >
              <span className='text-foreground/80'>{row.name}</span>
              <span className='text-muted-foreground/70 line-through text-right'>
                {row.official}
              </span>
              <span className='text-right font-semibold text-amber-600 dark:text-amber-400'>
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
      icon: <Database className='size-4 text-emerald-500' />,
      visual: (
        <div className='mt-4 flex items-center justify-center'>
          <div className='relative flex size-20 items-center justify-center'>
            <div className='ssa-cache-ring absolute inset-0 rounded-full border-2 border-emerald-500/30' />
            <div
              className='ssa-cache-ring absolute inset-1 rounded-full border-2 border-emerald-400/40'
              style={{ animationDelay: '-1.5s' }}
            />
            <div className='relative flex size-12 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/10 text-[11px] font-bold tabular-nums text-emerald-600 dark:text-emerald-400'>
              85%
            </div>
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
      icon: <Gauge className='size-4 text-fuchsia-500' />,
      visual: (
        <div className='mt-4 flex h-16 items-end justify-between gap-1.5'>
          {[36, 60, 44, 78, 52, 84, 92, 68, 96, 72].map((h, i) => (
            <span
              key={i}
              className='ssa-bar w-full rounded-sm bg-gradient-to-t from-fuchsia-500/30 to-fuchsia-500/70'
              style={{
                height: `${h}%`,
                animationDelay: `${i * 90}ms`,
              }}
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
      icon: <Wand2 className='size-4 text-violet-500' />,
      visual: (
        <div className='mt-4 flex flex-wrap items-center gap-1.5'>
          {[
            'streaming',
            'function_call',
            'tool_use',
            'vision',
            'mcp',
            'embeddings',
            'rerank',
            'image_gen',
          ].map((tag, i) => (
            <span
              key={tag}
              className='ssa-tag border-border/40 bg-muted/40 text-foreground/70 inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 font-mono text-[10.5px]'
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <span aria-hidden className='ssa-pulse-dot bg-violet-500' />
              {tag}
            </span>
          ))}
        </div>
      ),
    },
  ]

  const additionalFeatures = [
    {
      icon: <Layers className='size-5' strokeWidth={1.5} />,
      title: t('Unified API surface'),
      desc: t(
        'One OpenAI-compatible base URL routes to 200+ models across providers.'
      ),
    },
    {
      icon: <Receipt className='size-5' strokeWidth={1.5} />,
      title: t('Itemized billing'),
      desc: t(
        'Per-request token, cache and cost breakdown — no mystery line on your bill.'
      ),
    },
    {
      icon: <ShieldCheck className='size-5' strokeWidth={1.5} />,
      title: t('Keys you can trust'),
      desc: t(
        'Per-key quota, IP allowlist, rate limit and grouping for safe sharing.'
      ),
    },
    {
      icon: <HeartHandshake className='size-5' strokeWidth={1.5} />,
      title: t('Open source, self-hostable'),
      desc: t(
        'Take the recipe home — fork, audit, deploy under your own roof anytime.'
      ),
    },
  ]

  return (
    <section className='relative z-10 px-6 py-24 md:py-32'>
      <div className='mx-auto max-w-6xl'>
        <AnimateInView className='mb-16 max-w-lg'>
          <p className='text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase'>
            {t('Why pick this stall')}
          </p>
          <h2 className='text-2xl leading-tight font-bold tracking-tight md:text-3xl'>
            {t('Same models,')}
            <br />
            <span className='bg-gradient-to-r from-amber-500 via-rose-500 to-fuchsia-500 bg-clip-text text-transparent'>
              {t('street-stall prices.')}
            </span>
          </h2>
        </AnimateInView>

        {/* Bento grid */}
        <div className='border-border/40 bg-border/40 grid gap-px overflow-hidden rounded-xl border md:grid-cols-3'>
          {features.map((f, i) => (
            <AnimateInView
              key={f.id}
              delay={i * 100}
              animation='scale-in'
              className={`bg-background group hover:bg-muted/20 p-7 transition-colors duration-300 md:p-8 ${f.span}`}
            >
              <div className='mb-3 flex items-center gap-3'>
                <span className='border-border/40 bg-muted text-muted-foreground flex size-7 items-center justify-center rounded-md border text-[10px] font-semibold tabular-nums'>
                  {f.num}
                </span>
                <h3 className='text-sm font-semibold'>{f.title}</h3>
                {f.icon}
              </div>
              <p className='text-muted-foreground text-sm leading-relaxed'>
                {f.desc}
              </p>
              {f.visual}
            </AnimateInView>
          ))}
        </div>

        {/* Additional features row */}
        <div className='mt-12 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12'>
          {additionalFeatures.map((f, i) => (
            <AnimateInView
              key={f.title}
              delay={i * 100}
              animation='fade-up'
              className='flex flex-col items-center text-center'
            >
              <div className='text-muted-foreground border-border/50 bg-muted/30 group-hover:text-foreground mb-3 flex size-12 items-center justify-center rounded-xl border transition-colors'>
                {f.icon}
              </div>
              <h3 className='mb-1.5 text-sm font-semibold'>{f.title}</h3>
              <p className='text-muted-foreground max-w-[200px] text-xs leading-relaxed'>
                {f.desc}
              </p>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
