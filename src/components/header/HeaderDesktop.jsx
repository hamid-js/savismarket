import { RiHeartLine, RiSearchLine, RiShuffleFill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import CartIcon from '../cart/CartIcon';
import MenuDesktop from './MenuDesktop';

function HeaderDesktop() {
  function stopHandler (e) {
    e.stopPropagation()
  }
  return (
    <div>
      <div className="fixed z-20  hidden  w-full   items-center justify-between   bg-zinc-950  px-10 py-5 text-2xl text-white duration-700 lg:flex">
        <Logo />
        <MenuDesktop />

        <section className="flex flex-row-reverse items-center justify-center gap-3 *:duration-200 hover:*:text-slate-300">
          <CartIcon />

          <div>
            <NavLink to="/wishlist">
              <RiHeartLine />
            </NavLink>
          </div>

          <div>
            <NavLink to='/compare'>
              <RiShuffleFill />
            </NavLink>
          </div>

          <div>
            <NavLink to='/search'>
              <RiSearchLine />
            </NavLink>
          </div>

          <div onClick={stopHandler} className="text-sm font-bold uppercase">
            <NavLink to='/login'>login/register</NavLink>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HeaderDesktop;
