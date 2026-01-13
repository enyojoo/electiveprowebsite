import type { Metadata } from 'next'
import Link from 'next/link'
import { Github, Code, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BRAND_NAME } from '@/lib/brand-constants'

export const metadata: Metadata = {
  title: 'Open Source - ElectivePRO',
  description: `${BRAND_NAME} is open-source and free to use. Deploy it yourself, customize it, and contribute back to the community.`,
}

export default function OpenSourcePage() {
  return (
    <div className="bg-background pt-12 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Open Source. Community Driven.
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground px-2 sm:px-0">
            {BRAND_NAME} is open-source and free to use. Deploy it yourself, customize it to automate elective course selections, and contribute back to the community.
          </p>
          <div className="mt-8 sm:mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="text-sm sm:text-base">
              <Link href="https://github.com/enyojoo/electivepronew" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Star on GitHub
              </Link>
            </Button>
          </div>
        </div>

        {/* Why Open Source */}
        <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 max-w-3xl px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Why Open Source?</h2>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Transparency</CardTitle>
                <CardDescription>
                  View the source code, understand how it works, and verify security. See exactly how your elective course selection data is handled.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Customization</CardTitle>
                <CardDescription>
                  Modify and extend {BRAND_NAME} to fit your specific needs and requirements. Customize workflows to match your university's processes.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Community</CardTitle>
                <CardDescription>
                  Join a growing community of developers, educators, and universities. Share improvements and benefit from collective innovation.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>No Vendor Lock-in</CardTitle>
                <CardDescription>
                  Own your data and infrastructure. Deploy anywhere, anytime. Your elective course selection data stays under your control.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Quick Start */}
        <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 max-w-3xl px-4 sm:px-0">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                <CardTitle className="text-lg sm:text-xl">Quick Start</CardTitle>
              </div>
              <CardDescription className="text-sm sm:text-base">Get started in minutes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg bg-muted p-3 sm:p-4 font-mono text-xs sm:text-sm overflow-x-auto">
                <div className="space-y-2 min-w-0">
                  <div>
                    <span className="text-muted-foreground"># Clone the repository</span>
                  </div>
                  <div className="break-all sm:break-normal">
                    <span className="text-foreground">git clone https://github.com/enyojoo/electivepronew.git</span>
                  </div>
                  <div className="pt-4">
                    <span className="text-muted-foreground"># Install dependencies</span>
                  </div>
                  <div>
                    <span className="text-foreground">npm install</span>
                  </div>
                  <div className="pt-4">
                    <span className="text-muted-foreground"># Start development server</span>
                  </div>
                  <div>
                    <span className="text-foreground">npm run dev</span>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm text-muted-foreground text-center">
                For detailed setup instructions, see the{' '}
                <Link 
                  href="https://github.com/enyojoo/electivepronew/blob/main/README.md" 
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  README.md
                </Link>
                {' '}on GitHub.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contributing */}
        <div className="mx-auto mt-24 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Contributing</h2>
          <p className="text-center text-muted-foreground mb-8">
            We welcome contributions! Whether it's code, documentation, or feedback, your help makes {BRAND_NAME} better for automating elective course selections.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Report Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Found a bug? Report it on GitHub Issues.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Submit PRs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Have a fix or feature? Submit a pull request.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Improve Docs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Help improve our documentation and guides.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <Button asChild>
              <Link href="https://github.com/enyojoo/electivepronew/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">
                View Contributing Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* License */}
        <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 max-w-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">License</h2>
          <p className="text-muted-foreground">
            {BRAND_NAME} is licensed under the{' '}
            <Link href="https://github.com/enyojoo/electivepronew/blob/main/LICENSE" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
              GNU Affero General Public License v3.0
            </Link>
            {' '}(AGPL-3.0). This means you're free to use, modify, and distribute {BRAND_NAME}, even for commercial purposes. See the{' '}
            <Link href="https://github.com/enyojoo/electivepronew/blob/main/LICENSE" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
              LICENSE file
            </Link>
            {' '}on GitHub for full details.
          </p>
        </div>
      </div>
    </div>
  )
}
