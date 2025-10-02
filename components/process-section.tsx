export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Receive Your Starter",
      description:
        "Your active sourdough starter arrives ready to bake, carefully packaged with detailed instructions.",
    },
    {
      number: "02",
      title: "Feed & Nurture",
      description: "Follow our simple feeding schedule to keep your starter healthy and active for years to come.",
    },
    {
      number: "03",
      title: "Bake & Share",
      description: "Create delicious artisan loaves and share the joy of homemade sourdough with loved ones.",
    },
    {
      number: "04",
      title: "Join the Community",
      description: "Connect with fellow bakers, share recipes, and celebrate your sourdough successes.",
    },
  ]

  return (
    <section id="process" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Your Baking Journey</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            From our kitchen to yours, we'll guide you every step of the way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted/20 border-2 border-muted mb-6">
                <span className="font-serif text-3xl font-bold text-muted">{step.number}</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-3">{step.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
