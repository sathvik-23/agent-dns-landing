'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="get-started" className="py-24 bg-gradient-to-br from-dark-light via-dark to-dark-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-dark-light backdrop-blur-sm rounded-2xl border border-default p-6 sm:p-8 md:p-12 lg:p-16 text-center shadow-2xl"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 px-2 sm:px-0">
            Build DNS Automation into Your App Today
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto px-2 sm:px-0">
            Start integrating AgentDNS into your application. Get your API key and start building in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-0">
            <a
              href="#docs"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-lg font-semibold text-base sm:text-lg hover:bg-primary-hover transition-all transform hover:scale-105 shadow-lg shadow-primary/30 touch-manipulation"
            >
              Get Started
            </a>
            <a
              href="#docs"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-card text-white rounded-lg font-semibold text-base sm:text-lg hover:bg-card-hover transition-all backdrop-blur-sm border border-default hover:border-hover touch-manipulation"
            >
              Read Docs
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}



