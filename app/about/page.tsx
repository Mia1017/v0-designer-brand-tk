import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">
              关于我
            </h1>
            <p className="text-muted-foreground">简历预览</p>
          </div>

          <div className="w-full rounded-xl overflow-hidden border border-border shadow-sm bg-white">
            <img
              src="/v0-designer-brand-tk/jljl.jpg"
              alt="简历"
              className="w-full h-auto block"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
