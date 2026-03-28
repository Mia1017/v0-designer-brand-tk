"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TrendingUp, Users, Zap, CheckCircle2, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function OperationPage() {
  const ayakaNotes = [
    { name: "meirenyu.jpg", link: "http://xhslink.com/o/7TIILUPPVPk" },
    { name: "pijiu.jpg", link: "http://xhslink.com/o/8ipjoEMayVb" },
    { name: "haixian.jpg", link: "http://xhslink.com/o/71pgMqLgKTl" },
  ]

  const personalNotes = [
    { name: "shushu.jpg", link: "http://xhslink.com/o/45hArIYd8dB" },
    { name: "yjh.jpg", link: "http://xhslink.com/o/14V7XTFrRGZ" },
    { name: "doubin.jpg", link: "http://xhslink.com/o/8i7W9hCCF4M" },
    { name: "labi.jpg", link: "http://xhslink.com/o/82UnWa2Fwa9" },
    { name: "kawaii.jpg", link: "http://xhslink.com/o/8IWTYDutPT7" },
    { name: "nvwang.jpg", link: "http://xhslink.com/o/O3AhjdP8pH" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-light text-foreground mb-6">
            内容运营
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            爆款内容 · 网感热点 · 视觉叙事
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* 小红书｜北海道Ayaka酱 */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border group transition-all duration-300 hover:shadow-lg">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="flex-1 lg:max-w-md">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-1">
                      小红书｜北海道Ayaka酱
                    </h2>
                    <p className="text-sm text-accent font-medium tracking-wide">
                      HBC北海道放送实习
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 mb-8 text-sm md:text-base text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-4 text-primary/40 mt-1 shrink-0" />
                    <span>运营官方小红书账号，发布20+篇北海道观光笔记。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-4 text-primary/40 mt-1 shrink-0" />
                    <span>执行10+家店铺／景点取材，完成沟通、拍摄与内容制作。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-4 text-primary/40 mt-1 shrink-0" />
                    <span>参与企划、剪辑与视觉设计，协助建立账号风格，实现涨粉 800+。</span>
                  </li>
                </ul>
              </div>

              <div className="w-full lg:flex-1">
                <div className="flex flex-col sm:flex-row gap-8 items-center justify-center lg:justify-end">
                  <Link
                    href="https://xhslink.com/m/3SDaawO9bWr"
                    target="_blank"
                    className="w-[200px] sm:w-[220px] h-[380px] relative rounded-2xl border-2 border-primary/10 shadow-lg hover:border-primary/40 transition-all bg-white overflow-hidden group/profile"
                  >
                    <Image
                      src="/v0-designer-brand-tk/zhuye.jpg"
                      alt="主页"
                      fill
                      className="object-contain p-1"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/profile:bg-black/20 transition-colors flex items-center justify-center rounded-2xl">
                      <ExternalLink className="text-white opacity-0 group-hover/profile:opacity-100 transition-opacity w-8 h-8" />
                    </div>
                  </Link>
                  <div className="w-[240px] h-[400px] relative mt-8 sm:mt-0">
                    {ayakaNotes.map((note, index) => (
                      <Link
                        key={note.name}
                        href={note.link}
                        target="_blank"
                        className="absolute block group/note transition-all duration-300 hover:scale-105 hover:!z-[100]"
                        style={{ top: `${index * 30}px`, left: `${index * 30}px`, zIndex: index + 10 }}
                      >
                        <div className="w-[180px] h-[320px] relative rounded-xl border-2 border-white shadow-2xl bg-white overflow-hidden">
                          <Image
                            src={`/v0-designer-brand-tk/${note.name}`}
                            alt="笔记"
                            fill
                            className="object-contain p-0.5"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/note:opacity-100 transition-opacity flex items-center justify-center z-10 rounded-xl">
                            <ExternalLink className="w-8 h-8 text-white/80" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 小红书｜个人账号 */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border group transition-all duration-300 hover:shadow-lg">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="flex-1 lg:max-w-md">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-1">
                      小红书｜个人账号
                    </h2>
                    <p className="text-sm text-accent font-medium tracking-wide">
                      娱乐追星内容创作
                    </p>
                  </div>
                </div>
                <ul className="space-y-4 mb-8 text-sm md:text-base text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary/40 mt-1 shrink-0" />
                    <span>聚焦娱乐追星内容，擅长捕捉热点，创作具有网感的笔记。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary/40 mt-1 shrink-0" />
                    <span>产出千赞笔记 15+篇，累计获赞 58,000+。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary/40 mt-1 shrink-0" />
                    <span>在选题、标题与平台表达节奏上形成敏锐判断力。</span>
                  </li>
                </ul>
              </div>

              <div className="w-full lg:flex-1 flex justify-center lg:justify-end">
                <div className="columns-2 sm:columns-3 gap-3 max-w-[520px]">
                  {personalNotes.map((note, index) => (
                    <Link
                      key={index}
                      href={note.link}
                      target="_blank"
                      className="block mb-3 break-inside-avoid group/item transition-transform hover:scale-[1.03]"
                    >
                      <div className="relative rounded-xl border border-border shadow-md overflow-hidden bg-white">
                        <img
                          src={`/v0-designer-brand-tk/${note.name}`}
                          alt="笔记"
                          className="w-full h-auto object-contain block p-0.5"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover/item:bg-black/15 transition-colors flex items-center justify-center rounded-xl">
                          <ExternalLink className="text-white opacity-0 group-hover/item:opacity-100 transition-opacity w-5 h-5" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 公众号｜成都理工大学 */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border group hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="flex-1 lg:max-w-md">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-1">
                      公众号｜成都理工大学
                    </h2>
                    <p className="text-sm text-accent font-medium tracking-wide">
                      年度毕业季专题策划
                    </p>
                  </div>
                </div>
                <ul className="space-y-4 mb-8 text-sm md:text-base text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary/40 mt-1 shrink-0" />
                    <span>主导学校官方毕业季内容策划，统筹场景设计、事件梳理与文案表达。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary/40 mt-1 shrink-0" />
                    <span>完成 31个场景设计、24个事件回顾，并打磨60+轮细节。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary/40 mt-1 shrink-0" />
                    <span>最终阅读量达1.6万+，成为历届毕业季中热度最高的作品。</span>
                  </li>
                </ul>
              </div>

              <div className="w-full lg:flex-1">
                <div className="flex flex-col sm:flex-row gap-8 items-center justify-center lg:justify-end">
                  {/* 左侧：yangjiji.png 效果图 */}
                  <div className="w-[220px] h-[380px] relative rounded-2xl overflow-hidden drop-shadow-xl shrink-0">
                    <Image
                      src="/v0-designer-brand-tk/yangjiji.png"
                      alt="效果图展示"
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* 右侧：biye.jpg 封面图 + 跳转链接 */}
                  <div className="w-full sm:max-w-[640px] flex flex-col items-center gap-4">
                    <Link
                      href="https://mp.weixin.qq.com/s/VVMjfiyVM_RZ6SGPZ_FLAw"
                      target="_blank"
                      className="w-full relative rounded-xl border border-border shadow-md overflow-hidden bg-white group/cover transition-transform hover:scale-[1.02]"
                    >
                      <div className="w-full h-full">
                        <img
                          src="/v0-designer-brand-tk/biye.jpg"
                          alt="文章封面图"
                          className="w-full h-auto block"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover/cover:bg-black/20 transition-colors flex items-center justify-center">
                        <ExternalLink className="text-white opacity-0 group-hover/cover:opacity-100 transition-opacity w-6 h-6" />
                      </div>
                    </Link>

                    <Link
                      href="https://mp.weixin.qq.com/s/VVMjfiyVM_RZ6SGPZ_FLAw"
                      target="_blank"
                      className="text-sm text-accent font-medium tracking-wide hover:opacity-80 transition-opacity"
                    >
                      点击查看原文
                    </Link>
                  </div>
                </div>
              </div>
            </div>
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
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Link>
      </div>

      <Footer />
    </div>
  )
}
