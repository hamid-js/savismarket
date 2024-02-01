import { Link } from "react-router-dom";

function TopMenu({ isOpen }) {
  return (
    <div
      style={{
        transform: `${isOpen ? 'translateX(0rem)' : 'translateX(-24rem)'}`,
      }}
      className="fixed z-50 h-svh w-72 pb-7 overflow-y-scroll bg-zinc-900 duration-700"
    >
      <div className="flex  justify-between px-3 py-7 text-lg capitalize text-gray-400 ">
        <input
          className="bg-inherit outline-none"
          type="text"
          placeholder="search products "
        />{' '}
        <span>🔍</span>
      </div>
      <ul className="text-lg capitalize *:border-b *:border-zinc-700 *:p-3 last:*:border-none ">
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/shopping"> Shopping</Link>
        </li>
        <li>
          <Link to="/wishlist"> WishList</Link>
        </li>
        <li>
          <Link to="/compare"> Compare</Link>
        </li>
        <li>
          <Link to="/login"> Account</Link>
        </li>
        <li>
          <Link to="/login">Login/Sign Up </Link>
        </li>
        <li>
          <Link to="/blog"> Blog</Link>
        </li>

        <li>
          <Link to="/contact"> Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default TopMenu;
