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
      toast.success('➕ Your Product decreased')
    }
  };
  const decreaseOrderHandler = (event) => {
    event.stopPropagation();

    if (itemInCart.orderCount > 1){
      setCart((prev) =>
        prev
          .map((item) =>
            item.id === newProduct.id
              ?  { ...item, orderCount: Math.max(item.orderCount - 1, 0) }
            

              : item,
          )
          
      );
      toast.success('➖ Your Product decreased')
    }else{
      handleDeleteProduct(event)
    }
  };

  function handleDeleteProduct(event) {
    event.stopPropagation();
    setCart((prev) => prev.filter((item) => item.id !== newProduct.id));
    toast.success('✖️ Product Successfully Removed')

  }


  return {
    addToCartHandler,
    decreaseOrderHandler,
    increaseOrderHandler,
    handleDeleteProduct,
    itemInCart,
  };
}

export default useCart;
