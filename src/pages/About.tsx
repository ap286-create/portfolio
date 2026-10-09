import { Carousel } from '../components/Carousel'
import { Page, Rule, SectionHeader } from '../components/ui'
import { SOCIAL_LINKS } from '../data/site'

const NOW = [
  { label: 'now', text: 'building a newer version of this portfolio w more projects!' },
  { label: 'someday', text: 'working in a big city, maybe NYC' },
  {
    label: 'likes',
    text: 'videography · working out · listening to music · nail art · solitaire · coming-of-age movies · hanging out with family and friends · traveling',
  },
  { label: 'tools', text: 'python · java · javascript · html/css · reactJS · next.js · git · github · tailwind css · unity' },
]

/** Figma "About" (23:206). */
export default function About() {
  return (
    <Page label="ABOUT">
      <div className="flex flex-col gap-16 px-6 pt-10 pb-[72px] sm:px-10 lg:px-14 lg:pt-[60px]">
        <section className="flex flex-col gap-6">
          <SectionHeader numeral="03" numeralClassName="text-mauve" title="about" titleClassName="text-[clamp(44px,14vw,72px)] leading-none text-pink" />
          <Carousel />
          <div className="flex flex-col gap-6 text-[clamp(16px,1.6vw,18px)] leading-[1.65] text-ink-pink">
            <p>
              hey! I’m a sophomore at Rice University studying computer science with a minor in entrepreneurship. i like creating things at the
              intersection of technology, art, and people. but beyond that, i love to create. period.
            </p>
            <p>
              for as long as i can remember, i’ve always loved to create. that’s what drew me to STEM, or STEAM as i knew it. at first, i wanted to
              create buildings, but I quickly decided it was too dangerous and settled on creating things virtually in about 5th grade. i joined the
              robotic team in 6th grade as a programmer, but i still wasn’t sure about computer science.
            </p>
            <p>
              in fact, despite leading my school’s Cyber Club for half of high school, i didn’t know if this is what I wanted to do for the rest of
              my life. to me, a career in computer science meant staring at a bunch of code in a dark room for hours on end, isolated from the rest
              of the world. it wasn’t until college that i discovered all the inherently creative career paths that computer science had to offer,
              reigniting my love for the subject.
            </p>
            <p>
              i love to learn and am excited to see where my journey takes me. if you have any further questions or want to connect, feel free to
              reach out!
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {SOCIAL_LINKS.map((l) => (
              <a
                key={l.key}
                href={l.href}
                target={l.key === 'mail' ? undefined : '_blank'}
                rel="noreferrer"
                className="rounded-full border border-pink bg-navbar px-3 py-[7px] text-[11px] leading-none font-semibold text-pink uppercase transition-colors duration-200 hover:bg-pink hover:text-navbar"
              >
                {l.label === 'Email' ? 'EMAIL' : l.label.toUpperCase()} ↗
              </a>
            ))}
          </div>
        </section>

        <Rule />

        <dl className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-[minmax(0,auto)_1fr] sm:items-center sm:gap-y-[27px] lg:grid-cols-[321px_1fr]">
          {NOW.map(({ label, text }) => (
            <div key={label} className="contents">
              <dt className="font-display text-[clamp(40px,6vw,56px)] leading-none font-semibold text-mauve max-sm:-mb-3">{label}</dt>
              <dd className="max-w-[838px] text-[clamp(18px,2.2vw,24px)] leading-[1.5] text-ink-pink">{text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Page>
  )
}
