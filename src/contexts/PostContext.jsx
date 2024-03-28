import { createContext, useState } from 'react';
const PostContext = createContext();

function PostProvider({ children }) {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [compare, setCompare] = useState([]);

  return (
    <PostContext.Provider
      value={{
        isOpenCart,
        setIsOpenCart,
        isOpenMenu,
        setIsOpenMenu,
        cart,
        setCart,
        wishlist,
        setWishlist,
        compare,
        setCompare,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export { PostContext, PostProvider };
