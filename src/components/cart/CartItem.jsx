import useCart from '../../hooks/useCart';

function CartItem({
  id,
  name,
  firstImage,
  price,
  details,
  orderCount,
  hoverImage,
}) {

  const newProduct = {
    id,
    name,
    firstImage,
    hoverImage,
    price,
    details,
    orderCount: 1,
  };

  const {
    
    decreaseOrderHandler,
    increaseOrderHandler,
    handleDeleteProduct
  } = useCart(newProduct);

  

    
 
  return (
    <div className="flex items-start justify-between p-2">
      <div className="p-1 ">
        <img className="h-16 w-16 bg-white " src={firstImage} alt={details} />
      </div>
      <div className="text flex flex-col items-start justify-between gap-1">
        <div>{name}</div>
        <div className="flex w-20 items-center justify-center  *:h-7 *:border-2 *:border-r *:border-zinc-600 *:px-2">
          <button
            onClick={decreaseOrderHandler}
            className="duration-300 hover:scale-105 hover:text-indigo-500"
          >
            -
          </button>
          <span>{orderCount}</span>
          <button
            className="duration-300 hover:scale-105 hover:text-indigo-500"
            onClick={increaseOrderHandler}
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
