import type { ReactNode } from 'react'
import { body, CaseStudy, InlineTitle, introLead, introNote, MediaRow, Overview, StackedTitle, YouTube } from '../components/CaseStudy'
import { U } from '../components/ui'
import concept from '../assets/projects/village-concept.png'
import dailyPrompt from '../assets/projects/village-daily-prompt.png'
import widget from '../assets/projects/village-widget.png'
import archiveBg from '../assets/projects/village-archive-bg.png'
import archive from '../assets/projects/village-archive.png'

const DECISIONS: { n: string; label: string[]; text: ReactNode }[] = [
  {
    n: '01',
    label: ['widget-first experience'],
    text: 'Our research showed that older adults could be hesitant to adopt new technology if it wasn’t valuable or too unfamiliar. So, instead of asking users to open a new app every time they wanted to connect, we made the simplest interaction (sending or viewing a check-in video) —accessible through a phone widget. This not only reduces the amount of friction older adults might experience when navigating apps, but it changes the emotional framing of the interaction; Village is designed to feel like a gentle invitation to connect, not just another social platform.',
  },
  {
    n: '02',
    label: ['video', 'versus text'],
    text: 'A lot of our participants, across age groups, valued the emotional information that comes from seeing someone’s face, expressions, and tone. For grandparents and grandchildren separated by distance, video also creates a stronger presence than text alone. We paired this interaction with automatic transcription to account for differences in hearing and language, allowing for mixed modes of communication.',
  },
  {
    n: '03',
    label: ['accessibility as a foundation'],
    text: 'Because our audience spans generations, we didn’t want to make accessibility an afterthought in designing Village. We used large, readable text, minimal visual clutter, and high-contrast elements as a default to make the interface easier to navigate. But, we still made these settings customizable for users to adapt the experience to their personal needs, as opposed to assuming every user has the same level of comfort with technology.',
  },
  {
    n: '04',
    label: ['the “Village”', 'metaphor'],
    text: 'We used the idea of “the village” throughout our app. The most prominent occurrence is the home page, which is a literal village graphic representing a person’s connections. This choice also tied back to a previous insight: older family members didn’t want to feel like they were being checked on out of obligation; they wanted to feel like valued participants in a shared community.',
  },
  {
    n: '05',
    label: ['archive', 'of memories'],
    text: (
      <>
        Storytelling from older generations is valued by younger generations, a pattern that persisted even for <i className="opsz-9">our</i>
        <span className="opsz-9"> older generation.</span> So, we designed an archive where previous videos and photos could live beyond the moment
        they were sent. This shifts the purpose of the product from simply increasing communication to preserving family history. A short video
        sent in a family group chat, for example, is now part of an every evolving collection of memories.
      </>
    ),
  },
]

const card = `${body} flex flex-col gap-2.5 border border-green-dark p-2.5`
const cardTitle = 'text-center text-[21px] font-bold'

