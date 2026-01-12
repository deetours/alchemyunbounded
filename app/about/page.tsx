"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { LineReveal } from "@/components/line-reveal"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="bg-background">
      <Navigation />

      {/* Hero */}
      <section className="min-h-[70vh] flex items-center pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-primary font-sans text-sm tracking-widest uppercase mb-6"
              >
                The Character Reveal
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight"
              >
                Meet
                <br />
                <span className="text-primary">Harish</span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="aspect-[4/5] bg-[url('/contemplative-man-in-natural-light-peaceful-portra.jpg')] bg-cover bg-center"
            />
          </div>
        </div>
      </section>

      {/* Section 1 - Who He Is (Essence) */}
      <section className="py-32 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-lg text-primary mb-16 tracking-widest uppercase">Essence</h2>
          </ScrollReveal>

          <LineReveal
            lines={["A helper.", "A healer.", "A nurturer.", "A connector.", "A teacher."]}
            className="space-y-6"
            lineClassName="font-serif text-2xl md:text-3xl text-foreground"
            delay={0.2}
          />

          <ScrollReveal delay={0.8}>
            <p className="mt-16 text-muted-foreground leading-relaxed max-w-2xl">
              These are not titles to wear, but callings that emerged through years of inner work and self-discovery.
              They are the gifts that revealed themselves when I stopped searching outward and turned within.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2 - The Inner Journey */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-lg text-primary mb-16 tracking-widest uppercase">The Inner Journey</h2>
          </ScrollReveal>

          <LineReveal
            lines={["A life shaped by questioning.", "By turning inward.", "By choosing depth over conformity."]}
            className="space-y-4"
            lineClassName="font-serif text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed"
            delay={0.2}
          />

          <ScrollReveal delay={0.6}>
            <p className="mt-16 text-muted-foreground leading-relaxed max-w-2xl">
              The path was forged amidst the intricate landscape of a rich inner world—marked by intense experiences,
              trials, and eventually, profound transformation. Through this journey, I discovered that my purpose lies
              in working with people to bring about joy, harmony, balance, clarity and contentment in life.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Visual Break */}
      <section className="h-[50vh] relative overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-[url('/misty-mountain-path-journey-peaceful-nature-dawn.jpg')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-background/40" />
      </section>

      {/* Section 3 - The Calling */}
      <section className="py-32 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-lg text-primary mb-16 tracking-widest uppercase">The Calling</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed mb-8">
              Life was calling me in a certain direction.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed mb-16">
              I surrendered to this calling as clarity about my life's work began to take shape.
            </p>
          </ScrollReveal>

          <LineReveal
            lines={[
              "Stepping into the unknown,",
              "I joyously embraced the path less-traveled,",
              "without looking back.",
            ]}
            className="space-y-2"
            lineClassName="font-serif text-lg md:text-xl text-muted-foreground italic"
            delay={0.6}
          />
        </div>
      </section>

      {/* Section 4 - Training & Lineage */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-lg text-primary mb-8 tracking-widest uppercase">Training & Lineage</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-muted-foreground leading-relaxed mb-16 max-w-2xl">
              My work is grounded in rigorous training, long-term personal practice, and continued study with respected
              teachers across coaching, creativity, and movement disciplines.
            </p>
          </ScrollReveal>

          <div className="space-y-8">
            {[
              {
                name: "Eric Maisel",
                focus: "Creativity coaching, meaning-centered work",
              },
              {
                name: "Jill Badonsky",
                focus: "Certified Master Kaizen-Muse Creativity Coach",
              },
              {
                name: "Leon VanderPol",
                focus: "Deep Transformational Coaching",
              },
              {
                name: "Stevie Kent",
                focus: "Mind Shifting methodology",
              },
              {
                name: "Jozef Frucek & Linda Kapetanea",
                focus: "Fighting Monkey practice — movement as human development",
              },
            ].map((teacher, index) => (
              <ScrollReveal key={teacher.name} delay={0.2 + index * 0.1}>
                <div className="border-l-2 border-primary/30 pl-6">
                  <p className="font-serif text-lg text-foreground">{teacher.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{teacher.focus}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.8}>
            <div className="mt-16 p-8 bg-card border border-border">
              <p className="font-serif text-lg text-foreground leading-relaxed italic mb-6">
                "He coaches with his heart, life wisdom, and originality in a way you feel completely taken care of."
              </p>
              <p className="text-sm text-muted-foreground">
                — Jill Badonsky, Creator & Teacher of Kaizen-Muse Creativity Coaching Training
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.9}>
            <p className="mt-12 text-muted-foreground leading-relaxed max-w-2xl italic">
              These teachings, combined with two decades of inner work and lived transformation, form the backbone of
              how I work with people today.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 5 - Former Life (Soft credentials) */}
      <section className="py-32 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-lg text-primary mb-16 tracking-widest uppercase">Before This Work</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground leading-relaxed mb-12 max-w-2xl">
              There was another life. These experiences shaped not just credentials, but depth of understanding about
              the many dimensions of human experience.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Mechanical Engineering, Purdue University",
              "SAP Logistics & Supply Chain Consultant",
              "Years in the US corporate world",
              "Until the call became undeniable",
            ].map((item, index) => (
              <ScrollReveal key={item} delay={0.3 + index * 0.1}>
                <p className="text-sm text-muted-foreground border-l border-border pl-4">{item}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-serif text-xl md:text-2xl text-foreground mb-12">Curious about the work?</p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Link
              href="/the-work"
              className="inline-flex items-center gap-3 px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-700 font-sans text-sm tracking-widest uppercase"
            >
              Explore The Work
              <span>→</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
