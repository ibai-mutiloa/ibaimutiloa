import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ibai Mutiloa Aliaga — Backend & AI Engineer',
  description: 'Backend engineer specialised in AI systems, RAG pipelines, and cloud infrastructure.',
  viewport: 'width=device-width, initial-scale=1',
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