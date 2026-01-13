import { Hero } from "@/components/marketing/hero"
import { Features } from "@/components/marketing/features"
import { BRAND_DESCRIPTION, BRAND_LOGO_URL } from "@/lib/brand-constants"

export const metadata = {
  description: BRAND_DESCRIPTION,
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ElectivePRO',
  url: 'https://electivepro.net',
  logo: BRAND_LOGO_URL,
  description: 'Free, modern open-source platform for automating elective course selection. Reduce administrative workload by 50% and eliminate scheduling errors.',
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
