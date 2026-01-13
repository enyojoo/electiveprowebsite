'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface PricingTier {
  name: string
  price: {
    monthly: string
    yearly: string
  }
  priceId?: {
    monthly: string
    yearly: string
  }
  description: string
  features: string[]
  cta: string
  ctaLink: string
  popular?: boolean
  external?: boolean
}

interface PricingCardProps {
  tier: PricingTier
  billingPeriod: 'monthly' | 'yearly'
}

export function PricingCard({ tier, billingPeriod }: PricingCardProps) {
  const price = tier.price[billingPeriod]
  const priceId = tier.priceId?.[billingPeriod] || ''

  return (
    <Card className={cn(
      'flex flex-col h-full relative transition-all duration-300',
      tier.popular 
        ? 'border-primary border-2 shadow-xl bg-gradient-to-b from-primary/5 via-primary/3 to-background ring-2 ring-primary/20' 
        : 'border-border hover:border-primary/50 hover:shadow-md'
    )}>
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <div className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg whitespace-nowrap">
            Most Popular
          </div>
        </div>
      )}
      <CardHeader className={cn('relative', tier.popular && 'pt-6')}>
        <CardTitle className="text-2xl">{tier.name}</CardTitle>
        <CardDescription>{tier.description}</CardDescription>
        <div className="mt-4">
          <span className="text-4xl font-bold">{price}</span>
          {price !== 'Custom' && price !== 'Free' && (
            <span className="text-muted-foreground">/{billingPeriod === 'monthly' ? 'month' : 'year'}</span>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <ul className="space-y-3">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start">
              <Check className={cn(
                "mr-2 h-5 w-5 flex-shrink-0",
                tier.popular ? "text-primary" : "text-primary"
              )} />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        {tier.external ? (
          <Button asChild className={cn('w-full', tier.popular && 'bg-primary hover:bg-primary/90')} size="lg">
            <a href={tier.ctaLink} target="_blank" rel="noopener noreferrer">
              {tier.cta}
            </a>
          </Button>
        ) : (
          <Button asChild className={cn('w-full', tier.popular && 'bg-primary hover:bg-primary/90')} size="lg">
            <Link href={tier.ctaLink}>{tier.cta}</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
