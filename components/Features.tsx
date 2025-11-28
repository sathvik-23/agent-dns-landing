'use client'

import { motion } from 'framer-motion'
import { Search, Settings, Share2, Edit } from 'lucide-react'

const features = [
  {
    icon: Search,
    title: 'Search & Register Domains Instantly',
    description: 'Check availability, lock the domain, and complete registration via API. No manual steps required.',
  },
  {
    icon: Settings,
    title: 'Automated DNS Setup',
    description: 'Create TXT, CNAME, MX, DMARC records with a single API call. Configure everything programmatically.',
  },
  {
    icon: Share2,
    title: 'Hand-off to Your Platform',
    description: 'Delegate nameservers or give scoped DNS control to your SaaS/agent. Seamless integration.',
  },
  {
    icon: Edit,
    title: 'Modify Records Anytime',
    description: 'Update, edit, and bulk manage DNS records programmatically. Full control at your fingertips.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-dark-light to-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Features to get your domains configured
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            AgentDNS offers a variety of features to make sure your agents can search, buy, and configure domains seamlessly.
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
                className="bg-dark-light/50 rounded-xl p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border border-gray-800/50 backdrop-blur-sm"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
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

