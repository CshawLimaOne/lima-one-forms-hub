import { useState, useMemo } from 'react'
import { Search, X, Layers, BookOpen, Github } from 'lucide-react'
import { clsx } from 'clsx'
import { FORMS, CATEGORIES, type FormCategory } from '../forms.config'
import { FormCard } from '../components/FormCard'

const CATEGORY_ICONS: Record<FormCategory, string> = {
  Valuations:   '📊',
  Construction: '🏗️',
  Operations:   '⚙️',
}

export function HubPage() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<FormCategory | 'All'>('All')

  const filtered = useMemo(() => {
    return FORMS.filter((f) => {
      const matchesCategory = activeCategory === 'All' || f.category === activeCategory
      const q = query.toLowerCase()
      const matchesQuery =
        !q ||
        f.name.toLowerCase().includes(q) ||
        f.description.toLowerCase().includes(q) ||
        f.category.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
  }, [query, activeCategory])

  const liveForms = filtered.filter((f) => f.status === 'live')
  const comingSoon = filtered.filter((f) => f.status === 'coming-soon')

  const totalLive = FORMS.filter((f) => f.status === 'live').length
  const totalForms = FORMS.length

  return (
    <div className="min-h-screen font-sans flex flex-col lg:flex-row">

      {/* ── LEFT COLUMN ─────────────────────────────────────────────────── */}
      <div className="flex-none lg:w-[420px] xl:w-[460px] flex flex-col justify-between px-8 sm:px-12 lg:px-14 py-12 lg:py-16 bg-white border-r border-[#DFE1E5]">
        <div>
          {/* Logo */}
          <div className="mb-10">
            <img
              src="/lima-one-logo.webp"
              alt="Lima One Capital"
              className="h-[46px] object-contain"
            />
          </div>

          {/* Platform label */}
          <p className="text-xs font-semibold uppercase tracking-widest text-[#78819D] mb-4">
            Internal Forms Platform
          </p>

          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 bg-[#E5E9FF] rounded-full px-4 py-1.5 mb-6 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#1C39D8] animate-pulse" />
            <span className="text-xs font-semibold text-[#1C39D8]">
              Forms Hub · Lima One Capital
            </span>
          </div>

          {/* Hero */}
          <h1 className="text-4xl font-semibold tracking-tight leading-tight mb-4">
            <span className="text-[#1E2D5C]">Every Lima One</span>
            <br />
            <span className="text-[#1E2D5C]">Form,</span>
            <br />
            <span className="text-[#1C39D8]">One Place.</span>
          </h1>

          <p className="text-base text-[#78819D] mb-10 leading-relaxed">
            Find, open, and submit any Lima One Capital form in seconds — from borrower ROV
            requests to contractor onboarding and operations workflows.
          </p>

          {/* Stats card */}
          <div className="bg-white rounded-xl border border-[#DFE1E5] shadow-sm p-5 mb-8">
            <div className="grid grid-cols-3 divide-x divide-[#DFE1E5]">
              <div className="text-center px-3">
                <p className="text-2xl font-extrabold text-[#1E2D5C]">{totalLive}</p>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[#78819D] mt-0.5">Live Forms</p>
              </div>
              <div className="text-center px-3">
                <p className="text-2xl font-extrabold text-[#1E2D5C]">{totalForms}</p>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[#78819D] mt-0.5">Total Forms</p>
              </div>
              <div className="text-center px-3">
                <p className="text-2xl font-extrabold text-[#1E2D5C]">{CATEGORIES.length}</p>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[#78819D] mt-0.5">Categories</p>
              </div>
            </div>
          </div>

          {/* Category quick-links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#78819D] mb-3">
              Browse by Department
            </p>
            <div className="flex flex-col gap-2">
              {CATEGORIES.map((cat) => {
                const count = FORMS.filter((f) => f.category === cat).length
                const liveCount = FORMS.filter((f) => f.category === cat && f.status === 'live').length
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={clsx(
                      'flex items-center justify-between rounded-lg px-4 py-2.5 text-sm font-medium transition text-left',
                      activeCategory === cat
                        ? 'bg-[#E5E9FF] text-[#1C39D8]'
                        : 'bg-[#F6F7F9] text-[#1E2D5C] hover:bg-[#EBEDF2]',
                    )}
                  >
                    <span className="flex items-center gap-2.5">
                      <span>{CATEGORY_ICONS[cat]}</span>
                      {cat}
                    </span>
                    <span className="text-xs text-[#78819D]">{liveCount}/{count}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Footer links */}
        <div className="mt-10 pt-6 border-t border-[#DFE1E5] flex items-center gap-4">
          <a
            href="https://github.com/CshawLimaOne/limaone-claude-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#78819D] hover:text-[#1C39D8] transition"
          >
            <Github size={13} />
            Skills Repo
          </a>
          <span className="text-[#DFE1E5]">·</span>
          <a
            href="https://claude.ai/claude-code/onboard/12lUOQJ7cNc6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#78819D] hover:text-[#1C39D8] transition"
          >
            <BookOpen size={13} />
            Onboarding Guide
          </a>
        </div>
      </div>

      {/* ── RIGHT COLUMN ────────────────────────────────────────────────── */}
      <div className="flex-1 bg-[#F4F5F7] px-6 sm:px-10 py-10 lg:py-14 overflow-y-auto">

        {/* Search bar */}
        <div className="relative mb-5">
          <Search
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#78819D] pointer-events-none"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search forms by name, category, or description…"
            className="w-full bg-white rounded-xl border border-[#DFE1E5] pl-10 pr-10 py-3 text-sm text-[#1E2D5C] placeholder:text-[#BCBFC7] focus:outline-none focus:ring-2 focus:ring-[#1C39D8] focus:border-transparent shadow-sm transition"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#78819D] hover:text-[#1E2D5C] transition"
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* Category filter pills */}
        <div className="flex gap-2 flex-wrap mb-8">
          {(['All', ...CATEGORIES] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={clsx(
                'px-4 py-1.5 rounded-full text-xs font-semibold transition',
                activeCategory === cat
                  ? 'bg-[#1C39D8] text-white shadow-sm'
                  : 'bg-white border border-[#DFE1E5] text-[#78819D] hover:border-[#1C39D8] hover:text-[#1C39D8]',
              )}
            >
              {cat !== 'All' && <span className="mr-1">{CATEGORY_ICONS[cat]}</span>}
              {cat}
            </button>
          ))}
        </div>

        {/* No results */}
        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Layers size={36} className="text-[#DFE1E5] mb-3" />
            <p className="text-sm font-semibold text-[#1E2D5C] mb-1">No forms found</p>
            <p className="text-xs text-[#78819D]">Try a different search term or category.</p>
          </div>
        )}

        {/* Live forms */}
        {liveForms.length > 0 && (
          <section className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#78819D] mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#139B23]" />
              Available Now
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {liveForms.map((form) => (
                <FormCard key={form.id} form={form} />
              ))}
            </div>
          </section>
        )}

        {/* Coming soon */}
        {comingSoon.length > 0 && (
          <section>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#78819D] mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BCBFC7]" />
              Coming Soon
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {comingSoon.map((form) => (
                <FormCard key={form.id} form={form} />
              ))}
            </div>
          </section>
        )}

        {/* Add form hint */}
        <div className="mt-10 rounded-xl border border-dashed border-[#DFE1E5] p-5 flex items-start gap-3 bg-white/50">
          <span className="text-lg mt-0.5">➕</span>
          <div>
            <p className="text-xs font-semibold text-[#1E2D5C] mb-0.5">Need to add a new form?</p>
            <p className="text-xs text-[#78819D] leading-relaxed">
              Open <code className="bg-[#F6F7F9] px-1 py-0.5 rounded text-[#1C39D8]">src/forms.config.ts</code> and
              add an entry to the <code className="bg-[#F6F7F9] px-1 py-0.5 rounded text-[#1C39D8]">FORMS</code> array.
              Set <code className="bg-[#F6F7F9] px-1 py-0.5 rounded text-[#1C39D8]">status: 'coming-soon'</code> while
              building and switch to <code className="bg-[#F6F7F9] px-1 py-0.5 rounded text-[#1C39D8]">'live'</code> once deployed.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
