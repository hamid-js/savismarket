import  ProductCard  from './ProductCard';

export default function LaptopsSection() {
  return (
    <div className="bg-gradient-to-t from-zinc-950  via-zinc-800 via-50% to-zinc-950 p-5">
      <div className="mb-2 flex h-48 w-full flex-col items-center justify-center  gap-y-5 bg-gradient-to-tr from-blue-700 via-blue-500 to-blue-700  uppercase">
        <h2 className="font-bold ">phones</h2>
        <div>
          <span>12 </span>Products
        </div>
        <a className="rounded-full bg-cyan-400 px-4 py-1" href="#ds">
          view all items
        </a>
      </div>
      <div className="flex w-full flex-wrap justify-around bg-gradient-to-t  from-zinc-950 via-zinc-800 via-50% to-zinc-950 ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
