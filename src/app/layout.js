import { Syne, DM_Mono } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata = {
  title: 'Wasayuddin Syed — Software Engineer',
  description:
    'Portfolio of Wasayuddin Syed — Software Engineering student at the University of Guelph specialising in Cybersecurity.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmMono.variable}`}>
      <body className="font-mono bg-ink text-white antialiased">
        {children}
      </body>
    </html>
  )
}
