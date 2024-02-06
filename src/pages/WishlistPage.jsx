import { useContext } from 'react';
import ProductCard from '../components/products/ProductCard';
import { PostContext } from '../contexts/PostContext';
import { IoMdHeartDislike } from 'react-icons/io';
import Button from '../components/ui/Button';

function WishlistPage() {
  const { wishlist, setWishlist } = useContext(PostContext);
  const handleDeleteWish = (id) =>
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  return (
    <div className="bg-[url(/images/bg/bg5.jpg)] bg-cover bg-center ">
      <div className="flex w-full flex-wrap justify-around   gap-4 py-10 ">
        {wishlist.length !== 0 ? (
          wishlist.map((product) => (
            <div className=" bg-slate-700" key={product.id}>
              <div className="flex items-center justify-between bg-zinc-300 p-1 text-black">
                <div
                  onClick={() => handleDeleteWish(product.id)}
                  className="flex items-center justify-center gap-1"
                >
                  <span className="text-3xl ">&times;</span>
                  <span className="pt-1">Remove</span>
                </div>
                <div>
                  <input type="checkbox" />
                </div>
              </div>
              <ProductCard
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
          <div className="flex flex-col items-center justify-evenly gap-10 py-5">
            <IoMdHeartDislike className="scale-150 text-9xl text-zinc-800" />
            <p className=" text-xl font-semibold capitalize text-stone-300">
              No products in the Wishlist.
            </p>
            <Button>return to shop</Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default WishlistPage;
