import { Link } from 'react-router-dom'
import { LinkTag, Page, SectionHeader, SolidTag } from '../components/ui'
import { PROJECTS } from '../data/projects'

/** Figma "Projects index" (23:96). Rows use the "Project row" hover variant (tinted background). */
export default function Projects() {
  return (
    <Page label="PROJECTS">
      <div className="px-6 pt-10 pb-16 sm:px-10 lg:px-14 lg:pt-14">
        <SectionHeader numeral="02" title="projects" titleClassName="text-[clamp(44px,14vw,72px)] leading-none text-green-dark" />
        <p className="mt-4 max-w-[850px] text-[clamp(16px,1.6vw,18px)] leading-[1.55] text-ink-green sm:ml-[25px]">
          a few projects I’ve been working on, from pure design challenges to full-stack web applications.
        </p>

        <ul className="mt-10 sm:ml-[25px] lg:max-w-[1140px]">
          {PROJECTS.map((p) => (
            <li key={p.slug} className="relative flex gap-2 border-t border-rule py-5 pr-2 transition-colors duration-200 hover:bg-tint has-[a:focus-visible]:bg-tint sm:min-h-[244px] sm:gap-4 sm:pr-4">
              <span className="w-[17px] shrink-0 pt-[22px] pl-2 text-[13px] text-sage">{p.letter}</span>
              <div className="flex min-w-0 flex-1 flex-col gap-[25px]">
                <div className="flex flex-col gap-3">
                  <h2 className="font-display text-[clamp(32px,5vw,48px)] leading-tight font-semibold text-ink">
                    {/* Stretched link: the whole row opens the case study. */}
                    <Link to={`/projects/${p.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none">
                      {p.title}
                    </Link>
                  </h2>
                  <p className="text-[clamp(16px,1.6vw,18px)] font-semibold text-ink-green">{p.tagline}</p>
                  <p className="text-[clamp(16px,1.6vw,18px)] text-sage">{p.summary}</p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <SolidTag>{p.category}</SolidTag>
                  {p.links.map((l) => (
                    <LinkTag key={l.label} href={l.href} className="relative z-10">
                      {l.label}
                    </LinkTag>
                  ))}
                  <span className="text-[13px] text-sage">{p.date}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Page>
  )
}
