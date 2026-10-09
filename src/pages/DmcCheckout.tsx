import { body, CaseStudy, HeroMedia, HmwStatement, InlineTitle, introLead, introNote, MediaRow, Overview, StackedTitle, LoopVideo } from '../components/CaseStudy'
import { Rule, U } from '../components/ui'
import hero from '../assets/videos/dmc-hero.mp4'
import dmcCenter from '../assets/projects/dmc-center.png'
import kioskForm from '../assets/projects/dmc-kiosk-form.png'

const IMPACT = [
  {
    title: '2,600+ paper forms eliminated annually',
    text: 'Based on 2,604 transactions in 2024 and 2,593 in 2025, digitizing the process eliminates more than 2,600 paper forms every year.',
  },
  {
    title: '~87 staff hours saved annually',
    text: 'At an average of two minutes saved per transaction, approximately 2,600 checkouts translate to 87 hours of staff time saved each year.',
  },
  {
    title: 'improved data accuracy',
    text: 'The digital workflow eliminates handwriting errors and manual form updates, giving staff better accuracy and real-time tracking.',
  },
]

/** Figma "dmc equipment checkout" (268:407). */
export default function DmcCheckout() {
  return (
    <CaseStudy
      slug="dmc-equipment-checkout"
      tags={['riceapps application', 'next.js, react, typescript, tailwind css, supabase']}
      completed="COMPLETED APRIL 2026"
      intro={
        <>
          <p className={introLead}>
            a web app for the Rice Digital Media Center to track equipment checkouts and returns. students fill out a checkout form at a kiosk, and
            DMC staff manage the forms and check gear back in from an admin dashboard.
          </p>
          <p className={introNote}>
            collaborative effort with 7 team members; <U className="text-ink">my role</U>
            <span className="text-ink">: front-end client-side development</span>
          </p>
        </>
      }
    >
      <HeroMedia className="aspect-[1224/576]">
        <LoopVideo src={hero} label="DMC Kiosk walkthrough: selecting an equipment form" className="absolute inset-0 object-top" />
      </HeroMedia>

      <Overview
        contents={[
          { id: 'problem', label: 'I — THE PROBLEM' },
          { id: 'solution', label: 'II — THE SOLUTION' },
          { id: 'technical-decisions', label: 'III — TECHNICAL DECISIONS' },
          { id: 'challenges', label: 'IV — CHALLENGES + LEARNINGS' },
        ]}
      >
        <HmwStatement>
          how might we <U>digitize</U> the DMC's equipment checkout and return workflow in a way that makes the process <U>faster and easier</U> for
          students while giving staff more <U>accurate, centralized equipment records</U>?
        </HmwStatement>
      </Overview>

      <section id="problem" className="flex flex-col-reverse gap-6 lg:flex-row lg:items-start lg:gap-[37px]">
        <div className={`${body} flex flex-1 flex-col gap-5`}>
          <p>
            The <U>Rice Digital Media Center (DMC)</U> manages a large inventory of camera, video, and audio equipment that students regularly check
            out and return. Before this project, the checkout process relied on paper forms, making it harder to maintain accurate, up-to-date
            records.
          </p>
          <p>
            The problem wasn't simply that the process was paper-based. With more than 2,600 equipment transactions per year, even a small amount of
            friction in each checkout adds up. Staff had to work with handwritten information and manually maintain equipment records into a digital
            database. <b>In other words, the checkout workflow was disconnected from the equipment tracking process.</b>
          </p>
        </div>
        <StackedTitle numeral="I" lines={['the', 'problem']} align="right" />
      </section>

      <section id="solution" className="flex flex-col gap-6 lg:gap-y-[18px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-[47px]">
          <StackedTitle numeral="II" lines={['the', 'solution']} />
          <div className={`${body} flex flex-1 flex-col gap-5 lg:max-w-[877px]`}>
            <p>
              Our team of eight built a Digital Equipment Checkout System that replaced the paper-based workflow with a web application used by both
              students and DMC staff.
            </p>
            <p>The system has two primary experiences:</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2.5 lg:grid-cols-[1.5fr_1fr]">
          <div className={`${body} flex flex-col gap-2.5 border border-green-dark p-2.5 text-ink-green-2 lg:self-center`}>
            <h3 className="text-center text-[21px] font-bold">Student Checkout</h3>
            <p>
              Students use a kiosk interface to select the equipment they are checking out and complete a digital form. Equipment accessories are
              presented individually so students and staff can verify what is included before the checkout is submitted.
            </p>
            <div>
              <p>The system collects information such as:</p>
              <ul className="list-disc ps-[27px]">
                <li>Student name and NetID</li>
                <li>Equipment and accessories</li>
                <li>Due date and time</li>
                <li>Staff member handling the checkout</li>
                <li>Condition/presence of individual accessories</li>
              </ul>
            </div>
          </div>
          <div className={`${body} flex flex-col gap-2.5 p-2.5 text-ink lg:self-start`}>
            <h3 className="text-center text-[21px] font-bold">Staff Management</h3>
            <p>
              DMC staff have a separate administrative interface for managing equipment forms and tracking active checkouts. Staff can search
              submissions, group records by NetID, and check equipment back in when it is returned.
            </p>
            <p>The system also allows staff to create and manage equipment forms, including assigning labels and images to individual accessories.</p>
          </div>
        </div>

        <div className={`${body} flex flex-col gap-5`}>
          <p>
            This project was completed by a team of eight people. <U className="text-green-dark">I worked on the front-end/client side</U> alongside
            one other teammate. Our responsibility was to turn the required checkout and equipment-management workflows into an interface that
            students and DMC staff could actually use.
            <br />
            My work focused on using a provided design file to build and connect the client-side experience, including the interfaces for selecting
            equipment, completing forms, displaying equipment and accessory information, and interacting with the application's different states.
          </p>
          <p>After deployment, the system's impact could be quantified using the DMC's existing transaction volume.</p>
          <ul className="flex flex-col gap-3">
            {IMPACT.map((item) => (
              <li key={item.title}>
                <p className="font-display text-[clamp(22px,2.6vw,28px)] leading-[1.6] font-semibold text-ink">
                  <span className="font-normal">↳ </span>
                  {item.title}
                </p>
                <ul className="list-disc ps-[27px]">
                  <li>{item.text}</li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <MediaRow
        heightClass="aspect-[591/317]"
        items={[
          { caption: 'Rice’s Digital Media Center', render: <img src={dmcCenter} alt="Rice’s Digital Media Center" className="size-full object-cover" /> },
          { caption: 'Kiosk Checkout Form', render: <img src={kioskForm} alt="Kiosk checkout form" className="size-full object-cover" /> },
        ]}
      />

      <section id="technical-decisions" className="flex flex-col gap-10 lg:gap-[47px]">
        <InlineTitle numeral="III" title="technical decisions" />
        <div className={`${body} flex flex-col gap-5`}>
          <p>
            We used <b>Next.js</b> with the <b>App Router</b> and <b>React</b> to structure the application around its different user-facing
            workflows. The project separates the student-facing kiosk from the staff-facing administrative experience, which made sense given that the
            two audiences have different needs. For the front end, this meant thinking in terms of reusable React components and individual
            application states rather than treating each screen as an isolated page.
          </p>
          <p>
            We used <b>TypeScript</b> to give the front end more structure as information moved between components and forms. This was particularly
            useful for a system where equipment, accessories, checkout responses, and submission information needed to stay consistent across
            different parts of the interface.
          </p>
          <p>
            We used <b>Tailwind CSS</b> <span className="opsz-9">and</span> <b>shadcn/ui</b> to build the interface. Rather than creating every UI
            element from scratch, shadcn/ui gave us clean, reusable primitives that we could adapt to the needs of the DMC application. This was
            useful for keeping the interface consistent while working cross-functionally to build multiple workflows across the kiosk and admin sides
            of the application.
          </p>
        </div>
        <Rule />
      </section>

      <section id="challenges" className="flex flex-col gap-10 lg:gap-[47px]">
        <InlineTitle numeral="IV" title="challenges + learnings" />
        <div className={`${body} flex flex-col gap-5`}>
          <p>
            Because eight people were contributing to the same application, a major challenge that me and my teammate faced was making front-end
            work fit cleanly into a system that other people were developing simultaneously.
          </p>
          <p>
            Every piece was essentially codependent on the next. Our front-end work depended on data and functionality being provided by other parts
            of the application, while those parts also depended on the interfaces we were building. This taught me the importance of clear component
            boundaries, consistent data structures, and communication between teammates. A technically correct component isn't useful if it doesn't
            integrate cleanly with the rest of the application.
          </p>
          <p>
            Beyond that, this project as a whole was a huge learning experience. Before this project, I had never built a full application or worked
            with most of the technologies involved. I had only recently learned about Next.js, React, TypeScript, and Tailwind CSS a semester earlier
            through RiceApps, so I was learning how these tools worked while simultaneously using them to build a real product.
          </p>
          <p>
            In fact, our entire team was made up of beginners. We were all part of Launchpad, a subsection of RiceApps where we learned about web
            development in the fall and applied that knowledge to a project in the spring. So, that meant me and my teammate spent a lot of time
            asking questions, troubleshooting unfamiliar problems, and learning from each other as we figured out how to turn what we learned into
            something tangible.
          </p>
          <p>
            The most rewarding part of this project was seeing something I had built go beyond a development environment and become a tool used by
            the DMC. Working on a system that processes thousands of equipment transactions made the learning experience real. The interface we built
            wasn't just an exercise to practice what we’d learned in the fall—it was part of a product that replaced a real world problem.
          </p>
          <p className="font-bold">
            This project taught me how to learn unfamiliar technologies by applying them to a concrete problem, rather than waiting until I felt
            completely comfortable with them. It also gave me my first experience contributing to a collaborative application from development
            through deployment, building a foundation I could carry into future software projects.
          </p>
        </div>
      </section>
    </CaseStudy>
  )
}
