/* eslint-disable no-unused-vars */
import { useContext, useRef, useState } from 'react';
import { PostContext } from '../../contexts/PostContext';
import { RiShoppingCartLine } from 'react-icons/ri';
import useClickOutside from '../../hooks/useClickOutside';

function CartIcon() {
  const { cart, setIsOpenCart,setIsOpenMenu } = useContext(PostContext);


  const cartRef = useRef(null);
  useClickOutside(cartRef, () => setIsOpenCart(false));

  const totalCount =
    cart.length &&
    cart
      .map((item) => {
        return item.orderCount;
      })
      .reduce((a, b) => a + b);
  const handleCartClick = (event) => {
    event.stopPropagation();
    setIsOpenCart((prev) => !prev);
    setIsOpenMenu(false);
    
  };
  return (
    <>
      <div onClick={handleCartClick} className="relative p-2">
        <span className="absolute right-0 top-0 w-4 rounded-full bg-indigo-500 text-center text-xs   opacity-85">
          {totalCount}
        </span>
        <RiShoppingCartLine className="text-2xl  sm:text-3xl lg:text-2xl" />
      </div>
     
    </>
  );
}

export default CartIcon;
