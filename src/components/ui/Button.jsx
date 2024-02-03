export default function Button({ children ,type="" }) {
  return (
    <button type={type} className=" my-6 bg-indigo-600 px-5 py-3 uppercase">
      {children}
    </button>
  );
}
