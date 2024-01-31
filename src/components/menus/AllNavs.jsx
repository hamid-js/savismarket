import Header from './Header';
import MobileMenu from './MobileMenu';

import { useEffect, useState } from 'react';

function AllNavs() {
  const [isVisible, setNavVisibility] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const threshold = 700;

      setNavVisibility(scrollPosition < threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <> <Header isVisible={isVisible} />  {!isVisible && <MobileMenu />}</>;
}

export default AllNavs;
