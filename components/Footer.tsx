'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-400 py-8 sm:py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <h3 className="text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4">AgentDNS</h3>
            <p className="text-xs sm:text-sm">Programmatic DNS & Domain API for developers.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Product</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="#features"
                  className="hover:text-white transition-colors touch-manipulation block"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="hover:text-white transition-colors touch-manipulation block"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#docs"
                  className="hover:text-white transition-colors touch-manipulation block"
                >
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="#about"
                  className="hover:text-white transition-colors touch-manipulation block"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#blog"
                  className="hover:text-white transition-colors touch-manipulation block"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-white transition-colors touch-manipulation block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Legal</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="#terms"
                  className="hover:text-white transition-colors touch-manipulation block"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="#privacy"
                  className="hover:text-white transition-colors touch-manipulation block"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-center md:text-left">© 2025 AgentDNS, Inc. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm">All Systems Online</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
