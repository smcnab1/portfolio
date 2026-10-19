import { ProjectItemProps } from '../types/projects';

// Case-study timestamps come from the commits that added the published content.
// They do not describe when the underlying projects were created or updated.
const INITIAL_CASE_STUDIES_AT = '2026-10-19T10:05:59Z';
const ADDITIONAL_CASE_STUDIES_AT = '2026-10-19T10:24:03Z';

export const PROJECTS: ProjectItemProps[] = [
  {
    id: 'simhq',
    title: 'SimHQ - Healthcare Simulation Management Platform',
    slug: 'simhq',
    description:
      'A modular platform for the practical work of running healthcare simulation centres.',
    content: `## The problem

Simulation teams often coordinate rooms, people, equipment and requests across separate tools and manual processes. That makes the operational picture harder to see and routine work harder to manage.

## The solution

SimHQ is being built to bring simulation administration, scheduling and operational workflows into a connected platform. Rooms is the first focused module, with booking and coordination at its centre. Other modules are at different stages of development.

## My role and approach

I founded SimHQ and lead its product design, architecture, full-stack development and technical delivery. My experience in frontline care and simulation education informs the workflows and the decisions about what to build.

## Architecture and engineering

The platform uses Next.js, React and TypeScript for its web applications, a central Convex backend and WorkOS for shared identity. Its modular services cover public information, authentication, Rooms and support. I work on multi-tenant access controls, automated testing, GitHub-based review and staged delivery. This is an active product, so its capabilities continue to evolve.

## Current status

SimHQ is in active development. The public site offers trial requests, and Rooms is available through a limited trial/alpha experience. Assets and other proposed modules should not be read as complete products. The image above shows the public SimHQ website, not an authenticated product screen.

Explore the [public SimHQ website](https://simhq.app/) and [Rooms overview](https://rooms.simhq.app/).`,
    image: '/images/projects/simhq-public-site.webp',
    imageAlt: 'Public SimHQ website showing the SimHQ brand and introduction',
    imageCaption:
      'Public SimHQ website, captured October 2026. No private product screen is shown.',
    status: 'Active development · Rooms trial/alpha',
    linkDemo: 'https://simhq.app/',
    linkGithub: null,
    stacks: 'Next.js, React.js, TypeScript, Tailwind CSS, Convex, WorkOS',
    isShow: true,
    isFeatured: true,
    caseStudyPublishedAt: INITIAL_CASE_STUDIES_AT,
    caseStudyUpdatedAt: INITIAL_CASE_STUDIES_AT,
    sortOrder: 1,
  },
  {
    id: 'modumate',
    title: 'ModuMate - Educational Content Toolkit',
    slug: 'modumate',
    description:
      'A browser toolkit for preparing reusable module timetables and teaching content.',
    content: `## The problem

Preparing timetables, assessment information and module pages for different cohorts can mean repeating the same editing work in several places.

## The solution and features

ModuMate uses editable module and cohort presets to generate timetables, assessment briefs and overviews, module information and teaching-team pages. It supports JSON import and export, local working data and previews. The timetable generator offers PDF and iCalendar exports; supported pages can also produce HTML for reuse.

## Technologies and my contribution

I built the static toolkit with HTML, CSS and vanilla JavaScript, drawing on my experience in healthcare simulation education to shape the content and workflow. Browser storage keeps working preferences and drafts locally; some features load third-party libraries from a CDN.

## Current status and links

This is a live personal web application and public demonstration, with fictional sample content. It has no server-side account or access controls, so confidential data should not be entered into the public demo. [Try ModuMate](https://smcnab1.github.io/modu-mate/) or [view the source on GitHub](https://github.com/smcnab1/modu-mate).`,
    image: '/images/projects/modumate-timetable.webp',
    imageAlt:
      'ModuMate timetable editor with weekly teaching cards and PDF and calendar export controls',
    imageCaption:
      'Timetable generator from the public ModuMate repository, using sample module content.',
    status: 'Live personal web application',
    linkDemo: 'https://smcnab1.github.io/modu-mate/',
    linkDemoLabel: 'Open live demo',
    linkGithub: 'https://github.com/smcnab1/modu-mate',
    stacks: 'HTML, CSS, JavaScript, Browser storage',
    isShow: true,
    isFeatured: false,
    caseStudyPublishedAt: ADDITIONAL_CASE_STUDIES_AT,
    caseStudyUpdatedAt: ADDITIONAL_CASE_STUDIES_AT,
    sortOrder: 2,
  },
  {
    id: 'cheatsheets-remastered',
    title: 'Cheatsheets Remastered - Raycast Extension',
    slug: 'cheatsheets-remastered',
    description:
      'A keyboard-first home for curated developer references and personal Markdown cheatsheets.',
    content: `## The problem

Useful technical references are often split between websites, personal notes and repository files, slowing down quick recall during development.

## The solution and features

This Raycast extension brings a curated set of DevHints references together with custom Markdown cheatsheets and Markdown imported from GitHub repositories. Search prioritises title matches, while tags, favourites and filters help organise the collection. Built-in and custom sheets work offline from local storage; repository content can be synced on demand.

## Technologies and my contribution

I developed the extension with TypeScript, React and the Raycast API. The work combines content curation, Markdown handling, GitHub imports and a single keyboard-driven browsing flow.

## Current status and links

Released for macOS in the Raycast Store. [Install Cheatsheets Remastered](https://www.raycast.com/smcnab1/cheatsheets-remastered) or [view its source on GitHub](https://github.com/smcnab1/cheatsheets-remastered).`,
    image: '/images/projects/cheatsheets-list.webp',
    imageAlt:
      'Cheatsheets Remastered list of technical references in the Raycast interface',
    imageCaption:
      'Curated references in the released Raycast extension; source: public repository metadata.',
    gallery: [
      {
        image: '/images/projects/cheatsheets-custom.webp',
        alt: 'Form for creating a custom Markdown cheatsheet with tags and a description',
        caption: 'Create a custom cheatsheet.',
      },
      {
        image: '/images/projects/cheatsheets-markdown.webp',
        alt: 'Custom GitHub cheatsheet displayed as rendered Markdown in Raycast',
        caption: 'Read a Markdown cheatsheet and copy its content.',
      },
    ],
    status: 'Released Raycast extension · macOS',
    linkDemo: 'https://www.raycast.com/smcnab1/cheatsheets-remastered',
    linkDemoLabel: 'Raycast Store',
    linkGithub: 'https://github.com/smcnab1/cheatsheets-remastered',
    stacks: 'TypeScript, React, Raycast API, Markdown, Local storage',
    isShow: true,
    isFeatured: false,
    caseStudyPublishedAt: ADDITIONAL_CASE_STUDIES_AT,
    caseStudyUpdatedAt: ADDITIONAL_CASE_STUDIES_AT,
    sortOrder: 3,
  },
  {
    id: 'gradient-generator',
    title: 'Gradient Generator - Raycast Extension',
    slug: 'gradient-generator',
    description:
      'A local-first tool for designing, previewing and exporting reusable gradients.',
    content: `## The problem

Trying colour combinations and translating a gradient into code or image assets can interrupt a design workflow.

## The solution and features

Gradient Generator provides interactive previews for linear, radial and conic gradients. You can edit colour stops, generate random options and save favourites locally. It copies CSS, SwiftUI and Tailwind snippets and exports SVG or PNG files, including preset image sizes.

## Technologies and my contribution

I built the TypeScript and React extension with the Raycast API, including gradient editing, preview rendering, local persistence, export actions and input validation. It works offline without network calls.

## Current status and links

Released for macOS in the Raycast Store. [Install Gradient Generator](https://www.raycast.com/smcnab1/gradient-generator) or [view its source on GitHub](https://github.com/smcnab1/gradient-generator).`,
    image: '/images/projects/gradient-preview.webp',
    imageAlt:
      'Gradient Generator preview with colour stops and CSS, SwiftUI and Tailwind snippets',
    imageCaption:
      'Interactive preview and code snippets from the released Raycast extension.',
    gallery: [
      {
        image: '/images/projects/gradient-form.webp',
        alt: 'Gradient creation form with type, preset and colour controls',
        caption: 'Choose a gradient type and edit its colours.',
      },
      {
        image: '/images/projects/gradient-saved.webp',
        alt: 'Saved gradients list in Raycast with colour swatches',
        caption: 'Review gradients saved in local Raycast storage.',
      },
    ],
    status: 'Released Raycast extension · macOS',
    linkDemo: 'https://www.raycast.com/smcnab1/gradient-generator',
    linkDemoLabel: 'Raycast Store',
    linkGithub: 'https://github.com/smcnab1/gradient-generator',
    stacks: 'TypeScript, React, Raycast API, SVG, PNG, Local storage',
    isShow: true,
    isFeatured: false,
    caseStudyPublishedAt: ADDITIONAL_CASE_STUDIES_AT,
    caseStudyUpdatedAt: ADDITIONAL_CASE_STUDIES_AT,
    sortOrder: 4,
  },
  {
    id: 'luxafor-controller',
    title: 'Luxafor Controller - Raycast Extension',
    slug: 'luxafor-controller',
    description:
      'Raycast controls for Luxafor LED devices, with quick actions in the menu bar.',
    content: `## The problem

Changing a physical availability light through a separate application adds friction to a small, frequent task.

## The solution and features

Luxafor Controller sends colour, off and blink commands through the Luxafor Webhook API. It offers connection testing, a main control view and quick menu-bar actions. The Luxafor software must be running with Webhook mode enabled.

## Technologies and my contribution

I built the extension with TypeScript, React, the Raycast API and HTTP requests to Luxafor. Local state keeps the main view and menu bar aligned. The displayed colour reflects the latest requested action; connection checks provide a reachability indication. The extension cannot read the LED's physical colour or independently confirm its current state.

## Current status and links

Released for macOS in the Raycast Store. [Install Luxafor Controller](https://www.raycast.com/smcnab1/luxafor-controller) or [view its source on GitHub](https://github.com/smcnab1/luxafor-controller).`,
    image: '/images/projects/luxafor-controls.webp',
    imageAlt:
      'Luxafor Controller Raycast view with device controls and colour and blink actions',
    imageCaption:
      'Control view from the released Raycast extension; the displayed colour is locally tracked.',
    gallery: [
      {
        image: '/images/projects/luxafor-actions.webp',
        alt: 'Luxafor Controller actions for blinking and testing the connection',
        caption: 'Blink controls and connection test actions.',
      },
    ],
    status: 'Released Raycast extension · macOS',
    linkDemo: 'https://www.raycast.com/smcnab1/luxafor-controller',
    linkDemoLabel: 'Raycast Store',
    linkGithub: 'https://github.com/smcnab1/luxafor-controller',
    stacks:
      'TypeScript, React, Raycast API, Luxafor Webhook API, Local storage',
    isShow: true,
    isFeatured: false,
    caseStudyPublishedAt: ADDITIONAL_CASE_STUDIES_AT,
    caseStudyUpdatedAt: ADDITIONAL_CASE_STUDIES_AT,
    sortOrder: 5,
  },
  {
    id: 'portfolio-1',
    title: 'Portfolio website',
    slug: 'portfolio',
    description:
      'A concise home for my professional experience, technical work and contact details.',
    content: `## Purpose

This site gives employers, recruiters and collaborators a quick way to understand my work across healthcare, education and software development, then explore selected projects in more detail.

## Technologies

Next.js, React, TypeScript and Tailwind CSS provide a small, responsive site. The project uses local structured content for experience and case studies, with no CMS or database.

## Design and development

I kept the existing visual language and navigation while making the introduction clearer, adding a chronological experience view and turning project entries into case studies. The site uses responsive layouts, semantic headings, keyboard focus styles and optimised local project images. I check changes with linting, type checking, tests, a production build and a format check.

## Links

You can [visit the live website](https://sammcnab.co.uk) or [view its public source on GitHub](https://github.com/smcnab1/portfolio).`,
    image: '/images/projects/portfolio-home.webp',
    imageAlt: 'Homepage of Sam McNab’s portfolio website',
    imageCaption:
      'Homepage of the running portfolio website, captured October 2026.',
    status: 'Live',
    linkDemo: 'https://sammcnab.co.uk',
    linkGithub: 'https://github.com/smcnab1/portfolio',
    stacks: 'Next.js, React.js, TypeScript, Tailwind CSS, Vercel',
    isShow: true,
    isFeatured: false,
    caseStudyPublishedAt: INITIAL_CASE_STUDIES_AT,
    caseStudyUpdatedAt: INITIAL_CASE_STUDIES_AT,
    sortOrder: 6,
  },
];
