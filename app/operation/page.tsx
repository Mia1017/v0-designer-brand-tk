"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TrendingUp, Users, Zap, CheckCircle2, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { useState, useEffect, useRef } from "react"

const bilibiliReports = [
  { title: "北京舞台剧｜暑期生日场", href: "https://mp.weixin.qq.com/s/buBqNJoiSLKxTgVHfmyzJA", cover: "https://github.com/Mia1017/v0mia/blob/0f0be0a9c5f247f47a560d002d6e756fcf8bfe01/public/%E8%88%9E%E5%8F%B0%E5%89%A7%E7%94%9F%E6%97%A5%E5%9C%BA%E6%88%98%E6%8A%A5.jpg?raw=true" },
  { title: "上海历史博物馆｜咖啡嘉年华", href: "https://mp.weixin.qq.com/s/LMWaF9f92aWhFFYl5YN4rg", cover: "https://github.com/Mia1017/v0mia/blob/0f0be0a9c5f247f47a560d002d6e756fcf8bfe01/public/%E4%B8%8A%E5%8E%86%E5%8D%9A%E6%88%98%E6%8A%A5.jpg?raw=true" },
  { title: "北京野生动物园｜五一活动", href: "https://mp.weixin.qq.com/s/JWBU0bq0zIiM1NPcbo9oDg", cover: "https://github.com/Mia1017/v0mia/blob/0f0be0a9c5f247f47a560d002d6e756fcf8bfe01/public/%E5%8C%97%E9%87%8E%E6%88%98%E6%8A%A5.jpg?raw=true" },
  { title: "南京天街｜美陈展览", href: "https://mp.weixin.qq.com/s/TCqVer7kgEI8UAi9rmYZCQ", cover: "https://github.com/Mia1017/v0mia/blob/0f0be0a9c5f247f47a560d002d6e756fcf8bfe01/public/%E5%8D%97%E4%BA%AC%E5%A4%A9%E8%A1%97%E6%88%98%E6%8A%A5.jpg?raw=true" },
  { title: "上海小荧星｜开学季", href: "https://mp.weixin.qq.com/s/J37eCqUupZQqJVpyV-puSQ", cover: "https://github.com/Mia1017/v0mia/blob/0f0be0a9c5f247f47a560d002d6e756fcf8bfe01/public/%E5%B0%8F%E8%8D%A7%E6%98%9F%E6%88%98%E6%8A%A5.jpg?raw=true" },
]

type BilibiliWorkImage = { src: string; alt: string; caption?: string }
type BilibiliViewerState = { images: BilibiliWorkImage[]; index: number }

const bilibiliImages: Record<string, BilibiliWorkImage[]> = {
  visual: [
    { src: "/海报截图1.JPG", alt: "视觉创意｜白垩纪情报局系列海报" },
    { src: "/海报截图2.JPG", alt: "视觉创意｜三周年各站点主题海报" },
  ],
  hotspot: [
    { src: "/蹭热度放最前面.jpg", alt: "热点策划1｜牛来热梗内容" },
    { src: "/蹭热度2.jpg", alt: "热点策划2｜误闯天家舞蹈挑战" },
    { src: "/蹭热度3.jpg", alt: "热点策划3｜正太扭腰梗" },
  ],
  proposal: [
    { src: "/方案截图1.JPG", alt: "策划方案1｜项目概览与IP基础" },
    { src: "https://github.com/Mia1017/v0mia/blob/0f0be0a9c5f247f47a560d002d6e756fcf8bfe01/public/%E6%96%B9%E6%A1%88%E6%88%AA%E5%9B%BE2%E4%BF%AE%E6%94%B9.JPG?raw=true", alt: "策划方案2｜主题场景与互动玩法" },
    { src: "https://github.com/Mia1017/v0mia/blob/0f0be0a9c5f247f47a560d002d6e756fcf8bfe01/public/%E6%96%B9%E6%A1%88%E6%88%AA%E5%9B%BE3%E4%BF%AE%E6%94%B9.JPG?raw=true", alt: "策划方案3｜执行节奏与传播资源" },
  ],
}

type BilibiliAlbum = { title: string; contribution: string; images: BilibiliWorkImage[] }

