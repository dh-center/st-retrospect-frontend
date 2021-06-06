import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

interface MediaConfig {
  isXs?: boolean;
  isSm?: boolean;
  isMd?: boolean;
  isLg?: boolean;
}

const getDeviceConfig = (width: number): MediaConfig => {
  if (width < 375) {
    return { isXs: true };
  } else if (width >= 375 && width < 768) {
    return { isSm: true };
  } else if (width >= 768 && width < 880) {
    return { isMd: true };
  } else {
    return { isLg: true };
  }
};

const useBreakpoint = (): MediaConfig => {
  const [brkPnt, setBrkPnt] = useState(() => getDeviceConfig(window.innerWidth));

  useEffect(() => {
    const calcInnerWidth = throttle(function () {
      setBrkPnt(getDeviceConfig(window.innerWidth));
    }, 200);

    window.addEventListener('resize', calcInnerWidth);

    return () => window.removeEventListener('resize', calcInnerWidth);
  }, []);

  return brkPnt;
};

export default useBreakpoint;
