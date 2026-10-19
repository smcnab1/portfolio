import { useContext } from 'react';
import { BiCommand as CommandIcon } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';

import { CommandPaletteContext } from '@/common/context/CommandPaletteContext';

const SearchBox = () => {
  const { setIsOpen } = useContext(CommandPaletteContext);

  const handleOpenCommandPalette = () => setIsOpen(true);

  return (
    <button
      type='button'
      onClick={handleOpenCommandPalette}
      className='flex w-full items-center gap-3 rounded-lg border-[1.8px] border-neutral-300 bg-neutral-100 px-3 py-1 text-left text-neutral-600 backdrop-blur hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800'
    >
      <FiSearch aria-hidden='true' size={20} />
      <span className='w-full text-sm'>Search</span>
      <span
        aria-hidden='true'
        className='flex items-center gap-0.5 rounded bg-neutral-200 px-1 py-0.5 text-xs dark:bg-neutral-800'
      >
        <CommandIcon className='mt-0.5' /> k
      </span>
    </button>
  );
};

export default SearchBox;
