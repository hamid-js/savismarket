import { Link } from "react-router-dom";

export default function CategoryBox({
  title = '',
  count = 0,
  color = '',
  url = '',
  btnColor =""
}) {
  const boxStyle = {
    backgroundImage: `url(${url})`,
    backgroundColor: `${color}`,
  };
  return (
    <div>
      <div
        style={boxStyle}
        className={`my-3  flex h-[25vh] w-full flex-col items-start justify-center gap-y-5  bg-blue-500 bg-[url(/images/digital/headphone-1.png)] sm:bg-contain bg-[length:40vw_40vw]  bg bg-right bg-no-repeat uppercase`}
      >
        <h2 className="ml-5 font-bold duration-300 hover:scale-125 text-[4vw] sm:text-xl ">{title}</h2>
        <div className="ml-5 sm:text-lg duration-300 hover:scale-125 text-[3.5vw]">
          <span className="font-bold " >{count} </span>Products
        </div>
        <Link
          style={{ backgroundColor: `${btnColor}` }}
          className="ml-2 text-[3vw] sm:text-lg duration-300 hover:scale-105  hover:text-green-300 hover:border-green-300 rounded-full   border-2 px-4 py-1"
          to="/shop"
        >
          view all items
        </Link>
      
      </div>
    </div>
  );
}
