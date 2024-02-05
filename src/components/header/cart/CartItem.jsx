function CartItem() {
    return (
        <div className="flex items-start justify-between p-2">
          <div className="p-1 ">
            <img
              className="h-16 w-16 "
              src="images/digital/gallery-28.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-between items-start text gap-1">
            <div>beautiful mouse elit</div>
            <div className="flex w-20 items-center justify-center  *:h-7 *:border-2 *:border-r *:border-zinc-600 *:px-2">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <div>
              <span>
                1 <span>&times;</span>
              </span>
              <span className="text-indigo-500"> $239.00</span>
            </div>
          </div>
          <span className="w-1/5 self-start text-right text-2xl">&times;</span>
        </div>
    )
}

export default CartItem
