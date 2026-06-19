import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] })

const DEPLOYED_URL = 'https://mind-shelf-one.vercel.app' 

export const metadata: Metadata = {
  metadataBase: new URL(DEPLOYED_URL),
  title: {
    default: 'Mindshelf - Read. Grow. Inspire.',
    template: '%s | Mindshelf' 
  },
  description: 'Discover curated books, personalized recommendations, and bulk book supply services for schools and churches. Nationwide delivery across Nigeria available.',
  verification: {
    google: 'google5102b8fe3b44f9b4',
  },
  keywords: ['online bookstore nigeria', 'buy bibles lagos', 'bulk book supply for churches', 'school library book suppliers', 'christian literature nigeria', 'mindshelf bookshop'],
  authors: [{ name: 'Mindshelf Team' }],
  creator: 'Mindshelf Eng. - Quadri Adegbenga Nelson',
  
  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'Mindshelf - Read. Grow. Inspire.',
    description: 'Discover curated books, personalized recommendations, and bulk book supply services. Nationwide delivery available.',
    url: DEPLOYED_URL,
    siteName: 'Mindshelf',
    locale: 'en_US',
    type: 'website',
    // images: [
    //   {
    //     url: '/og-image.png', 
    //     width: 1200,
    //     height: 630,
    //     alt: 'Mindshelf - Premium Book & Bible Supply Store',
    //   },
    // ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Mindshelf - Read. Grow. Inspire.',
    description: 'Discover curated books, personalized recommendations, and bulk book supply services.',
    images: ['/og-image.png'],
  },

  icons: {
    icon: '/mindshelfLogo.png',
    apple: '/mindshelfLogo.png',
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} antialiased bg-white`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}