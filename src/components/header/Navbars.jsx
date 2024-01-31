import Header from './Header';
import MobileMenu from './MobileMenu';

import { useEffect, useState } from 'react';

function Navbars() {
  const [isVisible, setNavVisibility] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const threshold = 1000;

      setNavVisibility(scrollPosition > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <>{isVisible ? <MobileMenu /> :<Header /> }</>;
}

export default Navbars;
