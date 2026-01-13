# ElectivePRO Website - Deployment Guide

## 🚀 Deploying to Vercel

This project is now configured for optimal deployment on Vercel with Next.js and Turbo.

### Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **Git Repository**: Push your code to GitHub, GitLab, or Bitbucket
3. **Stripe Account**: For payment processing
4. **PostHog Account**: For analytics (optional)

### Quick Deploy

1. **Connect Repository**:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your repository
   - Vercel will auto-detect Next.js

2. **Configure Environment Variables**:
   Set these in Vercel's dashboard or CLI:

   ```bash
   # Required - Stripe
   STRIPE_SECRET_KEY=sk_live_...
   STRIPE_WEBHOOK_SECRET=whsec_...

   # Required - Stripe Price IDs
   NEXT_PUBLIC_STRIPE_PRICE_STARTER_MONTHLY=price_...
   NEXT_PUBLIC_STRIPE_PRICE_STARTER_YEARLY=price_...
   NEXT_PUBLIC_STRIPE_PRICE_PROFESSIONAL_MONTHLY=price_...
   NEXT_PUBLIC_STRIPE_PRICE_PROFESSIONAL_YEARLY=price_...

   # Optional - Analytics
   NEXT_PUBLIC_POSTHOG_KEY=phc_...
   NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
   ```

### Build Configuration

The project includes:
- ✅ **Turbo**: For build caching and optimization
- ✅ **Next.js 16**: With App Router and optimized settings
- ✅ **TypeScript**: Full type checking
- ✅ **Tailwind CSS**: For styling
- ✅ **Standalone output**: For better cold starts on Vercel

### Custom Domain (Optional)

To use `electivepro.net`:

1. In Vercel dashboard → Settings → Domains
2. Add `electivepro.net`
3. Configure DNS records as instructed

### Webhook Configuration

For Stripe webhooks to work:

1. Set webhook endpoint URL: `https://your-domain.vercel.app/api/stripe/webhook`
2. Copy the webhook secret to `STRIPE_WEBHOOK_SECRET`

### Performance Optimizations

- **Image Optimization**: Automatic WebP/AVIF conversion
- **Static Generation**: Marketing pages pre-rendered
- **Edge Functions**: API routes optimized for Vercel
- **Build Caching**: Turbo caches unchanged dependencies

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Type checking
npm run type-check

# Linting
npm run lint
```

### Environment Variables Setup

Copy `env.example` to `.env.local` and fill in your values:

```bash
cp env.example .env.local
```

### Troubleshooting

**Build Fails**:
- Check environment variables are set
- Verify Stripe keys are correct
- Run `npm run type-check` locally

**Webhook Issues**:
- Ensure webhook URL matches Vercel domain
- Verify `STRIPE_WEBHOOK_SECRET` is correct

**Performance**:
- Enable Vercel's analytics for monitoring
- Check build logs for optimization suggestions

### Support

- Vercel Docs: [nextjs.org/deployment](https://nextjs.org/deployment)
- Stripe Docs: [stripe.com/docs](https://stripe.com/docs)
- PostHog Docs: [posthog.com/docs](https://posthog.com/docs)