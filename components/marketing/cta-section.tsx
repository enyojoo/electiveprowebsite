"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface CTASectionProps {
  title?: string
  description?: string
  primaryAction?: {
    label: string
    href: string
  }
  secondaryAction?: {
    label: string
    href: string
  }
}

export function CTASection({
  title = "Ready to Get Started?",
  description = "Start your free trial today. Or deploy it yourself for free.",
  primaryAction = { label: "Start Free Trial", href: "/pricing" },
  secondaryAction = { label: "Self-Host for Free", href: "/open-source" },
}: CTASectionProps) {
  return (
    <section className="w-full py-12 md:py-16 border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground">{description}</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href={primaryAction.href}>
                {primaryAction.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            {secondaryAction && (
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href={secondaryAction.href}>{secondaryAction.label}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
