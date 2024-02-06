import { useContext, useState } from 'react';
import {
  RiHeartLine,
  RiListCheck3,
  RiSearchLine,
  RiShoppingCartLine,
} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { PostContext } from '../../contexts/PostContext';

const hoverStyle = 'hover:scale-110 z-10';
export default function ProductCard({
  isInAuctions,
  name,
  price,
  firstImage,
  hoverImage,
  details,
  id,
}) {
  const {
    cart,
    setCart,
    setIsOpenCart,
    wishlist,
    setWishlist,
    setCompare,
    compare,
  } = useContext(PostContext);
  //item  is in list ?
  const isInWishlist = wishlist.find((item) => item.id === id);
  const isInCompare = compare.find((item) => item.id === id);
  const isInCart = cart.find((item) => item.id === id);

  function addToCartHandler(event) {
    event.stopPropagation();
    setIsOpenCart(true);
    const newProduct = {
      id,
      name,
      firstImage,
      hoverImage,
      price,
      details,
      orderCount: 1,
    };
    const productToUpdate = cart.find((item) => item.id === id);

    if (productToUpdate) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, orderCount: item.orderCount + 1 } : item,
        ),
      );
    } else {
      setCart((pre) => [...pre, newProduct]);
    }
  }

  const increaseOrderHandler = () => {
    const isInCart = cart.some((item) => item.id === id);

    if (isInCart)
      setCart((prev) =>
        prev
          .map((item) =>
            item.id === id
              ? { ...item, orderCount: Math.max(item.orderCount - 1, 0) }
              : item,
          )
          .filter((item) => item.orderCount > 0),
      );
  };
  function addToWishlistHandler() {
    const newProduct = {
      id,
      name,
      firstImage,
      hoverImage,
      price,
      details,
    };
    const itemInWishlist = wishlist.find((item) => item.id === id);

    if (itemInWishlist) {
      setWishlist((prev) => prev.filter((item) => item.id !== id));
    } else {
      setWishlist((pre) => [...pre, newProduct]);
    }
  }
  function addToCompareHandler() {
    const newProduct = {
      id,
      name,
      firstImage,
      hoverImage,
      price,
      details,
    };

    const productToUpdate = compare.some((item) => item.id === id);
    if (productToUpdate) {
      setCompare((prev) => prev.filter((item) => item.id !== id));
    } else if (compare.length >= 2) {
      alert('maximum 2 item');
    } else {
      setCompare((pre) => [...pre, newProduct]);
    }
  }
  const handleStopPropagation = async (event) => {
    event.stopPropagation();
  };
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`mb-7  w-64  text-white ${isInAuctions ? 'border border-gray-600' : 'border border-gray-600'}`}
    >
      <div
        style={{
          backgroundImage: `url(${isHovered ? hoverImage : firstImage})`,
        }}
        className={`relative h-52 cursor-pointer bg-white   bg-[length:200px_200px] bg-center bg-no-repeat duration-1000 `}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <div
          className="h-6/6 z-10  flex w-full  flex-col items-end justify-center gap-3
         text-lg *:mr-2 *:mt-2 *:flex  *:h-9 *:w-9 *:items-center *:justify-center *:rounded-full *:bg-black *:duration-300  "
        >
          <div onClick={addToCompareHandler} className={hoverStyle}>
            {isInCompare ? (
              <img className="h-5 w-5" src="/images/digital/tik.svg" alt="" />
            ) : (
              <RiListCheck3 />
            )}
          </div>
          <div
            style={{ backgroundColor: `${isInWishlist ? '#4f46e5' : ''}` }}
            onClick={addToWishlistHandler}
            className={hoverStyle}
          >
            <RiHeartLine />
          </div>

          <div onClick={handleStopPropagation} className={hoverStyle}>
            <Link to={`/product/${id}`}>
              <RiSearchLine />
            </Link>
          </div>
        </div>
      </div>
      <div className="mb-3">
        {isInCart ? (
          <div className="flex gap-2 bg-gray-400 ">
            <div
              onClick={addToCartHandler}
              className="m-1 flex h-10 w-full items-center justify-center bg-indigo-600  hover:text-green-500"
            >
              +
            </div>
            <div
              onClick={increaseOrderHandler}
              className="m-1 flex h-10 w-full  items-center justify-center  bg-indigo-600  hover:text-green-500"
            >
              -
            </div>
          </div>
        ) : (
          <div
            onClick={addToCartHandler}
            className="flex h-10 w-full items-center  justify-center gap-3 bg-indigo-600 pb-2  pt-2 hover:text-green-500"
          >
            <span>Add To Cart</span>
            <span>
              +{' '}
              <RiShoppingCartLine className="inline -scale-x-100 py-1 text-3xl " />
            </span>
          </div>
        )}
        {isInAuctions === true ? (
          <div className="flex flex-col  items-center justify-between gap-y-2 pb-2 text-center capitalize">
            <p>Time left</p>
            <div className="flex w-full items-center justify-evenly border-b border-gray-700 pb-1">
              <div>
                175 <div className="text-[10px]  text-gray-400">days</div>
              </div>
              <div>
                13<div className="text-[10px]  text-gray-400">hours</div>
              </div>
              <div>
                44<div className="text-[10px]  text-gray-400">minutes</div>
              </div>
              <div>
                55<div className="text-[10px]  text-gray-400">seconds</div>
              </div>
            </div>

            <p className="cursor-pointer font-semibold duration-700 hover:scale-125">
              {name}
            </p>
            <p className="text-sm font-light duration-700 *:text-lg *:font-semibold hover:scale-125">
              current bid: <span className="text-blue-500">${price}</span>
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-1 pb-2  ">
            <p className="z-10 mt-1 text-lg  font-semibold duration-500 hover:scale-125 ">
              {name}
            </p>
            <p className="text-sm text-gray-300 duration-500 hover:scale-125">
              {details}
            </p>
            <p className="text-xl font-bold tracking-widest text-blue-500 duration-500 hover:scale-125">
              ${price}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
