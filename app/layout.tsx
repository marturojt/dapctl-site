import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'dapctl — TUI/CLI sync for HiFi DAPs',
  description: 'TUI/CLI sync tool for HiFi Digital Audio Players. DAP-aware profiles, dry-run, per-run manifest. Linux · macOS · Windows. GPLv3.',
  metadataBase: new URL('https://dapctl.com'),
  openGraph: {
    title: 'dapctl',
    description: 'TUI/CLI sync tool for HiFi Digital Audio Players',
    url: 'https://dapctl.com',
    type: 'website',
  },
  twitter: { card: 'summary' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
