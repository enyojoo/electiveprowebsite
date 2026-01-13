"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const pricingTiers = [
  {
    name: "Open Source",
    price: "Free",
    description: "Self-hosted solution with full source code access",
    bestFor: "Universities with IT resources and customization needs",
    valueProp: "Complete control over your data and infrastructure. Customize every aspect to fit your unique requirements.",
    features: [
      "Complete source code access",
      "Self-hostable on your infrastructure",
      "All core features included",
      "Community support via GitHub",
      "AGPL-3.0 License",
      "Fully customizable",
      "No vendor lock-in",
    ],
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_OPEN_SOURCE,
    cta: "View on GitHub",
    href: "https://github.com/enyojoo/electivepronew",
    external: true,
  },
  {
    name: "Hosted",
    price: "Custom",
    description: "Fully managed hosted solution",
    bestFor: "Universities wanting zero infrastructure management",
    valueProp: "Focus on education, not IT. We handle setup, maintenance, updates, and support so you can focus on your students.",
    features: [
      "Fully managed hosting & infrastructure",
      "Automatic updates & maintenance",
      "Priority support & dedicated account manager",
      "Custom branding & white-label options",
      "Dedicated infrastructure & scaling",
      "SLA guarantee (99.9% uptime)",
      "Daily backups & disaster recovery",
      "Security monitoring & compliance",
    ],
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_HOSTED,
    cta: "Contact Sales",
    href: "/contact",
    external: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="container space-y-8 py-12 md:py-16">
      <div className="mx-auto max-w-2xl space-y-3 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          Choose the Right Solution for Your University
        </h2>
        <p className="text-lg text-muted-foreground">
          Start free with our open-source solution, or let us handle everything with our fully managed hosted service. Both include all core features.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {pricingTiers.map((tier) => (
          <Card key={tier.name} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">{tier.name}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">{tier.price}</span>
                {tier.price !== "Free" && tier.price !== "Custom" && (
                  <span className="text-muted-foreground">/month</span>
                )}
              </div>
              <div className="mt-2">
                <p className="text-sm font-medium text-muted-foreground">
                  Best for: {tier.bestFor}
                </p>
              </div>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <p className="text-sm text-muted-foreground">{tier.valueProp}</p>
              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              {tier.external ? (
                <Button asChild className="w-full" size="lg">
                  <a href={tier.href} target="_blank" rel="noopener noreferrer">
                    {tier.cta}
                  </a>
                </Button>
              ) : (
                <Button asChild className="w-full" size="lg">
                  <a href={tier.href}>{tier.cta}</a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
