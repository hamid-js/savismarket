import Logo from './Logo';
import CartIcon from '../cart/CartIcon';
import HamburgerIcon from './HamburgerIcon';
import FooterMenu from './MenuFooter';

function HeaderMobile() {
  return (
    <div>
      <div className="lg:hidden">
        <div className="fixed z-20 flex w-full  items-center   justify-between bg-black  p-3 text-2xl  text-white duration-700 sm:p-5 ">
          <HamburgerIcon />
          <Logo />
          <CartIcon />
        </div>
        <FooterMenu />
      </div>
    </div>
  );
}

export default HeaderMobile;
