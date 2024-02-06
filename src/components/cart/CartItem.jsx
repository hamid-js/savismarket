import { useContext } from 'react';
import { PostContext } from '../../contexts/PostContext';

function CartItem({ id, name, firstImage, price, details, orderCount }) {
  const { setCart, cart } = useContext(PostContext);

  function handleIncreaseOrder() {
    // Check if the product with the given id exists in the cart
    const productToUpdate = cart.find((item) => item.id === id);

    if (productToUpdate) {
      // Update the order count directly for the found product
      setCart((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, orderCount: item.orderCount + 1 } : item,
        ),
      );
    }
  }
   function handleDecreaseOrder(event) {
    event.stopPropagation();
    const productToUpdate = cart.find((item) => item.id === id);

    if (productToUpdate) {
      // If the order count is greater than 1, decrement it; otherwise, remove the product from the cart
      setCart(
        (prev) =>
          prev
            .map((item) =>
              item.id === id
                ? {
                    ...item,
                    orderCount: Math.max(item.orderCount - 1, 0), // Ensure orderCount doesn't go below zero
                  }
                : item,
            )
            .filter((item) => item.orderCount > 0), // Remove products with orderCount zero
      );
    }
  }
  function handleDeleteProduct(event) {
    event.stopPropagation();
    // Remove the product with the specified id from the cart
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div className="flex items-start justify-between p-2">
      <div className="p-1 ">
        <img className="h-16 w-16 bg-white " src={firstImage} alt={details} />
      </div>
      <div className="text flex flex-col items-start justify-between gap-1">
        <div>{name}</div>
        <div className="flex w-20 items-center justify-center  *:h-7 *:border-2 *:border-r *:border-zinc-600 *:px-2">
          <button
            onClick={handleDecreaseOrder}
            className="duration-300 hover:scale-105 hover:text-indigo-500"
          >
            -
          </button>
          <span>{orderCount}</span>
          <button
            className="duration-300 hover:scale-105 hover:text-indigo-500"
            onClick={handleIncreaseOrder}
          >
            +
          </button>
        </div>
        <div>
          <span>
            {orderCount} <span>&times;</span>
          </span>
          <span className="text-indigo-500"> ${price}</span>
        </div>
      </div>
      <span
        onClick={handleDeleteProduct}
        className="w-1/5 self-start text-right text-2xl"
      >
        &times;
      </span>
    </div>
  );
}

export default CartItem;
