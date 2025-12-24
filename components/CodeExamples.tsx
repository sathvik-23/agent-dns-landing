'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

type Language = 'node' | 'python' | 'curl'

const codeExamples = {
  search: {
    node: `// Search for a domain
import AgentDNSClient from 'agentdns-sdk';

const client = new AgentDNSClient({ 
  apiKey: 'YOUR_API_KEY' 
});

const result = await client.domains.search('example.com');
console.log(result);`,
    python: `# Search for a domain
from agentdns import AgentDNSClient

client = AgentDNSClient(api_key='YOUR_API_KEY')
result = client.domains.search('example.com')
print(result)`,
    curl: `curl https://api.agentdns.cc/domains/search \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d "query=example.com"`,
  },
  register: {
    node: `// Register a domain
const domain = await client.domains.register({
  name: 'example.com',
  years: 1,
  contact: {
    email: 'admin@example.com'
  }
});
console.log(domain);`,
    python: `# Register a domain
domain = client.domains.register(
    name='example.com',
    years=1,
    contact={'email': 'admin@example.com'}
)
print(domain)`,
    curl: `curl -X POST https://api.agentdns.cc/domains/register \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "example.com",
    "years": 1,
    "contact": {"email": "admin@example.com"}
  }'`,
  },
  createRecord: {
    node: `// Create DNS record
const record = await client.dns.create({
  domain: 'example.com',
  type: 'A',
  name: '@',
  value: '192.0.2.1',
  ttl: 3600
});
console.log(record);`,
    python: `# Create DNS record
record = client.dns.create(
    domain='example.com',
    type='A',
    name='@',
    value='192.0.2.1',
    ttl=3600
)
print(record)`,
    curl: `curl -X POST https://api.agentdns.cc/dns/records \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "domain": "example.com",
    "type": "A",
    "name": "@",
    "value": "192.0.2.1",
    "ttl": 3600
  }'`,
  },
  fetchRecords: {
    node: `// Fetch DNS records
const records = await client.dns.list({
  domain: 'example.com'
});
console.log(records);`,
    python: `# Fetch DNS records
records = client.dns.list(domain='example.com')
print(records)`,
    curl: `curl https://api.agentdns.cc/dns/records?domain=example.com \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
  },
}

type ExampleType = keyof typeof codeExamples

export default function CodeExamples() {
  const [activeLanguage, setActiveLanguage] = useState<Language>('node')
  const [activeExample, setActiveExample] = useState<ExampleType>('search')
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    const code = codeExamples[activeExample][activeLanguage]
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="code-examples" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-dark-light to-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2 sm:px-0">
            API Code Examples
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto px-2 sm:px-0">
            Get started in minutes with code snippets in your preferred language.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Example selector */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6 justify-center px-2 sm:px-0">
            {Object.keys(codeExamples).map((example) => (
              <button
                key={example}
                onClick={() => setActiveExample(example as ExampleType)}
                className={`px-3 sm:px-4 md:px-6 py-2 text-xs sm:text-sm rounded-lg font-medium transition-all touch-manipulation ${
                  activeExample === example
                    ? 'bg-primary text-white'
                    : 'bg-card text-text-secondary hover:bg-card-hover border border-default'
                }`}
              >
                {example === 'search' && 'Search Domain'}
                {example === 'register' && 'Register Domain'}
                {example === 'createRecord' && 'Create DNS Record'}
                {example === 'fetchRecords' && 'Fetch DNS Records'}
              </button>
            ))}
          </div>

          {/* Code block */}
          <motion.div
            key={activeExample + activeLanguage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-dark-light backdrop-blur-sm rounded-xl border border-default overflow-hidden shadow-2xl"
          >
            {/* Language tabs */}
            <div className="flex border-b border-default bg-dark overflow-x-auto">
              <button
                onClick={() => setActiveLanguage('node')}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap touch-manipulation flex-shrink-0 ${
                  activeLanguage === 'node'
                    ? 'text-white bg-dark-light border-b-2 border-primary'
                    : 'text-text-muted hover:text-white'
                }`}
              >
                JavaScript (Node)
              </button>
              <button
                onClick={() => setActiveLanguage('python')}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap touch-manipulation flex-shrink-0 ${
                  activeLanguage === 'python'
                    ? 'text-white bg-dark-light border-b-2 border-primary'
                    : 'text-text-muted hover:text-white'
                }`}
              >
                Python
              </button>
              <button
                onClick={() => setActiveLanguage('curl')}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap touch-manipulation flex-shrink-0 ${
                  activeLanguage === 'curl'
                    ? 'text-white bg-dark-light border-b-2 border-primary'
                    : 'text-text-muted hover:text-white'
                }`}
              >
                cURL
              </button>
              <div className="flex-1 min-w-[1rem]" />
              <button
                onClick={copyToClipboard}
                className="px-3 sm:px-4 py-2.5 sm:py-3 text-text-muted hover:text-white transition-colors flex items-center gap-1.5 sm:gap-2 touch-manipulation flex-shrink-0"
                title="Copy to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm hidden sm:inline">Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Code content */}
            <div className="p-4 sm:p-6 overflow-x-auto">
              <pre className="text-xs sm:text-sm text-text-secondary font-mono leading-relaxed">
                <code>{codeExamples[activeExample][activeLanguage]}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

