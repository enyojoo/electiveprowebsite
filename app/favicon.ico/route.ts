import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // Fetch the favicon from the external URL
    const faviconResponse = await fetch('https://cldup.com/aRNSwxLaVk.png', {
      cache: 'force-cache', // Cache the favicon for performance
    })

    if (!faviconResponse.ok) {
      throw new Error('Failed to fetch favicon')
    }

    const faviconBuffer = await faviconResponse.arrayBuffer()

    // Return the favicon with proper headers
    return new Response(faviconBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable',
        'ETag': faviconResponse.headers.get('ETag') || '',
      },
    })
  } catch (error) {
    console.error('Error fetching favicon:', error)

    // Return a simple fallback favicon or error response
    return new Response('Favicon not available', {
      status: 503,
      headers: {
        'Content-Type': 'text/plain',
      },
    })
  }
}