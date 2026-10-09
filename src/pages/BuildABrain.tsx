import { body, CaseStudy, HmwStatement, InlineTitle, introLead, MediaRow, Overview, StackedTitle, LoopVideo, YouTube } from '../components/CaseStudy'
import { Rule, U } from '../components/ui'
import occipitalIntro from '../assets/videos/bab-occipital-intro.mp4'
import occipitalActivity from '../assets/projects/bab-occipital-activity.png'
import blender1 from '../assets/projects/bab-blender-1.jpg'
import blender2 from '../assets/projects/bab-blender-2.png'
import roblox from '../assets/projects/bab-roblox.png'

/** Figma "build a brain" (23:153). */
export default function BuildABrain() {
  return (
    <CaseStudy
      slug="build-a-brain"
      tags={['psyc 203 spring ‘26 final project', 'python, opencv, yolo, mediapipe']}
      completed="COMPLETED MAY 2026"
      intro={
        <p className={`${introLead} max-w-[820px]`}>
          an interactive computer vision + gesture-based learning game that teaches the brain’s lobes using real-time camera tracking, object
          detection, and facial/gesture analysis.
        </p>
      }
    >
      <YouTube id="KaxfWtl-ZFQ" title="Build-A-Brain demo" />

      <Overview
        contents={[
          { id: 'problem', label: 'I — THE PROBLEM' },
          { id: 'solution', label: 'II — THE SOLUTION' },
          { id: 'technical-decisions', label: 'III — TECHNICAL DECISIONS' },
          { id: 'challenges', label: 'IV — CHALLENGES + LEARNINGS' },
        ]}
      >
        <HmwStatement>
          how might we use <U>accessible technology</U> to turn <U>learning about the brain</U> from a passive <U>memorization</U> task into an{' '}
          <U>interactive experience</U> that encourages learners to recognize, recall, and apply what they’ve learned?
        </HmwStatement>
      </Overview>

      <section id="problem" className="flex flex-col-reverse gap-6 lg:flex-row lg:items-start lg:gap-[37px]">
        <div className={`${body} flex flex-1 flex-col gap-5`}>
          <p>
            Learning anatomy often relies on memorizing static diagrams, labels, and definitions. While these can communicate information
            effectively, they don’t necessarily encourage learners to actively engage with or recall what they’ve learned once the exam has passed.
            For a subject like cognitive science, where understanding is built on connections—particularly connecting a brain’s region’s location,
            function, and relationship to behavior—simply looking at a labeled diagram can make it difficult to establish those connections.
          </p>
          <p className="font-bold">
            I wanted to explore how an educational experience could make learning more active, embodied, and engaging by requiring learners to
            interact with the material, rather than simply read it.
          </p>
        </div>
        <StackedTitle numeral="I" lines={['the', 'problem']} align="right" />
      </section>

      <MediaRow
        heightClass="aspect-[591/317]"
        items={[
          { caption: 'Occipital Lobe Activity', render: <img src={occipitalActivity} alt="Occipital lobe activity screen" className="size-full object-cover" /> },
          { caption: 'Occipital Lobe Introduction', render: <LoopVideo src={occipitalIntro} label="Occipital lobe introduction slide" /> },
        ]}
      />

      <section id="solution" className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-[47px]">
        <StackedTitle numeral="II" lines={['the', 'solution']} />
        <div className={`${body} flex flex-1 flex-col gap-5`}>
          <p>
            I created my Build-A-Brain project to be an interactive learning game that teaches the four major lobes of the brain (occipital,
            parietal, temporal, and frontal) through real-time computer vision.
          </p>
          <p>
            Instead of navigating the experience with a keyboard or mouse, learners interact with the program using their own body, voice, and
            physical environment. The experience progresses through short instructional slides before asking learners to demonstrate their
            understanding through different activities.
          </p>
          <div>
            <p>For example, learners may be asked to:</p>
            <ul className="list-disc ps-[27px]">
              <li>locate a specific brain lobe using hand tracking</li>
              <li>interact with objects detected through the camera</li>
              <li>respond using facial expressions</li>
              <li>answer prompts using voice input</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="technical-decisions" className="flex flex-col gap-10 lg:gap-[47px]">
        <Rule />
        <InlineTitle numeral="III" title="technical decisions" />
        <div className={`${body} flex flex-col gap-5`}>
          <p>
            I chose <b>OpenCV</b> for the camera-based interaction because the project depended on continuously processing live webcam footage.
            Additionally, I’ve worked with OpenCV in the past for similar projects that required camera vision, so it’s a tool I was felt
            comfortable using for this project.
          </p>
          <p>
            I used <b>MediaPipe</b> for hand and facial tracking because, again I had previous experience with using their facial tracking for a
            previous project, and found both their hand tracking and face tracking model to be the easiest to manipulate on a technical level.
            Specifically, unlike other (free) facial models that only tracked default expressions, and therefore would have less flexibility for me
            to modify, MediaPipe allows you to use their built in blendshapes (whether the jaw is open, left eye is shut, etc.) to essentially create
            your own benchmarks for tracking expressions. As for hand tracking, I only needed to track pointing and hand gestures, which was made easy
            through MediaPipe.
          </p>
          <p>
            I originally experimented with MediaPipe for object detection, but ultimately transitioned to <b>YOLOv8</b>. The flexibility that
            MediaPipe gives in their models proved to be too much, and would’ve required extensive development to achieve my goal of detecting
            everyday objects. I chose to sacrifice that modifiability for an <U>Ultralyctics</U>
            <span className="opsz-9">
              {' '}
              based YOLOv8 model that, although didn’t let me make many changes to its categorization of objects or UI, came with a more than
              versatile enough object-tracking system to accurately track everyday objects.{' '}
            </span>
            This decision also taught me an important lesson about choosing technologies that would be more efficient towards accomplishing an
            overall goal, even if that means I don’t get to be as “creative” in <i className="opsz-9">how</i>
            <span className="opsz-9"> that goal is necessarily solved.</span>
          </p>
          <p>
            I separated the gameplay logic into a <b>GameState</b> and <b>GameController</b> rather than treating every slide as an independent
            program state. The GameState class keeps track of the current slide, activity, input mode, active models, timing, and interaction
            locks—all of which were used to keep a log of the game, such as total time and activity results. The GameController class relies on the
            GameState to update slides, handle input, and track models, the latter of which became especially important as I decided to
            scale/modify my slides (since different activities require different computer-vision models). For example, the occipital and parietal
            lobes needed the object detection model for an activity, and the frontal lobe needed the face detection model.
          </p>
        </div>
      </section>

      <MediaRow
        gapClass="gap-6"
        heightClass="h-[260px] sm:h-[220px] lg:h-[360px]"
        items={[
          {
            caption: 'blender problems pt. 1',
            render: <img src={blender1} alt="Blender brain environment, attempt one" className="absolute top-[-5.22%] left-0 h-[145.19%] w-full max-w-none" />,
          },
          {
            caption: 'blender problems pt. 2',
            render: <img src={blender2} alt="Blender brain environment, attempt two" className="absolute top-[0.09%] left-[-21%] h-[99.9%] w-[121.05%] max-w-none" />,
          },
          { caption: 'brief roblox pivot', render: <img src={roblox} alt="Roblox prototype of the game" className="size-full object-cover" /> },
        ]}
      />

      <section id="challenges" className="flex flex-col gap-10 lg:gap-[47px]">
        <InlineTitle numeral="IV" title="challenges + learnings" />
        <div className={`${body} flex flex-col gap-5`}>
          <p>
            As you may have noticed by the repository name, this game was actually the third version of my Build-A-Brain project. In fact, most of
            the challenges I encountered during this process came from figuring out what I wanted to build.
          </p>
          <p>
            My first concept was significantly more ambitious than the final project. I initially wanted to create an immersive brain environment
            using Blender and first-person controls, where different modules could teach concepts like problem solving, decision making, and memory.
            I spent a lot of time thinking through how these modules could work and how the environment itself could become part of the learning
            experience.
          </p>
          <p>
            However, as I developed the idea, I realized that I was becoming more focused on building the environment than on designing the
            learning experience. The project was becoming a game-development problem rather than a learning-design problem. I struggled to let go of
            this idea, because I had spent the entire semester, up until the final month, fixated on trying to get this to work.
          </p>
          <p>
            Eventually though, I explored a completely different direction with a Roblox-based game, but this created a similar issue: I was again
            spending a significant amount of time figuring out the platform and game structure instead of focusing on the educational interaction I
            wanted to create. So, a week before the project deadline, I made the decision to take what I already knew —OpenCV and MediaPipe— and use
            it in a way that better served the original goal.
          </p>
          <p>
            I was able to bring over the computer-vision functionality from an earlier project rather than rebuilding it from scratch. The parts I
            actually developed for Build-A-Brain were the gameplay system, activities, progression, and logic connecting the computer vision to the
            learning experience. At first, I felt like using a familiar tool made the project less impressive, but it turned out that parts that I
            developed with Build-A-Brain in mind were just as much of a learning experience. I didn’t know everything there is to know about OpenCV
            and MediaPipe (and still don’t!), so I ended up still learning a lot from a technical standpoint even though it initially felt like a
            “fallback option”.
          </p>
          <p>
            Besides figuring out my project idea, another challenge came from combining several technologies that I already understood
            individually. Getting OpenCV, MediaPipe, gameplay logic, and the different activities to work independently came easy to me, even if I
            hadn’t used a specific model/framework; making them work together as one coherent experience was more complicated. That was one of my
            biggest technical learnings.
          </p>
          <p className="font-bold">
            Build-A-Brain ultimately taught me that part of being a designer and developer is knowing when to keep pushing an idea and when to
            completely rethink it. Scrapping two versions of the project wasn't wasted work. Each version helped me understand what I didn't want,
            what wasn't worth the complexity, and what I actually wanted the final experience to accomplish.
          </p>
        </div>
      </section>
    </CaseStudy>
  )
}
