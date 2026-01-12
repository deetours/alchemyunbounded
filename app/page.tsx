"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { LineReveal } from "@/components/line-reveal"
import { TestimonialCardCompact } from "@/components/testimonial-card"
import { ChevronDown } from "lucide-react"

const homeTestimonials = [
  {
    quote: "Working with Harish has been one of the most transformative experiences of my life.",
    name: "Kapildev Verma",
    role: "Head - Client Servicing, Investment Firm",
    location: "India",
  },
  {
    quote: "Each of our sessions is the discovery of a new location on the map of my own inner world.",
    name: "Katerina Svetkova",
    role: "Creative Director & Dancer",
    location: "Russia",
  },
  {
    quote:
      "After a year and half of receiving life coaching, I found the strength and clarity to completely change my life.",
    name: "Katy Haldiman",
    role: "Health Care Professional",
    location: "US",
  },
  {
    quote: "He coaches with his heart, life wisdom, and originality in a way you feel completely taken care of.",
    name: "Jill Badonsky",
    role: "Creator, Kaizen-Muse Creativity Coaching",
    location: "US",
  },
  {
    quote: "Harish's approach instilled in me a sense of body awareness and self-confidence.",
    name: "Bharath",
    role: "Movement Practitioner",
    location: "US",
  },
]

export default function HomePage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])

  return (
    <main className="bg-background">
      <Navigation />

      {/* Hero Section - The Opening Shot */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/serene-nature-forest-light-rays-peaceful-morning-m.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-background/60" />
        </motion.div>

        <div className="relative h-full flex flex-col items-center justify-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground text-center max-w-4xl leading-tight"
          >
            Experience deep transformation in
            <br />
            <span className="text-primary">life, work, and creativity</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="mt-8 font-sans text-lg md:text-xl text-muted-foreground text-center tracking-wide"
          >
            Coaching with Harish Narayan — straight from the heart.
          </motion.p>
        </div>

        {/* Scroll Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </section>

      {/* Scroll 1 - The Invitation */}
      <section className="min-h-screen flex items-center justify-center py-32 px-6">
        <LineReveal
          lines={["You are not broken.", "You are not behind.", "You are not late.", "", "You are becoming."]}
          className="text-center"
          lineClassName="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-loose"
        />
      </section>

      {/* Scroll 2 - What This Space Is */}
      <section className="min-h-screen flex items-center bg-card py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-lg text-primary mb-12 tracking-widest uppercase">This Space</h2>
          </ScrollReveal>

          <LineReveal
            lines={[
              "This is a space for deep listening.",
              "For slowing down.",
              "For remembering who you are",
              "beneath roles, stories, and expectations.",
            ]}
            className="space-y-4"
            lineClassName="font-serif text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed"
            delay={0.2}
          />

          <ScrollReveal delay={0.8}>
            <p className="mt-16 text-muted-foreground leading-relaxed max-w-2xl">
              Here, transformation is not forced or manufactured. It emerges naturally when we create the right
              conditions—presence, awareness, and a willingness to meet ourselves exactly where we are.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Visual Interlude */}
      <section className="h-[60vh] relative overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-[url('/calm-water-reflection-sunrise-peaceful-meditation.jpg')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-background/30" />
      </section>

      {/* Distilled Journey Section */}
      <section className="py-32 px-6 bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed mb-8">
              "I've walked through anxiety, emptiness, loss of meaning,
              <br className="hidden md:block" />
              and deep inner fragmentation."
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="font-serif text-xl md:text-2xl lg:text-3xl text-primary leading-relaxed mb-12">
              That path became the foundation of my work today."
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <Link
              href="/journey"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-500 font-sans text-sm tracking-widest"
            >
              Read my journey
              <span>→</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-lg text-primary mb-16 tracking-widest uppercase text-center">
              What Others Say
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {homeTestimonials.slice(0, 3).map((testimonial, index) => (
              <TestimonialCardCompact
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                location={testimonial.location}
                delay={index * 0.1}
              />
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-12 max-w-3xl mx-auto">
            {homeTestimonials.slice(3, 5).map((testimonial, index) => (
              <TestimonialCardCompact
                key={index + 3}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                location={testimonial.location}
                delay={(index + 3) * 0.1}
              />
            ))}
          </div>

          <ScrollReveal delay={0.6}>
            <div className="text-center mt-16">
              <Link
                href="/voices"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-500 font-sans text-sm tracking-widest"
              >
                Read more voices
                <span>→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Scroll 3 - Gentle CTA */}
      <section className="min-h-[80vh] flex items-center justify-center py-32 px-6 bg-card">
        <div className="text-center">
          <ScrollReveal>
            <p className="font-serif text-xl md:text-2xl text-muted-foreground mb-12">If something here resonates...</p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-700 font-sans text-sm tracking-widest uppercase"
              >
                Step Inside
                <motion.span className="inline-block" whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                  →
                </motion.span>
              </Link>

              <Link
                href="/journey"
                className="group inline-flex items-center gap-3 px-8 py-4 border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-700 font-sans text-sm tracking-widest uppercase"
              >
                Explore the Journey
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
