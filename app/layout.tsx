import './globals.css'
import type { Metadata } from 'next'
import { Analytics, PlausibleAnalytics } from './analytics'

export const metadata: Metadata = {
  title: 'TreatU - Finally, a Dating App That Gets You Off Your Phone',
  description: 'Real dates. Real places. Real connections. Join the waitlist for the dating app that bridges digital matching with authentic real-world experiences. No more endless swiping.',
  keywords: ['dating app', 'real dates', 'offline dating', 'authentic connections', 'dating venues', 'meet in person', 'dating experiences'],
  authors: [{ name: 'TreatU' }],
  creator: 'TreatU',
  publisher: 'TreatU',
  metadataBase: new URL('https://treatu.co'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://treatu.co',
    title: 'TreatU - Dating App for Real Connections',
    description: 'Finally, a dating app that gets you off your phone. Real dates at curated venues. Join the waitlist today.',
    siteName: 'TreatU',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TreatU - Real Dating Experiences',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TreatU - Dating App for Real Connections',
    description: 'Finally, a dating app that gets you off your phone. Real dates at curated venues.',
    images: ['/og-image.jpg'],
    creator: '@treatu',
  },
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
  verification: {
    // Add your verification codes when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'TreatU',
              applicationCategory: 'LifestyleApplication',
              operatingSystem: 'iOS, Android',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'GBP',
              },
              description: 'A dating app that connects people through real-world experiences at curated venues.',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '500',
              },
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
        <PlausibleAnalytics />
      </body>
    </html>
  )
}