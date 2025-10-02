import { Facebook, Instagram, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-3xl font-bold mb-4">Family Dough Co.</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Crafting memories, one loaf at a time. Premium sourdough starters for home bakers who value tradition and
              quality.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted/20 hover:bg-muted/30 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted/20 hover:bg-muted/30 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted/20 hover:bg-muted/30 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-muted transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-primary-foreground/80 hover:text-muted transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#process" className="text-primary-foreground/80 hover:text-muted transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-primary-foreground/80 hover:text-muted transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-4">Stay Updated</h4>
            <p className="text-primary-foreground/80 mb-4 text-sm">Get baking tips, recipes, and special offers.</p>
            <div className="flex flex-col gap-2">
              <Input type="email" placeholder="Your email" className="bg-card text-card-foreground border-muted" />
              <Button className="bg-muted hover:bg-muted/90 text-muted-foreground w-full">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>© {new Date().getFullYear()} Family Dough Co. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-muted transition-colors">
              Privacy Policy
            </a>
            {" · "}
            <a href="#" className="hover:text-muted transition-colors">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
