export default function Button({ children ,style={} }) {
  return (
    <button style={style} className=" mt-1 bg-indigo-600 px-5 py-3 uppercase">
      {children}
    </button>
  );
}
