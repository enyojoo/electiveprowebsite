import type { Metadata } from 'next'
import PricingClient from './PricingClient'
import { BRAND_NAME } from '@/lib/brand-constants'

export const metadata: Metadata = {
  title: 'Pricing - ElectivePRO',
  description: `Choose the right ${BRAND_NAME} plan for your institution. Starter plan for small colleges, Professional for medium universities, and Enterprise for large multi-campus systems.`,
  openGraph: {
    title: 'Pricing - ElectivePRO',
    description: `Choose the right ${BRAND_NAME} plan for your institution. Starter plan for small colleges, Professional for medium universities, and Enterprise for large multi-campus systems.`,
  },
  twitter: {
    card: 'summary',
    title: 'Pricing - ElectivePRO',
    description: `Choose the right ${BRAND_NAME} plan for your institution.`,
  },
}

export default function PricingPage() {
  return <PricingClient />
}
