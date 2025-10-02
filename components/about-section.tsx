import { Heart, Users, Award } from "lucide-react"

export function AboutSection() {
  const values = [
    {
      icon: Heart,
      title: "Heritage & Tradition",
      description: "Four generations of baking knowledge passed down through our family.",
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building connections through the shared love of artisan bread.",
    },
    {
      icon: Award,
      title: "Quality Craftsmanship",
      description: "Every starter is carefully cultivated with premium organic ingredients.",
    },
  ]

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Our Story</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Family Dough Co. began in our grandmother's kitchen, where the art of sourdough baking was more than a
            recipe—it was a ritual that brought family together. Today, we share that same passion and tradition with
            home bakers everywhere, helping you create your own delicious memories.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg border border-border text-center hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted/20 mb-6">
                <value.icon className="text-muted" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">{value.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
