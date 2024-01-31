import { useState } from 'react';
import {
  RiHeartLine,
  RiListCheck3,
  RiSearchLine,
  RiShoppingCartLine,
} from 'react-icons/ri';

export default function ProductCard({
  isInAuctions,
  name,
  price,
  firstImage,
  hoverImage,
  details,
  count,
}) {
  const [isHovered, setIsHovered] = useState(false);
  console.log('isHovered:', isHovered);

  const hoverStyle =
    'hover:scale-125 z-10 hover:bg-indigo-700 hover:text-green-500';

  return (
    <div
      className={` mb-8  w-64  text-white ${isInAuctions ? 'border border-gray-600' : 'border border-gray-600'}`}
    >
      <div
        style={{
          backgroundImage: `url(${isHovered ? hoverImage : firstImage})`,
        }}
        className={`relative h-52 cursor-pointer bg-white   bg-[length:200px_200px] bg-center bg-no-repeat duration-1000 `}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        {/* <img
          src={isHovered ? hoverImage : firstImage}
          alt=""
          className={`absolute h-full w-full duration-500 transition-all  `}  
        /> */}
        <div
          className="h-6/6 z-10  flex w-full  flex-col items-end justify-center gap-3
         text-lg *:mr-2 *:mt-2 *:flex  *:h-9 *:w-9 *:items-center *:justify-center *:rounded-full *:bg-black *:duration-300  "
        >
          <div className={hoverStyle}>
            <RiHeartLine />
          </div>
          <div className={hoverStyle}>
            <RiSearchLine />
          </div>
          <div className={hoverStyle}>
            <RiListCheck3 />
          </div>
          <div
            style={{
              backgroundColor: 'rgb(79 70 229 / var(--tw-bg-opacity))',
              borderRadius: '1px',
              width: '2.1rem',
              height: '2.3rem',
            }}
            className={` mt-2 self-start  bg-indigo-600 pb-1 ${hoverStyle}`}
          >
            <RiShoppingCartLine className="-scale-x-100 pt-2 text-3xl  " />
          </div>
        </div>
        <div className="h-1/6">
          <div></div>
        </div>
      </div>
      <div className="mt-1">
        {isInAuctions === true ? (
          <div className="flex pb-2  flex-col items-center justify-between gap-y-2 text-center capitalize">
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

            <p className="duration-700 hover:scale-125 cursor-pointer font-semibold">{name}</p>
            <p className="text-sm duration-700 hover:scale-125 font-light *:text-lg *:font-semibold">
              current bid: <span className='text-blue-500'>${price}</span>
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-1 pb-2  ">
            <p className="mt-1 text-lg font-semibold  duration-500 z-10 hover:scale-125 ">
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
