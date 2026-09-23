import { useWindowSize } from 'usehooks-ts';

const useIsMobile = () => {
  const { width } = useWindowSize();

  return width < 821;
};

export default useIsMobile;
