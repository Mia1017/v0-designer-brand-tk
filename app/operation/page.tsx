"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TrendingUp, Users, Zap, CheckCircle2, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { useState, useEffect, useRef } from "react"

const bilibiliReports = [
  { title: "舞台剧｜六一首演", href: "https://mp.weixin.qq.com/s/_OVAMis2lGeLBJEEnu3oQQ" },
  { title: "舞台剧｜暑期生日场", href: "https://mp.weixin.qq.com/s/buBqNJoiSLKxTgVHfmyzJA" },
  { title: "上海历史博物馆｜咖啡嘉年华", href: "https://mp.weixin.qq.com/s/LMWaF9f92aWhFFYl5YN4rg" },
  { title: "北京野生动物园｜五一活动", href: "https://mp.weixin.qq.com/s/JWBU0bq0zIiM1NPcbo9oDg" },
  { title: "南京天街｜合作活动", href: "https://mp.weixin.qq.com/s/TCqVer7kgEI8UAi9rmYZCQ" },
  { title: "上海小荧星｜开学季", href: "https://mp.weixin.qq.com/s/J37eCqUupZQqJVpyV-puSQ" },
]

type BilibiliWorkImage = { src: string; alt: string }
type BilibiliViewerState = { images: BilibiliWorkImage[]; index: number }

const bilibiliImages: Record<string, BilibiliWorkImage[]> = {
  visual: [
    { src: "/海报截图1.JPG", alt: "视觉创意｜白垩纪情报局系列海报" },
    { src: "/海报截图2.JPG", alt: "视觉创意｜三周年各站点主题海报" },
  ],
  hotspot: [
    { src: "/蹭热度放最前面.jpg", alt: "热点策划1｜牛来热梗内容" },
    { src: "/蹭热度2.jpg", alt: "热点策划2｜误闯天家舞蹈挑战" },
    { src: "/蹭热度3.jpg", alt: "热点策划3｜角色与流行梗结合" },
  ],
  proposal: [
    { src: "/方案截图1.JPG", alt: "策划方案1｜项目概览与IP基础" },
    { src: "/方案截图2.JPG", alt: "策划方案2｜主题场景与互动玩法" },
    { src: "/方案截图3.JPG", alt: "策划方案3｜执行节奏与传播资源" },
  ],
}

function BilibiliLightbox({ viewer, onClose, onStep }: {
  viewer: BilibiliViewerState; onClose: () => void; onStep: (step: number) => void
}) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const image = viewer.images[viewer.index]
  useEffect(() => {
    const dialog = dialogRef.current
    const oldOverflow = document.body.style.overflow
    dialog?.showModal()
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()
    return () => { dialog?.close(); document.body.style.overflow = oldOverflow }
  }, [])
  useEffect(() => { scrollRef.current?.scrollTo({ top: 0 }) }, [viewer.index])
  return (
    <dialog ref={dialogRef} aria-label="作品图片预览" onCancel={onClose}
      onClick={(event) => { if (event.target === event.currentTarget) onClose() }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") { event.preventDefault(); onStep(-1) }
        if (event.key === "ArrowRight") { event.preventDefault(); onStep(1) }
      }}
      className="m-auto w-[calc(100%-2rem)] max-w-5xl h-[90vh] max-h-[90vh] p-0 rounded-2xl border border-border bg-card text-foreground shadow-2xl backdrop:bg-black/70">
      <div className="flex h-full min-h-0 flex-col">
        <div className="shrink-0 flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3">
          <p className="text-sm font-medium">{image.alt} <span className="text-muted-foreground">{viewer.index + 1} / {viewer.images.length}</span></p>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => onStep(-1)} aria-label="上一张图片" className="rounded-full border border-border px-3 py-1.5 text-sm hover:bg-primary/10">←</button>
            <button type="button" onClick={() => onStep(1)} aria-label="下一张图片" className="rounded-full border border-border px-3 py-1.5 text-sm hover:bg-primary/10">→</button>
            <button ref={closeRef} type="button" onClick={onClose} className="rounded-full border border-border px-3 py-1.5 text-sm hover:bg-primary/10">关闭</button>
          </div>
        </div>
        <div ref={scrollRef} className="min-h-0 flex-1 overflow-y-auto overscroll-contain bg-background p-2 sm:p-5">
          <img src={image.src} alt={image.alt} className="mx-auto block w-full h-auto rounded-lg" />
        </div>
      </div>
    </dialog>
  )
}

function BilibiliGallery({ images, mode, onOpen }: {
  images: BilibiliWorkImage[]; mode: "visual" | "hotspot" | "proposal";
  onOpen: (images: BilibiliWorkImage[], index: number) => void
}) {
  const containerClass = mode === "hotspot"
    ? "flex items-start w-full max-w-[640px] mx-auto pt-3 pb-8"
    : mode === "proposal" ? "grid grid-cols-3 gap-3 sm:gap-5 pt-2 pb-5" : "grid grid-cols-2 gap-4 sm:gap-5 pt-2 pb-7"
  return (
    <div className={containerClass}>
      {images.map((image, index) => {
        const placement = mode === "hotspot"
          ? ["w-[42%] z-30", "w-[42%] -ml-[13%] z-20", "w-[42%] -ml-[13%] z-10"][index]
          : ""
        return (
          <button key={image.src} type="button" onClick={() => onOpen(images, index)} aria-label={`放大查看${image.alt}`}
            className={`relative block min-w-0 self-start rounded-xl border-2 border-white bg-white p-0.5 shadow-lg transition-all duration-300 hover:!z-40 hover:scale-[1.02] focus-visible:!z-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none ${placement}`}>
            <img src={image.src} alt={image.alt} loading="lazy" decoding="async" className="block w-full h-auto rounded-lg" />
          </button>
        )
      })}
    </div>
  )
}

