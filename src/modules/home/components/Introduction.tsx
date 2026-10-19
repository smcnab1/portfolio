import Link from 'next/link';

const Introduction = () => (
  <section className='space-y-5'>
    <p className='text-sm font-medium uppercase tracking-wide text-teal-700 dark:text-teal-400'>
      Healthcare · Education · Software
    </p>
    <h1 className='text-3xl font-semibold leading-tight sm:text-4xl'>
      Hi, I&apos;m Sam McNab.
    </h1>
    <p className='max-w-3xl text-lg leading-relaxed text-neutral-800 dark:text-neutral-300'>
      I&apos;m a Senior Lecturer, Registered Paramedic and founder of SimHQ. I
      combine clinical practice and simulation leadership with software
      development to make healthcare education and its operations work better.
    </p>
    <div className='flex flex-wrap gap-3 pt-1 text-sm font-medium'>
      <Link
        href='/about'
        className='rounded-lg bg-neutral-800 px-4 py-2.5 text-white hover:bg-neutral-700 dark:bg-neutral-200 dark:text-neutral-900 dark:hover:bg-white'
      >
        Explore my experience
      </Link>
      <Link
        href='/projects'
        className='rounded-lg border border-neutral-300 px-4 py-2.5 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800'
      >
        View projects
      </Link>
      <Link
        href='/contact'
        className='rounded-lg border border-neutral-300 px-4 py-2.5 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800'
      >
        Contact me
      </Link>
    </div>
  </section>
);

export default Introduction;
