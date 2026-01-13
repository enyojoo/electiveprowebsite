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
  title: {
    default: BRAND_NAME,
    template: `${BRAND_NAME} - %s`,
  },
  description: BRAND_DESCRIPTION,
  keywords: [
    "elective courses",
    "exchange programs",
    "university management",
    "course selection",
    "academic management",
    "open source",
  ],
  authors: [{ name: BRAND_NAME }],
  creator: BRAND_NAME,
  metadataBase: new URL("https://electivepro.net"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://electivepro.net",
    title: BRAND_NAME,
    description: BRAND_DESCRIPTION,
    siteName: BRAND_NAME,
    images: [
      {
        url: BRAND_LOGO_URL,
        width: 1200,
        height: 630,
        alt: BRAND_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND_NAME,
    description: BRAND_DESCRIPTION,
    images: [BRAND_LOGO_URL],
  },
  icons: {
    icon: BRAND_FAVICON_URL,
    shortcut: BRAND_FAVICON_URL,
    apple: BRAND_FAVICON_URL,
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
