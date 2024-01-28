import ProductCard from './ProductCard';

import { laptops } from '../../data';
import CategoryBox from '../category/CategoryBox';

export default function LaptopsSection() {
  const category = laptops.length > 0 ? laptops[0].category : ' ';
  const count = laptops.length;
  return (
    <div className="bg-gradient-to-t from-zinc-950  via-zinc-800 via-50% to-zinc-950 p-5">
    <CategoryBox
        title={category}
        count={count}
        url="/images/digital/laptop-1.png"
        color="indigo"
        btnColor=''
      />
      {/* <div className="mb-2 flex h-48 w-full flex-col items-center justify-center  gap-y-5 bg-gradient-to-tr from-blue-700 via-blue-500 to-blue-700  uppercase">
        <h2 className="font-bold ">{category}</h2>
        <div>
          <span> {count} </span>Products
        </div>
        <a className="rounded-full bg-cyan-400 px-4 py-1" href="#ds">
          view all items
        </a>
      </div> */}
      <div className="flex w-full flex-wrap justify-around bg-gradient-to-t  from-zinc-950 via-zinc-800 via-50% to-zinc-950 ">
        {laptops.map((laptop) => (
          <ProductCard
            key={laptop.id}
            name={laptop.name}
            price={laptop.price}
            firstImage={laptop.firstImage}
            hoverImage={laptop.hoverImage}
            details={laptop.details}
          />
        ))}
      </div>
    </div>
  );
}
