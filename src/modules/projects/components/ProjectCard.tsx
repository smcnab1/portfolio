import Link from 'next/link';
import { AiFillPushpin as PinIcon } from 'react-icons/ai';

import Card from '@/common/components/elements/Card';
import Image from '@/common/components/elements/Image';
import { parseStacks } from '@/common/helpers';
import { ProjectItemProps } from '@/common/types/projects';

const ProjectCard = ({
  title,
  slug,
  description,
  image,
  imageAlt,
  stacks,
  status,
  isFeatured,
}: ProjectItemProps) => {
  const stacksArray = parseStacks(stacks);

  return (
    <Link
      href={`/projects/${slug}`}
      className='group block rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600'
    >
      <Card className='h-full overflow-hidden border border-neutral-200 dark:border-neutral-800'>
        <div className='relative'>
          {image && (
            <Image
              src={image}
              width={600}
              height={320}
              sizes='(max-width: 640px) 100vw, 50vw'
              alt={imageAlt || title}
              className='h-48 w-full object-cover object-center'
            />
          )}
          {isFeatured && (
            <span className='absolute right-0 top-0 flex items-center gap-1 rounded-bl-xl bg-lime-300 px-2 py-1 text-xs font-medium text-emerald-950'>
              <PinIcon aria-hidden='true' size={15} /> Featured
            </span>
          )}
        </div>
        <div className='space-y-3 p-5'>
          {status && (
            <p className='text-xs font-medium uppercase tracking-wide text-teal-800 dark:text-teal-300'>
              {status}
            </p>
          )}
          <h2 className='text-lg font-semibold leading-snug text-neutral-800 group-hover:text-teal-700 dark:text-neutral-200 dark:group-hover:text-teal-400'>
            {title}
          </h2>
          <p className='text-sm leading-relaxed text-neutral-700 dark:text-neutral-300'>
            {description}
          </p>
          <p className='text-xs text-neutral-600 dark:text-neutral-400'>
            {stacksArray?.join(' · ')}
          </p>
          <span className='inline-block text-sm font-medium text-teal-700 underline underline-offset-4 dark:text-teal-400'>
            Read case study
          </span>
        </div>
      </Card>
    </Link>
  );
};

export default ProjectCard;
