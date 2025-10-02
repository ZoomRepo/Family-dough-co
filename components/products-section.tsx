import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function ProductsSection() {
  const products = [
    {
      name: "Classic Starter",
      price: "£10",
      image: "/sourdough-starter-in-glass-jar.jpg",
      features: ["Premium Quality Organic Flour", "Ready to Bake", "Cooking and Care booklet included"],
      popular: true,
    },
    // {
    //   name: "Heritage Blend",
    //   price: "$32",
    //   image: "/premium-sourdough-starter-in-ceramic-crock.jpg",
    //   features: [
    //     "Heirloom grain blend",
    //     "14-day mature culture",
    //     "Premium care guide",
    //     "Video tutorials access",
    //     "Ceramic storage crock",
    //   ],
    //   popular: true,
    // },
    // {
    //   name: "Rye Starter",
    //   price: "$28",
    //   image: "/rye-sourdough-starter-in-vintage-jar.jpg",
    //   features: ["100% organic rye", "10-day active culture", "Specialty care guide", "Rye bread recipes"],
    //   popular: false,
    // },
  ]

  return (
    <section id="products" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Our Starters</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Each starter is lovingly cultivated and ready to begin your baking journey. 
            {/* Choose the perfect match for your artisan bread dreams. */}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className={`bg-background rounded-lg overflow-hidden border-2 ${
                product.popular ? "border-muted shadow-xl" : "border-border"
              } hover:shadow-lg transition-shadow relative`}
            >
              {product.popular && (
                <div className="absolute top-4 right-4 bg-muted text-muted-foreground px-4 py-1 rounded-full text-sm font-semibold z-10">
                  Most Popular
                </div>
              )}
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-primary mb-2">{product.name}</h3>
                <div className="text-3xl font-bold text-muted mb-6">{product.price}</div>
                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="text-muted flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    product.popular
                      ? "bg-muted hover:bg-muted/90 text-muted-foreground"
                      : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  }`}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
