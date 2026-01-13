import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { PostHogProvider, PostHogPageView } from "@/components/providers/PostHogProvider"
import { BRAND_NAME, BRAND_DESCRIPTION, BRAND_FAVICON_URL, BRAND_LOGO_URL } from "@/lib/brand-constants"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://electivepro.net'),
  title: {
    default: 'ElectivePRO - Automate Elective Course Selection',
    template: '%s - ElectivePRO',
  },
  description: 'ElectivePRO is an open-source platform that automates elective course selection, giving students a modern portal to choose their electives while freeing staff workload by 50% to focus on student success.',
  keywords: [
    'elective course selection',
    'elective courses',
    'course selection platform',
    'university management system',
    'academic management',
    'elective management',
    'open source LMS',
    'free course selection',
    'self-hosted platform',
    'elective automation',
    'student course selection',
    'university administration',
    'academic scheduling',
    'course registration',
    'educational technology',
    'EdTech',
    'higher education software',
    'student management system',
    'open source education',
    'learning management',
  ],
  authors: [{ name: 'ElectivePRO' }],
  creator: 'ElectivePRO',
  publisher: 'ElectivePRO',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://electivepro.net',
  },
  icons: {
    icon: [
      { url: BRAND_FAVICON_URL, type: 'image/png', sizes: 'any' },
      { url: BRAND_FAVICON_URL, type: 'image/png', sizes: '192x192' },
      { url: BRAND_FAVICON_URL, type: 'image/png', sizes: '512x512' },
    ],
    shortcut: [
      { url: BRAND_FAVICON_URL, type: 'image/png' },
    ],
    apple: [
      { url: BRAND_FAVICON_URL, sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://electivepro.net',
    siteName: 'ElectivePRO',
    title: 'ElectivePRO - Automate Elective Course Selection',
    description: 'ElectivePRO is an open-source platform that automates elective course selection, giving students a modern portal to choose their electives while freeing staff workload by 50% to focus on student success.',
    images: [
      {
        url: BRAND_LOGO_URL,
        width: 1200,
        height: 630,
        alt: 'ElectivePRO - Automate Elective Course Selection',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ElectivePRO - Automate Elective Course Selection',
    description: 'ElectivePRO is an open-source platform that automates elective course selection, giving students a modern portal to choose their electives while freeing staff workload by 50% to focus on student success.',
    images: [BRAND_LOGO_URL],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: BRAND_NAME,
              description: BRAND_DESCRIPTION,
              url: "https://electivepro.net",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://electivepro.net/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: BRAND_NAME,
              description: BRAND_DESCRIPTION,
              url: "https://electivepro.net",
              logo: BRAND_LOGO_URL,
              contactPoint: {
                "@type": "ContactPoint",
                email: "support@electivepro.net",
                contactType: "customer support",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <PostHogProvider>
          <PostHogPageView />
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </PostHogProvider>
      </body>
    </html>
  )
}
