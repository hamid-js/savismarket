import { RiMenuFill, RiShoppingCartLine } from 'react-icons/ri';
import {  useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import MobileMenu from './menus/MobileMenu';
import HamburgerMenu from './menus/HamburgerMenu';
import Cart from './cart/Cart';
import useClickOutside from '../../hooks/useClickOutside';

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);

  const menuRef = useRef(null);
  const cartRef = useRef(null);
  useClickOutside(menuRef,() =>setIsOpenMenu(false)  )
  useClickOutside(cartRef,() =>setIsOpenCart(false)  )
 
  const handleMenuClick = (event) => {
    event.stopPropagation(); 
    setIsOpenMenu((prev) => !prev);
  };
  const handleCartClick = (event) => {
    event.stopPropagation(); 
    setIsOpenCart((prev) => !prev);
  };
  return (
    <header>
      <div className="fixed z-20 flex w-full  items-center  justify-between bg-black  p-3 text-2xl text-white duration-700 ">
        <div onClick={handleMenuClick}>
          <RiMenuFill />
        </div>
        <NavLink to="/">
          <h1 className="rounded-full   border-t border-indigo-600 px-5 py-1  font-bold capitalize tracking-[.05rem] shadow-md shadow-indigo-500  duration-1000  hover:scale-105 ">
            SavisMarket
          </h1>
        </NavLink>
        <div onClick={handleCartClick} className="relative p-2">
          <span className="absolute right-0 top-0 w-4 rounded-full bg-indigo-500 text-center text-xs   opacity-85">
            1
          </span>
          <RiShoppingCartLine className="text-2xl font-bold" />
        </div>
      </div>
      <div ref={menuRef}> 
        <HamburgerMenu isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} />
      </div>
      <MobileMenu /> 
      <div ref={cartRef}>
      <Cart isOpen={isOpenCart} setIsOpen={setIsOpenCart} />
      </div>
    </header>
  );
}
