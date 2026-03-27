import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Monitor, Camera, Brush, Play } from "lucide-react"
import Link from "next/link"

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
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-sm border border-border group transition-all duration-300 hover:shadow-lg overflow-hidden relative">
            <div className="max-w-3xl mx-auto text-center mb-12 relative z-10">
              <div className="flex items-center gap-4 mb-6 justify-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 shadow-inner">
                  <Monitor className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-1">
                    成都理工大学官网门户
                  </h2>
                  <p className="text-sm text-accent font-medium tracking-wide italic">
                    大图制作
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                负责成都理工大学官方网站首页轮播大图的设计制作，<br />
                结合校园文化与时事热点，呈现学校的多元风采。
              </p>
            </div>

            <div className="w-full flex flex-col items-center gap-6">
              <div className="w-full relative rounded-xl border border-border shadow-[0_15px_30px_-10px_rgba(0,0,0,0.15)] overflow-hidden bg-white">
                <img 
                  src="/v0-designer-brand-tk/qswl.jpg" 
                  alt="成都理工大学官网门户大图作品" 
                  className="w-full h-auto block"
                />
              </div>
            </div>

            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-10 bg-primary/20 blur-[60px] -z-10"></div>
          </div>

          {/* 绘画作品 */}
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-sm border border-border group transition-all duration-300 hover:shadow-lg overflow-hidden relative">
            <div className="max-w-3xl mx-auto text-center mb-12 relative z-10">
              <div className="flex items-center gap-4 mb-6 justify-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 shadow-inner">
                  <Brush className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-1">
                    绘画作品
                  </h2>
                  <p className="text-sm text-accent font-medium tracking-wide italic">
                    游戏原画
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                游戏角色原画设计与插画创作，涵盖角色设计、场景概念、道具设计等，<br />
                展现数字绘画技巧与创意构思能力。
              </p>
            </div>

            <div className="w-full flex flex-col md:flex-row gap-8 max-w-6xl mx-auto items-center md:items-start pt-6 border-t border-border/60 overflow-x-hidden">
              
              {/* 左 */}
              <div className="w-full md:w-1/3 shrink-0 overflow-hidden relative flex flex-col items-center gap-6">
                <div className="w-full relative rounded-xl border border-border shadow-lg overflow-hidden bg-white">
                  <img 
                    src="/v0-designer-brand-tk/jjac.jpg" 
                    alt="GGAC游戏角色晋级作品" 
                    className="w-full h-auto block transition-transform duration-500 hover:scale-[1.03]" 
                  />
                </div>
                <h3 className="text-sm text-primary font-medium tracking-wider italic text-center">
                  GGAC游戏角色晋级作品
                </h3>
              </div>

              {/* 中 */}
              <div className="w-full md:w-1/3 shrink-0 overflow-hidden relative flex flex-col items-center gap-6">
                <div className="w-full relative rounded-xl border border-border shadow-lg overflow-hidden bg-white">
                  <img 
                    src="/v0-designer-brand-tk/qimo.jpg" 
                    alt="手绘矢量插画" 
                    className="w-full h-auto block transition-transform duration-500 hover:scale-[1.03]" 
                  />
                </div>
                <h3 className="text-sm text-primary font-medium tracking-wider italic text-center">
                  手绘矢量插画
                </h3>
              </div>

              {/* 右 */}
              <div className="w-full md:w-1/3 flex flex-col items-center gap-6">
                <div className="w-full">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: "tr1.jpg", alt: "同人插画创作1" },
                      { name: "tr2.jpg", alt: "同人插画创作2" },
                      { name: "tr3.jpg", alt: "同人插画创作3" },
                      { name: "tr4.jpg", alt: "同人插画创作4" },
                    ].map((item) => (
                      <div
                        key={item.name}
                        className="aspect-square relative rounded-xl overflow-hidden border border-border bg-white shadow-md transition-transform hover:scale-[1.05]"
                      >
                        <img 
                          src={`/v0-designer-brand-tk/${item.name}`} 
                          alt={item.alt} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <h3 className="text-sm text-primary font-medium tracking-wider italic text-center">
                  同人插画创作
                </h3>
              </div>
            </div>

            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-10 bg-primary/20 blur-[60px] -z-10"></div>
          </div>

          {/* 创意节气摄影 */}
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-sm border border-border group transition-all duration-300 hover:shadow-lg overflow-hidden relative">
            <div className="max-w-3xl mx-auto text-center mb-12 relative z-10">
              <div className="flex items-center gap-4 mb-6 justify-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 shadow-inner">
                  <Camera className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-1">
                    创意节气摄影
                  </h2>
                  <p className="text-sm text-accent font-medium tracking-wide italic">
                    二十四节气系列
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                以中国传统二十四节气为主题的创意摄影作品，<br />
                将自然之美与传统文化相结合，用镜头记录季节变换的诗意。
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border/60">
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

            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-10 bg-accent/20 blur-[60px] -z-10"></div>
          </div>

          {/* 动画 */}
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-sm border border-border group transition-all duration-300 hover:shadow-lg overflow-hidden relative">
            <div className="max-w-3xl mx-auto text-center mb-12 relative z-10">
              <div className="flex items-center gap-4 mb-6 justify-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 shadow-inner">
                  <Play className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-1">
                    动画作品尝试
                  </h2>
                  <p className="text-sm text-accent font-medium tracking-wide italic">
                    小红书动画作品
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                尝试制作的医学科普动画，将复杂的手术过程以简洁易懂的动画形式呈现，<br />
                探索动画在内容创作领域的应用可能。
              </p>
            </div>

            <div className="pt-6 border-t border-border/60">
              <div className="aspect-video rounded-xl border border-border bg-muted/30 flex items-center justify-center text-muted-foreground">
                动画作品
              </div>
            </div>

            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-10 bg-primary/20 blur-[60px] -z-10"></div>
          </div>
        </div>
      </section>

      {/* 返回主页按钮 - 放置在内容与页脚之间 */}
      <div className="py-12 flex justify-center">
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
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </Link>
      </div>

      <Footer />
    </div>
  )
}
