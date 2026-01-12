"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { PricingCard, PricingCTA, SlidingScaleNote } from "@/components/pricing-card"
import { TestimonialCard } from "@/components/testimonial-card"
import Link from "next/link"

const creativityTestimonials = [
  {
    quote:
      "Each of our creativity coaching sessions is the discovery of a new location on the map of my own inner world.",
    name: "Katerina Svetkova",
    role: "Creative Director & Dancer",
    location: "Russia",
  },
  {
    quote:
      "When I work with Harish, I feel heard, seen, and understood. I feel encouraged, supported, and excited about my work.",
    name: "Lisa Colburn",
    role: "Writer",
    location: "US",
  },
  {
    quote: "He coaches with his heart, life wisdom, and originality in a way you feel completely taken care of.",
    name: "Jill Badonsky",
    role: "Creator & Teacher of Kaizen-Muse Creativity Coaching Training",
    location: "US",
  },
  {
    quote:
      "Harish helped me see that I was going through a period of change and I needed patience and trust in my work and myself during this time.",
    name: "Cordula Kagemann",
    role: "Visual Artist & Educator",
    location: "Germany",
  },
  {
    quote:
      "I've been under the guidance of Harish's creativity coaching for over a year now, and the experience has been life-changing.",
    name: "Miguel Viero",
    role: "Movement Educator & Teacher",
    location: "Spain",
  },
]

export default function CreativityCoachingPage() {
  return (
    <main className="bg-background">
      <Navigation />

      {/* Hero */}
      <section className="min-h-[50vh] flex items-center pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <Link
              href="/offerings"
              className="text-muted-foreground font-sans text-sm tracking-widest uppercase mb-6 inline-flex items-center gap-2 hover:text-primary transition-colors duration-500"
            >
              <span>←</span> Offerings
            </Link>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-8 mt-6"
          >
            Creativity
            <br />
            Coaching
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-muted-foreground leading-relaxed max-w-xl"
          >
            For artists, makers, and anyone who has forgotten they are creative. For those whose creative fire has
            dimmed.
          </motion.p>
        </div>
      </section>

      {/* Essence */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <ScrollReveal>
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-primary mb-6">The Essence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Exploration without pressure. Play without performance. A return to the source of creative expression
                  through curiosity and presence.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-primary mb-6">Who This Is For</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Those who feel something alive within them that wants expression, clarity, or completion. Those who
                  sense their creative self is waiting to be remembered.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What the Journey Feels Like */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-12">What the Journey Feels Like</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="space-y-4">
                <span className="text-primary font-serif text-3xl">01</span>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Permission to create without the weight of perfection. Space to experiment, fail beautifully, and
                  begin again.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="space-y-4">
                <span className="text-primary font-serif text-3xl">02</span>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Dissolving the blocks that keep your creative energy stuck—fear, comparison, the inner critic's
                  relentless voice.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="space-y-4">
                <span className="text-primary font-serif text-3xl">03</span>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Work that flows from authenticity rather than effort. A renewed relationship with your creative self.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-card">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-12">Voices from This Path</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {creativityTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                location={testimonial.location}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-border" />
        </div>
      </section>

      {/* Working Together - Pricing */}
      <section className="py-24 px-6 bg-card" id="investment">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">Working Together</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mb-4">
              This work is offered through carefully held containers of time and presence. Each container is designed to
              support depth, continuity, and meaningful integration into your creative life.
            </p>
            <p className="text-muted-foreground/70 text-sm leading-relaxed max-w-2xl mb-16">
              Creativity coaching unfolds over time, allowing your creative voice to emerge naturally, without force or
              deadline.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            <PricingCard
              title="Short-Term Journey"
              sessions="Six 75-minute sessions (weekly)"
              extras="Includes one 60-minute post-coaching check-in"
              priceINR="₹62,000"
              priceUSD="$750 USD"
              delay={0.1}
            />
            <PricingCard
              title="3–6 Month Journey"
              sessions="Twelve 75-minute sessions (weekly or bi-weekly)"
              extras="Includes three monthly 60-minute check-ins"
              priceINR="₹1,25,000"
              priceUSD="$1,500 USD"
              delay={0.2}
            />
            <PricingCard
              title="A Year of Coaching"
              sessions="Twenty 75-minute sessions across a year (bi-weekly)"
              extras="Includes three monthly 60-minute check-ins"
              priceINR="₹2,08,000"
              priceUSD="$2,500 USD"
              delay={0.3}
            />
          </div>

          <PricingCTA />
          <SlidingScaleNote />
        </div>
      </section>

      <Footer />
    </main>
  )
}
