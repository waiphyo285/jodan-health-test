import { useEffect, useState } from 'react';

const useDetectOS = () => {
  const [os, setOS] = useState('');

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    if (userAgent.match(/Android/i)) {
      setOS('Android');
    } else if (userAgent.match(/iPhone|iPad|iPod/i)) {
      setOS('iOS');
    } else if (userAgent.match(/Windows|Mac|Linux/i)) {
      setOS('Desktop');
    } else {
      setOS('Unknown');
    }
  }, []);

  return os;
};

export default useDetectOS;
