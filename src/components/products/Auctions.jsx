import  ProductCard  from './ProductCard';

export default function Auctions() {
  return (
    <div className="bg-gradient-to-t  from-zinc-950 via-zinc-800 via-50% to-zinc-950 py-10">
      <div></div>
      <h4 className="m-auto my-5 w-2/3 border-b py-5 text-center text-xl uppercase">
        Latest auctions
      </h4>
      <div className="flex w-full flex-wrap justify-around">
        <ProductCard isInAuctions />
        <ProductCard isInAuctions />
        <ProductCard isInAuctions />
      </div>
    </div>
  );
}
