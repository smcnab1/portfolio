import fs from 'node:fs';
import path from 'node:path';

import { EXPERIENCE } from '@/common/constant/experience';
import { MENU_ITEMS, SOCIAL_MEDIA } from '@/common/constant/menu';
import { PROJECTS } from '@/common/constant/projects';

const repositoryRoot = process.cwd();

const publicProfileFiles = [
  'src/modules/home/components/Introduction.tsx',
  'src/modules/home/components/Services.tsx',
  'src/modules/about/components/Story.tsx',
  'src/common/constant/experience.ts',
  'src/common/constant/projects.ts',
  'src/common/components/sidebar/ProfileHeader.tsx',
].map((file) => fs.readFileSync(path.join(repositoryRoot, file), 'utf8'));

describe('privacy-focused public profile', () => {
  it('keeps only the intended public navigation', () => {
    expect(
      MENU_ITEMS.filter((item) => item.isShow).map((item) => item.href),
    ).toEqual(['/', '/projects', '/about', '/contact', '/legal']);
  });

  it('keeps professional contact links without displaying the GitHub handle', () => {
    expect(SOCIAL_MEDIA.map((item) => item.title)).toEqual([
      'Email',
      'LinkedIn',
      'GitHub',
    ]);
    expect(publicProfileFiles.join('\n')).not.toContain('@smc' + 'nab1');
  });

  it('retains the professional identity and selected projects', () => {
    const publicProfile = publicProfileFiles.join('\n');

    expect(publicProfile).toContain('Senior Lecturer');
    expect(publicProfile).toContain('Registered Paramedic');
    expect(EXPERIENCE).toHaveLength(7);
    expect(PROJECTS.filter((project) => project.isShow)).toHaveLength(2);
    expect(PROJECTS.map((project) => project.slug)).toEqual([
      'simhq',
      'portfolio',
    ]);
  });

  it('does not publish private details or turn training into employment', () => {
    const publicProfile = publicProfileFiles.join('\n');

    expect(publicProfile).not.toMatch(/\b(?:\+44|0)7\d{9}\b/);
    expect(publicProfile).not.toMatch(/\bADHD\b/i);
    expect(publicProfile).not.toContain(
      'Cybersecurity & Security Operations Practitioner',
    );
    expect(
      PROJECTS.every((project) => project.image !== '/images/placeholder.png'),
    ).toBe(true);
  });

  it('pins generated sitemap URLs to the working apex domain', () => {
    const sitemapConfig = fs.readFileSync(
      path.join(repositoryRoot, 'next-sitemap.config.js'),
      'utf8',
    );

    expect(sitemapConfig).toContain("siteUrl: 'https://sammcnab.co.uk'");
    expect(sitemapConfig).not.toContain('process.env.SITE_URL');
  });

  it.each([
    'src/pages/blog/index.tsx',
    'src/pages/guestbook.tsx',
    'src/pages/learn/index.tsx',
    'src/pages/auth/signin.tsx',
    'src/pages/cms.tsx',
    'src/common/libs/prisma.ts',
    'prisma/schema.prisma',
    'prisma/dev.db',
    'scripts/setup-cms.js',
    'scripts/exports/complete-export.json',
  ])('removes %s from the current public tree', (file) => {
    expect(fs.existsSync(path.join(repositoryRoot, file))).toBe(false);
  });
});
