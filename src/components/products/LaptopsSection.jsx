/* eslint-disable react/jsx-key */
import ProductCard from './ProductCard';
import { allCategoriesData } from '../../data';

import CategoryBox from './CategoryBox';

export default function LaptopsSection({ categoryObjects }) {
  console.log(categoryObjects);
  return (
    <div>
      {allCategoriesData.map((category, index) => {
        const { title, imageUrl, color } = category.categoryInfo;
        const count = category.products.reduce(
          (sum, product) => sum + product.count,
          0,
        );

        return (
          <div
            key={index}
            className="bg-gradient-to-t from-zinc-950  via-zinc-800 via-50% to-zinc-950 px-3 py-5"
          >
            <CategoryBox
              title={title}
              count={count}
              url={imageUrl}
              color={color}
              btnColor=""
            />

            {category.products.map((product) => (
              <div
                key={product.id}
                className="flex w-full flex-wrap justify-around bg-gradient-to-t  from-zinc-950 via-zinc-800 via-50% to-zinc-950 py-5 "
              >
                <ProductCard
                  name={product.name}
                  price={product.price}
                  firstImage={product.firstImage}
                  hoverImage={product.hoverImage}
                  details={product.details}
                />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
