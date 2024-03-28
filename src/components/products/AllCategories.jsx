/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import ProductCard from './ProductCard';
import { allCategoriesData } from '../../data';

import CategoryBox from './CategoryBox';

export default function AllCategories() {
  return (
    <div className='lg:flex lg:flex-wrap lg:items-center lg:justify-evenly bg-gradient-to-t    from-zinc-950  via-zinc-800 via-50% to-zinc-950 px-3 py-1'>
      {allCategoriesData.map((category, index) => (
        
          <CategoryBox
           key={index}
          
            title={category.categoryName}
            count={category.products.length}
            url={category.categoryInfo.imageUrl}
            color={category.categoryInfo.color}
            btnColor=""
          />
         
       
      ))}
    </div>
  );
}
