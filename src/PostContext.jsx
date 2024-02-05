import { createContext, useState } from 'react';
const PostContext = createContext();

function PostProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isOpenCart, setIsOpenCart] = useState(false);

  return (
    <PostContext.Provider
      value={{
        cart,
        setCart,
        isOpenCart,
        setIsOpenCart,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export { PostContext, PostProvider };
