import { useSyncExternalStore } from 'react';

const mediaQuery = '(max-width: 1023px)';

const subscribe = (onChange: () => void) => {
  const query = window.matchMedia(mediaQuery);
  query.addEventListener('change', onChange);
  return () => query.removeEventListener('change', onChange);
};

const getSnapshot = () => window.matchMedia(mediaQuery).matches;

// Match the server render for hydration, then update to the viewport value.
const useIsMobile = () =>
  useSyncExternalStore(subscribe, getSnapshot, () => false);

export default useIsMobile;
