export default function Inputbox({ title = '', button = '', placeholder = '' }) {
  return (
    <div className=" py-4">
      <form className="p-2">
        {title ? (
          <p className="px-2  py-5 text-xl font-bold capitalize text-gray-200 ">
            {title}
          </p>
        ) : (
          ''
        )}
        <input
          className="w-4/5  rounded-l-full py-[7px] pl-8 shadow-sm shadow-gray-50 outline-none"
          placeholder={placeholder}
          type="text"
        />

        <button className="-m-10 rounded-full  bg-indigo-600 px-7 py-[9px] pt-[8px] ">
          {button}
        </button>
      </form>
    </div>
  );
}
