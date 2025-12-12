'use client'

import { motion } from 'framer-motion'
import { Search, Settings, Shield, Webhook } from 'lucide-react'

const features = [
  {
    icon: Search,
    title: 'Instant Domain Search',
    description: 'Find and reserve domains programmatically with real-time availability checks.',
  },
  {
    icon: Settings,
    title: 'Automated DNS Provisioning',
    description: 'Auto-configure DNS records via API. Set up A, AAAA, CNAME, MX, TXT, and more with a single call.',
  },
  {
    icon: Shield,
    title: 'Full DNS API Control',
    description: 'Manage any record type at scale. Update, delete, and bulk modify DNS records programmatically.',
  },
  {
    icon: Webhook,
    title: 'Secure API Keys & Webhooks',
    description: 'Authenticate with API keys and trigger DNS provisioning workflows with webhook events.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-dark to-dark-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful Features for Developers
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Everything you need to automate domain and DNS management in your applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border border-default backdrop-blur-sm hover:border-hover hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary-bg rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