const bilibiliOnsiteProjects: { partner: string; title: string; albums: BilibiliAlbum[] }[] = [
  { partner: "北京广播电视台卡酷少儿卫视 × 哔哩哔哩《卡酷大计划之霸王龙雷奇》舞台剧", title: "北京木偶剧院 · 舞台剧场外互动空间", albums: [
    {"title": "美陈打卡设计", "contribution": "策划主题打卡与祝福墙，提供美陈及物料设计参考，协同供应商推进落地。", "images": [{"src": "/舞台剧场外打卡设计.JPG", "alt": "美陈打卡设计｜封面"}, {"src": "/55ef81fd6e97cd47c3c0223fcdc7a3.JPG", "alt": "美陈打卡设计｜过程与现场 1"}, {"src": "/舞台剧祝福墙设计.JPG", "alt": "美陈打卡设计｜过程与现场 2"}]},
    {"title": "互动玩法策划", "contribution": "设计生日祝福等亲子互动，衔接打卡与现场参与，延展剧场外IP体验。", "images": [{"src": "/舞台剧场外活动3.JPG", "alt": "互动玩法策划｜封面"}, {"src": "/4286.JPG", "alt": "互动玩法策划｜过程与现场 1"}, {"src": "/e3b7b770-b8f9-4f94-8d26-e3f93e08deeb.png", "alt": "互动玩法策划｜过程与现场 2"}]},
    {"title": "贩售区规划", "contribution": "规划贩售区陈列与物料配置，对接供应商制作，负责物料及商品物流寄送。", "images": [{"src": "/封面.JPG", "alt": "贩售区规划｜封面"}, {"src": "/IMG_3680.JPG", "alt": "贩售区规划｜过程与现场 1"}, {"src": "/摊位设计规划.JPG", "alt": "贩售区规划｜过程与现场 2"}, {"src": "/舞台剧场外活动1.JPG", "alt": "贩售区规划｜过程与现场 3"}]},
  ] },
  { partner: "霸王龙雷奇三周年特别企划", title: "北京鼓楼 · 雷奇三岁生日会", albums: [
    {"title": "场景布置策划", "contribution": "规划生日会主题场景与打卡动线，提供美陈及物料设计参考，协同供应商推进落地。", "images": [{"src": "/生日会场外布置设计规划.JPG", "alt": "场景布置策划｜封面"}, {"src": "/8717.JPG", "alt": "场景布置策划｜过程与现场 1"}, {"src": "/IMG_2899.JPG", "alt": "场景布置策划｜过程与现场 2"}]},
    {"title": "活动编排与台本", "contribution": "撰写生日会台本与执行流程，策划黏土等亲子互动，衔接主持与现场环节。", "images": [{"src": "/生日会台本与流程撰写.JPG", "alt": "活动编排与台本｜封面"}, {"src": "/3a8d89438e0c25e7baa6be324836f8.JPG", "alt": "活动编排与台本｜过程与现场 1"}, {"src": "/4ba44ce6a94df46979c5cffbe3f0ce.JPG", "alt": "活动编排与台本｜过程与现场 2"}, {"src": "/IMG_7272.JPG", "alt": "活动编排与台本｜过程与现场 3"}, {"src": "/生日会粘土活动设计.JPG", "alt": "活动编排与台本｜过程与现场 4"}]},
    {"title": "创意手工制作", "contribution": "独立制作手工展示样品，用于活动与展会陈列，将创意转化为可展示、可体验的活动素材。", "images": [{"src": "/生日会粘土手作（自制）.JPG", "alt": "创意手工制作｜封面"}, {"src": "/IMG_7268.jpg", "alt": "创意手工制作｜过程与现场 1"}, {"src": "/WecomSave_ab6dc040d7c69a0a641d7f5281cd99d2.JPG", "alt": "创意手工制作｜过程与现场 2"}]},
  ] },
]

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
    : mode === "proposal" ? "grid grid-cols-3 gap-3 sm:gap-5 pt-2 pb-5" : "flex flex-col gap-6 pt-2 pb-7"
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

function BilibiliSectionHeading({ title, description, note }: { title: string; description?: string; note?: string }) {
  return (
    <header className="mb-7 pt-6 md:pt-8 text-center">
      <div className="mb-3 flex items-center justify-center gap-4">
        <span aria-hidden="true" className="h-px w-8 bg-accent/35" />
        <h4 className="font-serif text-xl md:text-2xl font-bold tracking-[0.08em] text-foreground">{title}</h4>
        <span aria-hidden="true" className="h-px w-8 bg-accent/35" />
      </div>
      {note && <span className="mb-3 inline-block rounded-full border border-accent/20 px-3 py-0.5 text-xs tracking-widest text-accent">{note}</span>}
      {description && <p className="mx-auto max-w-4xl text-sm md:text-base leading-relaxed text-muted-foreground">{description}</p>}
    </header>
  )
}

