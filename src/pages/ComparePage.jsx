import { useContext } from 'react';
import { PostContext } from '../contexts/PostContext';
import { RiShuffleFill } from 'react-icons/ri';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

function ComparePage() {
  const { compare } = useContext(PostContext);
  /* <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                firstImage={product.firstImage}
                hoverImage={product.hoverImage}
                details={product.details}
              /> */
  return (
    <div className="bg-centeroverflow-x-hidden bg-[url(/images/bg/bg4.jpg)] bg-cover">
      <div className="flex  justify-center gap-1  py-20 ">
        {compare.length !== 0 ? (
          <div className="grid h-80 w-full grid-cols-10 grid-rows-5 gap-1 mx-1 rounded-sm bg-slate-800 text-center">
            <div className="col-start-2 col-end-11 grid grid-cols-4 gap-1 row-start-1 row-end-2 bg-slate-800 *:bg-slate-600 *:pt-3">
              <div >Name</div>
              <div>Price</div>
              <div>Details</div>
              <div>Image</div>
            </div>

            <div className="col-start-1 col-end-2 row-start-1 row-end-6 grid grid-rows-5   gap-1 bg-slate-800 *:bg-slate-600 *:flex *:items-center *:justify-center ">

              <div className='row-start-1 row-end-2 '>N</div>
              <div className='row-start-2 row-end-3 '> 1</div>
              <div className='row-start-3 row-end-4 '> 2</div>
              <div className='row-start-4 row-end-5 '> 3</div>
              <div className='row-start-5 row-end-6 '> 4</div>
              
            </div>
           { compare.map(item => (
            <div key={item.id}
            
                className="col-start-2 col-end-11  grid  grid-cols-4 gap-1 bg-slate-700 *:flex *:items-center 
                *:justify-center *:bg-zinc-600"
              >
                <div>{item.name}</div>
                <div>{item.price}</div>
                <div>{item.details}</div>
                <div className="">
          
                  <img className="h-12 w-12  " src={item.firstImage}  alt="" />
                </div>
              </div>

           )) }
            
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
