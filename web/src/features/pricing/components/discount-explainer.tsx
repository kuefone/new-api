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
import { Globe2, Info, Layers, Percent } from 'lucide-react'
import { useMemo, useState } from 'react'
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
            className={cn('h-8 gap-1.5 rounded-none px-3 text-xs', className)}
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
        className='w-[min(92vw,420px)] rounded-none p-0'
      >
        <div className='border-border border-b px-4 py-3'>
          <div className='flex items-center gap-2'>
            <Percent className='size-4' />
            <h3 className='text-sm font-semibold'>
              {t('How the discount works')}
            </h3>
          </div>
          <p className='text-muted-foreground mt-1 text-xs leading-5'>
            {t(
              'The discount reflects the gap between our actual cost and the vendor’s official price (converted to CNY). Two independent steps multiply together.'
            )}
          </p>
        </div>

        <div className='flex flex-col gap-4 px-4 py-4 text-xs'>
          <section>
            <div className='flex items-center gap-2'>
              <span className='text-muted-foreground font-mono text-[10px] tracking-[0.16em]'>
                01
              </span>
              <Globe2 className='size-3.5' />
              <h4 className='text-[13px] font-semibold'>{t('FX discount')}</h4>
            </div>
            <p className='text-muted-foreground mt-1.5 leading-5'>
              {t('Platform bills 1:1 — $1 of quota = ¥1 of balance.')}
            </p>
            <ul className='mt-2 flex flex-col gap-1.5'>
              <li className='text-foreground/85'>
                {t(
                  'Overseas models priced in USD → you skip one FX leg. FX discount = 1 ÷ exchange-rate.'
                )}
              </li>
              <li className='text-foreground/85'>
                {t(
                  'Domestic models priced in CNY → no FX leg to skip. FX discount = 1.'
                )}
              </li>
            </ul>
            <div className='border-border mt-2.5 flex items-center justify-between border px-2.5 py-1.5 font-mono text-[11px] tabular-nums'>
              <span className='text-muted-foreground'>{t('current rate')}</span>
              <span>1 USD = ¥{formatRatio(usdExchangeRate, 2)}</span>
              <span>→ {formatRatio(fxDiscount)}</span>
            </div>
          </section>

          <section>
            <div className='flex items-center gap-2'>
              <span className='text-muted-foreground font-mono text-[10px] tracking-[0.16em]'>
                02
              </span>
              <Layers className='size-3.5' />
              <h4 className='text-[13px] font-semibold'>
                {t('Group multiplier')}
              </h4>
            </div>
            <p className='text-muted-foreground mt-1.5 leading-5'>
              {t(
                'Each token group carries a billing multiplier — the lower it is, the cheaper you pay. e.g. ratio 0.5 means 50% off.'
              )}
            </p>
            {sortedGroups.length > 0 && (
              <div className='border-border mt-2.5 max-h-32 overflow-y-auto border'>
                <div className='text-muted-foreground grid grid-cols-[1fr_auto_auto] gap-x-3 px-2.5 py-1.5 text-[10px] font-medium tracking-[0.14em] uppercase'>
                  <span>{t('group')}</span>
                  <span>{t('ratio')}</span>
                  <span>{t('discount')}</span>
                </div>
                {sortedGroups.map(([name, ratio]) => (
                  <div
                    key={name}
                    className='border-border grid grid-cols-[1fr_auto_auto] gap-x-3 border-t px-2.5 py-1 font-mono text-[11px] tabular-nums'
                  >
                    <span className='truncate'>{name}</span>
                    <span>{formatRatio(ratio, 3)}</span>
                    <span>
                      {ratioToOff(ratio)} {t('折')}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </section>

          <section className='border-border -mx-4 -mb-4 border-t px-4 py-3'>
            <h4 className='text-[13px] font-semibold'>
              {t('Combined discount')}
            </h4>
            <p className='text-muted-foreground mt-1.5 leading-5'>
              {t('Final = FX discount × group multiplier')}
            </p>
            {sortedGroups.length > 0 && (
              <div className='mt-2 font-mono text-[11px] tabular-nums'>
                <span className='text-muted-foreground'>
                  {t('best case')}:&nbsp;
                </span>
                <span>
                  {formatRatio(fxDiscount)} × {formatRatio(bestGroupRatio, 3)}
                </span>
                <span className='text-muted-foreground'> = </span>
                <span className='font-semibold'>
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
