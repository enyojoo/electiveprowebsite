# SEO Implementation Guide

## Quick Summary for Implementation

### **1. Root Layout (`app/layout.tsx` or equivalent)**

**Metadata Configuration:**
```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://www.yoursite.com'),
  title: {
    default: 'YourSite - Main Title',
    // Do NOT use template when pages set full titles (e.g. "Pricing - YourSite") or you get double brand: "Pricing - YourSite - YourSite"
  },
  description: 'Your default site description',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'noarchive': true, // Prevents cached versions
    },
  },
  other: {
    'googlebot': 'noarchive',
    'robots': 'noarchive',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.yoursite.com',
    siteName: 'YourSite',
    title: 'YourSite - Main Title',
    description: 'Your description',
    images: [{ url: LOGO_URL, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YourSite - Main Title',
    description: 'Your description',
    images: [LOGO_URL],
  },
}
```

**Organization Schema (in `<head>`):**
```typescript
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "YourSite",
      legalName: "YourSite", // Important for org name display
      description: "Your description",
      url: "https://www.yoursite.com",
      logo: LOGO_URL,
      sameAs: [
        "https://github.com/yourrepo", // Social links
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "support@yoursite.com",
        contactType: "customer support",
      },
    }),
  }}
/>
```

**Additional Meta Tags (in `<head>`):**
```html
<meta name="googlebot" content="noarchive" />
<meta name="robots" content="noarchive" />
<meta name="referrer" content="no-referrer-when-downgrade" />
<meta name="format-detection" content="telephone=no" />
```

---

### **2. Individual Pages**

**Page Metadata Pattern:**
```typescript
export const metadata: Metadata = {
  title: 'Page Title - YourSite', // Keep within 50-60 characters
  description: 'Page-specific description (150-160 chars optimal)',
  openGraph: {
    title: 'Page Title - YourSite',
    description: 'Page-specific description',
  },
  twitter: {
    card: 'summary',
    title: 'Page Title - YourSite',
    description: 'Page-specific description',
  },
}
```

**Title Format Rules:**
- Homepage: `"YourSite - Main Title"` (48 chars example)
- Other pages: `"[Description] - YourSite"` format
- Keep all titles within **50-60 characters** for optimal SEO
- Examples:
  - `"Pricing - YourSite"` (22 chars)
  - `"Features - YourSite"` (20 chars)
  - `"Contact Us - YourSite"` (24 chars)

---

### **3. Sitemap (`app/sitemap.ts`)**

```typescript
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.yoursite.com'
  
  return [
    {
      url: baseUrl,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/features`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Legal pages
    {
      url: `${baseUrl}/privacy`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
```

**Priority Guidelines:**
- Homepage: `1.0`
- Main product/marketing pages: `0.9`
- Secondary pages: `0.8`
- Legal/utility pages: `0.3`

**Important:** Do NOT include `lastModified` to prevent dates from appearing in search results.

---

### **4. Search Result Structure**

**Target Format:**
```
Org Name (e.g., "YourSite.")
URL (e.g., "https://www.yoursite.com")
SEO Title (e.g., "YourSite - Main Title")
Description (e.g., "Your site description...")
```

**Key Points:**
- Organization schema in root layout ensures org name appears on all pages
- Each page has unique URL, title, and description
- Org name period (.) is typically added by Google automatically

---

### **5. Essential Settings**

**Robots Configuration:**
- `index: true, follow: true` - Allow indexing
- `noarchive: true` - Prevent cached versions
- `max-snippet: -1` - Allow full snippets
- `max-image-preview: 'large'` - Large image previews

**HTTP Headers (in `next.config.ts`):**
```typescript
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Robots-Tag',
          value: 'noarchive',
        },
      ],
    },
  ];
}
```

---

### **6. Checklist**

✅ Root layout has Organization schema with `name` and `legalName`  
✅ All pages have explicit titles (50-60 chars)  
✅ All pages have descriptions (150-160 chars)  
✅ All pages have OpenGraph metadata  
✅ All pages have Twitter Card metadata  
✅ Sitemap includes all pages with proper priorities  
✅ No `lastModified` in sitemap  
✅ `noarchive` set in robots and meta tags  
✅ Canonical URLs configured via `metadataBase`  

---

### **7. Implementation Order**

1. Set up root layout metadata and Organization schema
2. Add meta tags in `<head>`
3. Configure sitemap with all pages
4. Add metadata to each individual page
5. Test with Google's Rich Results Test tool
6. Submit sitemap to Google Search Console

---

## Notes

- **Title Length:** Always keep within 50-60 characters for optimal display
- **Description Length:** 150-160 characters is optimal for search snippets
- **Org Name:** Google controls the period (.) - it's added automatically
- **Dates:** Exclude `lastModified` from sitemap to prevent dates in search results
- **Schema:** Organization schema in root layout applies to all pages globally

---

### **8. Faster SEO updates (avoid old titles in Google)**

**Cache:** Do NOT use long `Cache-Control` on HTML pages. Use long cache only for static assets (e.g. `/_next/static/(.*)`). For page routes use short cache so crawlers get fresh titles, e.g. `public, max-age=0, s-maxage=3600, must-revalidate`.

**Re-indexing:** Google does not update instantly. To speed it up:
1. **Google Search Console** → URL Inspection → enter each page URL → **Request indexing**
2. **Sitemaps** → Submit `https://yoursite.com/sitemap.xml` (or resubmit to trigger recrawl)
3. After deploy, optionally ping: `https://www.google.com/ping?sitemap=https://yoursite.com/sitemap.xml`
