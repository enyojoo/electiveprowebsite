import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Server, Shield, Zap, Database, Cloud, Palette } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BRAND_NAME } from '@/lib/brand-constants'

export const metadata: Metadata = {
  title: 'Hosted Service',
  description: `Get ${BRAND_NAME} as a fully managed hosted solution. Zero infrastructure management, automatic updates, enterprise security, and dedicated support.`,
}

const benefits = [
  {
    icon: Zap,
    title: 'Zero Setup Time',
    description: 'Get started in minutes, not weeks. We handle all the infrastructure setup and configuration for your elective course selection system.',
  },
  {
    icon: Server,
    title: 'Managed Infrastructure',
    description: 'We manage servers, databases, backups, and updates so you can focus on your students and course offerings.',
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Enterprise-grade security with regular updates, SSL certificates, and compliance standards (FERPA, GDPR).',
  },
  {
    icon: Palette,
    title: 'Custom Branding',
    description: 'We customize your platform with your own branding - name, logos, favicon, and colors.',
  },
  {
    icon: Database,
    title: 'Automatic Backups',
    description: 'Your student data and course selections are automatically backed up daily with point-in-time recovery options.',
  },
  {
    icon: Cloud,
    title: 'Scalable Infrastructure',
    description: 'Scale seamlessly as your student enrollment grows without worrying about infrastructure limits during peak selection periods.',
  },
]

export default function HostedPage() {
  return (
    <div className="bg-background pt-12 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Hosted Service
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground px-2 sm:px-0">
            Let us handle the infrastructure while you focus on automating elective course selections and improving student experience.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-x-6">
            <Button asChild size="lg" className="text-sm sm:text-base w-full sm:w-auto">
              <Link href="/pricing">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-sm sm:text-base w-full sm:w-auto">
              <Link href="/contact">
                Schedule Demo
              </Link>
            </Button>
          </div>
        </div>

        {/* Benefits */}
        <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Why Choose Hosted?</h2>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <Card key={benefit.title} className="h-full">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl">{benefit.title}</CardTitle>
                    <CardDescription className="mt-2 text-sm sm:text-base">{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
