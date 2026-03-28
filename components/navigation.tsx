"use client"

import Link from "next/link"
import { Mail, Menu, X, House } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "内容运营", href: "/operation" },
  { label: "IP创作", href: "/ip-design" },
  { label: "视觉设计", href: "/design" },
  { label: "简历", href: "/about" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* 左：Home 图标 */}
          <Link href="/" className="group flex items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center border border-border hover:bg-accent/5 transition-all duration-300">
              <House className="h-5 w-5 text-foreground/75 group-hover:text-foreground transition-colors duration-300" />
            </div>
          </Link>

          {/* 中间导航 */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    isActive
                      ? "px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-foreground text-sm tracking-wider transition-all duration-300 shadow-sm"
                      : "px-4 py-2 rounded-full border border-transparent text-sm tracking-wider text-foreground/70 hover:text-foreground hover:bg-accent/5 transition-all duration-300"
                  }
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* 右：邮箱 */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:1317732244@qq.com?subject=作品集联系"
              className="hidden sm:block"
            >
              <Button variant="ghost" size="icon" className="relative">
                <Mail className="h-5 w-5" />
              </Button>
            </a>

            {/* 手机菜单按钮 */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* 手机端菜单 */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-6 space-y-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={
                    isActive
                      ? "block px-4 py-3 rounded-xl border border-accent/30 bg-accent/10 text-foreground text-base tracking-wider transition-all duration-300"
                      : "block px-4 py-3 rounded-xl border border-transparent text-base tracking-wider text-foreground/70 hover:text-foreground hover:bg-accent/5 transition-all duration-300"
                  }
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}
