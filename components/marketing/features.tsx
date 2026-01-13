import {
  BookOpen,
  Globe,
  Users,
  BarChart3,
  Settings,
  Shield,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: BookOpen,
    title: "Course Selection Automation",
    description:
      "Build elective course packs in minutes with drag-and-drop simplicity. Automate enrollment, reduce setup time by 80%, and eliminate scheduling conflicts.",
  },
  {
    icon: Globe,
    title: "Exchange Programs",
    description:
      "Streamline international partnerships with automated deadline tracking. Manage hundreds of exchange opportunities from a centralized platform.",
  },
  {
    icon: Users,
    title: "Student Self-Service Portal",
    description:
      "Modern portal accessible 24/7 on any device. Students browse, select, and track applications independently, reducing support requests by 60%.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Approve selections in seconds with clear overviews. Make data-driven decisions with real-time analytics on trends, capacity, and student statistics.",
  },
  {
    icon: Settings,
    title: "Administrative Tools",
    description:
      "Centralize user management, degrees, and programs. Get comprehensive analytics to understand trends, optimize offerings, and reduce admin time by 50%.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security with role-based access control and data encryption. Self-host for complete control or choose managed hosting options.",
  },
]

export function Features() {
  return (
    <section id="features" className="container space-y-8 py-12 md:py-16">
      <div className="mx-auto max-w-xl space-y-3 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
          Powerful features for automating elective course selection
        </h2>
        <p className="text-base text-muted-foreground">
          Everything you need to automate course selection, reduce administrative burden, and improve student experience.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <Card key={feature.title}>
              <CardHeader>
                <Icon className="mb-2 h-8 w-8 text-primary" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
