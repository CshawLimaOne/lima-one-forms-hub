import {
  FileText, Home, HardHat, ClipboardList, CheckSquare,
  BarChart2, UserCog, UserPlus, ArrowRight, Clock,
  Calculator, Building2,
  type LucideIcon,
} from 'lucide-react'
import { clsx } from 'clsx'
import type { FormEntry } from '../forms.config'

const ICON_MAP: Record<string, LucideIcon> = {
  FileText, Home, HardHat, ClipboardList, CheckSquare,
  BarChart2, UserCog, UserPlus, Calculator, Building2,
}

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  Valuations:   { bg: 'bg-[#E5E9FF]', text: 'text-[#1C39D8]' },
  Construction: { bg: 'bg-[#FFF5DB]', text: 'text-[#EAA800]' },
  HR:           { bg: 'bg-[#E1F7E4]', text: 'text-[#139B23]' },
  Operations:   { bg: 'bg-[#F6F7F9]', text: 'text-[#78819D]' },
}

interface FormCardProps {
  form: FormEntry
}

export function FormCard({ form }: FormCardProps) {
  const Icon = ICON_MAP[form.icon] ?? FileText
  const isLive = form.status === 'live'
  const catColor = CATEGORY_COLORS[form.category] ?? CATEGORY_COLORS.Operations

  const cardContent = (
    <div
      className={clsx(
        'group bg-white rounded-xl border p-5 flex flex-col gap-3 transition-all h-full',
        isLive
          ? 'border-[#DFE1E5] hover:shadow-md hover:border-[#1C39D8]/30 cursor-pointer'
          : 'border-[#DFE1E5] opacity-60 cursor-not-allowed',
      )}
    >
      {/* Top row: icon + badges */}
      <div className="flex items-start justify-between">
        <div
          className={clsx(
            'rounded-lg p-2.5',
            isLive ? 'bg-[#1C39D8]' : 'bg-[#DFE1E5]',
          )}
        >
          <Icon size={20} className={isLive ? 'text-white' : 'text-[#78819D]'} />
        </div>
        <div className="flex items-center gap-1.5 flex-wrap justify-end">
          {form.featured && isLive && (
            <span className="bg-[#E5E9FF] text-[#1C39D8] text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
              ★ Featured
            </span>
          )}
          <span className={clsx('text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full', catColor.bg, catColor.text)}>
            {form.category}
          </span>
        </div>
      </div>

      {/* Name + description */}
      <div className="flex-1">
        <h3 className="font-bold text-[#1E2D5C] text-sm mb-1">{form.name}</h3>
        <p className="text-xs text-[#78819D] leading-relaxed">{form.description}</p>
      </div>

      {/* CTA row */}
      <div className="pt-1 border-t border-[#DFE1E5]">
        {isLive ? (
          <span className="flex items-center gap-1 text-xs font-semibold text-[#1C39D8] group-hover:gap-2 transition-all">
            Open form <ArrowRight size={12} />
          </span>
        ) : (
          <span className="flex items-center gap-1 text-xs font-medium text-[#BCBFC7]">
            <Clock size={12} /> Coming soon
          </span>
        )}
      </div>
    </div>
  )

  if (isLive) {
    return (
      <a href={form.url} target="_blank" rel="noopener noreferrer" className="block h-full">
        {cardContent}
      </a>
    )
  }

  return <div className="h-full">{cardContent}</div>
}
