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
    <div className="bg-gradient-to-t from-zinc-950 via-zinc-800  via-50% to-zinc-950 px-1 pt-14 ">
      <div className="mt-10  flex h-14 items-center justify-between rounded-md bg-slate-700 px-2">
        <div className=" flex justify-between    text-[4.8vw]  *:px-2 *:py-1  sm:text-2xl   ">
          <div className="rounded-l-lg bg-white text-indigo-600">
            <RiLayoutLeftLine />
          </div>
          <div className="rounded-r-lg bg-indigo-600 ">
            <RiLayoutGridLine />
          </div>
        </div>
        <div className="text-[4vw] capitalize text-stone-200  sm:text-2xl">
          showing <span className="font-bold">{resultCount}</span> 0f 27 results
        </div>
        <div className="w-[17vw] sm:w-24  ">
          <select
            value={filterBy}
            onChange={handleFilter}
            className="  h-7 w-full rounded-lg  border border-black bg-stone-100 text-center text-black  outline-none *:text-[4vw] sm:h-10 *:sm:text-xl "
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
