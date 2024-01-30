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
        className={`my-3 flex h-48 w-full flex-col items-start justify-center gap-y-5  bg-blue-500 bg-[url(/images/digital/headphone-1.png)] bg-contain bg-right bg-no-repeat uppercase`}
      >
        <h2 className="ml-10 font-bold duration-300 hover:scale-125 ">{title}</h2>
        <div className="ml-10 duration-300 hover:scale-125">
          <span className="font-bold">{count} </span>Products
        </div>
        <a
          style={{ backgroundColor: `${btnColor}` }}
          className="ml-4 duration-300 hover:scale-125 rounded-full   border-2 px-4 py-1"
          href="#ds"
        >
          view all items
        </a>
      
      </div>
    </div>
  );
}
