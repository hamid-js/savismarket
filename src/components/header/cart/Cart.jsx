import { useContext } from 'react';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { PostContext } from '../../../PostContext';
// import { PostContext } from '../../../PostContext';
// import { useContext } from 'react';

function Cart({ isOpen, setIsOpen }) {
  const { cart } = useContext(PostContext);
  const {isOpenCart, setIsOpenCart }=useContext(PostContext)


  return (
    <section
      style={{
        transform: `${isOpenCart ? 'translateX(0rem)' : 'translateX(24rem)'}`,
      }}
      className="fixed right-0 z-50 h-svh w-80 overflow-y-hidden bg-indigo-950  text-slate-300 duration-300"
    >
      <div className="flex justify-between border-b  border-zinc-700 px-3 py-1  text-xl font-semibold ">
        <p className=" py-3  capitalize ">Shopping Cart</p>
        <div
          onClick={() => setIsOpenCart(false)}
          className="flex w-16 items-center justify-between text-3xl font-light "
        >
          <span className="mb-1">&times; </span>
          <span className="text-lg font-semibold ">close</span>
        </div>
      </div>

      <div className=" h-48 overflow-y-scroll border-b border-zinc-700">
        {cart && cart.map((product) => (
          <CartItem
            key={product.id}
            id={product.id}
            name={product.name}
            firstImage={product.firstImage}
            hoverImage={product.hoverImage}
            price={product.price}
            details={product.details}
            orderCount={product.orderCount}
          />
        ))}
      </div>
      <div className="flex h-16 items-center justify-between border-b border-zinc-700 p-2 text-xl font-semibold">
        <div>Subtotal:</div>
        <div className="text-indigo-600">$239.00</div>
      </div>
      <div className=" flex flex-col items-stretch justify-evenly p-2">
        <p>
          Add <span className="text-indigo-400 "> $1,265,00 </span> to cart and
          get <span className="font-bold">free shipping!</span>
        </p>
        <div className="mx-1 my-3 h-2 bg-zinc-700">
          <div className="h-full w-3/12 bg-indigo-500"></div>
        </div>
        <Button style={{ backgroundColor: 'black' }}> view cart</Button>

        <Button> checkout</Button>
      </div>
    </section>
  );
}

export default Cart;
