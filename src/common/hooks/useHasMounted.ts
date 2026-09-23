import { useSyncExternalStore } from 'react';

const emptySubscribe = () => () => {};

const useHasMounted = () =>
  useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

export default useHasMounted;
