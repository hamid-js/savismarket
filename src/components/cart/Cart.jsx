import { useContext } from 'react';
import Button from '../ui/Button';
import CartItem from './CartItem';
import { PostContext } from '../../contexts/PostContext';
import { MdOutlineRemoveShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart } = useContext(PostContext);
  const { isOpenCart, setIsOpenCart } = useContext(PostContext);
  const totalPrice =
    cart.length &&
    cart
      .map((item) => item.price * item.orderCount)
      .reduce((a, b) => {
        return a + b;
      });

  return (
    <section
      style={{
        transform: `${isOpenCart ? 'translateX(0%)' : 'translateX(100%)'}`,
      }}
      className="top fixed right-0 z-50 h-dvh w-[75vw] max-w-96 overflow-y-hidden rounded-sm bg-slate-800  text-slate-300 duration-300"
    >
      <div className="flex justify-between shadow-sm mb-1 shadow-slate-400 border-bborder-zinc-700 px-3 py-1 text-[4.5vw] font-semibold sm:text-2xl ">
        <p className=" py-3  capitalize ">Shopping Cart</p>
        <div
          onClick={() => setIsOpenCart(false)}
          className="flex w-16 items-center justify-between text-3xl font-light "
        >
          <span className="mb-1">&times; </span>
          <span className="text-lg font-semibold ">close</span>
        </div>
      </div>
      {!cart.length ? (
        <div className="flex h-2/3 flex-col items-center justify-center gap-5 text-[4vw] sm:text-xl font-bold">
          <MdOutlineRemoveShoppingCart className="text-9xl text-zinc-900" />

          <p>No Products in the Cart.</p>
          <div>
            <Link onClick={() => setIsOpenCart(false)} to="/shop">
              <Button>return to shop</Button>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className=" h-[45dvh] overflow-y-scroll border-b border-zinc-700">
            {cart &&
              cart.map((product) => (
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
          <div className='absolute bottom-0 w-full'>
          <div className="mb-3 flex h-12 items-center justify-between border-b border-zinc-700 p-3 text-xl font-semibold">
            <div>Subtotal:</div>
            <div className="text-indigo-600">${totalPrice}</div>
          </div>
       
            <div className=" flex h-auto flex-col justify-center  gap-2  px-[3vw]">
              <div className=" text-[4.5vw] sm:text-xl">
                {totalPrice > 10000 ? (
                  <p>
                    Your order qualifies for
                    <span className="font-bold"> free shipping! </span>
                  </p>
                ) : (
                  <p>
                    Add
                    <span className="text-indigo-400 ">
                      {' '}
                      ${10000 - totalPrice}{' '}
                    </span>
                    to cart and get
                    <span className="font-bold"> free shipping! </span>
                  </p>
                )}
              </div>
              <div>
              <div className=" my-3 h-3 bg-zinc-700">
                <div
                  style={{
                    width: `${totalPrice < 10000 ? (totalPrice / 10000) * 100 : 100}%`,
                  }}
                  className="h-full  bg-indigo-500"
                ></div>
              </div>
             <div> {totalPrice < 10000 ? (totalPrice / 10000) * 100 : 100}%</div>
             </div>
              <div className="flex flex-col ">
                <Button style={{ backgroundColor: 'black' }}> view cart</Button>

                <Link onClick={() => setIsOpenCart(false)} to={'/checkout'}>
                
                  <Button>checkout</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;
