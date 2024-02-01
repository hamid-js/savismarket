import { RiMenuFill, RiShoppingCartLine } from 'react-icons/ri';
import TopMenu from './TopMenu';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  console.log("Header ~ isOpenMenu:", isOpenMenu) 

  const menuRef = useRef(null);
  useEffect(() => {
  
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpenMenu(false);
      }
    };
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    }; 
  }, []);
  const handleMenuClick = (event) => {
    event.stopPropagation(); // Stop the event propagation to prevent it from reaching the document click listener
    setIsOpenMenu((prev) => !prev);
  };
  return (
    <>
      <header className="fixed z-20 flex w-full  items-center  justify-between bg-black  p-3 text-2xl text-white duration-700 ">
        <div onClick={handleMenuClick} >
          <RiMenuFill />
        </div>
        <h1 className="font-bold  "><Link to="/" >Savismarket</Link> </h1>
        <div className="relative p-2">
          <span className="absolute right-0 top-0 w-4 rounded-full bg-orange-500 text-center text-xs   opacity-85">
            1
          </span>
          <RiShoppingCartLine className="text-2xl font-bold" />
        </div>
      </header>
      <div   ref={menuRef}>
        <TopMenu isOpen={isOpenMenu} setIsOpen={setIsOpenMenu}  />
      </div>
    </>
  );
}