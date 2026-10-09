import type { CSSProperties, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { AVAILABILITY } from '../data/site'
import arrowUpRight from '../assets/icons/arrow-up-right.svg'

/**
 * Recolourable icon: paints the Figma SVG through a CSS mask so it follows
 * `currentColor` (needed for dark mode). The shape is the exported asset as-is.
 */
export function MaskIcon({ src, size, className = '' }: { src: string; size: number; className?: string }) {
  const style: CSSProperties = {
    width: size,
    height: size,
    maskImage: `url("${src}")`,
    WebkitMaskImage: `url("${src}")`,
    maskSize: '100% 100%',
    WebkitMaskSize: '100% 100%',
    maskRepeat: 'no-repeat',
    WebkitMaskRepeat: 'no-repeat',
  }
  return <span aria-hidden className={`inline-block shrink-0 bg-current ${className}`} style={style} />
}

/**
 * "Abena Poku" built from per-letter components — in Figma each letter ("A" / "A bigger")
 * has a hover variant that grows the glyph.
 */
export function HoverName({ className = '', letterClassName = '' }: { className?: string; letterClassName?: string }) {
  return (
    <span className={`inline-flex items-end ${className}`} aria-label="Abena Poku">
      {'Abena Poku'.split('').map((ch, i) =>
        ch === ' ' ? (
          <span key={i} aria-hidden className="inline-block w-[0.22em]" />
        ) : (
          <span
            key={i}
            aria-hidden
            className={`inline-block origin-bottom transition-transform duration-300 ease-out hover:scale-[1.3] ${letterClassName}`}
          >
            {ch}
          </span>
        ),
      )}
    </span>
  )
}

/** Sticky page header (Figma "Header", 95:156). */
export function Header({ label }: { label: string }) {
  return (
    <header className="sticky top-0 z-30 border-b border-rule bg-background">
      <div className="flex h-14 items-center justify-between gap-4 px-4 sm:px-6 md:h-[86px] md:px-12">
        <Link to="/" className="font-display text-[16px] font-semibold text-brown focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-light">
          <HoverName />
        </Link>
        <p className="truncate font-display text-[12px] font-semibold uppercase text-ink sm:text-[14px]">{label}</p>
        <p className="hidden text-[13px] whitespace-nowrap text-brown-light lg:block">{AVAILABILITY}</p>
      </div>
    </header>
  )
}

/** "02  projects" style title: small numeral + large display word. */
export function SectionHeader({
  numeral,
  title,
  titleClassName,
  numeralClassName = 'text-sage',
  as: Tag = 'h1',
}: {
  numeral: string
  title: ReactNode
  titleClassName: string
  numeralClassName?: string
  as?: 'h1' | 'h2'
}) {
  return (
    <div className="flex items-center gap-2">
      <span className={`shrink-0 text-[13px] ${numeralClassName}`}>{numeral}</span>
      <Tag className={`font-display font-semibold ${titleClassName}`}>{title}</Tag>
    </div>
  )
}

const pillBase = 'inline-flex items-center gap-1 rounded-full border px-3 py-[7px] text-[11px] leading-none font-semibold uppercase'
const pill = `${pillBase} whitespace-nowrap`

/** Outline pill (Figma "Tag"). */
export function Tag({ children, color = 'green-dark' }: { children: ReactNode; color?: 'green-dark' | 'green-light' | 'pink' }) {
  const colors = {
    'green-dark': 'border-green-dark text-green-dark',
    'green-light': 'border-green-light text-green-light',
    pink: 'border-pink text-pink',
  }[color]
  return <span className={`${pillBase} max-w-full bg-navbar leading-[1.3] whitespace-normal sm:leading-none sm:whitespace-nowrap ${colors}`}>{children}</span>
}

/** Solid dark-green category pill used on the projects index. */
export function SolidTag({ children }: { children: ReactNode }) {
  return <span className={`${pillBase} max-w-full border-navbar bg-green-dark leading-[1.3] whitespace-normal text-on-accent sm:leading-none sm:whitespace-pre`}>{children}</span>
}

/** Outline pill that links out, with the arrow-up-right icon. */
export function LinkTag({ href, children, className = '' }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${pill} border-green-dark bg-navbar text-green-dark transition-colors duration-200 hover:bg-green-dark hover:text-navbar focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-light ${className}`}
    >
      {children}
      <MaskIcon src={arrowUpRight} size={14} />
    </a>
  )
}

export function Rule({ className = '' }: { className?: string }) {
  return <hr className={`h-px w-full border-0 bg-rule ${className}`} />
}

/** Underlined emphasis used throughout the copy. */
export function U({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <span className={`underline decoration-from-font [text-underline-position:from-font] ${className}`}>{children}</span>
}

export function Page({ label, children }: { label: string; children: ReactNode }) {
  return (
    <>
      <Header label={label} />
      <main className="mx-auto w-full max-w-[1336px]">{children}</main>
    </>
  )
}
