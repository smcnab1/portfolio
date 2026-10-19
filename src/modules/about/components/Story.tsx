import Link from 'next/link';

import {
  ADDITIONAL_RESPONSIBILITIES,
  EXPERIENCE,
} from '@/common/constant/experience';

const Story = () => (
  <div className='space-y-10'>
    <section className='max-w-3xl space-y-4 leading-relaxed text-neutral-800 dark:text-neutral-300'>
      <p>
        I&apos;m a Senior Lecturer, Registered Paramedic and founder of SimHQ.
        My work connects frontline clinical practice, healthcare simulation,
        education and software development.
      </p>
      <p>
        I use that combination to design useful learning experiences and build
        practical tools for the people running them. Explore my{' '}
        <Link
          href='/projects'
          className='text-teal-700 underline underline-offset-4 dark:text-teal-400'
        >
          selected projects
        </Link>{' '}
        or{' '}
        <Link
          href='/contact'
          className='text-teal-700 underline underline-offset-4 dark:text-teal-400'
        >
          get in touch
        </Link>
        .
      </p>
    </section>

    <section aria-labelledby='experience-heading' className='space-y-5'>
      <div>
        <h2 id='experience-heading' className='text-xl font-semibold'>
          Professional experience
        </h2>
        <p className='mt-2 text-sm text-neutral-600 dark:text-neutral-400'>
          Selected roles. Several were held at the same time.
        </p>
      </div>
      <ol className='space-y-4 border-l border-neutral-300 pl-5 dark:border-neutral-700'>
        {EXPERIENCE.map((role) => (
          <li
            key={`${role.organisation}-${role.title}`}
            className='relative rounded-xl border border-neutral-200 bg-white/60 p-5 dark:border-neutral-800 dark:bg-neutral-900/60'
          >
            <span
              aria-hidden='true'
              className='absolute -left-[1.65rem] top-7 h-3 w-3 rounded-full border-2 border-teal-700 bg-white dark:border-teal-400 dark:bg-neutral-900'
            />
            <div className='flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4'>
              <div>
                <h3 className='font-semibold leading-snug'>{role.title}</h3>
                <p className='text-sm text-neutral-700 dark:text-neutral-300'>
                  {role.organisation}
                </p>
              </div>
              <p className='shrink-0 text-sm text-neutral-600 dark:text-neutral-400'>
                {role.dates}
              </p>
            </div>
            {role.context && (
              <p className='mt-2 text-xs font-medium text-teal-800 dark:text-teal-300'>
                {role.context}
              </p>
            )}
            <ul className='mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300'>
              {role.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>

    <section aria-labelledby='additional-heading' className='space-y-3'>
      <h2 id='additional-heading' className='text-xl font-semibold'>
        Selected additional responsibilities
      </h2>
      <ul className='grid gap-3 sm:grid-cols-3'>
        {ADDITIONAL_RESPONSIBILITIES.map((item) => (
          <li
            key={item}
            className='rounded-lg border border-neutral-200 p-4 text-sm leading-relaxed dark:border-neutral-800'
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  </div>
);

export default Story;
