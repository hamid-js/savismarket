import {
  RiHeartLine,
  RiListCheck3,
  RiSearchLine,
  RiShoppingCartLine,
} from 'react-icons/ri';

export default function ProductCard({ isInAuctions ,name, price ,firstImage,hoverImage, details , count }) {
  const hoverStyle =
    'hover:scale-125  hover:bg-indigo-700 hover:text-green-500';
  return (
    <div
      className={` mb-3  w-64 text-white ${isInAuctions ? 'border border-gray-600' : 'border border-gray-600'}`}
    >
      <div className={`h-52 cursor-pointer bg-[url(${firstImage})] bg-cover  bg-center bg-no-repeat  duration-500 hover:bg-[url(${hoverImage})]`}>
        <div
          className="flex h-5/6  w-full  flex-col items-end justify-center gap-5 
         text-lg  *:mr-2 *:flex  *:h-9 *:w-9 *:items-center *:justify-center *:rounded-full *:bg-black *:duration-300 "
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
        </div>
        <div className="h-1/6">
          <div
            className={`mt-1 h-full  w-9 rounded-sm bg-blue-500 duration-300 ${hoverStyle}`}
          >
            <RiShoppingCartLine className="-scale-x-100  pr-1  pt-2 text-3xl  " />
          </div>
        </div>
      </div>
      <div className="mt-1 bg-zinc-800">
        {isInAuctions ? (
          <div className="flex  flex-col items-center justify-between gap-y-2 text-center capitalize">
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

            <p className="font-semibold">{name}</p>
            <p className="text-sm font-light *:text-lg *:font-semibold">
              current bid: <span>${price}</span>
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center  ">
            <p className="mt-1 text-lg font-semibold">{name}</p>
            <p className="text-sm text-gray-300">{details}</p>
            <p className="text-xl font-bold tracking-widest text-blue-500">
              ${price}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
