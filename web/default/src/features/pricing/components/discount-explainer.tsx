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
import { useMemo, useState } from 'react'
import { Globe2, Info, Layers, Percent } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

const EXCLUDED_GROUP_KEYS = ['auto']

interface DiscountExplainerProps {
  usdExchangeRate: number
  groupRatio: Record<string, number>
  className?: string
  /** Compact = toolbar-style button (shorter label, square corners matching toolbar). */
  compact?: boolean
}

function formatRatio(v: number, digits = 3): string {
  if (!Number.isFinite(v)) return '—'
  if (v === 0) return '0'
  return Number(v.toFixed(digits)).toString()
}

function ratioToOff(v: number): string {
  if (!Number.isFinite(v) || v <= 0) return '—'
  const pct = v * 10
  return `${Number(pct.toFixed(2))}`
}

export function DiscountExplainer(props: DiscountExplainerProps) {
  const { usdExchangeRate, groupRatio, className, compact = false } = props
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  const fxDiscount = useMemo(() => {
    if (!usdExchangeRate || usdExchangeRate <= 0) return 1
    return 1 / usdExchangeRate
  }, [usdExchangeRate])

  const sortedGroups = useMemo(() => {
    return Object.entries(groupRatio || {})
      .filter(
        ([name, ratio]) =>
          !EXCLUDED_GROUP_KEYS.includes(name) &&
          Number.isFinite(ratio) &&
          ratio > 0
      )
      .sort((a, b) => a[1] - b[1])
  }, [groupRatio])

  const bestGroupRatio = sortedGroups[0]?.[1] ?? 1
  const finalDiscount = fxDiscount * bestGroupRatio

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        render={
          <Button
            variant='outline'
            size='sm'
            className={cn(
              compact
                ? 'h-8 gap-1.5 rounded-lg border-amber-500/40 bg-gradient-to-r from-amber-500/[0.06] to-fuchsia-500/[0.06] px-3 text-xs font-medium text-amber-700 hover:border-amber-500/60 hover:from-amber-500/12 hover:to-fuchsia-500/12 dark:text-amber-300'
                : 'group h-8 rounded-full border-amber-500/40 bg-gradient-to-r from-amber-500/[0.08] via-rose-500/[0.06] to-fuchsia-500/[0.08] text-xs font-medium text-amber-700 shadow-sm hover:border-amber-500/60 hover:from-amber-500/15 hover:to-fuchsia-500/15 dark:text-amber-300',
              className
            )}
          >
            <Percent className='size-3.5' />
            {compact ? t('Discount info') : t('How the discount works')}
            {!compact && <Info className='size-3 opacity-60' />}
          </Button>
        }
      />
      <PopoverContent
        align='center'
        sideOffset={8}
        className='w-[min(92vw,420px)] p-0'
      >
        <div className='border-b border-border/60 bg-gradient-to-r from-amber-500/[0.08] via-rose-500/[0.06] to-fuchsia-500/[0.08] px-4 py-3'>
          <div className='flex items-center gap-2'>
            <Percent className='size-4 text-amber-600 dark:text-amber-400' />
            <h3 className='text-sm font-semibold'>
              {t('How the discount works')}
            </h3>
          </div>
          <p className='text-muted-foreground mt-1 text-xs leading-relaxed'>
            {t(
              'The discount reflects the gap between our actual cost and the vendor’s official price (converted to CNY). Two independent steps multiply together.'
            )}
          </p>
        </div>

        <div className='space-y-4 px-4 py-4 text-xs'>
          {/* Step 1: FX */}
          <section>
            <div className='flex items-center gap-2'>
              <span className='flex size-5 items-center justify-center rounded-full bg-amber-500/15 text-[10px] font-bold text-amber-600 dark:text-amber-400'>
                01
              </span>
              <Globe2 className='size-3.5 text-amber-600 dark:text-amber-400' />
              <h4 className='text-[13px] font-semibold'>
                {t('FX discount')}
              </h4>
            </div>
            <p className='text-muted-foreground mt-1.5 leading-relaxed'>
              {t('Platform bills 1:1 — $1 of quota = ¥1 of balance.')}
            </p>
            <ul className='mt-2 space-y-1.5'>
              <li className='flex items-start gap-2'>
                <span aria-hidden className='text-muted-foreground mt-0.5'>
                  ▸
                </span>
                <span className='text-foreground/85'>
                  {t(
                    'Overseas models priced in USD → you skip one FX leg. FX discount = 1 ÷ exchange-rate.'
                  )}
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <span aria-hidden className='text-muted-foreground mt-0.5'>
                  ▸
                </span>
                <span className='text-foreground/85'>
                  {t(
                    'Domestic models priced in CNY → no FX leg to skip. FX discount = 1.'
                  )}
                </span>
              </li>
            </ul>
            <div className='border-border/40 bg-muted/40 mt-2.5 flex items-center justify-between rounded-md border px-2.5 py-1.5 font-mono text-[11px] tabular-nums'>
              <span className='text-muted-foreground'>
                {t('current rate')}
              </span>
              <span className='text-foreground/90'>
                1 USD = ¥{formatRatio(usdExchangeRate, 2)}
              </span>
              <span className='text-amber-600 dark:text-amber-400'>
                → {formatRatio(fxDiscount)}
              </span>
            </div>
          </section>

          {/* Step 2: Group ratio */}
          <section>
            <div className='flex items-center gap-2'>
              <span className='flex size-5 items-center justify-center rounded-full bg-fuchsia-500/15 text-[10px] font-bold text-fuchsia-600 dark:text-fuchsia-400'>
                02
              </span>
              <Layers className='size-3.5 text-fuchsia-600 dark:text-fuchsia-400' />
              <h4 className='text-[13px] font-semibold'>
                {t('Group multiplier')}
              </h4>
            </div>
            <p className='text-muted-foreground mt-1.5 leading-relaxed'>
              {t(
                'Each token group carries a billing multiplier — the lower it is, the cheaper you pay. e.g. ratio 0.5 means 50% off.'
              )}
            </p>
            {sortedGroups.length > 0 && (
              <div className='border-border/40 bg-muted/40 mt-2.5 max-h-32 overflow-y-auto rounded-md border'>
                <div className='grid grid-cols-[1fr_auto_auto] gap-x-3 px-2.5 py-1.5 text-[10px] font-semibold tracking-wider text-muted-foreground uppercase'>
                  <span>{t('group')}</span>
                  <span>{t('ratio')}</span>
                  <span>{t('discount')}</span>
                </div>
                {sortedGroups.map(([name, ratio]) => (
                  <div
                    key={name}
                    className='grid grid-cols-[1fr_auto_auto] gap-x-3 border-t border-border/40 px-2.5 py-1 font-mono text-[11px] tabular-nums'
                  >
                    <span className='truncate text-foreground/85'>{name}</span>
                    <span className='text-foreground/90'>
                      {formatRatio(ratio, 3)}
                    </span>
                    <span className='text-fuchsia-600 dark:text-fuchsia-400'>
                      {ratioToOff(ratio)} {t('折')}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Combined */}
          <section className='border-border/40 from-amber-500/[0.06] via-rose-500/[0.05] to-fuchsia-500/[0.06] -mx-4 -mb-4 border-t bg-gradient-to-r px-4 py-3'>
            <h4 className='text-[13px] font-semibold'>
              {t('Combined discount')}
            </h4>
            <p className='text-muted-foreground mt-1.5 leading-relaxed'>
              {t('Final = FX discount × group multiplier')}
            </p>
            {sortedGroups.length > 0 && (
              <div className='mt-2 font-mono text-[11px] tabular-nums'>
                <span className='text-muted-foreground'>
                  {t('best case')}:&nbsp;
                </span>
                <span className='text-foreground/90'>
                  {formatRatio(fxDiscount)} × {formatRatio(bestGroupRatio, 3)}
                </span>
                <span className='text-muted-foreground'> = </span>
                <span className='bg-gradient-to-r from-amber-500 via-rose-500 to-fuchsia-500 bg-clip-text font-semibold text-transparent'>
                  {formatRatio(finalDiscount, 4)} ({ratioToOff(finalDiscount)}{' '}
                  {t('折')})
                </span>
              </div>
            )}
          </section>
        </div>
      </PopoverContent>
    </Popover>
  )
}
