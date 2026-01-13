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

  return (
    <div className="bg-background pt-12 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Schedule a Meeting
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground">
            Book a time that works for you and let's discuss how ElectivePRO can help automate your elective course selection process.
          </p>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground">
            Or send an email:{' '}
            <a href={`mailto:${BRAND_CONTACT_EMAIL}`} className="text-primary hover:underline font-semibold">
              {BRAND_CONTACT_EMAIL}
            </a>
          </p>
        </div>
        <div className="w-full" style={{ minHeight: '600px' }}>
          <Cal
            namespace="15min"
            calLink="enyosam/15min"
            style={{ width: '100%', height: '100%', overflow: 'scroll' }}
            config={{ 
              layout: 'month_view',
              theme: 'light',
              primaryColor: BRAND_PRIMARY_COLOR
            }}
          />
        </div>
      </div>
    </div>
  )
}
