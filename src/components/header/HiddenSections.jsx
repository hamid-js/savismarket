import { useContext, useRef } from 'react';
import Cart from '../cart/Cart';
import HamburgerMenu from './MenuHamburger';
import useClickOutside from '../../hooks/useClickOutside';
import { PostContext } from '../../contexts/PostContext';

function HiddenSections() {
  const { setIsOpenMenu, isOpenMenu } = useContext(PostContext);

  const menuRef = useRef(null);
  const cartRef = useRef(null);
  useClickOutside(menuRef, () => setIsOpenMenu(false));
  useClickOutside(cartRef, () => setIsOpenCart(false));
  const { setIsOpenCart } = useContext(PostContext);

  return (
    <div>
      <div ref={menuRef}>
        <HamburgerMenu isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} />
      </div>

      <div ref={cartRef}>
        <Cart />
      </div>
    </div>
  );
}

export default HiddenSections;
