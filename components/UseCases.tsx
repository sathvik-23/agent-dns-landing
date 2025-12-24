'use client'

import { motion } from 'framer-motion'
import { Building2, Bot, Code } from 'lucide-react'

const useCases = [
  {
    icon: Building2,
    title: 'SaaS Platforms',
    description: 'Offer custom domains to your customers with zero manual setup. Automate domain provisioning when users sign up.',
    scenario: 'Your SaaS platform needs to provide custom domains (e.g., customer.yoursaas.com) automatically when users upgrade to premium plans.',
  },
  {
    icon: Bot,
    title: 'AI Agents & Microservices',
    description: 'Automatically provision endpoints and domains for your agent platforms. Scale infrastructure dynamically.',
    scenario: 'Your AI agent platform needs to create unique subdomains for each agent instance (agent-123.yourplatform.com) with DNS records configured automatically.',
  },
  {
    icon: Code,
    title: 'Developer Tools',
    description: 'Build domain + DNS automation into your infrastructure. Perfect for CI/CD pipelines and deployment tools.',
    scenario: 'Your deployment tool needs to automatically register domains and configure DNS records when developers deploy new environments.',
  },
]

export default function UseCases() {
  return (
    <section id="use-cases" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-dark-light to-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2 sm:px-0">
            What You Can Build
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto px-2 sm:px-0">
            AgentDNS integrates seamlessly with your existing infrastructure and use cases.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-xl p-5 sm:p-6 md:p-8 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border border-default backdrop-blur-sm hover:border-hover hover:-translate-y-1"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-bg rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                  {useCase.title}
                </h3>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-3 sm:mb-4">
                  {useCase.description}
                </p>
                <div className="pt-3 sm:pt-4 border-t border-default">
                  <p className="text-xs sm:text-sm text-text-muted italic">
                    {useCase.scenario}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

