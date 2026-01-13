'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Logo from '@/components/Logo'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Features', href: '/features' },
  { name: 'Open Source', href: '/open-source' },
  { name: 'Hosted', href: '/hosted' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(56)
  const headerRef = useRef<HTMLElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight)
    }
  }, [])

  return (
    <header ref={headerRef} className="relative sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Logo className="h-5 w-auto sm:h-6 md:h-7" />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6 xl:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'text-sm font-semibold leading-6 transition-colors hover:text-primary',
                pathname === item.href ? 'text-primary' : 'text-foreground'
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-3 xl:gap-4">
          <Button asChild size="sm" className="hidden xl:inline-flex">
            <Link href="/pricing">Get Started</Link>
          </Button>
        </div>
      </nav>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          {/* Menu */}
          <div
            className="fixed inset-0 lg:hidden bg-background z-50 flex flex-col"
          >
            <div className="flex flex-col justify-center items-center h-full px-6">
              <div className="w-full max-w-sm space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                        'block rounded-lg px-4 py-3 text-center text-lg font-semibold leading-7 transition-colors',
                      pathname === item.href
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="mt-8 w-full max-w-sm">
                <Button asChild className="w-full" size="lg">
                  <Link href="/pricing" onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
