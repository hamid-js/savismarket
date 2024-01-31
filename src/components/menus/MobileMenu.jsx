import {
  RiBarChartBoxLine,
  RiHeartLine,
  RiStore3Line,
  RiUserLine,
} from 'react-icons/ri';

export default function MobileMenu() {
  const iconStyle = 'text-2xl text-center m-auto';
  return (
    <div className="fixed bottom-0 z-40 h-14 w-full bg-white pt-2  text-sm text-black ">
      <ul className="flex  items-center justify-evenly ">
        <li>
          <a href="#ff">
            <RiStore3Line className={iconStyle} />
            shop
          </a>
        </li>

        <li>
          <a href="#ff">
            <RiHeartLine className={iconStyle} />
            wishlist
          </a>
        </li>

        <li>
          <a href="#ff">
            <RiUserLine className={iconStyle} />
            my account
          </a>
        </li>

        <li>
          <a href="#ff">
            <RiBarChartBoxLine className={iconStyle} />
            compare
          </a>
        </li>
      </ul>
    </div>
  );
}
