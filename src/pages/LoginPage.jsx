import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
    const navigate= useNavigate()

    const loginRef = useRef(null);
    useEffect(() => {
    
      const handleClickOutside = (event) => {
        if (loginRef.current && !loginRef.current.contains(event.target)) {
         navigate("/")
        }
      };
      document.addEventListener('click', handleClickOutside);
  
      return () => {
        document.removeEventListener('click', handleClickOutside);
      }; 
    }, [navigate]);
  
  const handleCloseMenu = (e) => {
    if (e.target.tagName.toLowerCase() === 'a') {
        navigate("/")

    }
  };
  return (
    <div ref={loginRef}
      
      className="fixed z-50 right-[10%] top-10  h-[28rem] mx-auto w-4/5 overflow-y-scroll bg-zinc-900 pb-7 duration-700"
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
        className="text-lg capitalize *:border-b *:border-zinc-700 *:p-3 last:*:border-none "
      >
        <li>
          <Link to="/">Home</Link>
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

export default LoginPage;
