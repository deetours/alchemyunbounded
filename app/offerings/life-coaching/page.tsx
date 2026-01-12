"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { PricingCard, PricingCTA, SlidingScaleNote } from "@/components/pricing-card"
import { TestimonialCard } from "@/components/testimonial-card"
import Link from "next/link"

const lifeCoachingTestimonials = [
  {
    quote:
      "Working with Harish has been one of the most transformative experiences of my life. Harish's approach is not formulaic—it's deeply personal, intuitive, and anchored in truth.",
    name: "Kapildev Verma",
    role: "Head - Client Servicing, Marcellus Investment Managers",
    location: "India",
  },
  {
    quote:
      "Harish has a remarkable ability to connect you with your inner wisdom, guiding you to answers you already have within.",
    name: "M.R.",
    role: "Founder, Personal Growth Company",
    location: "US",
  },
  {
    quote:
      "After a year and half of receiving life coaching services from Harish, I found the strength and clarity to completely change my life.",
    name: "Katy Haldiman",
    role: "Health Care Professional & Photographer",
    location: "US",
  },
  {
    quote:
      "Harish helped me identify hidden doubts, their root causes, creating a space to be myself, transforming my personal and professional life.",
    name: "Aashish Agrawal",
    role: "Chief Business Officer, Reddy Realty",
    location: "India",
  },
  {
    quote:
      "Harish always talks about seeing potential in others. He has an innate ability to see what we could be instead of what we currently are.",
    name: "Emily Rose",
    role: "Health Care Professional",
    location: "US",
  },
]

export default function LifeCoachingPage() {
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
            Transformational
            <br />
            Life Coaching
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-muted-foreground leading-relaxed max-w-xl"
          >
            For those ready to look deeper. For the seekers who sense there is more beneath the surface.
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
                  Conversations that go beyond goals and action plans. Sessions held in presence, where insights emerge
                  naturally and lasting change takes root.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-primary mb-6">Who This Is For</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Those who sense something stirring beneath the surface. Those ready to meet themselves more fully, to
                  untangle old patterns, and to discover what wants to emerge.
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
                  A space where you can finally speak the things you haven't said aloud—without judgment, without
                  fixing.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="space-y-4">
                <span className="text-primary font-serif text-3xl">02</span>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Conversations that illuminate blind spots gently, helping you see patterns you've been living
                  unconsciously.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="space-y-4">
                <span className="text-primary font-serif text-3xl">03</span>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A reconnection to your own inner wisdom, the quiet knowing that has always been there, waiting.
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
            {lifeCoachingTestimonials.map((testimonial, index) => (
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
              support depth, continuity, and meaningful integration into your life.
            </p>
            <p className="text-muted-foreground/70 text-sm leading-relaxed max-w-2xl mb-16">
              Transformational Life Coaching is offered in longer arcs rather than isolated sessions, allowing trust,
              insight, and real change to unfold over time.
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
