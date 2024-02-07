import { useContext } from 'react';
import { PostContext } from '../contexts/PostContext';
import toast from 'react-hot-toast';

function useCart(newProduct) {
  const { cart, setCart, setIsOpenCart } = useContext(PostContext);
  const itemInCart = cart.find((item) => item.id === newProduct.id);

  function addToCartHandler(event) {
    event.stopPropagation();
    setIsOpenCart(true);

    if (!itemInCart) {
      setCart((pre) => [...pre, newProduct]);
      toast.success('Successfully Added To Cart');
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
      toast('Your Product decreased',{icon:"✅➕"})
    }
  };
  const decreaseOrderHandler = (event) => {
    event.stopPropagation();

    if (itemInCart)
      setCart((prev) =>
        prev
          .map((item) =>
            item.id === newProduct.id
              ?  { ...item, orderCount: Math.max(item.orderCount - 1, 0) }
            

              : item,
          )
          .filter((item) => item.orderCount > 0),
      );
      toast('Your Product decreased',{icon:"✅➖"})
  };

  return {
    addToCartHandler,
    decreaseOrderHandler,
    increaseOrderHandler,
    itemInCart,
  };
}

export default useCart;
