// ─────────────────────────────────────────────────────────────────────────────
// LIMA ONE CAPITAL — FORMS REGISTRY
//
// To add a new form:
//   1. Copy one of the entries below
//   2. Fill in the fields (id must be unique)
//   3. Set status: 'live' once the form is deployed, 'coming-soon' while in progress
//   4. Save and redeploy (npm run build → vercel --prod)
// ─────────────────────────────────────────────────────────────────────────────

export type FormCategory = 'Valuations' | 'Construction' | 'Operations'

export type FormStatus = 'live' | 'coming-soon'

export interface FormEntry {
  id: string
  name: string
  description: string
  category: FormCategory
  icon: string        // lucide-react icon name
  url: string         // full URL when status is 'live'; ignored when 'coming-soon'
  status: FormStatus
  featured?: boolean  // shows ★ badge, appears first in its category
}

export const FORMS: FormEntry[] = [
  // ── VALUATIONS ───────────────────────────────────────────────────────────
  {
    id: 'rov-sales',
    name: 'ROV — Sales',
    description: 'Submit proposed comparable sales for a Reconsideration of Value on sold properties.',
    category: 'Valuations',
    icon: 'FileText',
    url: 'https://lima-rov-form.vercel.app/',
    status: 'live',
    featured: true,
  },
  {
    id: 'rov-rental',
    name: 'ROV — Rental',
    description: 'Submit proposed rental comparables for a Reconsideration of Value on leased properties.',
    category: 'Valuations',
    icon: 'Home',
    url: 'https://lima-rov-form.vercel.app/',
    status: 'live',
  },

  // ── CONSTRUCTION ─────────────────────────────────────────────────────────
  {
    id: 'contractor-profile',
    name: 'Contractor Profile',
    description: 'Complete your one-time contractor onboarding profile for Lima One Capital construction projects.',
    category: 'Construction',
    icon: 'HardHat',
    url: 'https://contractor-profile.limaone.com',
    status: 'live',
    featured: true,
  },
  {
    id: 'construction-budget',
    name: 'Construction Budget',
    description: 'Submit and manage construction budget templates for Lima One Capital lending projects.',
    category: 'Construction',
    icon: 'Calculator',
    url: 'https://construction-budget-dev.jollydune-43b02553.eastus2.azurecontainerapps.io/',
    status: 'live',
  },
  {
    id: 'gc-onboarding',
    name: 'GC Onboarding',
    description: 'General contractor onboarding form — experience, licensing, and capability statement.',
    category: 'Construction',
    icon: 'ClipboardList',
    url: '',
    status: 'coming-soon',
  },
  {
    id: 'gc-review',
    name: 'GC Review',
    description: 'Internal general contractor review and approval form for construction management.',
    category: 'Construction',
    icon: 'CheckSquare',
    url: '',
    status: 'coming-soon',
  },
  {
    id: 'feasibility-review',
    name: 'Feasibility Review',
    description: 'Submit a project feasibility review request for construction budget analysis.',
    category: 'Construction',
    icon: 'BarChart2',
    url: '',
    status: 'coming-soon',
  },

  // ── OPERATIONS ───────────────────────────────────────────────────────────
  {
    id: 'sreo',
    name: 'SREO',
    description: 'Schedule of Real Estate Owned — submit residential and multi-family property schedules.',
    category: 'Operations',
    icon: 'Building2',
    url: 'https://sreo.vercel.app/',
    status: 'live',
    featured: true,
  },
]

export const CATEGORIES: FormCategory[] = ['Valuations', 'Construction', 'Operations']
