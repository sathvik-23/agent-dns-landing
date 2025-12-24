'use client'

import { motion } from 'framer-motion'
import { Search, ShoppingCart, Settings, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Enter Domain',
    description: 'Search availability instantly with our API.',
  },
  {
    number: '02',
    icon: ShoppingCart,
    title: 'Purchase',
    description: 'Register and lock the domain in seconds.',
  },
  {
    number: '03',
    icon: Settings,
    title: 'Configure DNS',
    description: 'Records created automatically via API.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch',
    description: 'Delegate & go live immediately.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-dark to-dark-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2 sm:px-0">
            How It Works
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-2 sm:px-0">
            Get your domains configured in four simple steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-dark-light/50 rounded-xl p-5 sm:p-6 md:p-8 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border border-gray-800/50 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-700 transform -translate-y-1/2" />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