function BilibiliAlbumCard({ album, onOpen }: {
  album: BilibiliAlbum; onOpen: (images: BilibiliWorkImage[], index: number) => void
}) {
  const [index, setIndex] = useState(0)
  const step = (direction: number) => setIndex((current) => (current + direction + album.images.length) % album.images.length)
  return (
    <article className="min-w-0">
      <div className="group/album relative overflow-hidden rounded-xl border-2 border-white bg-white shadow-md">
        <button type="button" aria-label={`放大查看${album.title}，第${index + 1}张`} onClick={() => onOpen(album.images, index)}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") { event.preventDefault(); step(-1) }
            if (event.key === "ArrowRight") { event.preventDefault(); step(1) }
          }} className="block w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-primary">
          <img src={album.images[index].src} alt={album.images[index].alt} loading="lazy" decoding="async" className="block aspect-[3/2] w-full object-contain" />
        </button>
        {album.images.length > 1 && <>
          <button type="button" onClick={() => step(-1)} aria-label={`${album.title}上一张`} className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/30 text-white opacity-50 transition-opacity hover:opacity-100 group-hover/album:opacity-90 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"><span aria-hidden="true" className="text-xl leading-none">‹</span></button>
          <button type="button" onClick={() => step(1)} aria-label={`${album.title}下一张`} className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/30 text-white opacity-50 transition-opacity hover:opacity-100 group-hover/album:opacity-90 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"><span aria-hidden="true" className="text-xl leading-none">›</span></button>
          <span aria-live="polite" className="pointer-events-none absolute bottom-2 right-3 rounded-full bg-black/35 px-2 py-0.5 text-[10px] text-white">{index + 1} / {album.images.length}</span>
        </>}
      </div>
      <h5 className="mt-4 mb-2 text-center text-base font-semibold text-foreground">{album.title}</h5>
      <p className="text-center text-sm leading-relaxed text-muted-foreground">{album.contribution}</p>
    </article>
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
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between rounded-2xl border border-[#e5d5c8] bg-[#f3e9df] p-6 md:p-8">
          <div className="border-l-2 border-accent/50 pl-5 max-w-2xl">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">线上运营</h3>
            <p className="mt-2 text-sm tracking-widest text-accent">内容策划 · 制作 · 传播</p>
            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">负责全平台账号内容策划与运营，制定创意方向与传播排期。</p>
          </div>
          <dl className="grid grid-cols-2 gap-7 sm:gap-10 shrink-0 pl-5 lg:pl-0">
            <div><dt className="mb-2 text-xs md:text-sm text-muted-foreground">全平台净增粉</dt><dd className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">8,300+</dd></div>
            <div className="border-l border-border pl-7 sm:pl-10"><dt className="mb-2 text-xs md:text-sm text-muted-foreground">总粉丝增长</dt><dd className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">40%</dd></div>
          </dl>
        </div>
        <div className="mt-14 md:mt-20 space-y-14">
          <div className="min-w-0">
            <BilibiliSectionHeading title="视觉创意" description="围绕IP调性与传播节点，规划海报、封面及宣传素材。" />
            <BilibiliGallery images={bilibiliImages.visual} mode="visual" onOpen={openImage} />
          </div>
          <div className="min-w-0">
            <BilibiliSectionHeading title="热点策划" description="捕捉平台热梗，结合角色特点策划内容。" />
            <div className="relative isolate overflow-hidden rounded-2xl border border-border/50 px-4 py-6 sm:px-8 sm:py-8">
              <img src="/背景图替换.JPG" alt="" aria-hidden="true" draggable={false} loading="lazy" decoding="async" className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-30 select-none" />
              <BilibiliGallery images={bilibiliImages.hotspot} mode="hotspot" onOpen={openImage} />
            </div>
          </div>
        </div>
        
      </div>

      <div className="mt-12 pt-10 border-t border-border space-y-10">
        <div className="rounded-2xl border border-[#e5d5c8] bg-[#f3e9df] p-6 md:p-8">
          <div className="border-l-2 border-accent/50 pl-5">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">线下活动</h3>
          <p className="mt-2 text-sm tracking-widest text-accent">活动策划 · 落地 · 推广</p>
          <p className="mt-4 max-w-4xl text-sm md:text-base text-muted-foreground leading-relaxed">围绕《霸王龙雷奇》开播三周年开展暑期整合营销，策划活动方案，协同推进<strong className="text-foreground font-semibold">5场</strong>线下活动落地。</p>
        </div>
        </div>
        <section aria-label="策划方案">
          <BilibiliSectionHeading title="活动策划方案" note="节选" description="设计活动主题、场景与互动玩法，编排执行流程，形成可落地的活动方案。" />
          <BilibiliGallery images={bilibiliImages.proposal} mode="proposal" onOpen={openImage} />
        </section>
        <section aria-label="现场落地">
          <BilibiliSectionHeading title="现场落地" />
          <div className="space-y-12">
            {bilibiliOnsiteProjects.map((project) => (
              <section key={project.title} aria-label={project.title}>
                <div className="mb-6 text-center">
                  <p className="mb-2 text-xs md:text-sm font-medium text-accent">{project.partner}</p>
                  <h4 className="font-serif text-lg md:text-xl font-bold leading-relaxed text-foreground">{project.title}</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {project.albums.map((album) => <BilibiliAlbumCard key={album.title} album={album} onOpen={openImage} />)}
                </div>
              </section>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-8">
        <BilibiliSectionHeading title="数据复盘与战报制作" description="基于实习期间参与及负责的活动，整合曝光、互动、涨粉与用户自传播数据，在活动结束后一周内完成项目复盘及战报发布；逐步形成战报制作SOP，提升后续产出效率，为商务洽谈与资源拓展提供案例支撑。" />
        <div className="overflow-x-auto py-3 px-2 -mx-2">
          <div className="grid grid-cols-5 gap-3 sm:gap-4 min-w-[760px]">
            {bilibiliReports.map((report) => (
              <a key={report.href} href={report.href} target="_blank" rel="noopener noreferrer" className="group/report block min-w-0 text-sm text-muted-foreground hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                <img src={report.cover} alt={report.title + "战报封面"} loading="lazy" decoding="async" className="block w-full aspect-[3/4] object-contain rounded-xl border-2 border-white bg-white shadow-md transition-all duration-300 group-hover/report:scale-[1.03] group-hover/report:shadow-lg group-focus-visible/report:scale-[1.03] motion-reduce:transition-none" />
                <span className="mt-3 flex items-start justify-between gap-2 leading-relaxed"><span>{report.title}</span><ExternalLink className="w-4 h-4 mt-1 shrink-0 text-primary/50" /></span>
              </a>
            ))}
          </div>
        </div>
      </div>
      {viewer && <BilibiliLightbox viewer={viewer} onClose={() => setViewer(null)} onStep={stepImage} />}
    </div>
  )
}

export default function OperationPage() {
  const ayakaNotes = [
    { name: "白色恋人.jpg", title: "白色恋人工厂｜爱心饼干DIY", link: "https://xhslink.cn/o/ASbPOgYX7dy" },
    { name: "大头贴.jpg", title: "日本大头贴｜拍摄体验", link: "https://xhslink.cn/o/8kFlFc9KELW" },
    { name: "海鲜.jpg", title: "狸小路｜海鲜丼探店", link: "https://xhslink.cn/o/5VEG49hKvwy" },
    { name: "美人鱼.jpg", title: "札幌｜美人鱼咖啡打卡", link: "https://xhslink.cn/o/6RZVPnl5u7q" },
    { name: "啤酒节.jpg", title: "札幌｜啤酒节体验", link: "https://xhslink.cn/o/8zhYweV9KSn" },
    { name: "衣服.jpg", title: "札幌｜古着探店", link: "https://xhslink.cn/o/8HTsUlcf9rG" },
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
            <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_220px] gap-8 md:gap-12 items-center max-w-5xl mx-auto">
              <div className="w-full">
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
                    <span>运营HBC官方小红书账号，协助日本女主播大竹彩加完成观光内容策划与制作，发布20+篇北海道观光笔记。</span>
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
                  <Link
                    href="https://xhslink.com/m/3SDaawO9bWr"
                    target="_blank"
                    className="justify-self-center md:justify-self-end shrink-0 w-[200px] sm:w-[220px] h-[380px] relative rounded-2xl border-2 border-primary/10 shadow-lg hover:border-primary/40 transition-all bg-white overflow-hidden group/profile"
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
            </div>
            <div className="mt-10 pt-8 border-t border-border">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-[720px] mx-auto">
                    {ayakaNotes.map((note) => (
                      <Link key={note.name} href={note.link} target="_blank" rel="noopener noreferrer" aria-label={note.title}
                        className="block min-w-0 group/item transition-transform hover:scale-[1.02]">
                        <div className="relative rounded-xl border border-border shadow-md overflow-hidden bg-white">
                          <img src={`/${note.name}`} alt={note.title} loading="lazy" decoding="async" className="block w-full aspect-[9/17] object-contain p-0.5" />
                          <div className="absolute inset-0 bg-black/0 group-hover/item:bg-black/15 transition-colors flex items-center justify-center rounded-xl">
                            <ExternalLink className="text-white opacity-0 group-hover/item:opacity-100 transition-opacity w-5 h-5" />
                          </div>
                        </div>
                      </Link>
                    ))}
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
                    <span>产出千赞笔记 15+篇，累计获赞 61,000+。</span>
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
