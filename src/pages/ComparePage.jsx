// import { useContext } from 'react';
// import ProductCard from '../components/products/ProductCard';
// import { PostContext } from '../contexts/PostContext';
// import { RiShuffleFill } from 'react-icons/ri';
// import Button from '../components/ui/Button';
// import { Link } from 'react-router-dom';
// import toast from 'react-hot-toast';

// function ComparePage() {
//   const { compare, setCompare } = useContext(PostContext);
//   const handleDeleteCompareItem = (id) => {
//     toast.success('✖️ Removed From Comparison');
//    return setCompare((prev) => prev.filter((item) => item.id !== id));
//   };

//   return (
//     <div className="bg-centeroverflow-x-hidden bg-[url(/images/bg/bg4.jpg)] bg-cover">
//       <div className="flex  scale-50 justify-center gap-1  pt-10 ">
//         {compare.length !== 0 ? (
//           compare.map((product) => (
//             <div  key={product.id}>
//               <div className="flex  items-center justify-between bg-zinc-400 p-1 text-black">
//                 <div
//                   onClick={() => handleDeleteCompareItem(product.id)}
//                   className="flex items-center justify-center gap-1"
//                 >
//                   <span className="text-3xl ">&times;</span>
//                   <span className="pt-1">Remove</span>
//                 </div>
//                 <div>
//                   <input type="checkbox" />
//                 </div>
//               </div>
//               <ProductCard
//                 id={product.id}
//                 name={product.name}
//                 price={product.price}
//                 firstImage={product.firstImage}
//                 hoverImage={product.hoverImage}
//                 details={product.details}
//               />
//             </div>
//           ))
//         ) : (
//           <div className="flex flex-col items-center justify-evenly gap-10 py-20">
//             <RiShuffleFill className="-rotate-90 scale-150 text-9xl text-zinc-800" />
//             <p className=" text-[7vw] font-bold capitalize text-stone-300">
//               No products in the Compare.
//             </p>
//             <Link to="/shop">
//               {' '}
//               <Button>return to shop</Button>
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ComparePage;
import { useContext } from 'react';
import { PostContext } from '../contexts/PostContext';
import { RiShuffleFill } from 'react-icons/ri';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

function ComparePage() {
  const { compare, setCompare } = useContext(PostContext);
  const handleDeleteCompareItem = (id) => {
    toast.success('✖️ Removed From Comparison');
    return setCompare((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-centeroverflow-x-hidden bg-[url(/images/bg/bg4.jpg)] bg-cover">
      <div className="flex  justify-center gap-1  py-20 ">
        {compare.length !== 0 ? (
          <div className="mx-1 grid h-80 w-full grid-cols-10 grid-rows-5 gap-1 rounded-sm bg-slate-800 text-center">
            <div className="col-start-2 col-end-11 row-start-1 row-end-2 grid grid-cols-4 gap-1 bg-slate-800 *:bg-slate-600 *:pt-3">
              <div>Name</div>
              <div>Price</div>
              <div>Details</div>
              <div>Image</div>
            </div>

            <div className="col-start-1 col-end-2 row-start-1 row-end-6 grid grid-rows-5   gap-1 bg-slate-800 *:flex *:items-center *:justify-center *:bg-slate-600 ">
              <div className="row-start-1 row-end-2 ">N</div>
              <div className="row-start-2 row-end-3 "> 1</div>
              <div className="row-start-3 row-end-4 "> 2</div>
              <div className="row-start-4 row-end-5 "> 3</div>
              <div className="row-start-5 row-end-6 "> 4</div>
            </div>
            {compare.map((item) => (
              <div
                key={item.id}
                className="col-start-2 col-end-11  grid  grid-cols-4 gap-1 bg-slate-700 *:flex *:items-center 
                *:justify-center *:bg-zinc-600"
              >
                <div className=" px-1 text-[3vw] font-bold capitalize sm:text-lg">
                  {item.name}
                </div>
                <div className="text-[4.2vw] capitalize sm:text-xl">
                  $ {item.price}
                </div>
                <div className="text-[2.5vw] capitalize sm:text-sm">
                  {item.details}
                </div>
                <div className="flex w-full items-center justify-between  bg-slate-800 ">
                  <div className="flex  w-full items-center justify-center">
                    <img className="sm:h-12 sm:w-12 w-[10vw] h-[8vw] " src={item.firstImage} alt="" />
                  </div>
                  <div
                    className="w-2/6 text-red-700 h-full border-slate-800 border-l-2 flex items-center justify-center "
                    onClick={() => handleDeleteCompareItem(item.id)}
                  >
                    <span className="text-3xl ">&times;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-evenly gap-10 py-20">
            <RiShuffleFill className="-rotate-90 scale-150 text-9xl text-zinc-800" />
            <p className=" text-[7vw] font-bold capitalize text-stone-300">
              No products in the Compare.
            </p>
            <Link to="/shop">
              {' '}
              <Button>return to shop</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default ComparePage;
