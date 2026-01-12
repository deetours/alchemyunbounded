"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { TestimonialCard } from "@/components/testimonial-card"
import Link from "next/link"

const testimonials = {
  life: [
    {
      quote:
        "Working with Harish has been one of the most transformative experiences of my life. Harish's approach is not formulaic—it's deeply personal, intuitive, and anchored in truth. If you're looking for a coach who can help you evolve not just professionally but as a human being, Harish is that guide.",
      name: "Kapildev Verma",
      role: "Head - Client Servicing, Marcellus Investment Managers",
      location: "India",
    },
    {
      quote:
        "Harish has a remarkable ability to connect you with your inner wisdom, guiding you to answers you already have within. Through his gentle yet powerful presence, I've been able to unlock new levels of my vision for my life.",
      name: "M.R.",
      role: "Founder, Personal Growth Company",
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
        "True to his name, Harish embodies the one who removes darkness, illusion, and all obstacles in the path of life and personal evolution.",
      name: "Neha Agarwal",
      role: "Fashion Designer",
      location: "India",
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
        "After working with Harish, I have seen a significant change in myself. I've been able to handle many situations that I could not handle before in a much more calm manner, be it my exams, my work or my professional and personal relationships.",
      name: "Shradha Vijay",
      role: "Doctor",
      location: "India",
    },
    {
      quote:
        "He has given me the tools to situate me better in my landscape and find solutions to some long term problems, or a different view on them.",
      name: "Dario Feola",
      role: "Senior Railroad Engineer & Capoiera Teacher",
      location: "Italy",
    },
    {
      quote:
        "Harish always talks about seeing potential in others. He has an innate ability to see what we could be instead of what we currently are.",
      name: "Emily Rose",
      role: "Health Care Professional",
      location: "US",
    },
    {
      quote:
        "Harish took the time to truly understand my essence, helping me identify and uncover my unique abilities, strengths, and weaknesses.",
      name: "Sandeesh Reddy",
      role: "E-Commerce & Digital Leader",
      location: "US",
    },
    {
      quote:
        "It was only when I made the decision to fully embrace a series of coaching sessions with Harish that I began to see profound changes.",
      name: "Aravindh Dorappa",
      role: "Senior Systems Architect, Ushur",
      location: "India",
    },
    {
      quote:
        "Harish is unparalleled as a coach & mentor and brings a deep presence to the sessions. He's invested in people and their pain-free living.",
      name: "Manisha Shukla",
      role: "Artist & Healer",
      location: "India",
    },
    {
      quote:
        "Harish's guidance has given me a new perspective and the tools to live my life with greater grace and balance.",
      name: "Dr. Janani K.",
      role: "Assistant Professor, Manipal Institute of Technology",
      location: "India",
    },
    {
      quote:
        "If you are looking for someone genuine and loving to work with as a life coach, I would recommend hopping on a discovery call with Harish.",
      name: "Kelly Graham",
      role: "Communications Specialist",
      location: "US",
    },
    {
      quote:
        "Harish is a very intuitive person with deep focus and the ability to draw connections between seemingly random things.",
      name: "Berny Lobo",
      role: "Communication Consultant & Visual Storyteller",
      location: "India",
    },
  ],
  creativity: [
    {
      quote:
        "Each of our creativity coaching sessions is the discovery of a new location on the map of my own inner world.",
      name: "Katerina Svetkova",
      role: "Creative Director & Dancer",
      location: "Russia",
    },
    {
      quote:
        "Harish helped me embody the quality of a flower – expressing & becoming a channel for my own colourful bloom!",
      name: "Dean Philp",
      role: "AI Researcher, Movement Practitioner & Parkour Instructor",
      location: "Australia",
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
        "When I work with Harish, I feel heard, seen, and understood. I feel encouraged, supported, and excited about my work.",
      name: "Lisa Colburn",
      role: "Writer",
      location: "US",
    },
    {
      quote:
        "What stood out was how Harish seamlessly transitioned from a friend to a coach. His exercises were unique and creative, which helped me see my strengths and where I could work if I wished to, keeping my dreams and goals in mind.",
      name: "Shilpa Wadhwa",
      role: "Founder, Wishbox Studio",
      location: "India",
    },
    {
      quote:
        "Harish has a unique ability to look at creativity and life from multiple perspectives and that makes his coaching different and relatable.",
      name: "Rohan Anthony Solomon",
      role: "Senior Copywriter, AVDS",
      location: "India",
    },
    {
      quote:
        "Harish is committed to making a difference and is always accessible and non judgmental, creating a safe space for the sessions.",
      name: "Sudipta Dhruva",
      role: "Storyteller, Trainer & Social Transformer",
      location: "India",
    },
    {
      quote:
        "What I loved the most about Harish's sessions is the way he is able to weave deeper spiritual truths into our discussions.",
      name: "Amy S.",
      role: "Writer",
      location: "US",
    },
    {
      quote:
        "I've been under the guidance of Harish's creativity coaching for over a year now, and the experience has been life-changing.",
      name: "Miguel Viero",
      role: "Movement Educator & Teacher",
      location: "Spain",
    },
    {
      quote: "Harish gives me little words of wisdom, reminds me that there's joy to be had.",
      name: "Jennigan",
      role: "Small Business Owner",
      location: "US",
    },
    {
      quote:
        "Harish definitely knows and feels how to ask a question that will bring the answer from the depth of your heart.",
      name: "Julia Egorova",
      role: "Dancer & Movement Teacher",
      location: "Belarus",
    },
    {
      quote: "He coaches with his heart, life wisdom, and originality in a way you feel completely taken care of.",
      name: "Jill Badonsky",
      role: "Creator & Teacher of Kaizen-Muse Creativity Coaching Training",
      location: "US",
    },
    {
      quote: "Harish's sessions opened my eyes, ears, and mind to new ideas and ways of thinking and seeing.",
      name: "Veeru Kankatala",
      role: "Technology Consultant, Founder & CEO of Acroplans",
      location: "US",
    },
    {
      quote:
        "He is fully present during the live sessions and still able to create wonderful summaries that enhance the experience.",
      name: "Eduardo Sacco Caprotti",
      role: "Movement Coach",
      location: "Italy",
    },
    {
      quote:
        "After working with Harish, I have arrived at a place where I feel more in tune with, and trusting of, my own inner wisdom.",
      name: "Katy Haldiman",
      role: "Health Care Professional & Photographer",
      location: "US",
    },
    {
      quote:
        "When I started with Harish's creativity coaching I didn't know what to expect. I had hit a brick wall with marketing my art on social media.",
      name: "Genny Entezari",
      role: "Artist",
      location: "US",
    },
    {
      quote:
        "Working with Harish has helped me make significant strides on all my challenges in an organic way, and also boosted my self-confidence.",
      name: "Bianca Alegria",
      role: "Dancer & Yogic Therapist",
      location: "Portugal",
    },
  ],
  movement: [
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
        "Harish is a highly methodical and patient instructor, which creates a sense of calm while performing the movements. Moreover, his techniques not only enhance present well-being but also help in preparing for a healthier and more balanced future.",
      name: "Mousumi Mandal",
      role: "Product Development Manager, FIS",
      location: "India",
    },
  ],
}

