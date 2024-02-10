/* eslint-disable no-unused-vars */
import { RiLayoutGridLine, RiLayoutLeftLine } from 'react-icons/ri';
import CategoryBox from '../components/products/CategoryBox';
import ProductCard from '../components/products/ProductCard';
import { allCategoriesData } from '../data';
import { useState } from 'react';

function ShoppingPage() {
  const [filterBy, setFilterBy] = useState('all');
  let filterdItems;
  if (filterBy === 'all') filterdItems = allCategoriesData;
  if (filterBy !== 'all')
    filterdItems = allCategoriesData.filter(
      (category) => category.categoryName === filterBy,
    );
  const resultCount = filterdItems
    .map((category) => category.products.length)
    .reduce((a, b) => a + b);

  function handleFilter(e) {
    setFilterBy(e.target.value);
  }

  return (
    <div className="bg-gradient-to-t from-zinc-950 via-zinc-800  via-50% to-zinc-950 px-3 pt-14 ">
      <div className="mt-10  flex h-20 items-center rounded-sm justify-around bg-slate-700">
        <div className=" flex justify-between  rounded-full   text-[4.8vw]  sm:text-2xl *:px-3  *:py-2  ">
          <div className="rounded-l-full bg-white text-indigo-600">
            <RiLayoutLeftLine />
          </div>
          <div className="rounded-r-full bg-indigo-600 ">
          <RiLayoutGridLine />
            
          </div>
        </div>
        <div className="text-[3.2vw] sm:text-2xl capitalize  text-stone-200">
          showing <span className="font-bold">{resultCount}</span> 0f 27 results
        </div>
        <div className='w-1/4'>
          <select
            value={filterBy}
            onChange={handleFilter}
            className="  w-3/4 h-[7vw] sm:h-10 sm:w-1/2 rounded-md border bg-stone-100 border-black  text-center text-black outline-none *:text-[2.5vw] *:sm:text-xl "
          >
            <option value="all">All</option>
            <option value="phones">Phone</option>
            <option value="laptops">Laptop</option>
            <option value="watches">Watch</option>
            <option value="computers">Computer</option>
            <option value="headphones">Headphon</option>
          </select>
        </div>
      </div>
      {filterdItems.map((category, index) => (
        <div
          key={index}
          className=" bg-gradient-to-t from-zinc-950  via-zinc-800 via-50% to-zinc-950 px-3 "
        >
          <CategoryBox
            title={category.categoryName}
            count={category.products.length}
            url={category.categoryInfo.imageUrl}
            color={category.categoryInfo.color}
            btnColor=""
          />
          <div className="flex w-full flex-wrap justify-around gap-1 bg-[url(/images/bg/bg6.jpg)] bg-cover bg-center   ">
            {category.products.map((product) => (
              <div key={product.id} className="mb-4">
                <ProductCard
                  id={product.id}
                  isInAuctions={product.isInAuctions}
                  name={product.name}
                  price={product.price}
                  firstImage={product.firstImage}
                  hoverImage={product.hoverImage}
                  details={product.details}
                  fullSizeItems={false}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShoppingPage;
