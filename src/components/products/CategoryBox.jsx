import { Link, useLocation } from 'react-router-dom';

export default function CategoryBox({
  title = '',
  count = 0,
  color = '',
  url = '',
  btnColor = '',
}) {
  const location = useLocation();
  const boxStyle = {
    backgroundImage: `url(${url})`,
    backgroundColor: `${color}`,
  };
  return (
    <div
      style={boxStyle}
      className=" bg lg my-3 flex h-[30vh] w-full flex-col items-start justify-center gap-y-5 bg-blue-500 bg-[url(/images/digital/headphone-1.png)] bg-[length:40vw_40vw] bg-right bg-no-repeat uppercase  duration-700 sm:mx-auto sm:h-[36vh] sm:w-5/6  sm:gap-y-8 sm:bg-[length:35vw_35vw] sm:px-4 md:w-4/6 md:rounded-sm  lg:w-[49%] lg:bg-[length:20vw_20vw] lg:h-[40vh] lg:mt-5"
    >
      <h2 className="ml-5 text-[4vw] font-bold duration-300 hover:scale-125 sm:text-xl md:text-2xl ">
        {title}
      </h2>
      <div className="ml-5 text-[3.5vw] duration-300 hover:scale-125 sm:text-lg md:text-2xl">
        <span className="font-bold ">{count} </span>Products
      </div>
     {location.pathname !== "/shop" && <Link
        style={{ backgroundColor: `${btnColor}` }}
        className="ml-2 rounded-full border-2 px-4 py-1  text-[3vw] duration-300 hover:scale-105 hover:border-green-300  hover:text-green-300 sm:text-lg md:text-2xl"
        to="/shop"
      >
        view all items
      </Link>}
    </div>
  );
}
