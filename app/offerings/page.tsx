"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { LineReveal } from "@/components/line-reveal"
import Link from "next/link"

const offerings = [
  {
    name: "Transformational Life Coaching",
    slug: "life-coaching",
    description:
      "For people navigating identity shifts, life transitions, emotional complexity, or purpose evolution. This is deep inner architecture work.",
    we_explore: [
      "Patterns shaping your choices",
      "Emotional and psychological loops",
      "The tension between who you are and who you are becoming",
      "How to live and build from inner clarity instead of pressure",
    ],
    note: "This is not advice. This is guided self-discovery, structured reflection, and realignment.",
  },
  {
    name: "Creativity Coaching",
    slug: "creativity-coaching",
    description:
      "For creators who want to build meaningful creative lives without losing themselves to algorithms, performance pressure, or identity distortion. Creative work is not content. It is signal.",
    we_explore: [
      "Creative identity clarity",
      "Authentic audience resonance",
      "Monetization that respects your nervous system",
      "Sustainable visibility and expression",
    ],
    note: "This is not a content strategy. This is embodied creative alignment.",
  },
  {
    name: "Movement Arts Training",
    slug: "movement-arts",
    description:
      "For people who want to build strength, awareness, resilience, and intelligence through movement. The body stores emotional memory, stress, and survival patterns.",
    we_explore: [
      "Coordination",
      "Presence",
      "Nervous system strength",
      "Emotional processing through physical intelligence",
    ],
    note: "This is not fitness. This is embodiment training.",
  },
]

export default function OfferingsPage() {
  return (
    <main className="bg-background">
      <Navigation />

      {/* Hero */}
      <section className="min-h-[50vh] flex items-center pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-primary font-sans text-sm tracking-widest uppercase mb-6"
          >
            Transformation
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-8"
          >
            Ways We Can
            <br />
            Work Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-muted-foreground leading-relaxed max-w-xl"
          >
            Transformation doesn't happen through information. It happens through relationship, attention, and
            embodied practice. These are intentional containers for deep, lasting inner and outer change.
          </motion.p>
        </div>
      </section>

      {/* Hero CTA Buttons */}
      <section className="py-12 px-6 bg-card">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-6">
          <Link
            href="#offerings"
            className="inline-flex items-center gap-3 px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-700 font-sans text-sm tracking-widest uppercase"
          >
            Explore The Paths
            <span>→</span>
          </Link>
          <Link
            href="/begin"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-700 font-sans text-sm tracking-widest uppercase"
          >
            Begin The Conversation
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* Three Living Foundations */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-lg text-primary mb-16 tracking-widest uppercase">
              All Transformation Here Rests on Three Living Foundations
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-12">
            <ScrollReveal delay={0.2}>
              <div>
                <h3 className="font-serif text-2xl text-foreground mb-4">Clarity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Understanding what is true before trying to fix or optimize anything.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div>
                <h3 className="font-serif text-2xl text-foreground mb-4">Structure</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Building systems that support your growth without fragmenting who you are.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div>
                <h3 className="font-serif text-2xl text-foreground mb-4">Embodiment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Transformation must live in the body, nervous system, and daily lived experience.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section id="offerings" className="py-32 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-lg text-primary mb-16 tracking-widest uppercase">Your Three Doors</h2>
          </ScrollReveal>
        </div>
      </section>

      {offerings.map((offering, index) => (
        <section key={offering.name} id={`offering-${offering.slug}`} className={`py-32 px-6 ${index % 2 === 0 ? "bg-background" : "bg-card"}`}>
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">{offering.name}</h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-muted-foreground leading-relaxed mb-12 text-lg">{offering.description}</p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mb-12">
                <h3 className="font-sans text-xs tracking-widest uppercase text-primary mb-6">We Explore</h3>
                <ul className="space-y-3">
                  {offering.we_explore.map((item, idx) => (
                    <li key={idx} className="text-muted-foreground leading-relaxed flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="pt-8 border-t border-border/50">
                <p className="font-serif text-lg text-foreground italic">{offering.note}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="mt-12">
                <Link
                  href={`/offerings/${offering.slug}`}
                  className="inline-flex items-center gap-3 text-primary hover:text-foreground transition-colors duration-500 font-sans text-sm tracking-widest uppercase"
                >
                  Explore This Path
                  <span>→</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      {/* How We Begin */}
      <section className="py-32 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-lg text-primary mb-16 tracking-widest uppercase">How We Begin</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="font-serif text-2xl text-foreground mb-12 leading-relaxed">
              Every journey starts with a conversation.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-muted-foreground leading-relaxed mb-12">
              From there, we decide together the right container based on:
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <ul className="space-y-3 mb-12">
              <li className="text-muted-foreground leading-relaxed flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Where you are</span>
              </li>
              <li className="text-muted-foreground leading-relaxed flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>What you are navigating</span>
              </li>
              <li className="text-muted-foreground leading-relaxed flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>What depth of support you need</span>
              </li>
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <p className="font-serif text-lg text-foreground italic">
              This work is intentionally personal. Not mass program based.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-lg text-primary mb-16 tracking-widest uppercase">Voices from These Paths</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <ScrollReveal delay={0.2}>
              <div className="border-l border-primary pl-6">
                <p className="text-muted-foreground italic leading-relaxed mb-4">
                  "My creativity has come back to life. Not as a side hustle, but as a genuine expression of who I am."
                </p>
                <p className="font-serif text-foreground">Sophia</p>
                <p className="text-sm text-muted-foreground">Creative Director</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="border-l border-primary pl-6">
                <p className="text-muted-foreground italic leading-relaxed mb-4">
                  "I feel more at home in my body than I ever have. The shift has been profound."
                </p>
                <p className="font-serif text-foreground">Priya</p>
                <p className="text-sm text-muted-foreground">Movement Practice Client</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="border-l border-primary pl-6">
                <p className="text-muted-foreground italic leading-relaxed mb-4">
                  "The clarity I've gained has shifted everything—my work, my relationships, my sense of purpose."
                </p>
                <p className="font-serif text-foreground">Arjun</p>
                <p className="text-sm text-muted-foreground">Entrepreneur</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="border-l border-primary pl-6">
                <p className="text-muted-foreground italic leading-relaxed mb-4">
                  "This has been a real transformation. Not surface level. Real depth."
                </p>
                <p className="font-serif text-foreground">Maya</p>
                <p className="text-sm text-muted-foreground">Life Transition Client</p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.6}>
            <Link
              href="/voices"
              className="inline-flex items-center gap-3 text-primary hover:text-foreground transition-colors duration-500 font-sans text-sm tracking-widest uppercase"
            >
              Read More Voices
              <span>→</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Investment */}
      <section className="py-32 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-lg text-primary mb-16 tracking-widest uppercase">Investment</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground leading-relaxed mb-12">
              These containers are personalized and intentionally limited. Pricing and structure are shared during our
              discovery conversation to ensure alignment, depth, and readiness for the work.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-serif text-2xl md:text-3xl text-foreground mb-8">Ready to begin?</p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Link
              href="/begin"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-700 font-sans text-sm tracking-widest uppercase"
            >
              Book Discovery Call
              <span>→</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
