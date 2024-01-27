// function ProductsSection() {
//   return (
//     <section className="flex w-full flex-wrap justify-around bg-gradient-to-t  from-zinc-950 via-zinc-800 via-50% to-zinc-950 ">
//       <ProductCard />
//       <ProductCard />
//       <ProductCard />
//       <ProductCard />
//       <ProductCard />
//       <ProductCard />
//       <ProductCard />
//       <ProductCard />
//       <ProductCard />
//     </section>
//   );
// }
export default function ProductCarousel() {
  return (
    <div className=" flex h-dvh w-full flex-col items-center justify-center bg-gradient-to-t  from-zinc-950 via-zinc-800 via-50% to-zinc-950">
      <div className=" w-full">
        <img src="/images/digital/case18.png" alt="" />
      </div>
      <div className="w-1/4 bg-black text-center text-5xl font-extralight">
        <button className="mb-2 pr-4"> &#8249;</button>
        <button className="mb-2 pl-4"> &#8250;</button>
      </div>
    </div>
  );
}