function BilibiliSection() {
  const [viewer, setViewer] = useState<BilibiliViewerState | null>(null)
  const openImage = (images: BilibiliWorkImage[], index: number) => setViewer({ images, index })
  const stepImage = (step: number) => setViewer((current) => current ? {
    ...current, index: (current.index + step + current.images.length) % current.images.length,
  } : null)
  return (
    <div className="bg-card rounded-xl p-8 shadow-sm border border-border group transition-all duration-300 hover:shadow-lg">
      <div className="flex items-start gap-4 mb-8">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><TrendingUp className="w-6 h-6 text-primary" /></div>
        <div className="min-w-0">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-1">B站头部亲子动画IP｜霸王龙雷奇</h2>
          <p className="text-sm text-accent font-medium tracking-wide">哔哩哔哩动画制作部实习</p>
        </div>
      </div>

      <div>
        <h3 className="font-serif text-xl font-bold text-foreground mb-4">线上｜内容策划·制作·传播</h3>
        <p className="mb-7 text-sm md:text-base text-muted-foreground leading-relaxed max-w-4xl">负责全平台账号内容策划与运营，制定创意方向与传播排期；实习期间净增粉<strong className="text-foreground font-semibold">8,300+</strong>，总粉丝增长约<strong className="text-foreground font-semibold">40%</strong>。</p>
        <div className="space-y-10">
          <div className="min-w-0">
            <p className="mb-4 text-sm md:text-base text-muted-foreground leading-relaxed"><strong className="font-medium text-foreground">视觉创意：</strong>围绕IP调性与传播节点，规划海报、封面及宣传素材。</p>
            <BilibiliGallery images={bilibiliImages.visual} mode="visual" onOpen={openImage} />
          </div>
          <div className="min-w-0">
            <p className="mb-4 text-sm md:text-base text-muted-foreground leading-relaxed"><strong className="font-medium text-foreground">热点策划：</strong>捕捉平台热梗，结合角色特点策划内容。</p>
            <BilibiliGallery images={bilibiliImages.hotspot} mode="hotspot" onOpen={openImage} />
          </div>
        </div>
        <p className="mt-2 text-xs text-muted-foreground/70">点击图片放大查看</p>
      </div>

      <div className="mt-10 pt-10 border-t border-border flex flex-col lg:flex-row gap-10 items-start">
        <div className="w-full lg:w-[36%] shrink-0">
          <h3 className="font-serif text-xl font-bold text-foreground mb-4">线下｜活动策划·落地·推广</h3>
          <p className="mb-5 text-sm md:text-base text-muted-foreground leading-relaxed">围绕《霸王龙雷奇》三周年开展暑期整合营销，策划活动方案，协同推进<strong className="text-foreground font-semibold">5场</strong>线下活动落地。</p>
          <ul className="space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
            <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-4 text-primary/40 mt-1 shrink-0" /><span><strong className="font-medium text-foreground">策划方案：</strong>设计活动主题、互动玩法与场景，制定执行方案。</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-4 text-primary/40 mt-1 shrink-0" /><span><strong className="font-medium text-foreground">现场落地：</strong>配合线下物料设计与制作，推进主题打卡及互动空间落地。</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-4 text-primary/40 mt-1 shrink-0" /><span><strong className="font-medium text-foreground">成果战报：</strong>基于活动数据复盘，制作发布<strong className="text-foreground font-semibold">6份</strong>战报，量化成效，支撑商务洽谈与资源拓展。</span></li>
          </ul>
        </div>
        <div className="w-full min-w-0 lg:flex-1">
          <BilibiliGallery images={bilibiliImages.proposal} mode="proposal" onOpen={openImage} />
          <p className="mt-2 text-xs text-muted-foreground/70 text-center">策划方案节选，点击放大查看</p>
          <div className="mt-6 rounded-xl border border-dashed border-border bg-primary/5 h-24 flex items-center justify-center text-sm text-muted-foreground/60" aria-label="现场落地图片预留位置">现场落地 · 图片待补充</div>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="text-base font-medium text-foreground mb-4">成果战报</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {bilibiliReports.map((report) => (
            <a key={report.href} href={report.href} target="_blank" rel="noopener noreferrer" className="group/report flex items-center justify-between gap-3 rounded-xl border border-border p-4 text-sm text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-sm transition-all"><span>{report.title}</span><ExternalLink className="w-4 h-4 shrink-0 text-primary/50 group-hover/report:text-primary" /></a>
          ))}
        </div>
      </div>
      {viewer && <BilibiliLightbox viewer={viewer} onClose={() => setViewer(null)} onStep={stepImage} />}
    </div>
  )
}

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
            —— 爆款内容 · 网感热点 · 视觉叙事 ——
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <BilibiliSection />

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
                      src="/zhuye.jpg"
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
                            src={`/${note.name}`}
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
                          src={`/${note.name}`}
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
                      src="/yangjiji.png"
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
                          src="/biye.jpg"
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
