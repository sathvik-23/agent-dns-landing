'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const pricingPlans = [
  {
    name: 'Starter',
    price: '$0.10',
    unit: 'per domain',
    description: 'Perfect for getting started',
    features: [
      'Domain registration',
      'DNS management',
      'API access',
      'Basic support',
    ],
  },
  {
    name: 'Pro',
    price: 'Custom',
    unit: 'volume pricing',
    description: 'For growing platforms',
    features: [
      'Everything in Starter',
      'Bulk operations',
      'Priority support',
      'Custom integrations',
      'SLA guarantee',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    unit: 'contact us',
    description: 'For large-scale deployments',
    features: [
      'Everything in Pro',
      'Dedicated support',
      'Custom domains',
      'Advanced analytics',
      'White-label options',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-dark to-dark-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Launch with scale. Pay only for what you use.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-dark-light/50 rounded-xl p-8 border-2 transition-all duration-300 backdrop-blur-sm ${
                plan.popular
                  ? 'border-primary shadow-xl shadow-primary/20 scale-105'
                  : 'border-gray-800/50 hover:shadow-lg hover:shadow-primary/10'
              }`}
            >
              {plan.popular && (
                <div className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">
                {plan.name}
              </h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">
                  {plan.price}
                </span>
                <span className="text-gray-300 ml-2">{plan.unit}</span>
              </div>
              <p className="text-gray-300 mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#get-started"
                className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-primary text-white hover:bg-primary-hover'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
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