/** Figma "village" (275:650). */
export default function Village() {
  return (
    <CaseStudy
      slug="village"
      tags={['rice design-a-thon 2026', 'figma']}
      completed="COMPLETED JANUARY 2026"
      intro={
        <>
          <p className={introLead}>
            an accessible, widget-first video messaging app designed to help grandparents and grandchildren stay connected across age and distance.
          </p>
          <p className={introNote}>
            completed for <span className="not-italic">rice design-a-thon 2026</span>, a 36-hour long design-a-thon at Rice Univeristy
          </p>
          <p className={introNote}>collaborative effort with 2 other designers</p>
        </>
      }
    >
      <YouTube id="l31ZYtp18PM" title="Village prototype walkthrough" />

      <Overview
        contents={[
          { id: 'design-challenge', label: 'I — DESIGN CHALLENGE' },
          { id: 'research', label: 'II — RESEARCH + SYNTHESIS' },
          { id: 'concept', label: 'III — CONCEPT' },
          { id: 'design-decisions', label: 'IV — DESIGN DECISIONS' },
          { id: 'prototype', label: 'V — PROTOTYPE' },
        ]}
      >
        <div id="design-challenge" className="flex min-w-0 flex-1 flex-col gap-5">
          <p className="font-display leading-[1.25] font-medium text-green-dark">
            <span className="font-sans text-[13px]">i.</span>
            <span className="text-[clamp(28px,3.4vw,40px)]"> “bridging generational gaps through design”</span>
          </p>
          <div className={`${body} flex flex-col gap-[15px]`}>
            <p>
              “Different generations often see the world through different lenses. Oftentimes, this can create barriers to understanding,
              collaboration, and belonging. How might design help younger and older generations learn from one another, share stories, and build
              meaningful relationships? Consider areas like communication styles, traditions, shared spaces, or everyday experiences where
              generations often feel disconnected.
            </p>
            <p className="font-bold">“Create a solution where design sparks understanding, connection, inclusion, or shared experiences across age groups.”</p>
          </div>
        </div>
      </Overview>

      <section id="research" className="flex flex-col gap-y-[18px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-[47px]">
          <StackedTitle numeral="II" lines={['research +', 'synthesis']} />
          <div className={`${body} flex flex-1 flex-col gap-5 lg:max-w-[877px]`}>
            <p>
              Albert Einstein once said, ““If I had an hour to solve a problem and my life depended on the solution, I would spend the first 55
              minutes determining the proper question to ask.” While we didn’t necessarily spend the first 36 hours deciding what question to ask, our
              group did dedicate a lot of time to researching our problem space.
            </p>
            <p>There were four main steps in our research process:</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2">
          <div className={`${card} md:self-center`}>
            <h3 className={cardTitle}>Brainstorming</h3>
            <p>As soon as we the design challenge was announced, my team got to brainstorming.</p>
            <div>
              <p>Questions that guided our brainstorming session included:</p>
              <ul className="list-disc ps-[27px]">
                <li>What generation do you identify with? How do you think it shapes how you see the world?</li>
                <li>
                  Where do misunderstandings between generations most often show up? (e.g. technology, communication styles, values, work, family,
                  identity)
                </li>
                <li>What do you wish existed to help generations feel more connected or understood?</li>
                <li>What stories, traditions, or lessons from older generations have stuck with you?</li>
                <li>What assumptions do different generations make about one another that might not be true?</li>
              </ul>
            </div>
            <p>
              Some things we noted were how many people ing Gen-Z lead a tech-focused lifestyle, life values tend to differ between generations, and
              stories about cultural differences/traditions are points of connection between generations. We decided early on in the research
              process to focus on extreme user groups —that is “grandparents” and “grandchildren.”
            </p>
          </div>
          <div className={`${card} md:self-start`}>
            <h3 className={cardTitle}>Collecting Data</h3>
            <p>
              The three of us all collected data individually, using the same general questions, but different modes of collection (interviews or
              surveys) and different users (older generation and our generation).
            </p>
            <p>I conducted three user interviews with three of my grandparents. The questions I (and the rest of my team) asked were:</p>
            <ol className="list-decimal ps-[27px]">
              <li>Who do you interact with most often who's from a different generation?</li>
              <li>In your day-to-day life, where do you notice the biggest differences between you and people older/younger than you?</li>
              <li>When was the last time you felt frustrated communicating with someone from a different generation?</li>
              <li>What stories, traditions, or lessons from older generations have stuck with you?</li>
              <li>What is an assumption that you have about different generations?</li>
              <li>What apps/tools do you already use to communicate with older/younger people? What do you avoid using with them and why?</li>
              <li>How do you feel interacting with other generations? Is there anything you avoid bringing up because of generational differences?</li>
              <li>What do you wish existed to help bridge generational gaps?</li>
              <li>Anything else you’d like to share?</li>
            </ol>
          </div>
          <div className={`${card} md:col-span-2`}>
            <h3 className={cardTitle}>Analyze Findings</h3>
            <p>As we synthesized our findings, several themes kept resurfacing:</p>
            <p>
              <b>Existing technology may be more useful than introducing entirely new technology. </b>
              <span className="opsz-9">
                We found that technology itself wasn’t always the main barrier. Some of our older participants already used platforms like WhatsApp,
                Facebook, TikTok, and Instagram. However, asking older users to download and learn another standalone app could create friction
                before connection even begins.
              </span>
            </p>
            <p>
              <b>Each generation approaches communication differently, but both generations want connection. </b>
              <span className="opsz-9">
                Younger people were often described as moving quickly and being heavily attached to their phones, while older participants placed
                more value on direct conversation, calls, and spending time together in person. Both generations value connection; the problem was
                often how that connection was initiated and maintained.
              </span>
            </p>
            <p>
              <b>Storytelling is a major point of connection</b>
              <span className="opsz-9">
                . Participants repeatedly described advice, stories, traditions, and lived experiences as meaningful things that older generations
                can pass down. In fact, the reason we asked the fourth question to our older participants is that they were young once too— though
                things were obviously different back then, they were able to connect with <i>their</i> grandparents through stories.
              </span>
            </p>
            <p className="opsz-9">
              Together, these findings shifted our definition of the problem. Older adults were not asking for more technology, nor were they
              particularly adverse to current technologies. They were asking for more <U className="font-bold">meaningful opportunities to connect</U>. So,
              we needed to create a space were different communication styles, experiences and perspectives could coexist, and were reaching out to
              one another felt easier and more natural.
            </p>
          </div>
          <div className={`${card} md:col-span-2`}>
            <h3 className={cardTitle}>Action</h3>
            {/* Figma fills this statement with a gradient (exported as "transparent"). */}
            <p className="bg-gradient-to-r from-green-dark to-green-light bg-clip-text text-center font-display text-[clamp(24px,3vw,36px)] leading-[1.6] text-transparent">
              “How might we facilitate communication between family members separated by age and distance so that grandparents and their
              grandchildren can mutually learn from each other?”
            </p>
          </div>
        </div>
      </section>

      <section id="concept" className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-4">
        <div className="relative aspect-[591/479] w-full overflow-hidden rounded-2xl lg:w-[591px] lg:shrink-0">
          <img src={concept} alt="Village concept sketches" className="absolute top-[-26.39%] left-[0.08%] h-[143.39%] w-full max-w-none" />
        </div>
        <div className="flex flex-col gap-4 lg:w-[616px]">
          <InlineTitle numeral="III" title="concept" />
          <p className="text-[clamp(20px,2.2vw,24px)] leading-[1.6] text-green-dark">
            <span className="font-light">meet</span> <span className="font-black">village</span>— <span className="font-semibold">because it takes a village.</span>
          </p>
          <p className={body}>
            <U className="font-bold text-green-dark">Village</U>{' '}
            <b>
              i
              <U>
                s a communication app designed to help grandparents and grandchildren stay connected across age and distance through simple,
                everyday interactions
              </U>
              .
            </b>{' '}
            We wanted <U className="font-bold text-green-dark">Village</U> to feel less like another social media platform and more like a shared space
            for family members to check in, exchange stories, and learn from one another. Our concept focused on making communication feel{' '}
            <b>low-effort</b>, <b>familiar</b>, and <b>intentional</b>, while giving <b>both generations opportunities to participate</b> in the
            relationship. Instead of trying to increase the number of times family members communicated, our goal was to make those interactions feel
            more <b>meaningful</b>, more <b>mutual</b>, and <b>easier to initiate.</b>
          </p>
        </div>
      </section>

      <section id="design-decisions" className="flex flex-col gap-10 lg:gap-[47px]">
        <InlineTitle numeral="IV" title="design decisions" />
        <ol className="flex flex-col gap-8 text-ink-green md:gap-5">
          {DECISIONS.map((d) => (
            <li key={d.n} className="flex flex-col gap-2 md:flex-row md:items-center md:gap-[34px]">
              <div className="font-display leading-[1.6] md:w-[231px] md:shrink-0 md:text-right">
                <p className="text-[clamp(36px,4vw,48px)] leading-[1.3]">{d.n}</p>
                {d.label.map((l) => (
                  <p key={l} className="text-[clamp(20px,2.2vw,24px)] leading-[1.4]">
                    {l}
                  </p>
                ))}
              </div>
              <p className={`${body} flex-1`}>{d.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <MediaRow
        heightClass="aspect-[397/863]"
        items={[
          { caption: 'Daily Prompt Screen', render: <img src={dailyPrompt} alt="Daily prompt screen" className="absolute top-0 left-[-0.13%] h-[100.23%] w-[100.25%] max-w-none object-cover" /> },
          { caption: 'Widget Feature', render: <img src={widget} alt="Village home-screen widget" className="absolute top-0 left-[-2.14%] h-[102.32%] w-[102.27%] max-w-none object-cover" /> },
          {
            caption: 'Calendar/Archive Feature',
            render: (
              <>
                <img src={archiveBg} alt="" className="absolute inset-0 size-full object-cover" />
                <img src={archive} alt="Calendar and memory archive screen" className="absolute top-[-1.97%] left-[-2.39%] h-[112.05%] w-[105.04%] max-w-none object-cover" />
              </>
            ),
          },
        ]}
      />

      <section id="prototype" className="flex flex-col gap-10 lg:gap-[47px]">
        <InlineTitle numeral="V" title="final prototype" />
        <div className={`${body} flex flex-col gap-5`}>
          <p>Once we had established our concept and design direction, we brought Village into Figma to turn our ideas and research into a cohesive prototype.</p>
          <p>
            All three of us worked together in the same design file. We spent approximately 12 hours designing and refining the prototype, with the
            most intensive stretch taking place from about 1:00 a.m. to 7:00 a.m. on Sunday as we worked to bring the experience together before the
            9 am deadline.
          </p>
          <p>
            Because the project was highly collaborative, we moved fluidly between designing screens, discussing interactions, refining our visual
            direction, and reconsidering how each feature connected back to our research. We divided specific flows, like calendar versus home page,
            among ourselves, but our process was one involving continuous peer reviewing and joint decision-making for a cohesive experience.
          </p>
          <p>
            The biggest takeaway from this project was that designing for a generational gap doesn't mean designing for one generation to catch up to
            the other. Our research challenged a lot of our initial assumptions about older adults and technology. They shared a desire for{' '}
            <i className="opsz-9">meaningful</i>
            <span className="opsz-9">, not simpler, connection. </span>
            That distinction shaped Village from our HMW statement to the way we approached the final prototype.
          </p>
          <p>
            Working under the constraints of a 36-hour long design-a-thon also taught us how important it is to make decisions without having every
            detail perfectly resolved. We had to continuously prioritize, iterate, and decide which ideas most directly supported our research and
            problem statement. Ultimately, Village showed me how much stronger a design becomes when every part of the process builds toward the same
            initial goal, in our case: bridging generational gaps through design.
          </p>
        </div>
      </section>
    </CaseStudy>
  )
}
