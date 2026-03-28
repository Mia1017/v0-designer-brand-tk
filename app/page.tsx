"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Palette, PenTool } from "lucide-react"
import Link from "next/link"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"]
})

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/40 via-background to-secondary/20" />
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          
          {/* Avatar */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl bg-white flex items-center justify-center relative">
              <img 
                src="/v0-designer-brand-tk/touxiang.jpg" 
                alt="Beibei"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* 标题（已优化） */}
          <h1 className={`${inter.className} text-5xl md:text-7xl font-normal tracking-tight text-foreground mb-4`}>
            Beibei
          </h1>

          {/* 副标题（已优化） */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            专注账号运营、IP创作与视觉表达，擅长将创意转化为有传播力的内容。
          </p>
          
          {/* 标签（优化统一） */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">爆款内容</span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">热点洞察</span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">IP设计</span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">视觉表达</span>
          </div>
          
          {/* 按钮 */}
          <Link href="/about">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base tracking-wider">
              查看简历
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Portfolio Categories */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">
              作品集
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              探索我在运营、IP设计与视觉创作领域的作品
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* 内容运营 */}
            <Link href="/operation" className="group relative aspect-[3/4] overflow-hidden bg-muted rounded-lg border border-border/50">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40 transition-transform duration-500 group-hover:scale-110" 
                style={{ backgroundImage: 'url(/v0-designer-brand-tk/duotu.jpg)' }} 
              />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/20" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <Sparkles className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-serif text-2xl mb-3 text-foreground">内容运营</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  小红书运营 · 爆款内容 · 公众号策划
                </p>
              </div>
            </Link>

            {/* IP创作 */}
            <Link href="/ip-design" className="group relative aspect-[3/4] overflow-hidden bg-muted rounded-lg border border-border/50">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40 transition-transform duration-500 group-hover:scale-110" 
                style={{ backgroundImage: 'url(/v0-designer-brand-tk/ip.jpg)' }} 
              />
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-accent/20" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <Palette className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-serif text-2xl mb-3 text-foreground">IP创作</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  角色设计 · 品牌IP · 视觉延展
                </p>
              </div>
            </Link>

            {/* 视觉设计 */}
            <Link href="/design" className="group relative aspect-[3/4] overflow-hidden bg-muted rounded-lg border border-border/50">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40 transition-transform duration-500 group-hover:scale-110" 
                style={{ backgroundImage: 'url(/v0-designer-brand-tk/sheji.jpg)' }} 
              />
              <div className="absolute inset-0 bg-gradient-to-br from-muted to-secondary/30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <PenTool className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-serif text-2xl mb-3 text-foreground">视觉设计</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  平面 · 插画 · 摄影
                </p>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto text-center">
          
          <h2 className="font-serif text-4xl font-light mb-12">
            亮点经历
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <div className="p-6 bg-background rounded-lg shadow-sm">
              <div className="text-3xl font-serif text-primary mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">获赞总数</div>
            </div>

            <div className="p-6 bg-background rounded-lg shadow-sm">
              <div className="text-3xl font-serif text-primary mb-2">芭莎</div>
              <div className="text-sm text-muted-foreground">设计获奖</div>
            </div>

            <div className="p-6 bg-background rounded-lg shadow-sm">
              <div className="text-3xl font-serif text-primary mb-2">官方IP</div>
              <div className="text-sm text-muted-foreground">校级IP负责人</div>
            </div>

            <div className="p-6 bg-background rounded-lg shadow-sm">
              <div className="text-3xl font-serif text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">项目经验</div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
