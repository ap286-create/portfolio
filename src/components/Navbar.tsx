import { useEffect, useState } from 'react'
import { ThemeToggle } from './ThemeToggle'
import { SOCIAL_LINKS } from '../data/site'
import lineLight from '../assets/icons/line-light.svg'
import lineDark from '../assets/icons/line-dark.svg'
import linkedinLight from '../assets/icons/linkedin-light.svg'
import linkedinDark from '../assets/icons/linkedin-dark.svg'
import githubLight from '../assets/icons/github-light.svg'
import githubDark from '../assets/icons/github-dark.svg'
import mailLight from '../assets/icons/mail-light.svg'
import mailDark from '../assets/icons/mail-dark.svg'

const ICONS = {
  linkedin: [linkedinLight, linkedinDark],
  github: [githubLight, githubDark],
  mail: [mailLight, mailDark],
} as const

/**
 * Live clock in the visitor's own timezone (the browser knows it — no location
 * permission needed), labelled with the zone's short name, e.g. "CDT 20:16:40".
 */
function useLocalTime() {
  const format = () => {
    const parts = new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hourCycle: 'h23',
      timeZoneName: 'short',
    }).formatToParts(new Date())
    const get = (type: string) => parts.find((p) => p.type === type)?.value ?? ''
    return { zone: get('timeZoneName').toUpperCase(), time: `${get('hour')}:${get('minute')}:${get('second')}` }
  }
  const [now, setNow] = useState(format)
  useEffect(() => {
    const id = window.setInterval(() => setNow(format()), 1000)
    return () => window.clearInterval(id)
  }, [])
  return now
}

function SocialLinks({ vertical }: { vertical?: boolean }) {
  return (
    <ul className={`flex items-center ${vertical ? 'flex-col gap-[18px]' : 'gap-[14px] sm:gap-[18px]'}`}>
      {SOCIAL_LINKS.map(({ key, label, href }) => {
        const [light, dark] = ICONS[key]
        return (
          <li key={key}>
            <a
              href={href}
              target={key === 'mail' ? undefined : '_blank'}
              rel="noreferrer"
              aria-label={label}
              className="block size-[18px] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-light"
            >
              <img src={light} alt="" width={18} height={18} className="dark:hidden" />
              <img src={dark} alt="" width={18} height={18} className="hidden dark:block" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}

function StudioInfo({ vertical }: { vertical?: boolean }) {
  const { zone, time } = useLocalTime()
  const text = 'text-[11px] whitespace-nowrap text-brown dark:text-ink'
  if (vertical) {
    // Figma rotates these -90°, so they read bottom-to-top.
    return (
      <div className="flex flex-col items-center gap-5">
        <p className={`${text} rotate-180 [writing-mode:vertical-rl] tabular-nums`}>
          {zone} <time>{time}</time>
        </p>
        <p className={`${text} rotate-180 [writing-mode:vertical-rl]`}>© 2026 Abena Poku</p>
      </div>
    )
  }
  return (
    <div className="flex items-center gap-5">
      <p className={text}>© 2026 Abena Poku</p>
      <p className={`${text} tabular-nums max-[380px]:hidden`}>
        {zone} <time>{time}</time>
      </p>
    </div>
  )
}

/** Desktop/tablet: the 104px vertical navbar pinned to the left edge. */
export function SideNavbar() {
  return (
    <aside
      aria-label="Site"
      className="sticky top-0 z-40 hidden h-dvh w-[104px] shrink-0 flex-col items-center overflow-hidden bg-navbar pt-[65px] pb-8 md:flex"
    >
      <ThemeToggle vertical />
      <div className="mt-[65px]">
        <SocialLinks vertical />
      </div>
      <div className="flex min-h-0 w-full flex-1 items-center justify-center py-10">
        <div className="relative h-full max-h-[315px] w-px overflow-hidden" aria-hidden>
          <img src={lineLight} alt="" width={315} height={1} className="absolute top-1/2 left-1/2 block h-px w-[315px] max-w-none -translate-1/2 rotate-90 dark:hidden" />
          <img src={lineDark} alt="" width={315} height={1} className="absolute top-1/2 left-1/2 hidden h-px w-[315px] max-w-none -translate-1/2 rotate-90 dark:block" />
        </div>
      </div>
      <StudioInfo vertical />
    </aside>
  )
}

/** Mobile: the same navbar laid out horizontally (Figma's navbar component is drawn this way). */
export function MobileNavbar() {
  return (
    <div className="flex h-16 items-center justify-between gap-3 bg-navbar px-4 md:hidden">
      <StudioInfo />
      <div className="flex items-center gap-3 sm:gap-5">
        <SocialLinks />
        <ThemeToggle />
      </div>
    </div>
  )
}
