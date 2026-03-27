import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Monitor, Camera, Brush } from "lucide-react"
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
            海报设计 · 摄影作品 · 绘画原画
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* 官网门户大图 */}
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-sm border border-border group transition-all duration-300 hover:shadow-lg overflow-hidden relative">
            <div className="mb-12 relative z-10">
              <div className="flex items-start gap-4 mb-6">
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
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
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
            <div className="mb-12 relative z-10">
              <div className="flex items-start gap-4 mb-6">
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
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                游戏角色原画设计与插画创作，涵盖角色设计、场景概念、道具设计等，<br />
                展现数字绘画技巧与创意构思能力。
              </p>
            </div>

            <div className="w-full pt-6 border-t border-border/60 space-y-12">
              {/* 第一部分：三张横排 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
                {[
                  {
                    src: "/v0-designer-brand-tk/hoshi.jpg",
                    alt: "角色插画作品",
                    title: "",
                  },
                  {
                    src: "/v0-designer-brand-tk/jjac.jpg",
                    alt: "GGAC游戏角色晋级作品",
                    title: "GGAC游戏角色晋级作品",
                  },
                  {
                    src: "/v0-designer-brand-tk/IMG_6759.JPG",
                    alt: "手绘人物作品",
                    title: "",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center gap-5">
                    <div className="w-full aspect-[3.6/5] relative rounded-xl border border-border shadow-[0_15px_30px_-10px_rgba(0,0,0,0.15)] overflow-hidden bg-white group/item">
                      <div className="w-full h-full overflow-hidden flex items-center justify-center">
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-full object-contain p-0.5 transition-transform duration-500 group-hover/item:scale-[1.03]"
                        />
                      </div>
                    </div>
                    {item.title ? (
                      <h3 className="text-sm text-primary font-medium tracking-wider italic text-center">
                        {item.title}
                      </h3>
                    ) : (
                      <div className="h-[20px]" />
                    )}
                  </div>
                ))}
              </div>

              {/* 第二部分：左矢量插画，右同人创作 */}
              <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-10 items-start">
                {/* 左边：矢量插画 */}
                <div className="flex flex-col items-center gap-6">
                  <div className="w-full max-w-[360px] relative rounded-xl border border-border shadow-[0_15px_30px_-10px_rgba(0,0,0,0.15)] overflow-hidden bg-white group/item">
                    <div className="overflow-hidden">
                      <img
                        src="/v0-designer-brand-tk/qimo.jpg"
                        alt="手绘矢量插画"
                        className="w-full h-auto block transition-transform duration-500 group-hover/item:scale-[1.03]"
                      />
                    </div>
                  </div>
                  <h3 className="text-sm text-primary font-medium tracking-wider italic text-center">
                    手绘矢量插画
                  </h3>
                </div>

                {/* 右边：同人创作 */}
                <div className="flex flex-col items-center gap-6">
                  <div className="w-full flex justify-center">
                    <div className="columns-2 gap-4 w-full max-w-[560px]">
                      {[
                        { name: "tr1.jpg", alt: "同人创作1" },
                        { name: "tr4.jpg", alt: "同人创作4" },
                        { name: "tr3.jpg", alt: "同人创作3" },
                        { name: "tr2.jpg", alt: "同人创作2" },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="block mb-4 break-inside-avoid group/item transition-transform hover:scale-[1.03]"
                        >
                          <div className="relative rounded-xl border border-border shadow-md overflow-hidden bg-white">
                            <img
                              src={`/v0-designer-brand-tk/${item.name}`}
                              alt={item.alt}
                              className="w-full h-auto object-contain block p-1"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-sm text-primary font-medium tracking-wider italic text-center">
                    同人创作
                  </h3>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-10 bg-primary/20 blur-[60px] -z-10"></div>
          </div>

          {/* 创意节气摄影 */}
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-sm border border-border group transition-all duration-300 hover:shadow-lg overflow-hidden relative">
            <div className="mb-12 relative z-10">
              <div className="flex items-start gap-4 mb-6">
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
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                以中国传统二十四节气为主题的创意摄影作品，<br />
                将自然之美与传统文化相结合，用镜头记录季节变换的诗意。
              </p>
            </div>

            <div className="pt-6 border-t border-border/60 space-y-6">
              {/* 第一排 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {["q1.jpg", "q2.jpg", "q3.jpg"].map((img, index) => (
                  <div
                    key={index}
                    className="relative rounded-xl border border-border shadow-[0_15px_30px_-10px_rgba(0,0,0,0.15)] overflow-hidden bg-white group/item"
                  >
                    <img
                      src={`/v0-designer-brand-tk/${img}`}
                      alt={`节气摄影作品 ${index + 1}`}
                      className="w-full h-auto block transition-transform duration-500 group-hover/item:scale-[1.03]"
                    />
                  </div>
                ))}
              </div>

              {/* 第二排 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {["q4.jpg", "q5.jpg", "q6.jpg"].map((img, index) => (
                  <div
                    key={index}
                    className="relative rounded-xl border border-border shadow-[0_15px_30px_-10px_rgba(0,0,0,0.15)] overflow-hidden bg-white group/item"
                  >
                    <img
                      src={`/v0-designer-brand-tk/${img}`}
                      alt={`节气摄影作品 ${index + 4}`}
                      className="w-full h-auto block transition-transform duration-500 group-hover/item:scale-[1.03]"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-10 bg-accent/20 blur-[60px] -z-10"></div>
          </div>
        </div>
      </section>

      {/* 返回主页按钮 */}
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
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Link>
      </div>

      <Footer />
    </div>
  )
}
