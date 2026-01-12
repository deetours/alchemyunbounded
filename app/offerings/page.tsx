"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"

const offerings = [
  {
    name: "Transformational Life Coaching",
    slug: "life-coaching",
    essence: "For those ready to look deeper. For the seekers who sense there is more beneath the surface.",
    experience:
      "Conversations that go beyond goals and action plans. Sessions held in presence, where insights emerge naturally and lasting change takes root.",
    outcome:
      "A clearer sense of self. A reconnection to what truly matters. An embodied knowing of your own inner wisdom.",
  },
  {
    name: "Creativity Coaching",
    slug: "creativity-coaching",
    essence:
      "For artists, makers, and anyone who has forgotten they are creative. For those whose creative fire has dimmed.",
    experience:
      "Exploration without pressure. Play without performance. A return to the source of creative expression through curiosity and presence.",
    outcome:
      "Creative blocks dissolved. A renewed relationship with your creative self. Work that flows from authenticity rather than effort.",
  },
  {
    name: "Movement Arts",
    slug: "movement-arts",
    essence: "For those disconnected from their bodies. For anyone ready to remember that wisdom lives in the flesh.",
    experience:
      "Gentle, exploratory movement sessions. No choreography, no performance. Simply returning home to the body.",
    outcome:
      "Greater body awareness. Emotional release held in tissues. A felt sense of being at home in your own skin.",
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
            Paths, Not Products
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
            Each path is a doorway. Not a transaction, but an invitation to journey together toward what wants to
            emerge.
          </motion.p>
        </div>
      </section>

      {/* Offerings */}
      {offerings.map((offering, index) => (
        <section key={offering.name} className={`py-32 px-6 ${index % 2 === 0 ? "bg-card" : "bg-background"}`}>
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <span className="font-sans text-sm text-primary tracking-widest">0{index + 1}</span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-4 mb-16">{offering.name}</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-12">
              <ScrollReveal delay={0.2}>
                <div>
                  <h3 className="font-sans text-xs tracking-widest uppercase text-primary mb-4">Who This Is For</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{offering.essence}</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div>
                  <h3 className="font-sans text-xs tracking-widest uppercase text-primary mb-4">The Experience</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{offering.experience}</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div>
                  <h3 className="font-sans text-xs tracking-widest uppercase text-primary mb-4">Inner Shifts</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{offering.outcome}</p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.5}>
              <div className="mt-12 pt-8 border-t border-border/50">
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

      {/* CTA */}
      <section className="py-32 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-serif text-xl md:text-2xl text-foreground mb-4">Not sure which path is right?</p>
            <p className="text-muted-foreground mb-12">That uncertainty is welcome. We can discover together.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Link
              href="/begin"
              className="inline-flex items-center gap-3 px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-700 font-sans text-sm tracking-widest uppercase"
            >
              Begin a Conversation
              <span>→</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
