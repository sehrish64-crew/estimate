import type { Metadata } from 'next'
import { Suspense } from 'react'
import ContactUsClient from './contact-us-client'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Contact Vehicle Health Estimate - Customer Support',
  description: 'Get in touch with Vehicle Health Estimate for any inquiries, support, or sales questions. Available 24/7 to help you.',
  openGraph: {
    title: 'Contact Vehicle Health Estimate',
    description: 'Reach out to our customer support team for assistance with vehicle history reports.',
    url: 'https://vehiclehealthestimate.com/contact-us',
    type: 'website',
  },
}

export default function ContactUsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center">Loading...</div>}>
      <ContactUsClient />
    </Suspense>
  )
}

