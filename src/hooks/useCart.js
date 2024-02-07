import { useContext } from 'react';
import { PostContext } from '../contexts/PostContext';

function useCart(newProduct) {
  const { cart, setCart, setIsOpenCart } = useContext(PostContext);
  const itemInCart = cart.find((item) => item.id === newProduct.id);
  function addToCartHandler(event) {
    event.stopPropagation();
    setIsOpenCart(true);

    if (!itemInCart) {
      setCart((pre) => [...pre, newProduct]);
    } else {
      return;
    }
  }

  const increaseOrderHandler = () => {
    if (itemInCart) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === newProduct.id
            ? { ...item, orderCount: item.orderCount + 1 }
            : item,
        ),
      );
    }
  };
  const decreaseOrderHandler = (event) => {
    event.stopPropagation();

    if (itemInCart)
      setCart((prev) =>
        prev
          .map((item) =>
            item.id === newProduct.id
              ? { ...item, orderCount: Math.max(item.orderCount - 1, 0) }
              : item,
          )
          .filter((item) => item.orderCount > 0),
      );
  };

  return {
    addToCartHandler,
    decreaseOrderHandler,
    increaseOrderHandler,
    itemInCart,
  };
}

export default useCart;
