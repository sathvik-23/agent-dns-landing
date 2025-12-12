import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import UseCases from '@/components/UseCases'
import Playground from '@/components/Playground'
import Pricing from '@/components/Pricing'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      <Navbar />
      <Hero />
      <Features />
      <UseCases />
      <Playground />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}

