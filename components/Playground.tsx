'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Search, Loader2 } from 'lucide-react'

const mockResponse = {
  available: true,
  domain: 'example.com',
  price: 12.99,
  currency: 'USD',
  tld: '.com',
  registration_period: '1 year',
  suggested_alternatives: [
    'example.io',
    'example.dev',
    'example.app',
  ],
}

export default function Playground() {
  const [domain, setDomain] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<typeof mockResponse | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSearch = async () => {
    if (!domain.trim()) {
      setError('Please enter a domain name')
      return
    }

    setLoading(true)
    setError(null)
    setResult(null)

    // Simulate API call
    setTimeout(() => {
      setResult({
        ...mockResponse,
        domain: domain.trim(),
      })
      setLoading(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <section id="playground" className="py-24 bg-gradient-to-b from-dark to-dark-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Try API in Your Browser
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Test domain search functionality right here. No API key required for this demo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-dark-light backdrop-blur-sm rounded-xl border border-default p-8 shadow-2xl"
        >
          {/* Input section */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1">
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter domain name (e.g., example.com)"
                className="w-full px-4 py-3 bg-input border border-default rounded-lg text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-focus focus:border-transparent"
              />
            </div>
            <button
              onClick={handleSearch}
              disabled={loading}
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-hover transition-all transform hover:scale-105 shadow-lg shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Searching...
                </>
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  Try Search
                </>
              )}
            </button>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-error-bg border border-[rgba(239,68,68,0.15)] rounded-lg text-error-light">
              {error}
            </div>
          )}

          {/* Results section */}
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-8"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Search Results</h3>
              <div className="bg-dark rounded-lg p-6 border border-default">
                <pre className="text-sm text-text-secondary font-mono overflow-x-auto">
                  <code>{JSON.stringify(result, null, 2)}</code>
                </pre>
              </div>
            </motion.div>
          )}

          {/* Info note */}
          <div className="mt-6 p-4 bg-primary-bg border border-primary rounded-lg">
            <p className="text-sm text-text-secondary">
              <strong className="text-white">Note:</strong> This is a demo interface. 
              In production, you&apos;ll use the AgentDNS API with your API key to perform real domain searches and DNS operations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

