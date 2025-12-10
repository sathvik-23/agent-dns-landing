'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="AgentDNS Logo"
                width={200}
                height={60}
                className="h-12 md:h-16 w-auto"
                priority
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-sm font-medium transition-colors text-white/90 hover:text-white"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium transition-colors text-white/90 hover:text-white"
            >
              How It Works
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium transition-colors text-white/90 hover:text-white"
            >
              Pricing
            </Link>
            <Link
              href="#docs"
              className="text-sm font-medium transition-colors text-white/90 hover:text-white"
            >
              Docs
            </Link>
            <Link
              href="#get-started"
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all bg-primary text-white hover:bg-primary-hover"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

