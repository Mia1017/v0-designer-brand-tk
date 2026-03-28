import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-10">

          {/* 标题 */}
          <div>
            <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">
              关于我
            </h1>
            <p className="text-muted-foreground">
              简历预览
            </p>
          </div>

          {/* PDF展示 */}
          <div className="w-full h-[800px] rounded-xl overflow-hidden border border-border shadow-sm">
            <iframe
              src="/jianli.pdf"
              className="w-full h-full"
            />
          </div>

          {/* 按钮 */}
          <div>
            <Link
              href="/jianli.pdf"
              target="_blank"
              className="text-sm text-accent font-medium hover:opacity-80 transition"
            >
              点击查看原文
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
