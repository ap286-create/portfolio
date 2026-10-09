import { Page, Rule, SectionHeader, Tag, U } from '../components/ui'

const ROLES = [
  {
    org: 'RiceApps',
    title: 'Software Developer',
    dates: 'September 2025 — present',
    points: [
      'develop full-stack web apps for real-world clients, collaborating with pms, designers, and other engineers',
      'build responsive UI components using Next.js, React, Supabase, and other modern development tools',
      'participate in the full software development life cycle, from planning and implementation to debugging and deployment',
    ],
  },
  {
    org: 'Black Student Assoc.',
    title: 'Historian',
    dates: 'April 2026 — present',
    points: [
      'design social media graphics and flyers to promote BSA events',
      'capture photo/video content to document events while managing the official Instagram page',
      'work with other e-board members to develop marketing campaigns and support organizational initiatives',
    ],
  },
  {
    org: 'Mentor$chip',
    title: 'Student + Mentor Experience Officer',
    dates: 'September 2026 — present',
    points: [
      'oversee student and mentor journey for MentorSchip, a non-profit that helps students and parents navigate the college scholarship process',
      'coordinate program logistics, gather feedback, and ensure services remain accessible',
    ],
  },
  {
    org: 'HackRice 16',
    title: 'Organizer (Logistics Team)',
    dates: 'January 2026 — September 2026',
    points: [
      'planned Rice’s annual hackathon, a 3-day-long event with 500+ attendees from universities across the country',
      'assisted hackers during the actual event, answering logistical and technical questions',
      'maintained budget sheet for the event',
      'purchased large-scale team orders, such as food and event merch',
    ],
  },
]

/** Figma "Experience" (23:47). */
export default function Experience() {
  return (
    <Page label="EXPERIENCE">
      <div className="flex flex-col gap-10 px-6 py-10 sm:px-10 lg:flex-row lg:gap-10 lg:p-[67px] xl:gap-[72px]">
        <aside className="flex flex-col gap-10 pt-4 lg:sticky lg:top-[86px] lg:w-[300px] xl:w-[390px] lg:shrink-0 lg:self-start lg:pt-10 lg:pb-5">
          <SectionHeader numeral="01" numeralClassName="text-sage-2" title="experience" titleClassName="text-[clamp(44px,14vw,72px)] leading-[0.95] text-green-light" />
          <div className="flex flex-col gap-[1.55em] text-[clamp(16px,1.6vw,18px)] leading-[1.55] text-ink-green-2">
            <p>
              a history spanning <U>development</U>, <U>design</U>, and <U>logistics</U>-related roles.
            </p>
            <p>
              from bringing ideas to life through <U>code</U> and <U>content</U>, to working <U>cross-functionally</U> to plan events, each role has
              shaped how I approach <U>creative problem-solving</U>.
            </p>
            <p>
              as technology continues to evolve, so has my experience—growing across disciplines, projects, and roles while staying focused on{' '}
              <U>creating meaningful work</U>.
            </p>
            <p className="italic opsz-9">currently seeking summer 2027 internships and opportunities.</p>
          </div>
        </aside>

        <ol className="flex min-w-0 flex-1 flex-col lg:max-w-[740px]">
          {ROLES.map((role) => (
            <li key={role.org} className="flex flex-col gap-5 py-9">
              <div className="flex flex-wrap-reverse items-start justify-between gap-x-6 gap-y-3">
                <div className="flex flex-col gap-1.5">
                  <h2 className="font-display text-[clamp(28px,4vw,36px)] leading-tight font-semibold text-ink">{role.org}</h2>
                  <p className="text-[16px] font-semibold text-ink-green-2">{role.title}</p>
                </div>
                <Tag color="green-light">{role.dates}</Tag>
              </div>
              <ul className="flex max-w-[615px] flex-col gap-3 text-[16px] leading-[1.5] text-ink-green">
                {role.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span aria-hidden>↳</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <Rule />
            </li>
          ))}
        </ol>
      </div>
    </Page>
  )
}
