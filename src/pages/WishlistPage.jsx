import { useContext } from 'react';
import ProductCard from '../components/products/ProductCard';
import { PostContext } from '../contexts/PostContext';
import { IoMdHeartDislike } from 'react-icons/io';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

function WishlistPage() {
  const { wishlist } = useContext(PostContext);

  return (
    <div className="bg-[url(/images/bg/bg5.jpg)] bg-cover bg-center  py-24 ">
      <div className="text-center text-xl sm:text-2xl my-3 lg:text-3xl lg:my-5 font-semibold capitalize">
        Your Favorites list❤️
      </div>
      <div className="mx-auto flex  h-96 w-full flex-wrap justify-around gap-y-4 overflow-y-scroll border-t-2 border-indigo-400   p-2 shadow-md shadow-indigo-400  sm:h-dvh  sm:border-none   ">
      
        {wishlist.length !== 0 ? (
          wishlist.map((product) => (
            <div key={product.id} className='w-full  flex justify-around flex-wrap  sm:w-4/5 md:w-4/6 lg:w-2/5'>
            <ProductCard
              
              small={true}
              id={product.id}
              name={product.name}
              price={product.price}
              firstImage={product.firstImage}
              hoverImage={product.hoverImage}
              details={product.details}
            />
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-evenly gap-10 py-20">
            <IoMdHeartDislike className="scale-150 text-9xl text-zinc-800" />
            <p className=" text-xl font-semibold capitalize text-stone-300">
              No products in the Wishlist.
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

export default WishlistPage;
