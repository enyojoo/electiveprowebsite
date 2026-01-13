import { Hero } from "@/components/marketing/hero"
import { Features } from "@/components/marketing/features"
import { BRAND_DESCRIPTION } from "@/lib/brand-constants"

export const metadata = {
  title: "Home",
  description: BRAND_DESCRIPTION,
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
    </>
  )
}
