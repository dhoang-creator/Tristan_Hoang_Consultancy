import type { Metadata } from 'next'
import { Inter_Tight, Newsreader } from 'next/font/google'
import BackgroundMesh from '@/components/BackgroundMesh'
import './globals.css'

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter-tight',
  display: 'swap',
})

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['italic'],
  variable: '--font-newsreader',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tristan Hoang — Automation & Optimisation Consultant',
  description:
    'Independent automation and operations consulting. I help ambitious SMBs streamline their operations and scale without scaling their overhead.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${interTight.variable} ${newsreader.variable}`}>
      <body>
        <BackgroundMesh />
        {children}
      </body>
    </html>
  )
}