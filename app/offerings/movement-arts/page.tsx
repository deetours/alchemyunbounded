"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { PricingCTA } from "@/components/pricing-card"
import { TestimonialCard } from "@/components/testimonial-card"
import Link from "next/link"

const movementTestimonials = [
  {
    quote:
      "The physical benefits are undeniable, but more importantly, Harish's approach instilled in me a sense of body awareness and self-confidence.",
    name: "Bharath",
    role: "Movement Practitioner",
    location: "US",
  },
  {
    quote:
      "As a teacher, Harish excels. His approach is marked by patience, humility, and a genuine concern for his client's well-being.",
    name: "Sumedha Sharma",
    role: "Country Director, iPartner India",
    location: "India",
  },
  {
    quote:
      "Harish is a highly methodical and patient instructor, which creates a sense of calm while performing the movements. His techniques not only enhance present well-being but also help in preparing for a healthier and more balanced future.",
    name: "Mousumi Mandal",
    role: "Product Development Manager, FIS",
    location: "India",
  },
]

export default function MovementArtsPage() {
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
            Movement
            <br />
            Arts Training
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-muted-foreground leading-relaxed max-w-xl"
          >
            For those disconnected from their bodies. For anyone ready to remember that wisdom lives in the flesh.
          </motion.p>
        </div>
      </section>

      {/* Essence */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <ScrollReveal>
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-primary mb-6">The Practice</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Movement Arts Training is a psycho-physical practice rooted in awareness, adaptability, and embodied
                  intelligence. No choreography, no performance. Simply returning home to the body.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-primary mb-6">Who This Is For</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Those seeking greater body awareness. Those ready to release what's been held in the tissues. Anyone
                  who desires a felt sense of being at home in their own skin.
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
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-12">What the Practice Offers</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="space-y-4">
                <span className="text-primary font-serif text-3xl">01</span>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Greater body awareness through gentle, exploratory movement sessions that honor your body's natural
                  wisdom.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="space-y-4">
                <span className="text-primary font-serif text-3xl">02</span>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Emotional release held in tissues. Space for the body to speak what words cannot express.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="space-y-4">
                <span className="text-primary font-serif text-3xl">03</span>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A felt sense of being at home in your own skin. Presence that grounds you in the here and now.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-card">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-12">Voices from This Practice</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {movementTestimonials.map((testimonial, index) => (
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
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">Training Cycles</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mb-16">
              Movement Arts Training is offered in cycles that build upon each other, allowing the body to integrate new
              patterns of awareness and expression over time.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-background border border-border"
            >
              <h4 className="font-serif text-xl text-foreground mb-4">Short-Term Cycle</h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">10 × 60-minute sessions</p>
              <div className="pt-4 border-t border-border">
                <p className="font-serif text-lg text-primary">₹3,750 / session</p>
                <p className="text-muted-foreground text-sm">$45 USD / session</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-background border border-border"
            >
              <h4 className="font-serif text-xl text-foreground mb-4">6-Month Cycle</h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">25–50 sessions over six months</p>
              <div className="pt-4 border-t border-border">
                <p className="font-serif text-lg text-primary">₹3,300 / session</p>
                <p className="text-muted-foreground text-sm">$40 USD / session</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-8 bg-background border border-border"
            >
              <h4 className="font-serif text-xl text-foreground mb-4">Long-Term Training</h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Ongoing practice, flexible scheduling
              </p>
              <div className="pt-4 border-t border-border">
                <p className="font-serif text-lg text-primary">₹3,300 / session</p>
                <p className="text-muted-foreground text-sm">$40 USD / session</p>
              </div>
            </motion.div>
          </div>

          {/* Notes Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 p-6 border-l-2 border-primary/30 bg-background/50"
          >
            <h5 className="font-sans text-xs tracking-widest uppercase text-primary mb-4">Please Note</h5>
            <ul className="space-y-2 text-muted-foreground/70 text-xs leading-relaxed">
              <li>Sessions are conducted one-on-one unless otherwise arranged</li>
              <li>Regular practice (2-3 times weekly) is recommended for meaningful progress</li>
              <li>All sessions require advance booking</li>
              <li>Cancellations require 24-hour notice</li>
            </ul>
          </motion.div>

          <PricingCTA />
        </div>
      </section>

      <Footer />
    </main>
  )
}
