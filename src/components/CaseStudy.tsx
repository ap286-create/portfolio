import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { LinkTag, Page, Rule, Tag } from './ui'
import { nextProject, projectBySlug } from '../data/projects'

export const body = 'text-[clamp(16px,1.6vw,18px)] leading-[1.6] text-ink-green'

/** Page shell + hero for the three case studies (Figma "Project hero"). */
export function CaseStudy({
  slug,
  tags,
  completed,
  intro,
  children,
}: {
  slug: string
  tags: string[]
  completed: string
  intro: ReactNode
  children: ReactNode
}) {
  const project = projectBySlug(slug)
  return (
    <Page label={`PROJECTS/${project.title.toUpperCase()}`}>
      <article className="flex flex-col gap-14 px-6 pt-10 pb-20 sm:px-10 lg:gap-[72px] lg:px-14 lg:pt-14">
        <header className="flex flex-col gap-7">
          <div className="flex items-center gap-2">
            <span className="shrink-0 text-[13px] text-sage">{project.letter}</span>
            <h1 className="font-display text-[clamp(44px,8.5vw,104px)] leading-[1.05] font-semibold text-green-dark">{project.title}</h1>
          </div>
          <div className="max-w-[856px] text-ink-green">{intro}</div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-3 lg:gap-[30px]">
              {tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
              {project.links.map((l) => (
                <LinkTag key={l.label} href={l.href}>
                  {l.label}
                </LinkTag>
              ))}
            </div>
            <p className="shrink-0 text-[13px] text-sage">{completed}</p>
          </div>
        </header>
        {children}
        <div className="h-2 w-full rounded-full bg-green-light" />
        <NextProject slug={slug} />
      </article>
    </Page>
  )
}

export const introLead = 'text-[clamp(18px,2.2vw,24px)] leading-[1.4]'
export const introNote = 'text-[clamp(16px,1.8vw,20px)] leading-[1.4] italic opsz-9'

/** Hero image block (grey rounded "Media placeholder"). */
export function HeroMedia({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`relative w-full overflow-hidden rounded-2xl bg-media ${className}`}>{children}</div>
}

/** Responsive YouTube player (privacy-enhanced domain, no cookies until play). */
export function YouTube({ id, title }: { id: string; title: string }) {
  return (
    <HeroMedia className="aspect-video">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?rel=0`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute inset-0 size-full border-0"
      />
    </HeroMedia>
  )
}

/** Silent looping clip that plays like a GIF; viewers who prefer reduced motion get controls instead. */
export function LoopVideo({ src, label, className = '' }: { src: string; label: string; className?: string }) {
  const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  return (
    <video
      src={src}
      aria-label={label}
      autoPlay={!reduceMotion}
      controls={reduceMotion}
      muted
      loop
      playsInline
      preload="metadata"
      className={`size-full object-cover ${className}`}
    />
  )
}

/** "CONTENTS" list + "how might we" statement. */
export function Overview({ contents, children }: { contents: { id: string; label: string }[]; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-[72px]">
      <nav aria-label="Contents" className="flex flex-col gap-4 lg:w-[330px] lg:shrink-0">
        <p className="text-[13px] text-sage">CONTENTS</p>
        <Rule />
        {contents.map((c) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            onClick={(e) => {
              e.preventDefault()
              document.getElementById(c.id)?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="w-fit text-[13px] text-ink-green decoration-from-font underline-offset-2 hover:underline"
          >
            {c.label}
          </a>
        ))}
      </nav>
      {children}
    </section>
  )
}

export function HmwStatement({ children }: { children: ReactNode }) {
  return <p className="min-w-0 flex-1 font-display text-[clamp(24px,3vw,34px)] leading-[1.25] font-medium text-ink-green">{children}</p>
}

/** Two-line section title ("the / problem") with the roman numeral to its left. */
export function StackedTitle({ numeral, lines, align = 'left' }: { numeral: string; lines: [string, string] | [string]; align?: 'left' | 'right' }) {
  return (
    <div className={`flex shrink-0 items-start gap-1 lg:w-[330px] ${align === 'right' ? 'lg:justify-end' : ''}`}>
      <span className="mt-[39px] shrink-0 text-[13px] text-sage max-lg:mt-[0.9em]">{numeral}</span>
      <h2 className={`font-display text-[clamp(40px,5vw,56px)] leading-[1.2] font-semibold text-green-dark ${align === 'right' ? 'lg:text-right' : ''}`}>
        {lines.map((l, i) => (
          <span key={l} className="lg:block">
            {l}
            {i < lines.length - 1 ? ' ' : ''}
          </span>
        ))}
      </h2>
    </div>
  )
}

/** One-line section title ("III  technical decisions"). */
export function InlineTitle({ numeral, title }: { numeral: string; title: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="shrink-0 text-[13px] text-sage">{numeral}</span>
      <h2 className="font-display text-[clamp(40px,5vw,56px)] leading-[1.15] font-semibold text-green-dark">{title}</h2>
    </div>
  )
}

/** Row of rounded images with captions underneath ("Process media"). */
export function MediaRow({
  items,
  heightClass,
  gapClass = 'gap-4',
}: {
  items: { caption: string; render: ReactNode }[]
  heightClass: string
  gapClass?: string
}) {
  return (
    <figure className={`grid grid-cols-1 ${gapClass} ${items.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
      {items.map((item) => (
        <div key={item.caption} className="flex flex-col gap-3">
          <div className={`relative w-full overflow-hidden rounded-2xl ${heightClass}`}>{item.render}</div>
          <figcaption className="text-[13px] text-ink">{item.caption}</figcaption>
        </div>
      ))}
    </figure>
  )
}

/** Figma "Next project" (266:460) — the hover variant tints the row and bolds the label. */
export function NextProject({ slug }: { slug: string }) {
  const next = nextProject(slug)
  return (
    <nav aria-label="More projects" className="flex flex-col items-center">
      <Link
        to={`/projects/${next.slug}`}
        className="group flex w-full flex-col items-start gap-2 px-5 py-7 transition-colors duration-200 hover:bg-tint focus-visible:bg-tint focus-visible:outline-none sm:flex-row sm:items-center sm:justify-between"
      >
        <span className="text-[13px] text-sage group-hover:font-bold">NEXT PROJECT</span>
        <span className="font-display text-[clamp(36px,5vw,56px)] leading-tight font-semibold text-green-dark">{next.title}</span>
      </Link>
      <p className="text-[clamp(24px,3vw,32px)] leading-[1.6] text-sage">
        or, back to{' '}
        <Link to="/projects" className="text-ink-green underline decoration-from-font [text-underline-position:from-font] hover:text-green-dark">
          projects
        </Link>
      </p>
    </nav>
  )
}
