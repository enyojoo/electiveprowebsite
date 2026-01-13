import type { Metadata } from 'next'
import ContactClient from './ContactClient'
import { BRAND_NAME } from '@/lib/brand-constants'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${BRAND_NAME}. Schedule a meeting, send us an email, or learn more about our elective course selection platform.`,
}

export default function ContactPage() {
  return <ContactClient />
}
