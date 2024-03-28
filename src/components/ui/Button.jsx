export default function Button({ children ,style={} }) {
  return (
    <button style={style} className=" hover:text-white duration-300  w-full my-1 bg-indigo-600 px-5 py-3 uppercase">
      {children}
    </button>
  );
}
