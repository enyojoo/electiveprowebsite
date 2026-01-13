import type { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Users, BarChart3, Settings, Globe, FileText, Calendar, CheckCircle2, Search, Clock, Zap, Shield, Database, Upload, Eye, ListChecks, TrendingUp, Building2, MapPin, Briefcase } from 'lucide-react'
import { BRAND_NAME } from '@/lib/brand-constants'

export const metadata: Metadata = {
  title: 'Features - ElectivePRO',
  description: `Explore the comprehensive features of ${BRAND_NAME}. Automate elective course selection, reduce administrative burden, and improve student experience.`,
}

const featureCategories = [
  {
    title: 'Course Selection Management',
    description: 'Automate and streamline elective course selection processes',
    features: [
      {
        name: 'Course Builder',
        description: 'Build elective course packs with drag-and-drop simplicity. Organize by academic year and reduce setup time by 80%.',
        icon: BookOpen,
      },
      {
        name: 'Selection Periods',
        description: 'Configure selection windows with start dates, deadlines, and capacity limits. Manage selection periods by academic year and semester.',
        icon: Calendar,
      },
      {
        name: 'Selection Rules',
        description: 'Set maximum course selections per student and manage capacity limits. Control who can select which courses based on groups and programs.',
        icon: CheckCircle2,
      },
      {
        name: 'Course Management',
        description: 'Create and manage hundreds of courses efficiently. Organize by degree, assign instructors, and track course details in multiple languages.',
        icon: Upload,
      },
    ],
  },
  {
    title: 'Exchange Programs',
    description: 'Manage international exchange opportunities',
    features: [
      {
        name: 'Exchange Builder',
        description: 'Create and manage exchange program opportunities. Track partnerships and program details.',
        icon: Building2,
      },
      {
        name: 'Application Management',
        description: 'Manage exchange applications with automated workflows and deadline tracking.',
        icon: Briefcase,
      },
      {
        name: 'University Partnerships',
        description: 'Centralize partner university information and manage relationships efficiently.',
        icon: MapPin,
      },
      {
        name: 'Selection Tracking',
        description: 'Track student exchange selections and manage the entire exchange process from one platform.',
        icon: TrendingUp,
      },
    ],
  },
  {
    title: 'Student Experience',
    description: 'Modern self-service portal for students',
    features: [
      {
        name: 'Self-Service Portal',
        description: 'Modern, mobile-responsive portal accessible 24/7. Students browse, select, and track applications independently.',
        icon: Users,
      },
      {
        name: 'Real-Time Status',
        description: 'Students see real-time selection status (pending, approved, rejected) and receive approval notifications instantly.',
        icon: Eye,
      },
      {
        name: 'Course Discovery',
        description: 'Intuitive browsing with filters, search, and course details. Help students find the perfect electives.',
        icon: Search,
      },
      {
        name: 'Application Tracking',
        description: 'Students track all their selections, view history, and receive automated email updates.',
        icon: ListChecks,
      },
    ],
  },
  {
    title: 'Administrative Tools',
    description: 'Powerful tools for administrators and program managers',
    features: [
      {
        name: 'Approval Workflows',
        description: 'Approve or reject selections in seconds with clear overview. Automated notifications keep everyone informed.',
        icon: Zap,
      },
      {
        name: 'Analytics Dashboard',
        description: 'Real-time analytics on selection trends, popular courses, capacity utilization, and student statistics.',
        icon: BarChart3,
      },
      {
        name: 'User Management',
        description: 'Centralize user management with role-based access. Manage students, managers, and administrators efficiently.',
        icon: Settings,
      },
      {
        name: 'Data Exports',
        description: 'Export student selections and enrollment data to CSV for analysis. Download course and exchange selection reports.',
        icon: FileText,
      },
    ],
  },
]

export default function FeaturesPage() {
  return (
    <div className="bg-background pt-12 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Powerful features for automating elective course selection
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground px-2 sm:px-0">
            Everything you need to automate course selection, reduce administrative burden, and improve student experience.
          </p>
        </div>

        <div className="mx-auto mt-12 sm:mt-16 lg:mt-20 space-y-16 sm:space-y-20 lg:space-y-24">
          {featureCategories.map((category) => (
            <div key={category.title}>
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{category.title}</h2>
                <p className="mt-2 text-base sm:text-lg text-muted-foreground">{category.description}</p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {category.features.map((feature) => {
                  const Icon = feature.icon
                  return (
                    <Card key={feature.name} className="h-full">
                      <CardHeader>
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{feature.name}</CardTitle>
                        <CardDescription className="mt-2">{feature.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
