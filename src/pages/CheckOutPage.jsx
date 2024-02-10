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
    <div>
      <div>
        <div className=" my-3 h-3 bg-zinc-700">
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
        <p>your order</p>
        <div>
        <div className=" h-[35vh] overflow-y-scroll border-b border-zinc-700">
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
          <div className="mb-3 flex h-[10vh] items-center justify-between border-b border-zinc-700 p-2 text-xl font-semibold">
            <div>Subtotal:</div>
            <div className="text-indigo-600">${totalPrice}</div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CheckoutPage;
