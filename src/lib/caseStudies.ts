export interface CaseStudy {
  id: string;
  emoji: string;
  image: string;
  framerUrl: string;
  bg: string;
  title: string;
  meta: string;
  excerpt: string;
  year: string;
  role: string;
  tools: string;
  platform: string;
  sections: { heading: string; body: string; hasMockup?: boolean }[];
  outcomes: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "Blooms.Co",
    emoji: " 🌸",
    image: "/images/bloom1.png",
    framerUrl: "https://valleryportfolio.framer.website/works/blooms.co",
    bg: "linear-gradient(135deg,#0d1f30,#001a2e)",
    title: "Blooms.Co",
    meta: "Mobile App · 2025 · UX Research + Design",
    excerpt: "Blooms.Co is a mobile app that allows users to browse, customize, and order flower bouquets quickly and effortlessly for different occasions",
    year: "2025",
    role: "Product Designer",
    tools: "Figma",
    platform: "Mobile app",
    sections: [
      {
        heading: "The Problem",
        body: "Flow's existing app had a 72% drop-off rate in the onboarding funnel. Users reported feeling overwhelmed by the number of configuration options before they could start their first focus session. The core insight: the app was optimizing for features, not for the user's state of mind.",
        hasMockup: true,
      },
      {
        heading: "Research & Discovery",
        body: "I ran 18 contextual interviews with knowledge workers across time zones. Key finding: most users wanted to 'just start' — not configure. We identified three user archetypes: the Rusher, the Planner, and the Drifter, each with fundamentally different onboarding needs.",
      },
      {
        heading: "Design Solution",
        body: "We redesigned onboarding around a single question: 'What do you want to get done right now?' The app learns preferences passively in the background. First session could be started in under 8 seconds. Progressive complexity is unlocked only when users demonstrate readiness through usage patterns.",
        hasMockup: true,
      },
    ],
    outcomes: [
      "40% increase in task completion rate (7-day cohort)",
      "Onboarding time reduced from 4.2 min to 38 seconds",
      "App Store rating improved from 3.1 to 4.6 stars",
      "30-day retention up by 22%",
    ],
  },
  {
    id: "ADHFree",
    emoji: "💳",
    image: "/images/Adhfree.png",
    framerUrl: "https://valleryportfolio.framer.website/works/adhfree",
    bg: "linear-gradient(135deg,#1a0d20,#2d0d3a)",
    title: "ADHFree — ADHD Wellness app",
    meta: "Web Platform · 2023 · End-to-End UX",
    excerpt: "ADHFree, a responsive web app that helps adults with ADHD regulate focus and manage daily tasks through calm, intentional design.",
    year: "2025",
    role: "UX/UI Designer + Researcher",
    tools: "Figma, FigJam",
    platform: "Web App",
    sections: [
      {
        heading: "The Problem",
        body: "Kora was trying to serve first-generation investors — people who had never had a brokerage account, didn't know what a P/E ratio was, and had been burned by apps that made them feel stupid. The existing dashboard was a clone of platforms built for finance professionals.",
        hasMockup: true,
      },
      {
        heading: "Research Approach",
        body: "We ran guerrilla usability tests at community centers and churches in underserved neighborhoods. We discovered that trust was the #1 barrier. Users didn't distrust the numbers; they distrusted themselves to interpret them correctly.",
      },
      {
        heading: "Design Solution",
        body: "We introduced a 'Plain English' mode that translated financial jargon into natural language in real-time. Progressive disclosure hid advanced data behind contextual 'learn more' interactions. A 'Why this matters' layer was added to every data point.",
        hasMockup: true,
      },
    ],
    outcomes: [
      "Time-to-first-trade reduced by 60%",
      "Support tickets about confusion down 45%",
      "NPS score jumped from 22 to 61",
      "Feature adopted by 78% of new users within first session",
    ],
  },
  {
    id: "Stawi",
    emoji: "🏥",
    image: "/images/stawi cover.png",
    framerUrl: "https://valleryportfolio.framer.website/works/stawi-health",
    bg: "linear-gradient(135deg,#0d1a10,#0a2410)",
    title: "Stawi — Healthcare Design System",
    meta: "Design System · 2026 · Systems Design",
    excerpt: "Building an accessible, WCAG AA-compliant component library for a telehealth platform.",
    year: "2023",
    role: "Design Systems Lead",
    tools: "Figma",
    platform: "Web + Mobile + Tablet",
    sections: [
      {
        heading: "The Problem",
        body: "A telehealth company was scaling from 1 product to 4 simultaneously. Each team was building their own components in isolation. The result: visual inconsistency, duplicated engineering effort, and accessibility gaps that put them at legal risk.",
        hasMockup: true,
      },
      {
        heading: "Process",
        body: "I led a cross-functional audit across 4 product teams, cataloguing every UI component in use. We found 47 different button variants and 12 interpretations of the same form input. Facilitated alignment workshops to define shared design principles before touching a single pixel.",
      },
      {
        heading: "The System",
        body: "Pulse launched with 64 components, full dark/light mode support, responsive variants, and comprehensive Storybook documentation. Every component was keyboard-navigable and screen-reader tested. Token architecture meant themes could be swapped in minutes.",
        hasMockup: true,
      },
    ],
    outcomes: [
      "100% component adoption across all 4 product teams within 3 months",
      "New feature dev time reduced by ~35% (team self-reported)",
      "Zero accessibility violations in next external audit",
      "Design-to-dev handoff time cut from 2 days to 4 hours on average",
    ],
  },
];
