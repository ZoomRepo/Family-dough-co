"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Process", href: "#process" },
    { name: "Testimonials", href: "#testimonials" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src="/fdc-logo-tansparent.png" height="100px" width="100px"/>
            <div className="text-2xl md:text-3xl font-serif font-bold text-primary">
              Family Dough Co.</div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-muted transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <Link href="/#products">
              <Button className="bg-muted hover:bg-muted/90 text-muted-foreground">Shop Now</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-muted transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Link href="/#products">
              <Button className="bg-muted hover:bg-muted/90 text-muted-foreground w-full">Shop Now</Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
