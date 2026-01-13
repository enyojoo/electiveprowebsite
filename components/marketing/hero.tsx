"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BRAND_DESCRIPTION, BRAND_PRIMARY_COLOR } from "@/lib/brand-constants"
import { ArrowRight, Github } from "lucide-react"

export function Hero() {
  return (
    <section className="container space-y-6 py-12 md:py-16">
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Automate Elective Course Selection
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto max-w-2xl text-lg font-normal text-muted-foreground sm:text-xl"
        >
          Reduce administrative workload by 50% and eliminate scheduling errors. An open-source platform that automates elective course selection, giving students a modern portal while freeing staff to focus on student success.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/pricing">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <Link href="https://github.com/enyojoo/electivepronew" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
