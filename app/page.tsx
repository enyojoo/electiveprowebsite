import type { Metadata } from "next"
import { Hero } from "@/components/marketing/hero"
import { Features } from "@/components/marketing/features"
import { BRAND_DESCRIPTION, BRAND_LOGO_URL, BRAND_NAME } from "@/lib/brand-constants"

export const metadata: Metadata = {
  title: 'ElectivePRO - Automate Elective Course Selection',
  description: BRAND_DESCRIPTION,
  openGraph: {
    title: 'ElectivePRO - Automate Elective Course Selection',
    description: BRAND_DESCRIPTION,
    images: [BRAND_LOGO_URL],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ElectivePRO - Automate Elective Course Selection',
    description: BRAND_DESCRIPTION,
    images: [BRAND_LOGO_URL],
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ElectivePRO',
  legalName: 'ElectivePRO',
  url: 'https://www.electivepro.net',
  logo: BRAND_LOGO_URL,
  description: BRAND_DESCRIPTION,
  sameAs: [
    'https://github.com/enyojoo/electivepronew',
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Hero />
      <Features />
    </>
  )
}
