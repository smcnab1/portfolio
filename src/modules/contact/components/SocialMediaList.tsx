import { SOCIAL_MEDIA } from '@/common/constant/menu';

const SocialMediaList = () => {
  return (
    <div className='space-y-5 pb-2'>
      <h3 className='text-lg font-medium'>Professional contact</h3>
      <div className='flex flex-col justify-between gap-3 md:flex-row'>
        {SOCIAL_MEDIA?.map((item) => (
          <a
            className='flex w-full flex-1 items-center justify-center gap-2 rounded-lg border border-neutral-300 px-4 py-3 text-sm font-medium text-neutral-800 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800'
            key={item.title}
            href={item.href}
            target={item.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={
              item.href.startsWith('mailto:')
                ? undefined
                : 'noopener noreferrer'
            }
            data-umami-event={item?.eventName}
          >
            {item?.icon}
            {item?.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaList;
