import { useContext } from 'react';
import { PostContext } from '../contexts/PostContext';
import LoginForm from '../components/ui/LoginForm';
import CartItem from '../components/cart/CartItem';

function CheckoutPage() {
  const { cart } = useContext(PostContext);
  const totalPrice =
    cart.length &&
    cart
      .map((item) => item.price * item.orderCount)
      .reduce((a, b) => {
        return a + b;
      });
  return (
    <div className=' py-10 bg-gradient-to-t from-slate-800 pt-40 via-slate-700  via-50% to-slate-900 px-3 '>
      <div className='border-dashed border px-4 py-7 mx-2 '>
      <div className=" text-lg mb-5">
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
        <div className="  h-3 bg-zinc-700">
          <div
            style={{
              width: `${totalPrice < 10000 ? (totalPrice / 10000) * 100 : 100}%`,
            }}
            className="h-full  bg-indigo-500"
          ></div>
        </div>
      </div>


      <div>
      <div>
        <LoginForm
          firstInput="Username or email address"
          secondInput="Password"
          btnText="log in"
          title="Login"
          addText="Lost your password?"
          remember
        />
        <LoginForm
          title="Register"
          firstInput="Username "
          secondInput="email address"
          thirdInput="Password"
          btnText="Register"
        />
      </div>
      </div>

      <div>
        <div className=' text-center py-3 font-semibold text-stone-100 uppercase text-2xl'>your order</div>
        <div className='bg-zinc-700 '>
        <div className="p-5  border-b border-zinc-700">
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
        <div className=" flex h-[10vh] items-center justify-between border-b border-zinc-700 p-5  text-xl font-semibold">
            <div>Subtotal:</div>
            <div className="text-indigo-600">${totalPrice}</div>
          </div>
        </div>
        

      </div>
    </div>
  );
}

export default CheckoutPage;
