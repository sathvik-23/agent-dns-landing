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
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-dark to-dark-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get your domains configured in four simple steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className="bg-dark-light/50 rounded-xl p-8 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border border-gray-800/50 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-4xl font-bold text-gray-700">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
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

