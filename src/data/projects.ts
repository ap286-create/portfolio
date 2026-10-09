export type Project = {
  slug: string
  letter: string
  title: string
  tagline: string
  summary: string
  category: string
  links: { label: string; href: string }[]
  date: string
}

export const PROJECTS: Project[] = [
  {
    slug: 'build-a-brain',
    letter: 'A',
    title: 'build-a-brain',
    tagline: 'computer vision educational tool for understanding the brain',
    summary:
      'an interactive computer vision + gesture-based learning game that teaches the brain’s lobes using real-time camera tracking, object detection, and facial/gesture analysis',
    category: 'Interactive application  ·  educational technology · game development',
    links: [{ label: 'Github Link', href: 'https://github.com/ap286-create/build-a-brain-3/tree/main' }],
    date: 'May 2026',
  },
  {
    slug: 'dmc-equipment-checkout',
    letter: 'B',
    title: 'dmc equipment checkout',
    tagline: 'digital equipment checkout system for facilitating equipment management',
    summary:
      'a web app for the Rice Digital Media Center to track equipment checkouts and returns. students fill out a checkout form at a kiosk, and DMC staff manage the forms and check gear back in from an admin dashboard.',
    category: 'Front-end development  ·  Product Development · Workflow automation',
    links: [{ label: 'Github Link', href: 'https://github.com/rice-apps-launchpad/dmc' }],
    date: 'April 2026',
  },
  {
    slug: 'village',
    letter: 'C',
    title: 'village',
    tagline: 'a way to bridging generational gaps through everyday video check-ins',
    summary:
      'an accessible, widget-first video messaging app designed to help grandparents and grandchildren stay connected across age and distance.',
    category: 'UI/UX Design ·  user research · interaction design · prototyping · mobile app',
    links: [
      {
        label: 'live prototype',
        href: 'https://www.figma.com/proto/r0iAdw7PlX7uYIJN817bBf/Village-by-Sigma-%3C3?node-id=1-2&p=f&t=ZzoMX5xQ0Sdj6qZX-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2',
      },
      { label: 'devpost submission', href: 'https://devpost.com/software/sigma-0gkybw' },
    ],
    date: 'January 2026',
  },
]

export function projectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug)!
}

/** Next project in the "NEXT PROJECT" footer (wraps around, as in Figma). */
export function nextProject(slug: string) {
  const i = PROJECTS.findIndex((p) => p.slug === slug)
  return PROJECTS[(i + 1) % PROJECTS.length]
}
