"use client"

import Image from "next/image"
import Link from "next/link"
import { BRAND_LOGO_URL, BRAND_NAME } from "@/lib/brand-constants"

interface LogoProps {
  className?: string
  variant?: "full" | "icon"
}

export default function Logo({ className = "", variant = "full" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src={BRAND_LOGO_URL}
        alt={`${BRAND_NAME} Logo`}
        width={variant === "icon" ? 32 : 140}
        height={variant === "icon" ? 32 : 40}
        className={variant === "icon" ? "h-8 w-8 object-contain" : "h-8 w-auto max-w-[140px] object-contain"}
        priority
      />
    </Link>
  )
}
