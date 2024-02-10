import {
  RiArticleLine,
  RiHeartLine,
  RiShuffleFill,
  RiStore3Line,
  RiUserLine,
} from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

export default function MobileMenu() {
  const handleLoginClick = (event) => {
    event.stopPropagation();
  };

  const iconStyle = 'text-2xl text-center m-auto ';
  return (
    <div className="fixed  bottom-0 z-40 h-[10%] w-full bg-white pt-2 pb-[12vw] sm:pb-16  text-[4.2vw] sm:text-xl text-black ">
      <ul className="flex  items-center justify-evenly  ">
        <li>
          <NavLink onClick={handleLoginClick} to="/login">
            <RiUserLine className={iconStyle} />
            my account
          </NavLink>
        </li>
        <li>
          <NavLink to="/wishlist">
            <RiHeartLine className={iconStyle} />
            wishlist
          </NavLink>
        </li>
      
        <li>
          <NavLink className="duration-1000 " to="/shop">
            <RiStore3Line className={`${iconStyle} text-2xl  ` } />
            shop
          </NavLink>
        </li>
      
        <li>
          <NavLink to="/compare">
            <RiShuffleFill className={iconStyle} />
            compare
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog">
            <RiArticleLine   className={iconStyle} />
            blog
          </NavLink>
        </li>

       
      </ul>
    </div>
  );
}
