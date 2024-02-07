import  ProductCard  from './ProductCard';
import { auctions } from '../../data';

export default function Auctions() {
  return (
    <div className="bg-gradient-to-t  from-zinc-950 via-zinc-800 via-50% to-zinc-950 py-10">
      <div></div>
      <h3 className="m-auto my-5 w-2/3 border-b py-5 text-center font-bold text-xl uppercase">
        Latest auctions
      </h3>
      <div className="flex w-full flex-wrap justify-around">
      {auctions.products.map((product) => (
                <ProductCard
                id={product.id}
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  firstImage={product.firstImage}
                  hoverImage={product.hoverImage}
                  details={product.details}
                  isInAuctions
                  expiryTime={product.expiryTime}
                  
                />
              ))}
     
      </div>
    </div>
  );
}
