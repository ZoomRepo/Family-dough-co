import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/fdc_crumb_honey_loaf.jpg" alt="Artisan sourdough bread" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-card mb-6 text-balance">
          Bake Fresh. Eat Well. Live Better.
        </h1>
        <p className="text-lg md:text-xl text-card/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          From daily loaves to weekend treats, we guide you to bake easily, affordably, and with confidence.        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-muted hover:bg-muted/90 text-muted-foreground text-lg px-8">
            Start Your Baking Journey
            <ArrowRight className="ml-2" size={20} />
          </Button>
          {/* <Button
            size="lg"
            variant="outline"
            className="bg-card/90 hover:bg-card text-foreground border-2 border-muted text-lg px-8"
          >
            Learn More
          </Button> */}
        </div>
      </div>
    </section>
  )
}
