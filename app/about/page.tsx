import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GraduationCap, Briefcase, Award, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          {/* Avatar */}
          <div className="mb-8 flex justify-center">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-6xl md:text-7xl font-serif text-primary/60">作</div>
            </div>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">
            关于我
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            热爱内容创作与视觉设计的创意人，专注于新媒体运营、IP形象设计与视觉创作。
            善于捕捉网络热点，具备扎实的设计功底和敏锐的审美眼光。
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">运营</span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">IP设计</span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">视觉设计</span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">摄影</span>
          </div>

          <a href="mailto:your-email@example.com">
            <Button size="lg" className="px-8">
              <Mail className="w-4 h-4 mr-2" />
              联系我
            </Button>
          </a>
        </section>

        {/* Education */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-accent" />
            </div>
            <h2 className="font-serif text-2xl font-light text-foreground">教育背景</h2>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border">
            <h3 className="text-lg font-medium text-foreground mb-1">成都理工大学</h3>
            <p className="text-muted-foreground">本科</p>
          </div>
        </section>

        {/* Experience */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-accent" />
            </div>
            <h2 className="font-serif text-2xl font-light text-foreground">实习经历</h2>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border">
            <h3 className="text-lg font-medium text-foreground mb-1">小红书账号运营</h3>
            <p className="text-sm text-muted-foreground mb-3">北海道Ayaka酱</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              负责账号的日常运营与内容策划，包括选题策划、内容制作、数据分析及用户互动管理，
              深入了解小红书平台运营规则与爆款内容创作技巧。
            </p>
          </div>
        </section>

        {/* Awards */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <Award className="w-5 h-5 text-accent" />
            </div>
            <h2 className="font-serif text-2xl font-light text-foreground">荣誉奖项</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-lg font-medium text-foreground mb-1">时尚芭莎IP设计大赛</h3>
              <p className="text-sm text-muted-foreground">莎莎IP设计获奖</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-lg font-medium text-foreground mb-1">海报设计比赛</h3>
              <p className="text-sm text-muted-foreground">创意海报获奖</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="bg-muted/30 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-light text-foreground mb-8 text-center">技能专长</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-medium tracking-wider uppercase mb-4 text-muted-foreground">运营技能</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-background text-foreground rounded-full text-sm border border-border">内容策划</span>
                  <span className="px-3 py-1.5 bg-background text-foreground rounded-full text-sm border border-border">数据分析</span>
                  <span className="px-3 py-1.5 bg-background text-foreground rounded-full text-sm border border-border">热点追踪</span>
                  <span className="px-3 py-1.5 bg-background text-foreground rounded-full text-sm border border-border">用户运营</span>
                  <span className="px-3 py-1.5 bg-background text-foreground rounded-full text-sm border border-border">小红书</span>
                  <span className="px-3 py-1.5 bg-background text-foreground rounded-full text-sm border border-border">微信公众号</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium tracking-wider uppercase mb-4 text-muted-foreground">设计技能</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-background text-foreground rounded-full text-sm border border-border">Photoshop</span>
                  <span className="px-3 py-1.5 bg-background text-foreground rounded-full text-sm border border-border">Illustrator</span>
                  <span className="px-3 py-1.5 bg-background text-foreground rounded-full text-sm border border-border">After Effects</span>
                  <span className="px-3 py-1.5 bg-background text-foreground rounded-full text-sm border border-border">Procreate</span>
                  <span className="px-3 py-1.5 bg-background text-foreground rounded-full text-sm border border-border">摄影</span>
                  <span className="px-3 py-1.5 bg-background text-foreground rounded-full text-sm border border-border">数字绘画</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
