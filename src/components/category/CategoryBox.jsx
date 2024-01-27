export default function CategoryBox({
  title = '',
  count = 0,
  color = '',
  url = '',
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
        <h2 className="ml-10 font-bold ">{title}</h2>
        <div className="ml-10">
          <span className="font-bold">{count} </span>Products
        </div>
        <a
          style={{ backgroundColor: `${color}` }}
          className="ml-4 rounded-full   border-2 px-4 py-1"
          href="#ds"
        >
          view all items
        </a>
      </div>
    </div>
  );
}
