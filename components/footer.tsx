import Link from "next/link"
import { Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-2xl font-light tracking-wide text-foreground">Portfolio</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              运营 · IP · 视觉
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-medium tracking-wider uppercase mb-4">作品集</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/operation" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  内容运营
                </Link>
              </li>
              <li>
                <Link href="/ip-design" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  IP创作
                </Link>
              </li>
              <li>
                <Link href="/design" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  视觉设计
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium tracking-wider uppercase mb-4">联系方式</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  简历
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:your-email@example.com" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  发送邮件
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
