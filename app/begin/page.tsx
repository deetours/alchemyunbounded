"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { LineReveal } from "@/components/line-reveal"
import Link from "next/link"

export default function BeginPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the form data to a server
    setIsSubmitted(true)
  }

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
            The First Step
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight"
          >
            Begin
          </motion.h1>
        </div>
      </section>

      {/* Invitation Text */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <LineReveal
            lines={["If something here resonates", "If you feel a quiet yes", "If curiosity is stirring"]}
            className="space-y-2 mb-12"
            lineClassName="font-serif text-xl md:text-2xl text-foreground"
          />

          <ScrollReveal delay={0.6}>
            <p className="font-serif text-xl md:text-2xl text-primary">You are welcome to reach out.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-6 bg-card">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="mb-12">
              <h2 className="font-serif text-lg text-primary mb-4 tracking-widest uppercase">A Conversation</h2>
              <p className="text-muted-foreground leading-relaxed">
                A meeting of presence. No obligation. Simply an opportunity to connect and explore if this work might
                serve you.
              </p>
              <p className="text-muted-foreground/70 text-sm leading-relaxed mt-4">
                If you'd like to understand the different ways we can work together, you can{" "}
                <Link
                  href="/offerings"
                  className="text-primary hover:text-foreground transition-colors duration-500 underline underline-offset-4"
                >
                  explore the offerings
                </Link>{" "}
                and investment details.
              </p>
            </div>
          </ScrollReveal>

          {!isSubmitted ? (
            <ScrollReveal delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-sans text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-border focus:border-primary focus:outline-none transition-colors duration-500 text-foreground"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-sans text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-border focus:border-primary focus:outline-none transition-colors duration-500 text-foreground"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-sans text-foreground mb-2">
                    What brings you here, right now?
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-border focus:border-primary focus:outline-none transition-colors duration-500 resize-none text-foreground"
                    placeholder="Share as much or as little as feels right..."
                  />
                </div>

                <div className="pt-4">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-500 font-sans text-sm tracking-widest uppercase"
                  >
                    Send Message
                    <span>→</span>
                  </motion.button>
                </div>
              </form>
            </ScrollReveal>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-16"
            >
              <p className="font-serif text-2xl text-foreground mb-4">Thank you.</p>
              <p className="text-muted-foreground">Your message has been received. I will be in touch soon.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Closing Note */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-muted-foreground leading-relaxed italic">
              "Every journey begins with a single moment of courage—the decision to take the first step, even when the
              path ahead is unclear."
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
