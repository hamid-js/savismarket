import { NavLink } from 'react-router-dom';

function Logo() {
  return (
    <div>
      {/* logo in upper 1024px */}
      <div className="hidden lg:block">
        <NavLink to="/">
          <h1 className="rounded-md  bg-black p-2   text-2xl font-bold capitalize tracking-[.05rem] shadow-md  shadow-indigo-500  duration-700 hover:scale-105 ">
            SavisMarket🛒
          </h1>
        </NavLink>
      </div>

      {/* logo in lower 1024px */}
      <div className="block lg:hidden">
        <NavLink to="/">
          <h1 className="rounded-full border-t border-indigo-600  px-2 text-[4.5vw] font-bold  capitalize tracking-[.05rem] shadow-md shadow-indigo-500 duration-700  hover:scale-105  sm:p-2 sm:text-xl ">
            SavisMarket🛒
          </h1>
        </NavLink>
      </div>
    </div>
  );
}

export default Logo;
