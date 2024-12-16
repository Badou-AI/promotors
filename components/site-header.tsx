import Link from "next/link"
import Image from "next/image"
import { Phone } from 'lucide-react'

interface SiteHeaderProps {
  hasNavBanner?: boolean
}

export function SiteHeader({ hasNavBanner = false }: SiteHeaderProps) {
  return (
    <header className={`fixed top-0 z-50 w-full border-b border-[#343434] ${hasNavBanner ? 'bg-[#161616]' : 'bg-[#121212]'}`}>
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-0gupu7WPmxrffDyXYbc3Mf2jKRV6in.png"
            alt="ProMotors Logo"
            width={150}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        <nav className="flex items-center space-x-8">
          <Link href="/" className="text-[#D16527]">
            HOME
          </Link>
          <Link href="/about" className="text-white hover:text-[#D16527] transition-colors">
            ABOUT
          </Link>
          <Link href="/services" className="text-white hover:text-[#D16527] transition-colors">
            SERVICES
          </Link>
          <Link href="/shop" className="text-white hover:text-[#D16527] transition-colors">
            SHOP
          </Link>
          <Link href="/blog" className="text-white hover:text-[#D16527] transition-colors">
            BLOG
          </Link>
          <Link href="/contacts" className="text-white hover:text-[#D16527] transition-colors">
            CONTACTS
          </Link>
          <Link 
            href="tel:+39123456789" 
            className="flex items-center border border-[#D16527] px-4 py-2 text-[#D16527] hover:bg-[#D16527] hover:text-white transition-colors"
          >
            <Phone className="mr-2 h-4 w-4" />
            +39 123 45 67 789
          </Link>
        </nav>
      </div>
    </header>
  )
}

