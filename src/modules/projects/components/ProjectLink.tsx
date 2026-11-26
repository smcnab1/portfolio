import Link from 'next/link';
import { ReactNode } from 'react';
import { BsGithub as GithubIcon } from 'react-icons/bs';
import { FiExternalLink as LinkIcon } from 'react-icons/fi';

interface LinkComponentProps {
  url: string;
  text: string;
  icon?: ReactNode;
  title?: string;
}

interface ProjectLinkProps {
  title?: string;
  linkGithub?: string | null;
  linkDemo?: string | null;
  linkDemoLabel?: string;
}

const LinkComponent = ({ url, text, icon, title }: LinkComponentProps) => {
  const eventName = `Click ${text} - Project ${title}`;

  return (
    <Link
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      data-umami-event={eventName}
      className='flex items-center gap-2 rounded font-medium text-neutral-700 hover:text-teal-700 dark:text-neutral-300 dark:hover:text-teal-400'
    >
      {icon}
      <span className='text-[15px] transition-all duration-300 dark:text-teal-500 hover:dark:text-teal-400'>
        {text}
      </span>
    </Link>
  );
};

const ProjectLink = ({
  title,
  linkGithub,
  linkDemo,
  linkDemoLabel = 'Visit website',
}: ProjectLinkProps) => (
  <div className='flex gap-4'>
    {linkGithub && (
      <LinkComponent
        url={linkGithub}
        text='GitHub'
        title={title}
        icon={<GithubIcon size={22} />}
      />
    )}

    {linkGithub && linkDemo && (
      <span className='text-neutral-400 dark:text-neutral-600'>|</span>
    )}

    {linkDemo && (
      <LinkComponent
        url={linkDemo}
        text={linkDemoLabel}
        title={title}
        icon={<LinkIcon size={22} />}
      />
    )}
  </div>
);

export default ProjectLink;
