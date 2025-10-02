"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Portland, OR",
      text: "Family Dough Co. transformed my baking! The starter is so healthy and active. I've been making the most incredible loaves for my family every weekend.",
      rating: 5,
    },
    {
      name: "James Chen",
      location: "Austin, TX",
      text: "As a beginner, I was nervous about sourdough. The detailed guide and responsive support made it so easy. My first loaf was a success!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      location: "Seattle, WA",
      text: "The Heritage Blend starter is absolutely worth it. The flavor is incredible, and the ceramic crock is beautiful. This is baking at its finest.",
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Baker Stories</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Join thousands of home bakers creating delicious memories.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-background rounded-lg p-8 md:p-12 border border-border shadow-lg">
            <div className="flex gap-1 justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="text-muted fill-muted" size={24} />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-foreground/90 text-center mb-8 leading-relaxed italic">
              "{testimonials[currentIndex].text}"
            </blockquote>
            <div className="text-center">
              <div className="font-semibold text-primary text-lg">{testimonials[currentIndex].name}</div>
              <div className="text-foreground/60">{testimonials[currentIndex].location}</div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-2 border-muted hover:bg-muted/10 bg-transparent"
            >
              <ChevronLeft className="text-muted" size={24} />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-muted w-8" : "bg-border hover:bg-muted/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-2 border-muted hover:bg-muted/10 bg-transparent"
            >
              <ChevronRight className="text-muted" size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
