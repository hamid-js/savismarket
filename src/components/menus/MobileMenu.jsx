import {
  RiBarChartBoxLine,
  RiHeartLine,
  RiStore3Line,
  RiUserLine,
} from 'react-icons/ri';
import {  NavLink } from 'react-router-dom';

export default function MobileMenu() {


  const handleLoginClick = (event) => {
    event.stopPropagation(); // Stop the event propagation to prevent it from reaching the document click listener
    
  };

  const iconStyle = 'text-2xl text-center m-auto';
  return (
    <div className="fixed bottom-0 z-40 h-14 w-full bg-white pt-2  text-sm text-black ">
      <ul className="flex  items-center justify-evenly  ">
        <li>
          <NavLink className="duration-1000" to="/shopping">
            <RiStore3Line className={iconStyle} />
            shop
          </NavLink>
        </li>

        <li>
          <NavLink to="/wishlist">
            <RiHeartLine className={iconStyle} />
            wishlist
          </NavLink>
        </li>

        <li>
          <NavLink onClick={handleLoginClick} to="/login">
            <RiUserLine className={iconStyle} />
            my account
          </NavLink>
        </li>

        <li>
          <NavLink to="/compare">
            <RiBarChartBoxLine className={iconStyle} />
            compare
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
