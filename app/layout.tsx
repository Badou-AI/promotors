import './globals.css'
import { Mulish, Chakra_Petch } from 'next/font/google'

const mulish = Mulish({ 
  subsets: ['latin'],
  variable: '--font-mulish',
})

const chakraPetch = Chakra_Petch({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-chakra-petch',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${mulish.variable} ${chakraPetch.variable} font-mulish text-body bg-[#161616] text-[var(--body-text-color)]`}>
        {children}
      </body>
    </html>
  )
}

