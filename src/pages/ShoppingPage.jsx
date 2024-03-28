import { RiLayoutGridLine, RiLayoutLeftLine } from 'react-icons/ri';
import CategoryBox from '../components/products/CategoryBox';
import ProductCard from '../components/products/ProductCard';
import { allCategoriesData } from '../data';
import { useState } from 'react';

function ShoppingPage() {
  const [small, setSmall] = useState(false);
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
    <div className="bg-[url(/images/bg/bg6.jpg)] bg-contain px-1 pt-14 ">
      <div className="mt-10 flex h-14 items-center justify-between rounded-md  bg-slate-700 px-2 lg:mx-auto lg:mt-20 lg:h-20 lg:w-3/5 lg:px-10">
        <div className=" flex justify-between text-[4.8vw] *:px-3 *:py-2  sm:text-2xl   ">
          <div
            style={{
              backgroundColor: `${small ? '#4f46e5' : '#fff'}`,
              color: `${!small ? '#4f46e5' : '#fff'}`,
            }}
            onClick={() => setSmall(true)}
            className="rounded-l-lg duration-300 "
          >
            <RiLayoutLeftLine />
          </div>
          <div
            style={{
              backgroundColor: `${!small ? '#4f46e5' : '#fff'}`,
              color: `${small ? '#4f46e5' : '#fff'}`,
            }}
            onClick={() => setSmall(false)}
            className="rounded-r-lg duration-300 "
          >
            <RiLayoutGridLine />
          </div>
        </div>
        <div className="text-[4vw] capitalize text-stone-200  sm:text-2xl">
          showing <span className="font-bold">{resultCount}</span> results
        </div>
        <div className="w-[22vw] sm:w-28  ">
          <select
            value={filterBy}
            onChange={handleFilter}
            className="  h-7 w-full rounded-lg  border border-black bg-stone-100 text-center text-black  outline-none *:text-[4vw] sm:h-8 *:sm:text-xl "
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
          className=" mt-5 bg-gradient-to-t from-zinc-950 via-zinc-800 via-50% to-zinc-950 px-1  "
        >
          <div className="py-5 bg-cover bg-[url(/images/bg/bg6.jpg)]">
            <CategoryBox
              title={category.categoryName}
              count={category.products.length}
              url={category.categoryInfo.imageUrl}
              color={category.categoryInfo.color}
              btnColor=""
            />
          </div>
          <div className="flex w-full flex-wrap justify-around gap-1 bg-[url(/images/bg/bg6.jpg)] bg-cover bg-center   ">
            {category.products.map((product) => (
              <div
                style={{ width: `${small ? '100%' : ''}` }}
                key={product.id}
                className="mb-4 "
              >
                <ProductCard
                  small={small}
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
