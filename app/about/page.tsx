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
            <p className="text-muted-foreground">简历预览</p>
          </div>

          {/* 简历图片 */}
          <div className="w-full rounded-xl overflow-hidden border border-border shadow-sm bg-white">
            <img
              src="/wdjl.jpg"
              alt="简历"
              className="w-full h-auto block"
            />
          </div>

          {/* 返回按钮（和其他页面一致） */}
          <div className="pt-12 flex justify-center">
            <Link
              href="/"
              className="group flex items-center gap-2 px-8 py-3 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1"
            >
              <span className="font-medium">返回主页</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
