'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const codeSnippets = {
  node: `// Search a domain
import AgentDNSClient from 'agentdns-sdk';

const client = new AgentDNSClient({ 
  apiKey: 'YOUR_API_KEY' 
});

const result = await client.domains.search('example.com');
console.log(result);`,
  python: `# Search a domain
from agentdns import AgentDNSClient

client = AgentDNSClient(api_key='YOUR_API_KEY')
result = client.domains.search('example.com')
print(result)`,
  curl: `# Search a domain
curl https://api.agentdns.cc/domains/search \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d "query=example.com"`,
}

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'node' | 'python' | 'curl'>('node')

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-dark via-dark-light to-dark">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-light to-dark opacity-90" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Programmatic DNS & Domain API for Developers
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl text-text-secondary mb-8 leading-relaxed"
            >
              Instant domain search, automated DNS provisioning, full API control — developer-first.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <a
                href="#get-started"
                className="px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary-hover transition-all transform hover:scale-105 shadow-lg shadow-primary/30 text-center"
              >
                Get Started
              </a>
              <a
                href="#docs"
                className="px-8 py-4 bg-card text-white rounded-lg font-semibold text-lg hover:bg-card-hover transition-all backdrop-blur-sm border border-default hover:border-hover text-center"
              >
                View Docs
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-sm text-text-muted"
            >
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span>Trusted by developers building AI platforms</span>
            </motion.div>
          </motion.div>

          {/* Right side - Code snippet */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full"
          >
            <div className="bg-dark-light backdrop-blur-sm rounded-xl border border-default overflow-hidden shadow-2xl">
              {/* Code tabs */}
              <div className="flex border-b border-default bg-dark">
                <button
                  onClick={() => setActiveTab('node')}
                  className={`px-6 py-3 text-sm font-medium transition-colors ${
                    activeTab === 'node'
                      ? 'text-white bg-dark-light border-b-2 border-primary'
                      : 'text-text-muted hover:text-white'
                  }`}
                >
                  Node.js
                </button>
                <button
                  onClick={() => setActiveTab('python')}
                  className={`px-6 py-3 text-sm font-medium transition-colors ${
                    activeTab === 'python'
                      ? 'text-white bg-dark-light border-b-2 border-primary'
                      : 'text-text-muted hover:text-white'
                  }`}
                >
                  Python
                </button>
                <button
                  onClick={() => setActiveTab('curl')}
                  className={`px-6 py-3 text-sm font-medium transition-colors ${
                    activeTab === 'curl'
                      ? 'text-white bg-dark-light border-b-2 border-primary'
                      : 'text-text-muted hover:text-white'
                  }`}
                >
                  cURL
                </button>
              </div>

              {/* Code content */}
              <div className="p-6 overflow-x-auto h-[200px] flex items-start">
                <pre className="text-sm text-text-secondary font-mono leading-relaxed w-full">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}



