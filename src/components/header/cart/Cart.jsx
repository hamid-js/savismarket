
function Cart({ isOpen, setIsOpen }) {
 
  
  return (
    <div
      style={{
        transform: `${isOpen ? 'translateX(0rem)' : 'translateX(24rem)'}`,
      }}
      className="fixed right-0 z-50 h-svh w-72 overflow-y-scroll bg-zinc-900 pb-7 duration-700"
    >
      <div className="flex  justify-between px-3 py-7 text-lg capitalize text-gray-400 ">
        {/* <input
          className="bg-inherit outline-none"
          type="text"
          placeholder="search products "
        />
        <span>🔍</span> */}
      </div>
    
    </div>
  );
}

export default Cart;
