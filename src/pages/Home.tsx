import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HoverName, MaskIcon } from '../components/ui'
import { RESUME_URL } from '../data/site'
import resumeArrow from '../assets/icons/resume-arrow.svg'

const NAV = [
  { n: '01', label: 'EXPERIENCE', to: '/experience', color: 'text-green-light' },
  { n: '02', label: 'PROJECTS', to: '/projects', color: 'text-green-dark' },
  { n: '03', label: 'ABOUT', to: '/about', color: 'text-pink' },
] as const

const navWord =
  'font-display font-semibold leading-none text-[clamp(40px,9vw,76px)] lg:text-[clamp(48px,5.3vw,76px)] decoration-[0.06em] underline-offset-[0.12em] hover:underline focus-visible:underline focus-visible:outline-none'

// Figma "role" component: swe → pm → pd → wd → uid → uir, advancing every 3s.
const ROLES = ['SOFTWARE ENGINEER', 'PRODUCT MANAGEMENT', 'PRODUCT DESIGN', 'WEB DEVELOPMENT', 'UI/UX DESIGN', 'UI/UX RESEARCH']

function RoleTicker() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = window.setInterval(() => setI((n) => (n + 1) % ROLES.length), 3000)
    return () => window.clearInterval(id)
  }, [])
  return (
    <p className="grid text-[14px] text-brown" aria-label={ROLES.join(', ').toLowerCase()}>
      {ROLES.map((role, n) => (
        <span
          key={role}
          aria-hidden
          className={`col-start-1 row-start-1 transition-opacity duration-300 ease-in ${n === i ? 'opacity-100' : 'opacity-0'}`}
        >
          {role}
        </span>
      ))}
    </p>
  )
}

/** Figma "Home - light" (23:3). */
export default function Home() {
  return (
    <main className="mx-auto flex min-h-[calc(100dvh-64px)] w-full max-w-[1296px] items-center px-6 py-12 sm:px-10 md:min-h-dvh md:py-10 lg:px-[67px]">
      <div className="flex w-full flex-col gap-14 lg:flex-row lg:items-center lg:justify-between lg:gap-12 xl:gap-[105px]">
        <section className="flex max-w-[489px] flex-col gap-6 lg:max-w-[380px] xl:max-w-[489px]">
          <h1 className="font-display text-[clamp(42px,14vw,72px)] leading-none font-semibold text-ink">
            <HoverName letterClassName="hover:scale-[1.22]" />
          </h1>
          <p className="text-[clamp(18px,2vw,21px)] leading-[1.45] text-ink">
            computer science student @ Rice University creating at the intersection of technology, art, and people.
          </p>
          <RoleTicker />
        </section>

        <nav aria-label="Primary" className="flex w-full flex-col lg:w-auto lg:shrink-0 xl:w-[528px]">
          <p className="text-[14px] text-brown">{'thx 4 stopping by <3'}</p>
          <ul>
            {NAV.map(({ n, label, to, color }) => (
              <li key={n} className="flex items-baseline gap-5 py-[14px] sm:py-[18px]">
                <span className="w-[30px] shrink-0 text-[clamp(16px,2vw,20px)] text-brown-light">{n}</span>
                <Link to={to} className={`${navWord} ${color}`}>
                  {label}
                </Link>
              </li>
            ))}
            <li className="flex items-baseline gap-5 py-[14px] sm:py-[18px]">
              <span className="w-[30px] shrink-0 text-[clamp(16px,2vw,20px)] text-brown-light">04</span>
              <a href={RESUME_URL} target="_blank" rel="noreferrer" className={`${navWord} group inline-flex items-start gap-3 text-peach`}>
                RESUME
                <MaskIcon src={resumeArrow} size={12.5} className="mt-[0.12em] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  )
}
