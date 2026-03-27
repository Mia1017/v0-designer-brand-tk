import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Monitor, Image, Camera, Brush, Play } from "lucide-react"

export default function DesignPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-light text-foreground mb-6">
            视觉设计
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            海报设计 · 摄影作品 · 绘画原画 · 动画创作
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* 官网门户大图 */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <Monitor className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-light text-foreground mb-2">
                  成都理工大学官网门户
                </h2>
                <p className="text-sm text-muted-foreground">大图制作</p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              负责成都理工大学官方网站首页轮播大图的设计制作，
              结合校园文化与时事热点，呈现学校的多元风采。
            </p>

            <div className="w-full relative rounded-xl border border-border shadow-[0_15px_30px_-10px_rgba(0,0,0,0.15)] overflow-hidden bg-white">
              <img 
                src="/v0-designer-brand-tk/qswl.jpg" 
                alt="成都理工大学官网门户大图作品" 
                className="w-full h-auto block"
              />
            </div>
          </div>

          {/* 游戏原画 */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <Image className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-light text-foreground mb-2">
                  绘画作品
                </h2>
                <p className="text-sm text-muted-foreground">游戏原画</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              游戏角色原画设计与插画创作，涵盖角色设计、场景概念、道具设计等，
              展现数字绘画技巧与创意构思能力。
            </p>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
              {[
                {
                  src: "/v0-designer-brand-tk/ggac.jpg",
                  alt: "GGAC游戏角色晋级作品",
                  title: "GGAC游戏角色晋级作品",
                },
                {
                  src: "/v0-designer-brand-tk/qimo.jpg",
                  alt: "手绘矢量插画",
                  title: "手绘矢量插画",
                },
                {
                  src: "/v0-designer-brand-tk/tr1.jpg",
                  alt: "游戏原画作品 1",
                  title: "游戏原画作品",
                },
                {
                  src: "/v0-designer-brand-tk/tr2.jpg",
                  alt: "游戏原画作品 2",
                  title: "游戏原画作品",
                },
                {
                  src: "/v0-designer-brand-tk/tr3.jpg",
                  alt: "游戏原画作品 3",
                  title: "游戏原画作品",
                },
                {
                  src: "/v0-designer-brand-tk/tr4.jpg",
                  alt: "游戏原画作品 4",
                  title: "游戏原画作品",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="mb-4 break-inside-avoid"
                >
                  <div className="group overflow-hidden rounded-xl border border-border bg-white shadow-[0_15px_30px_-10px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="overflow-hidden">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="px-4 py-3 text-center border-t border-border/60">
                      <p className="text-sm text-muted-foreground">{item.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 创意节气摄影 */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <Camera className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-light text-foreground mb-2">
                  创意节气摄影
                </h2>
                <p className="text-sm text-muted-foreground">二十四节气系列</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              以中国传统二十四节气为主题的创意摄影作品，
              将自然之美与传统文化相结合，用镜头记录季节变换的诗意。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="aspect-square rounded-xl border border-border bg-muted/30 flex items-center justify-center text-muted-foreground">
                春
              </div>
              <div className="aspect-square rounded-xl border border-border bg-muted/30 flex items-center justify-center text-muted-foreground">
                夏
              </div>
              <div className="aspect-square rounded-xl border border-border bg-muted/30 flex items-center justify-center text-muted-foreground">
                秋
              </div>
              <div className="aspect-square rounded-xl border border-border bg-muted/30 flex items-center justify-center text-muted-foreground">
                冬
              </div>
            </div>
          </div>

          {/* 动画 */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <Play className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-light text-foreground mb-2">
                  动画作品尝试
                </h2>
                <p className="text-sm text-muted-foreground">小红书动画作品</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              尝试制作的医学科普动画，将复杂的手术过程以简洁易懂的动画形式呈现，
              探索动画在内容创作领域的应用可能。
            </p>
            <div className="aspect-video rounded-xl border border-border bg-muted/30 flex items-center justify-center text-muted-foreground">
              动画作品
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
