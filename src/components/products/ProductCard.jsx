import { useState } from 'react';
import {
  RiCheckFill,
  RiHeartFill,
  RiListCheck3,
  RiSearchLine,
  RiShoppingCartLine,
} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useLists from '../../hooks/useLists';
import Timer from '../ui/Timer';

const hoverStyle = 'hover:scale-110 z-10';
export default function ProductCard({
  isInAuctions,
  name,
  price,
  firstImage,
  hoverImage,
  details,
  id,
  expiryTime,
  small,
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

  const dataTime = new Date(expiryTime);
  const {
    addToWishlistHandler,
    addToCompareHandler,
    isInCompare,
    isInWishlist,
  } = useLists(newProduct);

  const {
    addToCartHandler,
    decreaseOrderHandler,
    increaseOrderHandler,
    handleDeleteProduct,

    itemInCart,
  } = useCart(newProduct);

  const handleStopPropagation = async (event) => {
    event.stopPropagation();
  };
  const [isHovered, setIsHovered] = useState(false);

  if (small)
    return (
      <div className="mx-auto  my-1 w-full self-start  rounded-sm bg-indigo-900 duration-700 ">
        <div className="flex h-[26vw]  w-full  items-center justify-between sm:h-36  ">
          <div className="p-2 ">
            <img
              className="sm-w-20 h-[16vw] w-[16vw] bg-white sm:h-24 sm:w-24"
              src={firstImage}
              alt={details}
            />
          </div>
          <div className="text flex flex-col items-start justify-center gap-1 ">
            <div className="text-[4vw] font-semibold capitalize sm:text-lg">
              {name}
            </div>
            <div className="flex items-center justify-center text-[3vw] sm:text-sm ">
              {details}
            </div>
            <div className=" pl-3 text-[4vw] font-bold text-red-700 sm:text-xl ">
              ${price}
            </div>
          </div>

          <section className="flex items-center justify-center gap-x-3  self-stretch">
            <div
              onClick={handleDeleteProduct}
              className="flex flex-col items-center justify-around self-stretch  text-[5vw] *:rounded-sm *:bg-indigo-700 *:p-2 *:px-2 sm:text-lg"
            >
              <div
                style={{
                  backgroundColor: `${isInCompare ? '#4f46e5' : ''}`,
                  color: `${isInCompare ? '#5eead4' : ''}`,
                }}
                onClick={addToCompareHandler}
                className={hoverStyle}
              >
                {isInCompare ? (
                  <RiCheckFill className="text-xl font-bold" />
                ) : (
                  <RiListCheck3 />
                )}
              </div>
              <div
                style={{
                  backgroundColor: `${isInWishlist ? '#4f46e5' : ''}`,
                  color: `${isInWishlist ? '#e11d48' : ''}`,
                }}
                onClick={addToWishlistHandler}
                className={hoverStyle}
              >
                <RiHeartFill />
              </div>
            </div>
            {itemInCart ? (
              <div className="flex  h-full w-[9vw] flex-col items-center justify-center   bg-indigo-600 text-center *:my-auto *:flex *:items-center *:justify-center sm:w-12  ">
                <div
                  onClick={decreaseOrderHandler}
                  className=" flex w-full items-center justify-center border-b  border-indigo-400 text-[4vw] text-xl hover:text-green-500  sm:text-xl"
                >
                  -
                </div>
                <div className="w-full p-1 text-center text-[3.5vw] sm:text-sm">
                  {itemInCart.orderCount}
                </div>
                <div
                  onClick={increaseOrderHandler}
                  className="flex  w-full items-center justify-center border-t border-indigo-400 text-xl  hover:text-green-500"
                >
                  +
                </div>
              </div>
            ) : (
              <div
                onClick={addToCartHandler}
                className="flex w-[9vw] flex-col items-center  justify-center self-stretch bg-indigo-400 px-1 text-[3.5vw] sm:w-12 md:text-[2.8vw] lg:md:text-2xl"
              >
                Add
                <RiShoppingCartLine className=" text-[5vw] md:text-[3.8vw] lg:text-4xl" />
              </div>
            )}
          </section>
        </div>
      </div>
    );

  return (
    <div
      className={`w-[80vw] max-w-80   text-white ${isInAuctions ? 'mb-7 border border-gray-600 ' : 'border border-gray-600'}`}
    >
      <div
        style={{
          backgroundImage: `url(${isHovered ? hoverImage : firstImage})`,
        }}
        className={`relative h-52  cursor-pointer bg-white   bg-[length:200px_200px] bg-center bg-no-repeat duration-1000 `}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <div
          className="h-6/6 z-10  flex w-full  flex-col items-end justify-center gap-3
         text-lg *:mr-2 *:mt-2 *:flex  *:h-9 *:w-9 *:items-center *:justify-center *:rounded-full *:bg-black *:duration-300  "
        >
          <div
            style={{
              backgroundColor: `${isInCompare ? '#4f46e5' : ''}`,
              color: `${isInCompare ? '#5eead4' : ''}`,
            }}
            onClick={addToCompareHandler}
            className={hoverStyle}
          >
            {isInCompare ? (
              <RiCheckFill className="text-4xl font-bold" />
            ) : (
              <RiListCheck3 />
            )}
          </div>
          <div
            style={{
              backgroundColor: `${isInWishlist ? '#4f46e5' : ''}`,
              color: `${isInWishlist ? '#e11d48' : ''}`,
            }}
            onClick={addToWishlistHandler}
            className={hoverStyle}
          >
            <RiHeartFill />
          </div>

          <div onClick={handleStopPropagation} className={hoverStyle}>
            <Link to={`/product/${id}`}>
              <RiSearchLine />
            </Link>
          </div>
        </div>
      </div>
      <div className="mb-3">
        {itemInCart ? (
          <div className="flex items-center justify-center">
            <div className="flex w-full items-center justify-center gap-1 bg-indigo-600  ">
              <div
                onClick={decreaseOrderHandler}
                className=" flex  w-full items-center justify-center  border-r border-indigo-400  pb-2 text-5xl hover:text-green-500"
              >
                -
              </div>
              <div className="p-3 text-xl ">{itemInCart.orderCount}</div>
              <div
                onClick={increaseOrderHandler}
                className=" flex w-full items-center justify-center border-l border-indigo-400 pb-2 text-5xl   hover:text-green-500"
              >
                +
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <div
              onClick={addToCartHandler}
              className="flex h-14 w-full cursor-pointer items-center justify-center gap-3 bg-indigo-600 pb-2  pt-2 font-bold duration-300 *:duration-200 hover:text-teal-400 *:hover:scale-125 *:hover:animate-pulse *:hover:p-2   "
            >
              <span>Add To Cart</span>
              <span>
                +{' '}
                <RiShoppingCartLine className="inline -scale-x-100 py-1 text-3xl " />
              </span>
            </div>
          </div>
        )}
        {isInAuctions === true ? (
          <div className="flex flex-col  items-center justify-between gap-y-2 pb-2 text-center capitalize">
            <p className="mt-2">Time left :</p>

            <Timer expiryTime={dataTime} />

            <p className="cursor-pointer font-semibold duration-700 hover:scale-125">
              {name}
            </p>
            <p className="text-sm font-light duration-700 *:text-lg *:font-semibold hover:scale-125">
              current bid: <span className="text-blue-500">${price}</span>
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-1  ">
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
