import {  NavLink } from 'react-router-dom';

function MenuHamburger({ isOpen, setIsOpen }) {
  const handleCloseMenu = (e) => {
    if (e.target.tagName.toLowerCase() === 'a') {
      setIsOpen(false);
    }
  
  };
  const handleStopPropagation= (event) => {
    event.stopPropagation(); 
    setIsOpen(false);
    
  };
  return (
    <div
      style={{
        transform: `${isOpen ? 'translateX(0rem)' : 'translateX(-24rem)'}`,
      }}
      className="fixed  z-50 h-dvh w-[75vw] max-w-96 overflow-y-hidden bg-zinc-900 pb-7 duration-700"
    >
      <div className="flex  justify-between px-3 py-7 text-lg capitalize text-gray-400 ">
        <input
          className="bg-inherit outline-none"
          type="text"
          placeholder="search products "
        />{' '}
        <span>🔍</span>
      </div>
      <ul
        onClick={handleCloseMenu}
        className="text-lg uppercase *:border-b *:border-zinc-700 *:px-3 *:py-5 last:*:border-none  "
      >
        <li>
          <NavLink  to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/shop"> Shopping</NavLink>
        </li>
        <li>
          <NavLink to="/wishlist"> WishList</NavLink>
        </li>
        <li>
          <NavLink to="/compare"> Compare</NavLink>
        </li>
        <li>
          <NavLink onClick={handleStopPropagation} to="/login"> Account</NavLink>
        </li>
        <li>
          <NavLink  onClick={handleStopPropagation} to="/login">Login/Sign Up </NavLink>
        </li>
        <li>
          <NavLink to="/blog"> Blog</NavLink>
        </li>

        <li>
          <NavLink to="/contact"> Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MenuHamburger;
