import {
  RiHeartLine,
  RiHome4Line,
  RiShuffleFill,
  RiStore3Line,
  RiUserLine,
} from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

export default function MenuFooter() {
  const handleLoginClick = (event) => {
    event.stopPropagation();
  };

  const iconStyle = 'text-2xl text-center m-auto md:text-3xl';
  return (
    <div className="fixed bottom-0  z-40 h-[8%] w-full bg-white pb-[12vw] pt-2 text-[4.2vw] text-black  sm:pb-16 sm:text-xl  md:text-2xl ">
      <ul className="flex  items-center justify-evenly  ">
        <li>
          <NavLink onClick={handleLoginClick} to="/login">
            <RiUserLine className={iconStyle} />
            Account
          </NavLink>
        </li>
        <li>
          <NavLink to="/wishlist">
            <RiHeartLine className={iconStyle} />
            wishlist
          </NavLink>
        </li>

        <li className="mx-5">
          <NavLink className="duration-1000 " to="/">
            <RiHome4Line className={`${iconStyle} text-2xl   `} />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="duration-1000 " to="/shop">
            <RiStore3Line className={`${iconStyle} text-2xl  `} />
            shop
          </NavLink>
        </li>

        <li>
          <NavLink to="/compare">
            <RiShuffleFill className={iconStyle} />
            compare
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
