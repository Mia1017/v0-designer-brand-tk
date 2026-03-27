"use client"

import Link from "next/link"
import { Mail, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-serif text-2xl md:text-3xl font-light tracking-wide text-foreground">
              Portfolio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/operation"
              className="text-sm tracking-wider uppercase text-foreground/70 hover:text-foreground transition-colors"
            >
              内容运营
            </Link>
            <Link
              href="/ip-design"
              className="text-sm tracking-wider uppercase text-foreground/70 hover:text-foreground transition-colors"
            >
              IP创作
            </Link>
            <Link
              href="/design"
              className="text-sm tracking-wider uppercase text-foreground/70 hover:text-foreground transition-colors"
            >
              视觉设计
            </Link>
            <Link
              href="/about"
              className="text-sm tracking-wider uppercase text-foreground/70 hover:text-foreground transition-colors"
            >
              关于我
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <a href="mailto:your-email@example.com" className="hidden sm:block">
              <Button variant="ghost" size="icon" className="relative">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-6 space-y-4">
            <Link
              href="/operation"
              className="block text-base tracking-wider uppercase text-foreground/70 hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              内容运营
            </Link>
            <Link
              href="/ip-design"
              className="block text-base tracking-wider uppercase text-foreground/70 hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              IP创作
            </Link>
            <Link
              href="/design"
              className="block text-base tracking-wider uppercase text-foreground/70 hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              视觉设计
            </Link>
            <Link
              href="/about"
              className="block text-base tracking-wider uppercase text-foreground/70 hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              关于我
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
