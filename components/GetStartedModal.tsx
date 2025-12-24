'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X } from 'lucide-react'

interface GetStartedModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function GetStartedModal({ isOpen, onClose }: GetStartedModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/get-started', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form')
      }

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! We\'ll connect with you soon.',
      })

      // Reset form
      setFormData({ name: '', email: '', phone: '', organization: '' })

      // Close modal after 2 seconds on success
      setTimeout(() => {
        onClose()
        setSubmitStatus({ type: null, message: '' })
      }, 2000)
    } catch (error: any) {
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Something went wrong. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={handleBackdropClick}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-dark-light backdrop-blur-sm rounded-2xl border border-default shadow-2xl w-full max-w-md pointer-events-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-default">
                <h2 className="text-2xl font-bold text-white">Get Started</h2>
                <button
                  onClick={onClose}
                  className="text-text-muted hover:text-white transition-colors p-1 rounded-lg hover:bg-dark touch-manipulation"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6">
                <div className="space-y-4">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-text-secondary mb-2"
                    >
                      Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-dark border border-default rounded-lg text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* Email ID field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-text-secondary mb-2"
                    >
                      Email ID <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-dark border border-default rounded-lg text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* Phone number field (optional) */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-text-secondary mb-2"
                    >
                      Phone Number <span className="text-text-muted text-xs">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-dark border border-default rounded-lg text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Organization field */}
                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-sm font-medium text-text-secondary mb-2"
                    >
                      Organization Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-dark border border-default rounded-lg text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Enter your organization name"
                    />
                  </div>
                </div>

                {/* Status message */}
                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 p-3 rounded-lg ${
                      submitStatus.type === 'success'
                        ? 'bg-success/20 text-success border border-success/30'
                        : 'bg-error/20 text-error border border-error/30'
                    }`}
                  >
                    <p className="text-sm">{submitStatus.message}</p>
                  </motion.div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-6 px-6 py-3 bg-primary text-white rounded-lg font-semibold text-base hover:bg-primary-hover transition-all transform hover:scale-105 shadow-lg shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none touch-manipulation"
                >
                  {isSubmitting ? 'Connecting...' : 'Connect'}
                </button>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

