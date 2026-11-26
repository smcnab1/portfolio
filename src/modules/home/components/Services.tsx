import Link from 'next/link';

import Card from '@/common/components/elements/Card';
import SectionHeading from '@/common/components/elements/SectionHeading';

const Services = () => (
  <section className='space-y-5'>
    <SectionHeading title='Where my work meets' />
    <div className='grid gap-4 sm:grid-cols-3'>
      <Card className='space-y-2 rounded-xl border border-neutral-200 p-5 dark:border-neutral-800'>
        <h3 className='font-semibold'>Clinical practice</h3>
        <p className='text-sm leading-relaxed text-neutral-700 dark:text-neutral-300'>
          Frontline paramedic experience grounds my approach in real clinical
          work.
        </p>
      </Card>
      <Card className='space-y-2 rounded-xl border border-neutral-200 p-5 dark:border-neutral-800'>
        <h3 className='font-semibold'>Simulation & education</h3>
        <p className='text-sm leading-relaxed text-neutral-700 dark:text-neutral-300'>
          I design learning and help teams deliver simulation across healthcare
          programmes.
        </p>
      </Card>
      <Card className='space-y-2 rounded-xl border border-neutral-200 p-5 dark:border-neutral-800'>
        <h3 className='font-semibold'>Software development</h3>
        <p className='text-sm leading-relaxed text-neutral-700 dark:text-neutral-300'>
          I build practical digital tools, including SimHQ, for complex
          operational needs.
        </p>
      </Card>
    </div>
    <p className='text-sm leading-relaxed text-neutral-700 dark:text-neutral-300'>
      See the work behind that approach in my{' '}
      <Link
        href='/projects'
        className='text-teal-700 underline underline-offset-4 dark:text-teal-400'
      >
        project case studies
      </Link>
      .
    </p>
  </section>
);

export default Services;
