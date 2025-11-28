'use client'

import { motion } from 'framer-motion'
import { Building2, Bot, Mail, Code } from 'lucide-react'

const useCases = [
  {
    icon: Building2,
    title: 'SaaS Platforms',
    description: 'Offer custom domains to your customers with zero manual setup.',
  },
  {
    icon: Bot,
    title: 'AI Agents',
    description: 'Automatically provision endpoints and domains for your agent platforms.',
  },
  {
    icon: Mail,
    title: 'Email & Marketing Tools',
    description: 'Require domain validation flows for email authentication.',
  },
  {
    icon: Code,
    title: 'Developer Tools',
    description: 'Need domain + DNS automation for your infrastructure.',
  },
]

export default function UseCases() {
  return (
    <section className="py-24 bg-gradient-to-b from-dark-light to-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Built for Modern Platforms
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            AgentDNS integrates seamlessly with your existing infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
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
                  {useCase.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {useCase.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

