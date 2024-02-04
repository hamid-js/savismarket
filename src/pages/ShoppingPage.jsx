import CategoryBox from "../components/products/CategoryBox";
import ProductCard from "../components/products/ProductCard";
import { allCategoriesData } from "../data";

function ShoppingPage() {
    return (
        <div className="pt-16" >
        {allCategoriesData.map((category, index) => {
          const {  imageUrl, color } = category.categoryInfo;
          const count = category.products.length;
  
          return (
            <div
              key={index}
              className="bg-gradient-to-t from-zinc-950  via-zinc-800 via-50% to-zinc-950 px-3 py-5"
            >
              <CategoryBox
                title={category.categoryName}
                count={count}
                url={imageUrl}
                color={color}
                btnColor=""
              />
              <div className="flex w-full flex-wrap justify-around bg-gradient-to-t  from-zinc-950 via-zinc-800 via-50% to-zinc-950  ">
                {category.products.map((product, index) => (
                  <ProductCard
                    key={index}
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
          );
        })}
      </div>
    )
}

export default ShoppingPage