type Category = "life" | "creativity" | "movement"

export default function VoicesPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("life")

  const categories = [
    { id: "life" as Category, label: "Transformational Life Coaching", count: testimonials.life.length },
    { id: "creativity" as Category, label: "Creativity Coaching", count: testimonials.creativity.length },
    { id: "movement" as Category, label: "Movement Arts", count: testimonials.movement.length },
  ]

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
            Words From Others
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-8"
          >
            Voices & Reflections
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-muted-foreground leading-relaxed max-w-xl"
          >
            Honest reflections from those who have walked this path. Each journey is unique—these are glimpses into what
            becomes possible.
          </motion.p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 px-6 border-b border-border sticky top-16 bg-background/95 backdrop-blur-sm z-40">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 font-sans text-xs tracking-widest uppercase transition-all duration-500 border ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary"
                }`}
              >
                {category.label}
                <span className="ml-2 opacity-50">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-6 bg-card">
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {testimonials[activeCategory].map((testimonial, index) => (
                <TestimonialCard
                  key={`${activeCategory}-${index}`}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  role={testimonial.role}
                  location={testimonial.location}
                  delay={index * 0.05}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Note */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-muted-foreground leading-relaxed">
              These reflections are shared with gratitude and permission. Each journey is unique—yours will be too.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-serif text-xl md:text-2xl text-foreground mb-12">If something here resonates...</p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Link
              href="/begin"
              className="inline-flex items-center gap-3 px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-700 font-sans text-sm tracking-widest uppercase"
            >
              Begin Your Journey
              <span>→</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
