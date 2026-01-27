import type { Metadata } from 'next'
import ContactClient from './ContactClient'
import { BRAND_NAME } from '@/lib/brand-constants'

export const metadata: Metadata = {
  title: 'Get Started with ElectivePRO Demo Call',
  description: `Get in touch with ${BRAND_NAME}. Schedule a meeting, send us an email, or learn more about our elective course selection platform.`,
  openGraph: {
    title: 'Get Started with ElectivePRO Demo Call',
    description: `Get in touch with ${BRAND_NAME}. Schedule a meeting, send us an email, or learn more about our elective course selection platform.`,
  },
  twitter: {
    card: 'summary',
    title: 'Get Started with ElectivePRO Demo Call',
    description: `Get in touch with ${BRAND_NAME}.`,
  },
}

export default function ContactPage() {
  return <ContactClient />
}
