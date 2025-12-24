'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const pricingPlans = [
  {
    name: 'Starter',
    price: 'Free',
    unit: '',
    description: 'Perfect for getting started',
    features: [
      '1 domain free',
      'Domain management',
    ],
  },
  {
    name: 'Pro',
    price: 'Custom',
    unit: 'pricing',
    description: 'For growing platforms',
    features: [
      '10 domains',
      'Hypercare with our dev team',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    unit: 'plan',
    description: 'For large-scale deployments',
    features: [
      'Custom plan tailored for you',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-dark to-dark-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2 sm:px-0">
            Simple, Transparent Pricing
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto px-2 sm:px-0">
            Launch with scale. Pay only for what you use.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-xl p-5 sm:p-6 md:p-8 border-2 border-[rgba(255,255,255,0.1)] transition-all duration-300 backdrop-blur-sm hover:!border-primary hover:shadow-lg hover:shadow-primary/20"
            >
              {plan.popular && (
                <div className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3 sm:mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {plan.name}
              </h3>
              <div className="mb-3 sm:mb-4">
                <span className="text-3xl sm:text-4xl font-bold text-white">
                  {plan.price}
                </span>
                <span className="text-sm sm:text-base text-text-secondary ml-2">{plan.unit}</span>
              </div>
              <p className="text-sm sm:text-base text-text-secondary mb-4 sm:mb-6">{plan.description}</p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#get-started"
                className={`block w-full text-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all touch-manipulation ${
                  plan.popular
                    ? 'bg-primary text-white hover:bg-primary-hover'
                    : 'bg-dark-light text-white hover:bg-dark-lighter'
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

