/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import ProductCard from './ProductCard';
import { allCategoriesData } from '../../data';

import CategoryBox from './CategoryBox';

export default function AllCategories() {
  return (
    <div>
      {allCategoriesData.map((category, index) => (
        <div
          key={index}
          className="bg-gradient-to-t from-zinc-950  via-zinc-800 via-50% to-zinc-950 px-3 py-5"
        >
          <CategoryBox
            title={category.categoryName}
            count={category.products.length}
            url={category.categoryInfo.imageUrl}
            color={category.categoryInfo.color}
            btnColor=""
          />
          <div className="flex w-full flex-wrap justify-around bg-gradient-to-t  from-zinc-950 via-zinc-800 via-50% to-zinc-950  ">
            {category.products.map((product, index) => (
              <ProductCard
                id={product.id}
                key={product.id}
                isInAuctions={product.isInAuctions}
                name={product.name}
                price={product.price}
                firstImage={product.firstImage}
                hoverImage={product.hoverImage}
                details={product.details}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
