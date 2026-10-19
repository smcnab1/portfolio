import { ProjectItemProps } from '../types/projects';

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
    createdAt: new Date('2026-10-19'),
    updatedAt: new Date('2026-10-19'),
    sortOrder: 1,
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
    createdAt: new Date('2026-10-19'),
    updatedAt: new Date('2026-10-19'),
    sortOrder: 2,
  },
];
