import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AgentDNS - One API to search, buy domains & configure DNS',
  description: 'AgentDNS empowers agents and SaaS platforms to handle domains and DNS automatically — no manual setup, no friction.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}



