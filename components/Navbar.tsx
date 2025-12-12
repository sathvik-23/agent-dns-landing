'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#playground', label: 'Playground' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#docs', label: 'Docs' },
  ]

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center" aria-label="AgentDNS Home">
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
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors text-white/90 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#get-started"
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all bg-primary text-white hover:bg-primary-hover"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-4 border-t border-default">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="block px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-card-hover rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#get-started"
              onClick={handleLinkClick}
              className="block mx-4 px-4 py-2 text-sm font-medium text-center bg-primary text-white rounded-lg hover:bg-primary-hover transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

