import clsx from 'clsx';

interface MobileMenuButtonProps {
  expandMenu: boolean;
  setExpandMenu: (expand: boolean) => void;
}

const MobileMenuButton = ({
  expandMenu,
  setExpandMenu,
}: MobileMenuButtonProps) => {
  const handleMenuToggle = () => {
    setExpandMenu(!expandMenu);
  };

  const menuSpanData = [{ index: 1 }, { index: 2 }, { index: 3 }];

  return (
    <button
      type='button'
      aria-label={expandMenu ? 'Close navigation menu' : 'Open navigation menu'}
      aria-expanded={expandMenu}
      aria-controls='mobile-navigation'
      className='flex h-8 w-8 flex-col justify-between rounded p-1 lg:hidden'
      onClick={handleMenuToggle}
    >
      {menuSpanData.map((item) => (
        <span
          key={item.index}
          className={clsx(
            'h-[3px] w-full rounded-full bg-neutral-950 transition-transform duration-300 dark:bg-neutral-100',
            expandMenu && item.index === 1 && 'translate-y-[10px] rotate-45',
            expandMenu && item.index === 2 && 'opacity-0',
            expandMenu && item.index === 3 && '-translate-y-[10px] -rotate-45',
          )}
        />
      ))}
    </button>
  );
};

export default MobileMenuButton;
