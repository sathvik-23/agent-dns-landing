'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="get-started" className="py-24 bg-gradient-to-br from-dark to-dark-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Integrate AgentDNS into your application in minutes, not hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#docs"
              className="px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary-hover transition-all transform hover:scale-105 shadow-lg shadow-primary/30"
            >
              View Documentation
            </a>
            <a
              href="mailto:hello@agentdns.com"
              className="px-8 py-4 bg-white/10 text-white rounded-lg font-semibold text-lg hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20"
            >
              Contact Sales
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}



