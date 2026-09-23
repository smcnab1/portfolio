const Introduction = () => {
  return (
    <section className='bg-cover bg-no-repeat '>
      <div className='space-y-3'>
        <div className='flex gap-2  text-2xl font-medium lg:text-3xl'>
          <h1>Hi, I&apos;m Sam</h1>{' '}
          <div className='ml-1 animate-waving-hand'>👋</div>
        </div>
      </div>

      <p className='mt-6 leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose'>
        I&apos;m a Senior Lecturer, Registered Paramedic and specialist in
        Healthcare Simulation & Immersive Technologies.
      </p>
    </section>
  );
};

export default Introduction;
