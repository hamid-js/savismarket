function TopMenu({ isOpen }) {
  return (
    <div
      style={{
        transform: `${isOpen ? 'translateX(0rem)' : 'translateX(-24rem)'}`,
      }}
      className="fixed z-50 h-svh w-72 pb-7 overflow-y-scroll bg-zinc-900 duration-700"
    >
      <div className="flex  justify-between px-3 py-7 text-lg capitalize text-gray-400 ">
        <input
          className="bg-inherit outline-none"
          type="text"
          placeholder="search products "
        />{' '}
        <span>🔍</span>
      </div>
      <ul className="text-lg capitalize *:border-b *:border-zinc-700 *:p-3 last:*:border-none ">
        <li>
          <a href="#dsdsacc"> Home</a>
        </li>
        <li>
          <a href="#dsdsacc"> Shopping</a>
        </li>
        <li>
          <a href="#dsdsacc"> WishList</a>
        </li>
        <li>
          <a href="#dsdsacc"> Compare</a>
        </li>
        <li>
          <a href="#dsdsacc"> Account</a>
        </li>
        <li>
          <a href="#dsdsacc">Products </a>
        </li>
        <li>
          <a href="#dsdsacc"> Blog</a>
        </li>

        <li>
          <a href="#dsdsacc"> Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default TopMenu;
