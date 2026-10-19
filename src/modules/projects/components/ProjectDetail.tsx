import Link from 'next/link';

import Image from '@/common/components/elements/Image';
import MDXComponent from '@/common/components/elements/MDXComponent';
import { parseStacks } from '@/common/helpers';
import { ProjectItemProps } from '@/common/types/projects';

import ProjectLink from './ProjectLink';

const ProjectDetail = ({
  title,
  image,
  imageAlt,
  imageCaption,
  status,
  stacks,
  linkDemo,
  linkGithub,
  content,
}: ProjectItemProps) => {
  const stacksArray = parseStacks(stacks);

  return (
    <article className='space-y-8'>
      <div className='flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between'>
        <div className='space-y-3'>
          {status && (
            <p className='text-sm font-medium text-teal-800 dark:text-teal-300'>
              {status}
            </p>
          )}
          <div className='flex flex-wrap gap-2' aria-label='Technologies used'>
            {stacksArray?.map((stack) => (
              <span
                key={stack}
                className='rounded-full border border-neutral-300 px-2.5 py-1 text-xs text-neutral-700 dark:border-neutral-700 dark:text-neutral-300'
              >
                {stack}
              </span>
            ))}
          </div>
        </div>
        <ProjectLink
          title={title}
          linkDemo={linkDemo}
          linkGithub={linkGithub}
        />
      </div>
      {image && (
        <figure className='overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800'>
          <Image
            src={image}
            width={1200}
            height={700}
            sizes='(max-width: 1024px) 100vw, 800px'
            alt={imageAlt || title}
            className='h-auto w-full'
          />
          {imageCaption && (
            <figcaption className='px-4 py-3 text-xs text-neutral-600 dark:text-neutral-400'>
              {imageCaption}
            </figcaption>
          )}
        </figure>
      )}
      {content && (
        <div className='space-y-5 leading-relaxed text-neutral-800 dark:text-neutral-300'>
          <MDXComponent>{content}</MDXComponent>
        </div>
      )}
      <p className='border-t border-neutral-200 pt-6 text-sm dark:border-neutral-800'>
        <Link
          href='/projects'
          className='text-teal-700 underline underline-offset-4 dark:text-teal-400'
        >
          View all projects
        </Link>{' '}
        ·{' '}
        <Link
          href='/contact'
          className='text-teal-700 underline underline-offset-4 dark:text-teal-400'
        >
          Get in touch
        </Link>
      </p>
    </article>
  );
};

export default ProjectDetail;
